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
exports.baseApi = exports.BASE_URL = void 0;
const axios_1 = require("axios");
exports.BASE_URL = "https://api-sandboxdash.norcapsecurities.com/tapiv3/index.php/v3/";
/**
 * Base API call to Transact API
 * @param {string} method - HTTP method
 * @param {string} endpoint - API endpoint, referenced from documentation
 * @param {object} payload - Object of request parameters, referenced from documentation
 * @return AxiosResponse
 */
function baseApi(method, endpoint, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res;
            const url = exports.BASE_URL + endpoint;
            const config = { data: payload };
            if (method === "GET")
                res = yield axios_1.default.get(url);
            if (method === "POST")
                res = yield axios_1.default.post(url, config);
            if (method === "PUT")
                res = yield axios_1.default.put(url, config);
            return res.data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    });
}
exports.baseApi = baseApi;
