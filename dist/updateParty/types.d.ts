import { Domicile } from "./enums";
export interface UpdatePartyRequest {
    clientID: string;
    developerAPIKey: string;
    partyId: string;
    domicile: Domicile;
    firstName: string;
    lastName: string;
    dob: string;
    primCountry: string;
    primAddress1: string;
    primAddress2: string;
    primCity: string;
    primState: string;
    primZip: string;
    emailAddress: string;
}
export interface UpdatePartyResponse {
    statusCode: string;
    statusDesc: string;
    partyDetails: PartyDetail[];
}
interface PartyDetail {
    partyId: string;
    KYCstatus: string;
    AMLstatus: string;
}
export {};
