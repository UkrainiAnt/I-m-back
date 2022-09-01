import { useAppSelector } from '../hooks/redux';

const Fav = () => {
  const items = useAppSelector((state) => Object.keys(state.fav.favorites));

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Fav;
