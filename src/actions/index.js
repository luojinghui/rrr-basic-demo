
import request from 'superagent'

export const initData = (dispatch) => {
    request
        .get('../data/data.json')
        .end((err, res) => {
            dispatch({
                type :'initEnd',
                data: res.body
            })
    })
}

export const initNavData = (dispatch) => {
    request
        .get('../data/nav.json')
        .end((err, res) => {
            dispatch({
                type :'initNavEnd',
                data: res.body
            })
        })
}