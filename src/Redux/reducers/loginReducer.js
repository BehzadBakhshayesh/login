
export function isLogin (state=false, action){
    switch (action.type){
        case 'IS_LOGIN' : return action.payload
        default : return state
    }
}

export function loading (state=false, action){
    switch (action.type){
        case 'LOADING' : return action.payload
        default : return state
    }
}

export function token (state=false, action){
    switch (action.type){
        case 'LOADING' : return action.payload
        default : return state
    }
}