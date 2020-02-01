import api from '@api'
import swal from 'sweetalert'


/**
 * Fetch Users
 */
export function fetchUsers() {
    return async dispatch => {
        dispatch({ type: 'users.request' })

        let { data, error } = await api.get(`/api/users/fetch`)

        if (error) {
            return dispatch({ type: 'users.failure', error })
        }

        dispatch({ type: 'users.success', users: data.users })

    }
};


/**
 * Register User
*/

export function registerUser(values) {
    return async dispatch => {
        dispatch({ type: 'user.request' })

        let { data, error } = await api.post('/api/auth/signup', {
            data: values
        })

        if (error) {
            return dispatch({ type: 'user.failure', error })
        }

        if (values.avatar) {
            let body = new FormData();
            body.append('file', values.avatar);

            let fileUpload = await api.post('/api/upload', {
                data: body,
                params: {
                    path: 'users',
                    fileName: data.user
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (fileUpload.error) {
                return dispatch({ type: 'user.failure', error })
            }

            return dispatch({ type: 'user.success', success: data.success });
        }

        return dispatch({ type: 'user.success', success: data.success });


    }
};

/**
 * Delete User
*/

export function deleteUser(user) {
    return async dispatch => {
        dispatch({ type: 'user.request' });

        let { data, error } = await api.delete(`/api/users/${user}`)

        if (error) {
            return dispatch({ type: 'user.failure', error })
        }

        return dispatch({ type: 'user.success', success: data.success });

    }
}


/**
 * Update User
*/

export function updateUser(user, id) {
    return async dispatch => {
        dispatch({ type: 'user.request' });

        let { data, error } = await api.put(`/api/users/${id}`, {
            data: user
        })

        if (error) {
            return dispatch({ type: 'user.failure', error })
        }


        if (user.avatar) {
            let body = new FormData();
            body.append('file', user.avatar);

            let fileUpload = await api.post('/api/upload', {
                data: body,
                params: {
                    path: 'users',
                    fileName: data.user
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (fileUpload.error) {
                return dispatch({ type: 'user.failure', error })
            }

            return dispatch({ type: 'user.success', success: data.success });
        }

        return dispatch({ type: 'user.success', success: data.success });

    }
}

/**
 * PDF Users
*/

export function pdfUsers(users) {
    return async dispatch => {
        dispatch({ type: 'user.request' });

        let { data, error } = await api.post(`/api/users/pdf`, {
            data: {
                users
            }
        })

        if(error) {
            swal(error, '', 'error');
        }

        if (data) {
            window.open(data.pdf, '_blank');
        }

    }
}