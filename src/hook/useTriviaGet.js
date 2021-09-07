import {useEffect, useState} from 'react'
import axios from 'axios'

const useTrivia = (difLevel) => {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    const url = `https://opentdb.com/api.php?amount=10&category=15&difficulty=${difLevel}&type=multiple`;

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}

export default useTrivia