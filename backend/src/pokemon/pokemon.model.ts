export interface IPokemon {
    name: string;
    url: string;
}

export class Pokemon implements IPokemon {
    public name: string;
    public url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export interface IPokemonPage {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}

export class PokemonPage implements IPokemonPage {
    public count: number;
    public next: string;
    public previous: string;
    public results: Pokemon[];

    constructor(count = 0, next = null, previous = null, results = []) {
        this.count= count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}