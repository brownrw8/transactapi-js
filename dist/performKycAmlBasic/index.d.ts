import { PerformKycAmlBasicRequest, PerformKycAmlBasicResponse } from "./types";
/**
 * This method is used to perform KYC (Know Your Customer) checks and AML (Anti-Money Laundering) checks for Individual Parties.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=Mzcz
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} partyId - Party ID that is generated by the API when an individual party is created(createParty)
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} kyc - Response from IDology
 */
export default function ({ clientID, developerAPIKey, partyId, }: PerformKycAmlBasicRequest): Promise<PerformKycAmlBasicResponse>;
