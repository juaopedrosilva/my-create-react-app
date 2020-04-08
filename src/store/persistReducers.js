import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'my-create-react-app',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )
 
  return persistedReducer
}
