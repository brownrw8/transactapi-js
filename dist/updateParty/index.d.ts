import { UpdatePartyRequest, UpdatePartyResponse } from "./types";
/**
 * This method is used to update a party.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} partyId - Party ID from existing party
 * @param {string} domicile - Is the party a U.S. Citizen, U.S. Resident, or non-resident
 * @param {string} firstName - Party's First Name
 * @param {string} lastName - Party's Last Name
 * @param {string} dob - The Party's Date of Birth (MM-DD-YYYY)
 * @param {string} primCountry - The country in which the Party's physical address resides
 * @param {string} primAddress1 - The Party's physical address, line 1
 * @param {string} primAddress2 - The Party's physical address, line 2
 * @param {string} primCity - The city of the Party's physical address
 * @param {string} primState - Party's residence state ( must be two letter code only ) (It is optional for non-us parties)
 * @param {string} primZip - Zip code
 * @param {string} emailAddress - Party's contact email address
 */
export default function ({ clientID, developerAPIKey, partyId, domicile, firstName, lastName, dob, primCountry, primAddress1, primAddress2, primCity, primState, primZip, emailAddress, }: UpdatePartyRequest): Promise<UpdatePartyResponse>;
