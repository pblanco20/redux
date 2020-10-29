import React from 'react';

//hooks react redux
import {useDispatch,useSelector} from 'react-redux';

//importamos la accion

import {obtenerPokemonAction} from '../Redux/pokesDucsk';

const Pokemones = ()=>{

  //Declaramos dispatch para llamar a la accion o acciones
  const dispatch = useDispatch();
 

  const pokemones = useSelector( store=> store.pokemones.array);

  return(

    <div>
      <h1>Pokemones </h1>
      <button onClick={()=>dispatch(obtenerPokemonAction())}
    </div>
  )

}