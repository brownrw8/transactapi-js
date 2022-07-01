import axios from "axios";
import linkExternalAccount from ".";
import { LinkExternalAccountRequest, LinkExternalAccountResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/linkExternalAccount endpoint", () => {
  test("link creation successful", async () => {
    const payload: LinkExternalAccountRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "someaccountid"
    };
    const response: LinkExternalAccountResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      accountDetails: "someurl"
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await linkExternalAccount(payload);
    expect(mockedResponse).toEqual(response);
    expect(mockedResponse.accountDetails).not.toBeNull();
  });
});
