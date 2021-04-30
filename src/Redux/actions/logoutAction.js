import RequestInstance from '../../Tools/Request'
import {isLogin} from './loginAction'


export function LogoutRequest() {
    return (dispatch) => {
        RequestInstance({
            method: 'get',
            url: '/auth/logout',
        })
            .then(response => {

                if(response.data.status){
                    dispatch(isLogin(false)) 
                    localStorage.removeItem('access')
                    localStorage.clear()
                }

            })
            .catch(err => alert(err))

    }
}






