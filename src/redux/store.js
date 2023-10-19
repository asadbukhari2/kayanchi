import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createTransform } from 'redux-persist';
import Flatted from 'flatted';

//reducers
import auth from './reducers/authReducer';
// import userReducer from "./userReducer";
// import eventReducer from "./eventReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [transformCircular],
  blacklist: ['auth'],
};
const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['error'],
};

const reducers = combineReducers({
  auth: persistReducer(authConfig, auth),
  // user: userReducer,
  // events:eventReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);
