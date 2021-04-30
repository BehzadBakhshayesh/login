import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getList } from '../../Redux/actions/countriesAction'
import './Home.scss'



const Home = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()

    useEffect(() => {
        dispatch(getList())
    }, [])

    const isLogin = useSelector(state => state.isLogin)
    const countries = useSelector(state => state.countriesReducer)


    if (!isLogin && !localStorage.getItem('access')) { push('/login') }

    return (
        <>
            <div className='Home'>
                <h2>Home</h2>
                <ul>
                    {
                        countries.map(countri => <li key={countri.id}>{countri.name}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default Home
