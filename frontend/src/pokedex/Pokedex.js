import React, { useEffect, useState } from 'react';
import Pokemons from '../pokemons/Pokemons';
import { getAllPokemons } from '../pokemons/PokemonService';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllPokemons()
                    .then(res =>  res)
                    .catch(() => []);

                return data ? setPokemons(data) : setPokemons([]);
            } catch (err) {
                return setPokemons([]);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Pokedex</h1>
            <Pokemons pokemons={pokemons} />
        </div>
    )
}

