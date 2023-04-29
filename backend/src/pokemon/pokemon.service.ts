import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { IPokemonPage, PokemonPage } from './pokemon.model';

@Injectable()
export class PokemonService {
    private readonly POKE_API_URL = process.env.POKE_API_URL;

    private readonly logger = new Logger(PokemonService.name);

    constructor(private readonly httpService: HttpService) { }

    public async fetchPokemonList(limit: number, offset: number): Promise<IPokemonPage> {
        const url = `${this.POKE_API_URL}/pokemon`;
        const config = { params: { limit, offset } };

        return this.httpService.axiosRef.get(url, config)
            .then(res => res.data)
            .catch(err => {
                this.logger.error('An error occured when fetching pokemon list', err);

                return new PokemonPage();
            });
    }
}
