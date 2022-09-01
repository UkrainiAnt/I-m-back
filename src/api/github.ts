import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ServerResponse, IRepo } from '../models';

export const githubApi = createApi({
  reducerPath: '/',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),

    searchRepos: build.query<IRepo[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: 'vladilen',
          per_page: 10,
        },
      }),
      transformResponse: (reponse: ServerResponse<IRepo>) => reponse.items,
    }),
  }),
});

export const { useLazySearchReposQuery, useSearchUsersQuery } = githubApi;
