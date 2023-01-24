import React, { useEffect } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

export const useCharacters = (pageNumber) => {
    const [characters, setUrl] = useFetch(mainUrls.characters,pageNumber)
    useEffect(()=>{
        setUrl(mainUrls.characters+pageNumber)
    },[pageNumber])
    return characters;
}

