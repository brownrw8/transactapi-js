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
 * Get all trades for a given client.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzU4
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} TradeDetails - Array of Trade Details
 */
function default_1({ clientID, developerAPIKey, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
            };
            return yield (0, base_1.baseApi)("POST", "getAllTrades", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
