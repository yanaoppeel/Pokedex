import React from 'react';
import './Pokemons.scss';
import { buildImgSrc } from './PokemonService';

export interface IPokemon {
    name: string;
    url: string;
}

export type PokemonsProps = {
    pokemons: IPokemon[] | null;
}

const Pokemons = ({ pokemons }: PokemonsProps) => {
    const pokemonsToItems = (pokemons: IPokemon[] | null) => {
        if (!pokemons ) {
            return [];
        }
    
        return pokemons.map(pokemon => {
            return (
                <div className='pokemon-box'>
                    <img src={buildImgSrc(pokemon)} alt=""></img>
                    <p>{pokemon.name}</p>
                </div>
            );
        });
    }

    const items = pokemonsToItems(pokemons);

    return (
        <div className='pokemons-container'>
            {items}
        </div>
    );
}

export default Pokemons;
