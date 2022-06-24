"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadTradedocument = exports.updateCreditCard = exports.getParty = exports.getOffering = exports.getAllTrades = exports.getAccount = exports.externalFundMove = exports.createTrade = exports.createLink = exports.createParty = exports.createExternalAccount = exports.ccFundMove = exports.addCreditCard = void 0;
var addCreditCard_1 = require("./addCreditCard");
Object.defineProperty(exports, "addCreditCard", { enumerable: true, get: function () { return addCreditCard_1.default; } });
var ccFundMove_1 = require("./ccFundMove");
Object.defineProperty(exports, "ccFundMove", { enumerable: true, get: function () { return ccFundMove_1.default; } });
var createExternalAccount_1 = require("./createExternalAccount");
Object.defineProperty(exports, "createExternalAccount", { enumerable: true, get: function () { return createExternalAccount_1.default; } });
var createParty_1 = require("./createParty");
Object.defineProperty(exports, "createParty", { enumerable: true, get: function () { return createParty_1.default; } });
var createLink_1 = require("./createLink");
Object.defineProperty(exports, "createLink", { enumerable: true, get: function () { return createLink_1.default; } });
var createTrade_1 = require("./createTrade");
Object.defineProperty(exports, "createTrade", { enumerable: true, get: function () { return createTrade_1.default; } });
var externalFundMove_1 = require("./externalFundMove");
Object.defineProperty(exports, "externalFundMove", { enumerable: true, get: function () { return externalFundMove_1.default; } });
var getAccount_1 = require("./getAccount");
Object.defineProperty(exports, "getAccount", { enumerable: true, get: function () { return getAccount_1.default; } });
var getAllTrades_1 = require("./getAllTrades");
Object.defineProperty(exports, "getAllTrades", { enumerable: true, get: function () { return getAllTrades_1.default; } });
var getOffering_1 = require("./getOffering");
Object.defineProperty(exports, "getOffering", { enumerable: true, get: function () { return getOffering_1.default; } });
var getParty_1 = require("./getParty");
Object.defineProperty(exports, "getParty", { enumerable: true, get: function () { return getParty_1.default; } });
var updateCreditCard_1 = require("./updateCreditCard");
Object.defineProperty(exports, "updateCreditCard", { enumerable: true, get: function () { return updateCreditCard_1.default; } });
var uploadTradeDocument_1 = require("./uploadTradeDocument");
Object.defineProperty(exports, "uploadTradedocument", { enumerable: true, get: function () { return uploadTradeDocument_1.default; } });
/*
import createParty from "./createParty"
import { CreatePartyRequest, CreatePartyResponse } from "./createParty/types";
import { Domicile } from "./createParty/enums";

const config = {
    clientID: "3xVuKF2i046gGga",
    developerAPIKey: "2r4WSiXgcwaraggdMGTL6GjiE8aKSkNpmuh"
};

const payload: CreatePartyRequest = {
  clientID: "3xVuKF2i046gGga",
  developerAPIKey: "2r4WSiXgcwaraggdMGTL6GjiE8aKSkNpmuh",
  domicile: Domicile.US_CITIZEN,
  firstName: "Bill",
  lastName: "Brown",
  dob: "01-03-1950",
  primCountry: "USA",
  primAddress1: "45 Brackett St",
  primAddress2: "Apt 1",
  primCity: "Portland",
  primState: "ME",
  primZip: "04101",
  emailAddress: "wpbrown@gmail.com",
};

let test = async function() {
    const res = await createParty(payload);
    console.log(res);
}

test();
*/ 
