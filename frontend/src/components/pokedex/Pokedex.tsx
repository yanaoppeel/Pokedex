import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Pokemons, { IPokemon } from 'components/pokemons/Pokemons';
import { getAllPokemons } from 'components/pokemons/PokemonService';
import './Pokedex.scss';

export interface IPokemonPage {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}

const Pokedex = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    const limit = 20;
    const previousIcon = '<';
    const nextIcon = '>';

    useEffect(() => {
        async function fetchData(): Promise<void | IPokemonPage> {
            setLoading(true);
            try {
                await getAllPokemons(limit, offset)
                    .then(res => setPokemons(res?.results ? res.results : []))
                    .catch(() => setPokemons([]))
                    .finally(() => setLoading(false));
            } catch (err) {
                console.log(err);
                setPokemons([]);
            }
        }
        fetchData();
    }, [offset]);


    const handlePageClick = useCallback((event: string) => {
        if (event === 'previous') {
            setOffset(offset - limit);
        } else if (event === 'next') {
            setOffset(offset + limit)
        }
    }, [offset]);

    return useMemo(() => (
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
    ), [pokemons, loading, handlePageClick]);
}

export default Pokedex;
