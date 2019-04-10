import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'

const LogoutPage = () => {
    const [ttl, setTtl] = useState(3)

    useEffect(() => {
        const int = setInterval(() => setTtl(ttl - 1), 1000)
        // Prevent effect on component unmount
        return () => clearInterval(int)
    })

    if (ttl === 0) {
        return <Redirect to='/'/>
    }

    return (
        <div className='logout-page'>
            You have been logged out and will be redirected in {ttl} seconds...
        </div>
    )
}

export default LogoutPage
