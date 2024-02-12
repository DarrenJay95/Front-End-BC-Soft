export interface PokemonListResponse {
    count: number
    next: string | null
    previous: string | null
    results: PokemonList[]
  }
  
  export interface PokemonList {
    name: string
    url: string
  }