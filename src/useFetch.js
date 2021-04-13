import {useEffect, useState} from "react";

function useFetch(url) {
    /* Loading data from db.json */
    const [data, setData] = useState(null);

    const[isPending, setIsPending] = useState(true);

    const[error, setError] = useState(null);

    /* npx json-server --watch data/db.json --port 8000 */
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error('could not fetch the data');
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000)
    }, []);

    return {data, isPending, error};
}

export default useFetch;
