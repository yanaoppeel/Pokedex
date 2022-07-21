import axios from 'axios';

export async function getAllPokemons(limit, offset) {
    const params = { params: { limit, offset } }
    try {
        const response = await axios.get('/pokemons', params);

        return response.data;
    } catch (error) {
        return [];
    }
}