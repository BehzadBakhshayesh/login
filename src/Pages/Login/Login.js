import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LoginRequest, isLogin, AuthToken } from '../../Redux/actions/loginAction'
import './Login.scss'



const Login = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const [mobail, setmobail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
    const formData = {
      "dialing_prefix": "+98",
      "mobile": `${mobail}`,
      "password": `${password}`,
      "remember_me": true
    }
    dispatch(LoginRequest(formData))
  }
  const isLogin = useSelector(state => state.isLogin)

  if (isLogin) { push('/') }

  return (
    <>
      <div className='Login'>
        <form onSubmit={(e) => submitHandle(e)}>
        <span>U: 4258147375</span><br />
          <span>P: 12345678</span>
          <div>
            <input type='text' value={mobail} onChange={(e) => setmobail(e.target.value)} placeholder='mobail' required/>
          </div>
          <div>
            <input type='text' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='password' required/>
          </div>
            <button type='submit'>ورود</button>
        </form>
      </div>
    </>
  )
}

export default Login
