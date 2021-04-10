import {useState, useEffect} from 'react';

//custom hook 

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
       //fetch json data
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                //check response
                if(!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        //catch network error 
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;