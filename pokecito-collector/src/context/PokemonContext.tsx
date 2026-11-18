import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PokemonCard {
    id: number;
    name: string;
    type: string;
    image: string;
    isFavorite?: boolean;
}   


export interface Trainer {
    id: number;
    fullName: string;
    document: {type: string; dni: string};
    dateRegister: string;
}

interface PokemonContext {
    entrenadores: Trainer[];
    entrenadorActivo: Trainer | null;
    mochilaActual: PokemonCard [];
    guardarPokemonEnMochila: (pokemon : PokemonCard) => void;
    registrarEntrenador: (usuario: Trainer) => void;
    seleccionarEntrenador: (usuario: Trainer) => void;
    seleccionarFavorito: (pokemonId: number) => void;
    eliminarPokemonDeMochila: (pokemonId: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

export const PokemonProvider: react.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [entrenadores,setEntrenadores] = useState<Trainer[]>
}