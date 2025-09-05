import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  arbitrum,
  mainnet,
  base,
  scroll,
  polygon,
  type AppKitNetwork,
} from "@reown/appkit/networks";
import { createSIWE } from "./siwe-config";

// Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

// Create a metadata object - optional
const metadata = {
  name: "Gemx Academy",
  description: "Gemx Academy",
  url: "https://gemx.io",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet,
  arbitrum,
  base,
  polygon,
  scroll,
];

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

const siweConfig = createSIWE(networks);

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  siweConfig,
  metadata,
  enableWalletConnect: false,
  features: {
    analytics: false,
    email: false,
    socials: false,
    send: false,
    swaps: false,
    onramp: false,
    history: false,
    smartSessions: false,
  },
});

export const config = wagmiAdapter.wagmiConfig;
