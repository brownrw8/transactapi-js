export type TransactionType = "ACH" | "WIRE" | "CHECK" | "CREDITCARD";

export interface CreateTradeRequest {
  clientID: string;
  developerAPIKey: string;
  offeringId: string;
  accountId: string;
  transactionType: TransactionType;
  transactionUnits: number;
  createdIpAddress: string;
}

export interface CreateTradeResponse {
  statusCode: string;
  statusDesc: string;
  purchaseDetails?: [true, PurchaseDetail[]];
}

export interface PurchaseDetail {
  tradeId: string;
  transactionId: string;
  transactionAmount: string;
  transactionDate: string;
  transactionStatus: string;
  RRApprovalStatus: string;
  RRName: string;
  RRApprovalDate: string;
  PrincipalApprovalStatus: string;
  PrincipalName: string;
  PrincipalDate: string;
}
