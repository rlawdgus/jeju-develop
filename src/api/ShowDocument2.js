import Axios from "axios";

const URL = "http://14.63.174.102:84/api/v1/document/3";

export const showDocument2 = async () => {
    const query = URL;
    const res = await Axios.get(query);
    return res.data;
}
