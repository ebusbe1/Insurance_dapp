import React, { PropsWithChildren, useContext, useState } from "react";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
// @ts-ignore
import * as backend from "./reachbuild/index.main.mjs";

const ctcInfo = { _hex: "0x065726c3", _isBigNumber: true };

// @ts-ignore
const reach = loadStdlib("ALGO");

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
export type modalType = "launch" | "message" | "Subscribe" | "none";
export const useDefaultContext = () => useContext(AppContext);

const AppContext = React.createContext(
  {} as {
    state: any;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;
    modalMessage: any;
    setModalMessage: React.Dispatch<any>;
    view: modalType;
    setView: React.Dispatch<React.SetStateAction<modalType>>;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    createAsyncTimeout: (
      seconds: number,
      executable?: () => any
    ) => Promise<void>;
    displayMessage: (
      show: boolean,
      message?: string | JSX.Element,
      options?: {
        type: modalType;
      }
    ) => void;
    isConnected: boolean;
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
    Api: {
      Subscribe: (somn: number) => Promise<any>;
      Submit_claim: (claim: string, funds: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      acc: any;
    };
    connectWallet: () => Promise<void>;
    DisconnectWallet: () => void;
  }
);
let i = 0;

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [isConnected, setIsConnected] = useState(false);
  const [contractInfo, setContractInfo] = useState("" as string);
  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({} as any);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Hello" as any);
  const [view, setView] = useState<modalType>("none");
  const [isOpen, setOpen] = useState(false);
  const [Api, setApi] = useState(
    {} as {
      Subscribe: (somn: number) => Promise<any>;
      Submit_claim: (claim: string, funds: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      acc: any;
    }
  );

  const displayMessage = (
    show: boolean,
    message?: string | JSX.Element,
    options?: { type: modalType }
  ) => {
    setShowModal(show);
    setView(options?.type ?? show ? "message" : "none");
    setModalMessage(message);
  };
  const connectWallet = async () => {
    try {
      const acct = await Insurer();
      setWallet(acct.acc);
      setApi(acct);
      setIsConnected(true);
      console.log(acct);
      return acct.acc;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const createAsyncTimeout = async (seconds: number) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, seconds * 1000)
    );
  };

  const DisconnectWallet = async () => {
    window.localStorage.removeItem("walletconnect");
    setIsConnected(false);
  };

  const Insurer = async () => {
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(
      backend,
      // @ts-ignore
      reach.bigNumberToNumber(contractInfo)
    );

    const Subscribe = async (howMany: number) => {
      try {
        const pay = reach.parseCurrency(howMany);
        const res = await ctc.apis.Subscribers.Subscribe(pay);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const Submit_claim = async (claim: string, funds: number) => {
      try {
        const rf = reach.parseCurrency(funds);
        const res = await ctc.apis.Subscribers.Submit_claim(claim, rf);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const getBalance = async () => {
      return await reach.balanceOf(acc);
    };

    const displayBalance = async () => {
      const bal = await getBalance();
      console.log(`s balance: ${reach.formatCurrency(bal, 4)}`);
    };

    return {
      Subscribe,
      Submit_claim,
      getBalance,
      displayBalance,
      acc,
    };
  };
  React.useEffect(() => {
    const ctc = localStorage.getItem("contractInfo");
    // @ts-ignore
    !!ctc ? setContractInfo(JSON.parse(ctc)) : setContractInfo(ctcInfo);
  }, []);
  return (
    <AppContext.Provider
      value={{
        Api,
        DisconnectWallet,
        createAsyncTimeout,
        connectWallet,
        state,
        setState,
        wallet,
        setWallet,
        modalMessage,
        setModalMessage,
        showModal,
        setShowModal,
        view,
        isOpen,
        setOpen,
        setView,
        displayMessage,
        isConnected,
        setIsConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
