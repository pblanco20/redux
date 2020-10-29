//state

import Axios from "axios";

const initialState = {
  array: []
};

//types

const GET_POKE_SUCCESS = "GET_POKE_SUCCESS";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE_SUCCESS:
      return {
        ...state,
        array: action.payload
      };
    default:
      return state;
  }
};

export const obtenerPokemonAction = async (dispatch, getState) => {
  try {
    const result = Axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
    );
    dispatch({
      type: GET_POKE_SUCCESS,
      payload: (await result).data.results
    });
  } catch (error) {
    console.log(error);
  }
};

export default reducer;
