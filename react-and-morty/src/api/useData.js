import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";

export const useCharacters = (pageNumber) => {
    return useFetch(mainUrls.characters+pageNumber);
}

export const useLocations = (pageNumber) => {
    return useFetch(mainUrls.locations+pageNumber);
}

export const useLocationCard = (id) => {
    return useFetch(mainUrls.location+id)
}

export const useCharacterCard = (id) => {
    return useFetch(mainUrls.character+id);
}