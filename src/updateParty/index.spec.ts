import axios from "axios";
import updateParty from ".";
import {
  Domicile
} from "./enums";
import { UpdatePartyRequest, UpdatePartyResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/updateParty endpoint", () => {
  test("party update successful", async () => {
    const payload: UpdatePartyRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      partyId: "somepartyid",
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
    const response: UpdatePartyResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      partyDetails: [
        {
          partyId: "someaccountid",
          KYCstatus: "Pending",
          AMLstatus: "Pending",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await updateParty(payload);
    expect(mockedResponse).toEqual(response);
    expect(mockedResponse.partyDetails[0].partyId).not.toBeNull();
  });
});
