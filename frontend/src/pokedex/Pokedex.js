import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Pokemons from '../pokemons/Pokemons';
import './Pokedex.scss';
import { getAllPokemons } from '../pokemons/PokemonService';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);

    const limit = 20;

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                await getAllPokemons(limit, offset)
                    .then(res =>  {
                        setPokemons(res?.results);
                    })
                    .catch(() => {
                        setPokemons(null);
                    })
                    .finally(() => setLoading(false));
            } catch (err) {
                console.log(err);
                return setPokemons([]);
            }
        }
        fetchData();
    }, [offset]);
   

    const handlePageClick = (event) => {
        if (event === 'previous') {
            setOffset(offset - limit);
        } else if (event === 'next') {
            setOffset(offset + limit)
        }
      };

    const previousIcon = '<';
    const nextIcon = '>';

    return (
        <div className='pokedex'>
            <h1>Pokedex</h1>
            {!loading
                ?
                (<div className='pokemons-list'>
                    <button className='previous' onClick={() => handlePageClick('previous')}>{previousIcon}</button>
                    <Pokemons pokemons={pokemons} />
                    <button className='next' onClick={() => handlePageClick('next')}>{nextIcon}</button>
                </div>)
                : <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
                visible={loading}
            /> 

            }
        </div>
    )
}

