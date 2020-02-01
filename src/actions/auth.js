import api from '@api'


/**
 * Login
 */
export function login({ username, password, remember }) {
    return async dispatch => {
        dispatch({ type: 'login.request' })

        let { data, error } = await api.post('/auth/login', {
            data: {
                idambev: username,
                password
            }
        })


        if (error) {
            return dispatch({ type: 'login.failure', error })
        }

        if (remember) {
            window.localStorage.setItem('auth_token', data.token)
        } else {
            window.sessionStorage.setItem('auth_token', data.token)
        }
        
        let selfieResponse = await api.get('/api/users/me');

        dispatch({ type: 'login.success', user: selfieResponse.data.user })

        window.location.href = '/'
    }
};



/**
 * Me
 */
export function me() {
    return async dispatch => {
        dispatch({ type: 'me.request' })

        let { data, error } = await api.get('/api/users/me')


        if (error) {
            return dispatch({ type: 'me.failure', error })
        }

        dispatch({ type: 'me.success', user: data.user })

    }
};

/**
 * Logout
 */

export function logout() {
    return async dispatch => {
        dispatch({ type: 'logout.action' })

        localStorage.removeItem('auth_token');
        window.location.href = '/';

    }
}