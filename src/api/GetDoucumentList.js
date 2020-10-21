import Axios from "axios";

const URL = "http://14.63.174.102:84/api/v1/document";

export const getDoucmentList = async (type) => {
    const query = `${URL}?type=${type}`;
    const res = await Axios.get(query);
    // console.log(res);
}
