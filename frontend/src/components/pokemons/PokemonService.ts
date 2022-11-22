import axios from 'axios';
import { IPokemonPage } from 'components/pokedex/Pokedex';
import { IPokemon } from './Pokemons';

export async function getAllPokemons(limit: number, offset: number): Promise<IPokemonPage | void> {
    const params = { params: { limit, offset } }
    try {
        const response = await axios.get('/pokemons', params);

        return response.data;
    } catch (error) {
        console.log(error);
        return;
    }
}

export function buildImgSrc(pokemon: IPokemon): string {
    const splitUrl = pokemon.url.split('/')
    const id = splitUrl[splitUrl.length - 2];
    // Build image url and return
    return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}