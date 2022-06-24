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
 * This method is used to create a party.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
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
function default_1({ clientID, developerAPIKey, domicile, firstName, lastName, dob, primCountry, primAddress1, primAddress2, primCity, primState, primZip, emailAddress, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
                domicile,
                firstName,
                lastName,
                dob,
                primCountry,
                primAddress1,
                primAddress2,
                primCity,
                primState,
                primZip,
                emailAddress,
            };
            return yield (0, base_1.baseApi)("PUT", "createParty", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
