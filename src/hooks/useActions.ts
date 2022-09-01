import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { favoritesSliceActions } from '../store/slice/favorites';

const useActions = () => {
  const dispach = useDispatch();

  return bindActionCreators(favoritesSliceActions, dispach);
};

export default useActions;
