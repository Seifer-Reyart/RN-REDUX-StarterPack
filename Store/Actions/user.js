/*********************/
/*** Types Actions ***/
/*********************/

export const SUCCESS_LOGIN  = 'USER_SUCCESS_LOGIN';
export const FAILURE        = 'USER_FAILURE';

/******************************/
/*** Fontions Actions Fetch ***/
/******************************/

/**********************************/
/*            Api URL             */
/**********************************/
const url = 'https://ideel.io:8000';
/**********************************/

/******* TEST en dur *******/
var user = {
    nom: 'toto',
    prenom: 'yolo',
    email: 'toto@gmail.com',
    Description: "J'ai mis en commentaire, une forme de fetch, libre à vous de la modifier selon les besoin"
};

export function connexion(email, password) {
    return (dispatch) => {
        console.log("in dispatch")
        dispatch(setAuth(user))
        return {success: true}
    }
    /****************************/

    /*
    return async (dispatch, getState) => {
        let response = await fetch(url + '/api/account/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': {'application/json', Authorization: token}
                //'Authorization': token //à mettre sur les autres routes nécéssitant d'être connecté (à vérifier, la forme du Token attendu)
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        let res = await response.json()

        if (response.status >= 200 && response.status < 300) {
            dispatch(setAuth(res))
            return ({success: true})
        } else {
            let error = res
            dispatch(setError(error))
            return ({success: false})
        }
    }
     */
}

/*************************************/
/*** Fonction Dispatch des Actions ***/
/*************************************/

export function setAuth(user) {
    return {
        type: SUCCESS_LOGIN,
        user: user,
    }
};




/* Dispatch Errors */

export function setError(error) {
    return {
        type: FAILURE,
        error: action.error
    }
}
