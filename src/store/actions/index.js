import axios from 'axios'
export const incrementCounter = () => {
    return {
        type: 'INC',
        value:5
    }
}

const apiDataSettings = (data) => {
    return {
        type: 'API',
        value: data
    }
}

export const searchApi = (term) => {
    return {
        type: 'SEARCH',
        value: term
    }
}

export const apiCall = (index) => {
    return dispatch  => {
        axios.get(`./api/CONTENTLISTINGPAGE-PAGE${index}.json`)
        .then( response => {
            const apiData = response.data;
            dispatch(apiDataSettings(apiData.page['content-items'].content))
        })
        .catch(error => {
            console.log(error)
        })
    }
}