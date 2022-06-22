import React, { useEffect, useState } from 'react'
import { getUserWithCar } from './api';

const MoreAsync = ({ name }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!name) {
            setData(null)
            return
        }
        getUserWithCar(name).then(setData)
    }, [name])

    return <div>{data === null ? <div>Loading...</div> : data}</div>
}

export default MoreAsync