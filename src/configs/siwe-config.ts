import { SiweMessage } from "siwe";
import {
  type SIWECreateMessageArgs,
  type SIWESession,
  type SIWEVerifyMessageArgs,
  createSIWEConfig,
  formatMessage,
} from "@reown/appkit-siwe";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { getAddress } from "viem";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_URL;

//Normalize the address (checksum)
const normalizeAddress = (address: string): string => {
  try {
    const splitAddress = address.split(":");
    const extractedAddress = splitAddress[splitAddress.length - 1];
    const checksumAddress = getAddress(extractedAddress);
    splitAddress[splitAddress.length - 1] = checksumAddress;
    const normalizedAddress = splitAddress.join(":");

    return normalizedAddress;
  } catch (error) {
    console.log(error);
    return address;
  }
};

// call the server to get a nonce
const getNonce = async (address?: string): Promise<string> => {
  if (!address) throw new Error("Address is required");
  const res = await fetch(`${BASE_URL}auth/nonce?address=${address}`, {
    method: "GET",
    // credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.nonce;
};

const verifyMessage = async ({
  message,
  signature,
}: SIWEVerifyMessageArgs): Promise<boolean> => {
  try {
    // Dùng thư viện SIWE để phân tích message
    const siweMessage = new SiweMessage(message);

    // Gửi message và signature tới backend để xác minh
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: JSON.stringify(siweMessage), signature }),
    });

    if (!response.ok) {
      console.error("Xác minh thất bại:", await response.text());
      return false;
    }

    const data = await response.json();

    const sessionData = {
      message: siweMessage,
      signature,
      access_token: data.access_token,
    };

    Cookies.set("siwe_session", JSON.stringify(sessionData), { expires: 1 });

    return true;
  } catch (error) {
    console.error("SIWE verify failed:", error);
    return false;
  }
};

const getSession = async (): Promise<SIWESession | null> => {
  try {
    const sessionStr = Cookies.get("siwe_session");

    if (!sessionStr) return null;

    const session = JSON.parse(sessionStr);

    const chainId = session ? session.message.chainId : null;
    const address = session ? session.message.address : null;

    const data = {
      chainId: Number(chainId),
      address: address,
    };

    return data ? (data as SIWESession) : null;
  } catch (error) {
    console.error("Failed to get session from localStorage", error);
    return null;
  }
};

const signOut = async (): Promise<boolean> => {
  Cookies.remove("siwe_session");
  const data = {};
  return JSON.stringify(data) === "{}";
};

export const createSIWE = (chains: [AppKitNetwork, ...AppKitNetwork[]]) => {
  return createSIWEConfig({
    signOutOnAccountChange: true,
    signOutOnNetworkChange: true,
    getMessageParams: async () => ({
      domain: window.location.host,
      uri: window.location.origin,
      chains: chains.map((chain: AppKitNetwork) =>
        parseInt(chain.id.toString())
      ),
      statement: "Sign in with Ethereum to the app.",
      version: "1",
      issuedAt: new Date().toISOString(),
    }),
    createMessage: ({ address, ...args }: SIWECreateMessageArgs) => {
      return formatMessage(args, normalizeAddress(address));
    },
    getNonce,
    getSession,
    verifyMessage,
    signOut,
  });
};
