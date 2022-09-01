import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  favorites: {
    [key: string]: boolean;
  };
}

const initialState: InitialStateProps = {
  favorites: JSON.parse(localStorage.getItem('fav') || '{}'),
};

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<string>) => {
      state.favorites[action.payload] = true;
      localStorage.setItem('fav', JSON.stringify(state.favorites));
    },

    removeFromFav: (state, action: PayloadAction<string>) => {
      delete state.favorites[action.payload];
      localStorage.setItem('fav', JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;
export const favoritesSliceActions = favoritesSlice.actions;
