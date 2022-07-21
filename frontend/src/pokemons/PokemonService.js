import axios from 'axios';

export async function getAllPokemons() {
    try {
        const response = await axios.get('/pokemons');

        return response.data ? response.data.results : [];
    } catch (error) {
        return [];
    }
}