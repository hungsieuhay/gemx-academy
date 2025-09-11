import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useAccount } from "wagmi";

export const useAppkitModal = ({ func }: { func: () => void }) => {
  const { open } = useAppKit();
  const { status } = useAppKitAccount();
  const { isConnected } = useAccount();

  const handleOpenAppkit = () => {
    if (status === "connected" && isConnected) {
      func();
    } else {
      open();
    }
  };

  return {
    handleOpenAppkit,
  };
};
