import React, { useEffect, useState } from 'react'
import { getUser } from './api';

const AsyncTest = ({ name }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!name) {
            setData(null)
            return
        }
        getUser(name).then(setData)
    }, [name])

    return <>{data === null ? <div>Loading...</div> : data}</>
}

export default AsyncTest