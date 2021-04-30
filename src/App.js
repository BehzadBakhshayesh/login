import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import { isLogin } from './Redux/actions/loginAction'
import { LogoutRequest } from './Redux/actions/logoutAction'
import './App.scss'


const App = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  const logout = () => {
    // dispatch(isLogin(false))
    // localStorage.removeItem('access')
    // localStorage.clear()

    dispatch (LogoutRequest())
  }

  return (
    <>
      <main className='App'>
        {loading ?
          <>
            <h2>LOADING...</h2>
          </> :
          <>
            <header>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
              <h2>Header</h2>
              <button onClick={() => logout()}>خروج</button>
            </header>
            <section>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/login' component={Login} />
                <Route  path='*' component={NotFound} />
              </Switch>
            </section>
          </>
        }
      </main>
    </>
  )
}

export default App
