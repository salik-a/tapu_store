import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //send get request to url when the function called
    const fetchData = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchData()
    }, [url]);

    return { error, loading, data };

};

export default useFetch;