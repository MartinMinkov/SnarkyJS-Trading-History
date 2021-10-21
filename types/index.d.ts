declare global {
  interface Window {
    initSnarkyJS: () => Promise<void>;
  }
}

export interface Order {
  id: number;
  pairId: string;
  buy: {
    timestamp: string;
    quantity: string;
    price: string;
  };
  sell: {
    timestamp: string;
    quantity: string;
    price: string;
  };
}

export interface Transaction {
  proof: string;
  url: string;
  txnId: string;
}

export type APIResponse = {
  data?: {
    url: string;
    txnId: string;
    proof: string;
  };
  error?: string;
};

export type LoadingStatus =
  | "idle"
  | "fetch_orders"
  | "proof_generation"
  | "proof_complete_idle"
  | "sync_idle"
  | "sync_chain"
  | "show_complete"
  | "done";
