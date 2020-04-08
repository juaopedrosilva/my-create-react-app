import produce from 'immer'

const INITIAL_STATE = {
  token: null,
  signed: true,
  loading: false,   
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST':
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token
        draft.signed = true
        draft.loading = false
        break
      }
      case '@auth/SIGN_FAILURE': 
      case '@auth/STOP_LOADING': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': { 
        draft.signed = false
        break
      }
      default:
    }
  })
}
