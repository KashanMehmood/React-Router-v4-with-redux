import actionTypes from '../constant/constant';

export function changeState(allChangeState) {

    // console.log(allChangeState);
    return dispatch => {
        dispatch({ type: actionTypes.CHANGEUSERNAME, payload: allChangeState.userName })
        dispatch({ type: actionTypes.CHANGEUSERAGE, payload: allChangeState.userAge })
    }
}