import { DeleteTradeRequest, DeleteTradeResponse } from "./types";
/**
 * This method is used to create a trade/investment for an offering. This requires Account ID and total number of units/shares to be purchased by the account. Creating a trade represents the intention to invest and does NOT initiate any sort of fund move. To initiate an ACH transfer for a trade, you will need to use the externalFundMove method.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MjA0
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} tradeId - Trade ID that is generated by the API when a trade is created.
 * @param {string} accountId - Account ID of the account that is investing (This account should have one Primary Party)
 * @param {string} errDesc - Any error message (optional)
 */
export default function ({ clientID, developerAPIKey, tradeId, accountId, errDesc }: DeleteTradeRequest): Promise<DeleteTradeResponse>;
