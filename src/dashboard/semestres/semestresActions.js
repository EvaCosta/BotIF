import axios from 'axios'
import consts from '../../main/consts'

export const obterProvas= () => {
    const request = axios.get(`${consts.BASE_URL}/semestres?sort=_id`)

    return {
        type: 'SEMESTRES_FETCHED',
        payload: request
    }
}