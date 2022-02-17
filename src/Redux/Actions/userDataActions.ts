import {
  GET_FIRSTNAME,
  GET_LASTNAME,
  GET_EMAIL,
  GET_ADDRESS,
  GET_POSTCODE,
  GET_CITY,
  GET_REGION,
  GET_COUNTRY,
} from "./actionConsts";

export const getFirstName = (input: string) => {
  return {
    type: GET_FIRSTNAME,
    payload: input,
  };
};

export const getLastName = (input: string) => {
  return {
    type: GET_LASTNAME,
    payload: input,
  };
};

export const getEmail = (input: string) => {
  return {
    type: GET_EMAIL,
    payload: input,
  };
};

export const getAddress = (input: string) => {
  return {
    type: GET_ADDRESS,
    payload: input,
  };
};

export const getPostcode = (input: string) => {
  return {
    type: GET_POSTCODE,
    payload: input,
  };
};

export const getCity = (input: string) => {
  return {
    type: GET_CITY,
    payload: input,
  };
};

export const getRegion = (input: string) => {
  return {
    type: GET_REGION,
    payload: input,
  };
};

export const getCountry = (input: string) => {
  return {
    type: GET_COUNTRY,
    payload: input,
  };
};
