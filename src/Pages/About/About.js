import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const About = () => {
    
    const isLogin = useSelector(state => state.isLogin)
    const { push } = useHistory()
    if (!isLogin && !localStorage.getItem('access')) { push('/login') }

    return (
        <>
            <div className='About'>
                <h2>ABOUT</h2>
            </div>
        </>
    )
}

export default About
