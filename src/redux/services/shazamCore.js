// This file will focus on making the API calls from RapidAPI.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'e8ed26cfc0msh10dd08b37cb2069p1aff87jsnd2dad9abee7b',
//     'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com',
//     Authorization: 'Basic Og==',
//   },
// };

// fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e8ed26cfc0msh10dd08b37cb2069p1aff87jsnd2dad9abee7b');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
