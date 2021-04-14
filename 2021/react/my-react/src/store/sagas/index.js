import { takeEvery,takeLatest,throttle,select} from 'redux-saga/effects'
export function* defSagas(){
    yield takeEvery('takeEvery',function*() {
        const state = yield select(state => state.userInfo)
        console.log('takeEvery',state)
    })

    yield takeLatest('takeLatest',function() {
        console.log('takeLatest')
    })

    yield throttle(3000,'throttle',function() {
        console.log('throttle')
    })

}