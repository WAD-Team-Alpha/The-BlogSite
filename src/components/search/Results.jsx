import React from 'react'
import { useLocation } from 'react-router-dom'

const Results = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    return (
        <div>
            {params.get('')}
        </div>
    )
}

export default Results
