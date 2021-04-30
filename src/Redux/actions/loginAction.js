import RequestInstance from '../../Tools/Request'

export function isLogin(data) {
    return {
        type: 'IS_LOGIN',
        payload: data
    }
}


export function token(data) {
    return {
        type: 'TOKEN',
        payload: data
    }
}

export function loading(data) {
    return {
        type: 'LOADING',
        payload: data
    }
}


export function LoginRequest(formData) {
    return (dispatch) => {
        dispatch(loading(true))

        RequestInstance({
            method: 'post',
            url: '/auth/login',
            data: {...formData}
        })
            .then(response => {
                
                if(response.status==200 || response.status==201){
                    
                    dispatch(isLogin(true)) 
                    dispatch(token( localStorage.setItem('access',response.data.data.access))) 
                    localStorage.setItem('access',response.data.data.access)
                }

            })
            .catch(err =>{
              console.log(err.response)
            })
            .finally(()=> dispatch(loading(false)))

    }
}






