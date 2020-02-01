import api from '@api'
import swal from 'sweetalert'



/**
 * Create Work
 */
export function createWork(values) {
    return async dispatch => {
        dispatch({ type: 'works.request' })

        let { data, error } = await api.post(`/api/pts/work`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'works.failure', error })
        }

        dispatch({ type: 'works.success', success: data.success })

    }
};

/**
 * Fetch Works
 */
export function fetchWorks() {
    return async dispatch => {
        dispatch({ type: 'works.request' })

        let { data, error } = await api.get(`/api/pts/fetchWork`)

        if (error) {
            return dispatch({ type: 'works.failure', error })
        }

        dispatch({ type: 'works.success', works: data.works })

    }
};

/**
 * Update Work
 */
export function updateWork(values, idWork) {
    return async dispatch => {
        dispatch({ type: 'works.request' })

        let { data, error } = await api.put(`/api/pts/work/${idWork}`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'works.failure', error })
        }

        dispatch({ type: 'works.success', success: data.success })

    }
};



/**
 * Delete Work
 */
export function deleteWork(id) {
    return async dispatch => {
        dispatch({ type: 'works.request' })

        let { data, error } = await api.delete(`/api/pts/work/${id}`)

        if (error) {
            return dispatch({ type: 'works.failure', error })
        }

        dispatch({ type: 'works.success', success: data.success })

    }
};





/**
 * Create Sub Work
 */
export function createSubWork(values) {
    return async dispatch => {
        dispatch({ type: 'subworks.request' })

        let { data, error } = await api.post(`/api/pts/subwork`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'subworks.failure', error })
        }

        dispatch({ type: 'subworks.success', success: data.success })

    }
};

/**
 * Fetch Sub Works
 */
export function fetchSubWorks() {
    return async dispatch => {
        dispatch({ type: 'subworks.request' })

        let { data, error } = await api.get(`/api/pts/fetchSubWork`)

        if (error) {
            return dispatch({ type: 'subworks.failure', error })
        }

        dispatch({ type: 'subworks.success', subworks: data.subworks })

    }
};

/**
 * Update Sub Work
 */
export function updateSubWork(values, idSubWork) {
    return async dispatch => {
        dispatch({ type: 'subworks.request' })

        let { data, error } = await api.put(`/api/pts/subwork/${idSubWork}`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'subworks.failure', error })
        }

        dispatch({ type: 'subworks.success', success: data.success })

    }
};



/**
 * Delete Sub Work
 */
export function deleteSubWork(id) {
    return async dispatch => {
        dispatch({ type: 'subworks.request' })

        let { data, error } = await api.delete(`/api/pts/subwork/${id}`)

        if (error) {
            return dispatch({ type: 'subworks.failure', error })
        }

        dispatch({ type: 'subworks.success', success: data.success })

    }
};


/**
 * Create PT
 */
export function createPt(values) {
    return async dispatch => {
        dispatch({ type: 'pt.request' })

        let { data, error } = await api.post(`/api/pts/form`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'pt.failure', error })
        }

        dispatch({ type: 'pt.success', success: data.success })

    }
};

/**
 * Fetch PTs
 */
export function fetchPts() {
    return async dispatch => {
        dispatch({ type: 'pt.request' })

        let { data, error } = await api.get(`/api/pts/fetchForms`)

        if (error) {
            return dispatch({ type: 'pt.failure', error })
        }

        dispatch({ type: 'pt.success', pts: data.pts })

    }
};

/**
 * Update PT
 */
export function updatePt(values, idPt) {
    console.log(values);
    false;
    return async dispatch => {
        dispatch({ type: 'pt.request' })

        let { data, error } = await api.put(`/api/pts/form/${idPt}`, {
            data: values
        })

        if (error) {
            return dispatch({ type: 'pt.failure', error })
        }

        dispatch({ type: 'pt.success', success: data.success })

    }
};



/**
 * Delete PT
 */
export function deletePt(id) {
    return async dispatch => {
        dispatch({ type: 'pt.request' })

        let { data, error } = await api.delete(`/api/pts/form/${id}`)

        if (error) {
            return dispatch({ type: 'pt.failure', error })
        }

        dispatch({ type: 'pt.success', success: data.success })

    }
};