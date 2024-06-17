import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { thunk } from 'redux-thunk'
import reduxPromise from 'redux-promise'
import storage from 'redux-persist/lib/storage'
import { produce } from 'immer'
import { SET_TOKEN } from './type.js'

const globalState = {
  token: '',
}
// 创建reducer(拆分reducer)
const reducers = (state = globalState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case SET_TOKEN:
        draftState.token = action.token
        break
      default:
        return draftState
    }
  })

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage
}

const persistReducerConfig = persistReducer(persistConfig, reducers)

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(thunk, reduxPromise)

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares))

// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
