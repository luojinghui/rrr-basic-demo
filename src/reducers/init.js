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

export const initNav1 = (state = {"nav1": {}}, action) => {
    switch(action.type) {
        case 'nav2':
            return action.data
        case 'nav3':
            return action.data
        default :
            return state
    }
}

export const initNav = (state = {
    "nav": {},
    "nav1": {},
    "nav2": {}
}, action) => {
    switch(action.type) {
        case 'initNavEnd':
            return action.data
        default :
            return state
    }
}

