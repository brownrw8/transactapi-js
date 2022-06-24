"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
/**
 * This method is used to search all individual parties for a specific keyword within the party information and will return all matches for that keyword.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MTQy
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} searchKeyword - Keyword to search within all parties
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} partyDetails - Array of party includes all information of the matched party( partyId, firstName, middleInitial, lastName, domicile, socialSecurityNumber, dob, primAddress1, primAddress2, primCity, primState, primZip, primCountry, emailAddress, emailAddress2, phone, phone2, occupation, associatedPerson, empCountry, empAddress1, empAddress2, empCity, empState, empZip, currentAnnIncome, avgAnnIncome, currentHouseholdIncome, avgHouseholdIncome, householdNetworth, kycStatus, kycDate, amlStatus, amlDate, tags, notes)
 */
function default_1({ clientID, developerAPIKey, searchKeyword, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
                searchKeyword,
            };
            return yield (0, base_1.baseApi)("POST", "searchParty", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
