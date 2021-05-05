import axios from 'axios'
import SpaceListing from '../Components/SpaceListing'
import { useState, useEffect } from 'react'

const AllSpaces = () => {

    const [spaces, setSpaces] = useState([])

    const getAllSpaces = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spaces/all`)
        setSpaces(response.data.spaces)
    }

    useEffect(() => {
        getAllSpaces()
    }, [])


    return (
        <div className="all-spaces-container">
            { spaces.length === 0 ?
            <div>Loading...</div>
            :  
            <SpaceListing spaces={spaces} />  
            }
        </div>
    )
}

export default AllSpaces