import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { store } from '~/store'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isPrivateAdmin,
  isRequiredDatabase,
  exact,
  ...rest
}) {
  
const { signed } = store.getState().auth

if (!signed && isPrivate) {
  return <Redirect to="/login" />
}
 
return <Route {...rest} render={props => <Component {...props} />} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool, 
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false, 
}
