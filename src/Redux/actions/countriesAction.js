import RequestInstance from '../../Tools/Request'
import {isLogin, loading} from './loginAction'

export function countriesAction(data) {
    return {
        type: 'COUNTRIES',
        payload: data
    }
}


export function getList() {
    return (dispatch) => {

        RequestInstance({
            method: 'get',
            url: '/countries?sorts[id]=asc',
        })
            .then(response => {
                
                if(response.data.status && localStorage.getItem('access')){
                    dispatch(isLogin(response.data.status))
                    dispatch(countriesAction(response.data.data)) 
                }
            })
            .catch(err => alert(err))
           

    }
}






