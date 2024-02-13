import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)) as any)

export type RootStateCallable = typeof store.getState
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
