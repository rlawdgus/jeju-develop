import Axios from "axios";

import { Paths } from '../paths/index'

const URL = Paths.api

export const getDocumentList = async () => {
    const query = `${URL}/document?module_id=2`
    const res = await Axios.get(query)
    return res.data
}

export const getShowDocument = async (id) => {
    const query = `${URL}/document/3?moduel_id=${id}`
    const res = await Axios.get(query)
    return res.data
}