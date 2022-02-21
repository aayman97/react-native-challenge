export const FavoriteReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_FAVORITES') {

        return [...state, action.payload]
    }
   else if(action.type === 'REMOVE_FROM_FAVORITES'){
        
        let index = state.indexOf(action.payload)
        let arr = []
        if(index > -1){
            state = state.filter((_,i) => i !==index)
        }
        console.log(state)
        return state
    }
    else {
        return state
    }
}