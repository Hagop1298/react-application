import { useState , useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)   

    useEffect(() => {
        // console.log(blogs)
        // console.log(name);
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource")
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                console.log(err.message, "error-message");
                setError(err.message)
                setIsPending(false)
                
            })
    }, [url])
    return {data , isPending , error}
}

export default useFetch