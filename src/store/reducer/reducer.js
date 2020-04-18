import actionTypes from '../constant/constant';

const INITIAL_STATE={
    userName: 'kashan',
    userAge:'18'
}

// reducer
export default (states = INITIAL_STATE, action)=>{

    console.log(action);
    switch(action.type){
        case actionTypes.CHANGEUSERNAME:
            return({
                // ...states : ye sari state ko same rakhega or usay hi change krega jissay change krna hota hy , spread operator
                ...states,
                userName: action.payload
            })
        case actionTypes.CHANGEUSERAGE:
            return({
                // ...states : ye sari state ko same rakhega or usay hi change krega jissay change krna hota hy , spread operator
                ...states,
                userAge: action.payload
            })
        default:
            return states;
    }
}