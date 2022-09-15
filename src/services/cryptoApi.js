import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd0189f48cdmsh3ffd47835b896f5p134651jsnab719c06d84f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
} 

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders}) 
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query:(count) => createRequest(`/coins?limit=${count}`)
      }),
      getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
    }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;