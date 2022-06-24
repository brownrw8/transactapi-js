import { UpdateAccountRequest, UpdateAccountResponse } from "./types";
/**
 * This method is used to update a specific account (createAccount).
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MTM1
 *
 * @typedef {Object} UpdateAccountRequest
 * @property {string} clientID - Transact API Client ID
 * @property {string} developerAPIKey - Transact API Developer Key
 * @property {string} accountId - Account ID that is generated by the API once an account is created (createAccount).
 * @property {string} accountRegistration - Investor Account Name - the exact registration of the account, such as "John Doe and Jane Doe JTWROS" or "John Doe IRA" or "Doe Family Trust"
 * @property {string} [type] - Individual, Entity, TIC, JTWROS, IRA, SepIRA, ROTH,Joint
 * @property {string} [entityType] - Revocable Trust, Irrevocable Trust, Limited Partnership, LLC, Corporation
 * @property {string} [domesticYN] - Domestic or International Account
 * @property {string} [streetAddress1] - Street Address Line 1
 * @property {string} [streetAddress2] - Street Address Line 2
 * @property {string} [city] - Account City
 * @property {string} [state] - Account State (Optional for non-U.S. parties)
 * @property {string} [zip] - Account Zip/Postal Code
 * @property {string} [country] - Account Country
 * @property {string} [phone] - Account Primary Phone Number
 * @property {string} [KYCstatus] - Know Your Customer(KYC) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending"
 * @property {string} [AMLstatus] - Anti-Money Laundering(AML) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending" * @property {string} [AccreditedStatus] - The Accreditation Status for the Account: Pending, Self Accredited, Verified Accredited, Not Accredited. Default status is "Pending"
 * @property {string} [ApprovalStatus] - Principal Approval Status: Pending, Approved, Not Approved
 *
 * @typedef {Object} AccountDetail
 * @property {string} accountId - ID for an account
 * @property {string} suitabilityScore - Score from 1 to 5. 5 being most suitable and 1 being least suitable.
 * @property {string} approvalStatus - Principal Approval Status: Pending, Approved, Not Approved
 *
 * @typedef {Object} UpdateAccountResponse
 * @property {string} statusCode - API Status Code
 * @property {string} statusDesc - API Status Description
 * @property {Array<AccountDetail>} - Details regarding an account
 *
 * @params {UpdateAccountRequest}
 * @returns UpdateAccountResponse
 */
export default function ({ clientID, developerAPIKey, accountId, accountRegistration, ...other }: UpdateAccountRequest): Promise<UpdateAccountResponse>;
