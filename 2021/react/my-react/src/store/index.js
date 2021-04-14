import {createStore,applyMiddleware} from 'redux';
import { defRuducer } from './reducers';
import { defSagas } from './sagas';
import  createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(defRuducer,{},applyMiddleware(sagaMiddleware))

sagaMiddleware.run(defSagas);