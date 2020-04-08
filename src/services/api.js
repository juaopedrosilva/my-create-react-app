import axios from 'axios'  

export const API_ADDRESS_INTRANET_SERVER = ``
export const API_ADDRESS_INTRANET_LOCAL = `s`

export default axios.create({
  baseURL: API_ADDRESS_INTRANET_LOCAL
})
 