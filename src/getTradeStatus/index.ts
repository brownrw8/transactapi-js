import { baseApi } from "../base";
import { GetTradeStatusRequest, GetTradeStatusResponse } from "./types";

/**
 * This method is used to retrieve the status and all other current information for a specific trade.
 * The TradeID is required as a request parameter for this method.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MjM0
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} tradeId - Trade ID generated by the API
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} tradeDetails - Returns the current trade details as an array with the current trade status
 */
export default async function ({
  clientID,
  developerAPIKey,
  tradeId,
}: GetTradeStatusRequest): Promise<GetTradeStatusResponse> {
  try {
    const payload: GetTradeStatusRequest = {
      clientID,
      developerAPIKey,
      tradeId,
    };
    return await baseApi("getTradeStatus", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}
