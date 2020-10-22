import Axios from "axios";

import { Paths } from '../paths/index'

const URL = Paths.api

export const getDocumentList = async () => {
    const query = `${URL}/document?module_id=2`
    const res = await Axios.get(query)
    return res.data
}

export const getShowDocument = async () => {
    const query = `${URL}/document/3`
    const res = await Axios.get(query)
    return res.data
}