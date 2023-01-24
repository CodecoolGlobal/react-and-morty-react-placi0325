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
    const [locations, setUrl] = useFetch(mainUrls.locations,pageNumber)
    useEffect(()=>{
        setUrl(mainUrls.locations+pageNumber)
    },[pageNumber])
    return locations;
}

