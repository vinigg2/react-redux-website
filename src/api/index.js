import axios from 'axios'
import getToken from '@utils/getToken'

let baseURL = 'http://192.168.0.18:3005'
let dev = false

if (window.location.hostname.indexOf('localhost') !== -1) {
  baseURL = 'http://192.168.0.18:3005'
  dev = true
}


async function Api(method = 'GET', url = '/', options = {}) {
  try {
    const token = await getToken();

    options = {
      ...options,
      method,
      url,
      baseURL: url.indexOf('http') > -1 ? undefined : baseURL,
      params: { ...options.params },
      validateStatus: status => {
        return status < 500
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        ...options.headers
      }
    }

    let { status, data } = await axios(options)


    if (status < 300) {
      return { data, status }
    }

    if (status !== 429) {
      return {
        error: data.message || data.raw.message || 'Erro desconhecido',
        status: status,
      }
    }

    return false;

  } catch (e) {
    return {
      error: 'Error desconhecido',
    }
  }
}

export default {
  dev,
  baseURL,
  get: (url, options) => Api('GET', url, options),
  post: (url, options) => Api('POST', url, options),
  put: (url, options) => Api('PUT', url, options),
  patch: (url, options) => Api('PATCH', url, options),
  delete: (url, options) => Api('DELETE', url, options),
}
