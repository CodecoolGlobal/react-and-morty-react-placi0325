import React, { useEffect } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

export const useCharacters = (pageNumber) => {
    const [characters, setUrl] = useFetch(mainUrls.characters)
    useEffect(()=>{
        setUrl(mainUrls.characters+pageNumber)
    },[pageNumber])
    return characters;
}

export const useLocations = (pageNumber) => {
    const [locations, setUrl] = useFetch(mainUrls.locations)
    useEffect(()=>{
        setUrl(mainUrls.locations+pageNumber)
    },[pageNumber])
    return locations;
}

export const useLocationCard = (id) => {
    const [locationCard, setUrl] = useFetch(`https://rickandmortyapi.com/api/location/`+id)
    useEffect(()=>{
        setUrl(`https://rickandmortyapi.com/api/location/`+id)
    },[id])
    return locationCard;
}

/*export const useCharacterCard = (id) => {
    const [characterCard, setUrl] = useFetch(`https://rickandmortyapi.com/api/character/`+id)
    useEffect(()=>{
        console.log('fetching id:',id)
        setUrl(`https://rickandmortyapi.com/api/character/`+id)
    },[id])
    return characterCard;
}*/

export const useCharacterCard = (url) => {
    const [characterCard, setUrl] = useFetch(url)
    useEffect(()=>{
        setUrl(url)
    },[url])
    return characterCard;
}