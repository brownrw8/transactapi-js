export interface DeleteTradeRequest {
    clientID: string;
    developerAPIKey: string;
    tradeId: number;
    accountId: string;
    errDesc: string;
}
export interface DeleteTradeResponse {
    statusCode: string;
    statusDesc: string;
    tradeDetails?: [TradeDetail];
}
export interface TradeDetail {
    partyId: string;
    offeringId: string;
    orderStatus: string;
}
