import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>Github search</h3>

      <span>
        <Link to={'/'}>Home</Link>
        <Link to={'/fav'}>Fav</Link>
      </span>
    </nav>
  );
};

export default Navigation;
