import { GetAllTradesRequest, GetAllTradesResponse } from "./types";
/**
 * Get all trades for a given client.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzU4
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} TradeDetails - Array of Trade Details
 */
export default function ({ clientID, developerAPIKey, }: GetAllTradesRequest): Promise<GetAllTradesResponse>;
