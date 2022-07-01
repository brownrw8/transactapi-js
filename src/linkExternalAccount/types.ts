export interface LinkExternalAccountRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
}

export interface LinkExternalAccountResponse {
  statusCode: string;
  statusDesc: string;
  accountDetails: string;
}