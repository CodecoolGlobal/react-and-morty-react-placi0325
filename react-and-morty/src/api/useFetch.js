import React, { useState, useEffect } from "react";

export const useFetch = (starterUrl) => {
    const [url, setUrl] = useState(starterUrl);
    const [loadingState, setLoadingState] = useState(true);
    const [data, setData] = useState(undefined);

    useEffect(()=> {
        const getData = async() => {
            const response = await fetch(url);
            const actualData = await response.json();
            setData(actualData);
            setLoadingState(false);
        }
        getData();
    },[url])
    return [data, setUrl]
}