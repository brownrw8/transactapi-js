export interface SendSubscriptionDocumentRequest {
    clientID: string;
    developerAPIKey: string;
    accountId: string;
    offeringId: string;
    tradeId: string;
}
export interface SendSubscriptionDocumentResponse {
    statusCode: string;
    statusDesc: string;
    document_details?: DocumentDetails[];
}
export interface DocumentDetails {
    documentKey: string;
    esignStatus: string;
    accountId: string;
    tradeId: string;
}
