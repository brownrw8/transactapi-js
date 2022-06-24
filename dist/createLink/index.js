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
 * This method is used to create a link between parties and accounts.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} firstEntryType - The first entry type for createLink is an Account
 * @param {string} firstEntry - Account ID to be linked to an Entity or Individual Party or another Account
 * @param {string} relatedEntryType - The second entry type for createLink: Account, IndivACParty, or EntityACParty
 * @param {string} relatedEntry - Account ID or individual/entity party ID to be linked to the account(first entry)
 * @param {string} linkType - Link description: owner, manager, member, officer, director, spouse, beneficiary, trustee, custodian, parentco, subsidiary, other, acgroup,advisor,attorney,proxy
 * @param {string} notes - Describe relationship between parties
 * @param {int} primary_value - Yes/No - you should enter either 1 (yes) or 0 (no)
 */
function default_1({ clientID, developerAPIKey, firstEntryType, firstEntry, relatedEntryType, relatedEntry, linkType, notes, primary_value }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                clientID,
                developerAPIKey,
                firstEntryType,
                firstEntry,
                relatedEntryType,
                relatedEntry,
                linkType,
                notes,
                primary_value
            };
            return yield (0, base_1.baseApi)("POST", "createLink", payload);
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.default = default_1;
