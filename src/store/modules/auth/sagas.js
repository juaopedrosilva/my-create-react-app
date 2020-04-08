import { takeLatest, call, delay, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2'

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ email, password  }) {
  try { 
    yield delay(2000)  

    const { data } = yield call(api.post, `login/authenticate`, JSON.stringify({ user: email, senha:password }))
  
    const dataUser = {
      ...data.response, 
    } 

    if(yield data.result) { 
      yield put(signInSuccess(null, dataUser)); 
      history.push('/activities')

    } else { 
      Swal.fire({ 
        icon: 'error',
        title: 'e-mail ou senha incorretos',
        showConfirmButton: false,
        timer: 1500
      })
      yield put(signFailure());
    }

  } catch (err) {
    toast.error('Falha na autenticação. Verifique suas credenciais.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Account creation failed, try again.');

    yield put(signFailure());
  }
}
 

export function signOut() {
  history.push('/')
}

export default all([ 
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut), 
]);