import { baseApi } from "../base";
import { UpdateCreditCardRequest, UpdateCreditCardResponse } from "./types";

/**
 * This method is used to update the credit card information that is saved to a specific account (createExternalAccount).
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzA3
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} accountId - Account ID that is generated by the API once an account is created (createAccount)
 * @param {string} creditCardName - Name on the Credit Card
 * @param {string} creditCardNumber - Full Credit Card Number
 * @param {string} expirationDate - Credit Card Expiration Date in MMYY format
 * @param {string} cvvNumber - CVV security code of the credit card
 * @param {string} cardType - Credit Card Type eg: VI, MC, DI
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {string} creditcardDetails - Success message for update credit card
 */
export default async function ({
  clientID,
  developerAPIKey,
  accountId,
  creditCardName,
  creditCardNumber,
  expirationDate,
  cvvNumber,
  cardType,
}: UpdateCreditCardRequest): Promise<UpdateCreditCardResponse> {
  try {
    const payload: UpdateCreditCardRequest = {
      clientID,
      developerAPIKey,
      accountId,
      creditCardName,
      creditCardNumber,
      expirationDate,
      cvvNumber,
      cardType,
    };
    return await baseApi("POST", "updateCreditCard", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}
