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
 * This method is used to create an account that can be linked (createLink) to an individual party (createParty) or an entity (createEntity).
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} accountRegistration - Investor Account Name - the exact registration of the account, such as "John Doe and Jane Doe JTWROS" or "John Doe IRA" or "Doe Family Trust"
 * @param {string} type - Individual, Entity, TIC, JTWROS, IRA, SepIRA, ROTH, or Joint
 * @param {string} entityType - Revocable Trust, Irrevocable Trust, Limited Partnership, LLC, Corporation
 * @param {string} domesticYN - Domestic or International Account
 * @param {string} streetAddress1 - Street Address Line 1
 * @param {string} streetAddress2 - Street Address Line 2
 * @param {string} city - Account Country
 * @param {string} state - Account State (Optional for non-U.S. parties)
 * @param {string} country - Account Country
 * @param {string} zip - Account Zip/Postal Code
 * @param {string} phone - Account Primary Phone Number
 * @param {string} KYCstatus - Know Your Customer(KYC) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending"
 * @param {string} AMLstatus - Anti-Money Laundering(AML) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending"
 * @param {string} AccreditedStatus -
 * @param {string} approvalStatus - Principal Approval Status: Pending, Approved, Not Approved
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {string} accountId - Unique identifier code for the Account
 */
function default_1({ clientID, developerAPIKey, accountRegistration, type, entityType, domesticYN, streetAddress1, streetAddress2, city, state, zip, country, phone, KYCstatus, AMLstatus, AccreditedStatus, ApprovalStatus, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
                accountRegistration,
                type,
                domesticYN,
                streetAddress1,
                city,
                state,
                zip,
                country,
                phone,
                KYCstatus,
                AMLstatus,
                AccreditedStatus,
                ApprovalStatus,
            };
            if (type === "Entity" /* ENTITY */)
                payload.entityType = entityType;
            if (streetAddress2)
                payload.streetAddress2 = streetAddress2;
            return yield (0, base_1.baseApi)("POST", "createAccount", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
