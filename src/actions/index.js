
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
