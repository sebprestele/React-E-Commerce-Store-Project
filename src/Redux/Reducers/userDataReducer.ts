import {
  GET_ADDRESS,
  GET_CITY,
  GET_EMAIL,
  GET_FIRSTNAME,
  GET_LASTNAME,
  GET_POSTCODE,
  GET_COUNTRY,
  GET_REGION,
} from "Redux/Actions/actionConsts";
import { ActionTypes } from "Redux/actionTypes";

type defaultState = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  address: string;
  postCode: string;
  region: string;
  country: string;
};

const userData: defaultState = {
  email: "",
  firstName: "",
  lastName: "",
  city: "",
  address: "",
  postCode: "",
  region: "",
  country: "",
};

const userDataReducer = (
  state = userData,
  action: ActionTypes
): defaultState => {
  switch (action.type) {
    case GET_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case GET_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case GET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case GET_POSTCODE:
      return {
        ...state,
        postCode: action.payload,
      };

    case GET_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case GET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

export default userDataReducer;
