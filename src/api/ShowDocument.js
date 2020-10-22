import Axios from "axios";

const URL = "http://14.63.174.102:84/api/v1/document/1";

export const showDocument = async () => {
    const query = URL;
    const res = await Axios.get(query);
    return res.data;
}
