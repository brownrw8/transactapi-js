import axios from "axios";
import sendSubscriptionDocument from ".";
import { SendSubscriptionDocumentRequest, SendSubscriptionDocumentResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/sendSubscriptionDocument endpoint", () => {
  test("send docs successful", async () => {
    const payload: SendSubscriptionDocumentRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "985742",
      offeringId: "97421",
      tradeId: "7766362363632"
    };
    const response: ExternalFundMoveResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      document_details: [
        {
          documentKey: "A49501",
          esignStatus: "257528259",
          accountId: "81272",
          tradeId: "1000.000000"
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await sendSubscriptionDocument(payload);
    expect(mockedResponse).toEqual(response);
  });
});
