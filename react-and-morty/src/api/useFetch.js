import React, { useState, useEffect } from "react";

export const useFetch = async(url, pageNumber) => {
    let data = await fetch(`${url}${pageNumber}`);
    return data.json();
}