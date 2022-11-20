import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import moment from "moment";

const covidApiHeaders = {
  "X-RapidAPI-Host": process.env.REACT_APP_COVID_RAPIDAPI_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: covidApiHeaders });

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_COVID_API_URL }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: (country) =>
        country
          ? createRequest(`/countries?search=${country}`)
          : createRequest(`/countries`),
    }),
    getStatistics: builder.query({
      query: (country) =>
        country
          ? createRequest(`/statistics?country=${country}`)
          : createRequest(`/statistics`),
    }),
    getHistory: builder.query({
      query: ({ country = "all", day = moment().format("YYYY-MM-D") }) =>
        createRequest(`/history?country=${country}&day=${day}`),
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetStatisticsQuery,
  useGetHistoryQuery,
} = covidApi;
