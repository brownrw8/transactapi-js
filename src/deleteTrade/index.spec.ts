import axios from "axios";
import deleteTrade from ".";
import { DeleteTradeRequest, DeleteTradeResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/deleteTrade endpoint", () => {
  test("trade deletion successful", async () => {
    const payload: DeleteTradeRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      tradeId: 122345,
      accountId: "A12345",
      errDesc: "Cancelled by client"
    };
    const response: DeleteTradeResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      tradeDetails: [
        {
            partyId: "P00197",
            offeringId: "32957",
            orderStatus: "CANCELED"
        }
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await deleteTrade(payload);
    expect(mockedResponse).toEqual(response);
  });
});
