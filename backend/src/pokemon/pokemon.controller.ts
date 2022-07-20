import { Controller, Get, HttpCode, Query } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller('/api/pokemons')
export class PokemonController {

    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    @HttpCode(200)
    public async pokemonList(@Query('limit') limit: number, @Query('offset') offset: number) {
        const data = await this.pokemonService.fetchPokemonList(limit, offset);

        return data;
    }
}