import { useRef,useEffect ,useState} from "react";

// useInterval
function useInterval(callback,time) {
    const intervalFn = useRef();

    useEffect(() => {
        intervalFn.current = callback;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            intervalFn.current()
        },time)
        return () => {
            clearInterval(timer)
        };
    }, [time]);
}

function useFetch(url,options) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url,options);
                const res = await response.json();
                setResponse(res)
            } catch (error) {
                setError(error)
            }
        }
        fetchData();
        
    }, []);

    return {response,error}
}


export {
    useInterval,
    useFetch
} 