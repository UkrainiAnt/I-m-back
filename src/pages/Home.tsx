import { useState } from 'react';
import { useLazySearchReposQuery, useSearchUsersQuery } from '../api/github';
import { useDebounce } from '../hooks';
import { IRepo } from '../models';
import { RepoCard } from '../components';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const name = useDebounce(search);

  const {
    data: users,
    isLoading,
    isError,
  } = useSearchUsersQuery(name, {
    skip: name.length < 3,
    refetchOnFocus: true,
  });
  const [fetchItems, { isLoading: reposLoading, data: repos }] =
    useLazySearchReposQuery();

  const clickHandler = (login: string) => {
    fetchItems(login);
  };

  if (isError) {
    return <div>Error message</div>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className="relative w-[560px]">
        <input
          type={'text'}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github users"
        />

        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {users?.map((user) => (
            <li
              key={user.id}
              onClick={() => clickHandler(user.login)}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {user.login}
            </li>
          ))}
        </ul>

        <div>
          {reposLoading && <p className="text-center">Repos are loading...</p>}

          {repos?.map((item: IRepo) => (
            <RepoCard repo={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
