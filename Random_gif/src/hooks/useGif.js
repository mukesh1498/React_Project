import React from 'react'
import axios  from 'axios';
import { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    async function fetchData() {
        setLoading(true);
       // destructing 
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const sourceImage = data.data.images.downsized_large.url;
        setGif(sourceImage);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, [])


    return { gif, loading, fetchData }


}

export default useGif

