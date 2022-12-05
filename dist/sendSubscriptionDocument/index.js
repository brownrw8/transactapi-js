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
 * This method is used to send the subscription documents for the primary party(createParty) that is linked with the account(createAccount) to sign.
 * @link https://api-sandboxdash.norcapsecurities.com/admin_v3/documentation?mid=MjE2
 * @param {string} clientID Transact API Client ID
 * @param {string} developerAPIKey Transact API Developer Key
 * @param {string} accountId Account ID that is generated by the API once an account is created(createAccount)
 * @param {string} offeringId Offering ID that is generated by the API once an offering is created(createOffering)
 * @param {string} tradeId Trade ID that is generated by the API once an trade is created(createTrade).
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {array} document_details - Document details of the matched Party ( documentKey, esignStatus, partyId)
 */
function default_1({ clientID, developerAPIKey, accountId, offeringId, tradeId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
                accountId,
                offeringId,
                tradeId
            };
            return yield (0, base_1.baseApi)("POST", "sendSubscriptionDocument", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
