import Axios from "axios";

const URL = "http://14.63.174.102:84/api/v1/document?module_id=1";

export const getDocumentList = async (type) => {
    const query = `${URL}&type=${type}`;
    const res = await Axios.get(query);
    return res.data;
}
