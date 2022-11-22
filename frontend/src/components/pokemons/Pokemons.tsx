import React from 'react';
import './Pokemons.scss';

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
            const splitUrl = pokemon.url.split('/')
            const id = splitUrl[splitUrl.length - 2];
            // Build image url
            const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            
            return (
                <div className='pokemon-box'>
                    <img src={imgSrc} alt=""></img>
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
