const INITIAL_STATE={
    userName: 'kashan'
}

// reducer
export default (states = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'CHANGEUSERNAME':
            return({
                states,
                userName: action.payload
            })
        default:
            return states;
    }
}