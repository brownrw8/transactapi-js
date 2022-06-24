import { CreateTradeRequest, CreateTradeResponse } from "./types";
/**
 * This method is used to create a trade/investment for an offering. This requires Account ID and total number of units/shares to be purchased by the account. Creating a trade represents the intention to invest and does NOT initiate any sort of fund move. To initiate an ACH transfer for a trade, you will need to use the externalFundMove method.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MjA0
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} offeringId - Offering ID that is generated by the API when an Offering is created(createOffering).
 * @param {string} accountId - Account ID of the account that is investing (This account should have one Primary Party)
 * @param {string} transactionType - ACH, WIRE, CHECK, or CREDITCARD
 * @param {string} transactionUnits - Number of units/shares to be purchased.
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {string} tradeId - identifier, generated for this transaction
 * @returns {string} transactionId - identifier, generated, for this transaction
 * @returns {string} transactionAmount - amount of funds to move
 * @returns {string} transactionDate - date this trade is created
 * @returns {string} transactionStatus - progress of the trade
 */
export default function ({ clientID, developerAPIKey, accountId, offeringId, transactionType, transactionUnits, }: CreateTradeRequest): Promise<CreateTradeResponse>;
