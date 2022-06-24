import { Method } from "axios";
export declare const BASE_URL = "https://api-sandboxdash.norcapsecurities.com/tapiv3/index.php/v3/";
/**
 * Base API call to Transact API
 * @param {string} method - HTTP method
 * @param {string} endpoint - API endpoint, referenced from documentation
 * @param {object} payload - Object of request parameters, referenced from documentation
 * @return AxiosResponse
 */
export declare function baseApi<Payload, Response>(method: Method, endpoint: string, payload: Payload): Promise<Response>;
