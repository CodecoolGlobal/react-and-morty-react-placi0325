import React, { useState, useEffect } from "react";

export const useFetch = (starterUrl, pageNumber) => {
    const [url, setUrl] = useState(starterUrl);
    const [loadingState, setLoadingState] = useState(true);
    const [data, setData] = useState(undefined);

    useEffect(()=> {
        const getData = async() => {
            const response = await fetch(url+pageNumber);
            const actualData = await response.json();
            setData(actualData);
            //console.log(data)
            setLoadingState(false);
        }
        getData();
    },[url,pageNumber])
    return [data, setUrl]
}