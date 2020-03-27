export function changeState(){
    return dispatch => {
        dispatch({type:'CHANGEUSERNAME', payload: "kash"})
        // console.log("kashaaa");
    }
    
}