import categoriesData from '../data';
import SELECT_MOVIE from '../actions/index';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: categoriesData,
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  default:
    return state;
  }
}
