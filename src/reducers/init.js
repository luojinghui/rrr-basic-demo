export const initData = (state = {
    "item": []
}, action) => {
    switch(action.type) {
        case 'initEnd':
            return action.data
        default :
            return state
    }
}

