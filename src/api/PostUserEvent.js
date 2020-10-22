import Axios from 'axios'

const URL = "http://14.63.174.102:84/api/v1/user/add_attend_user";

export const postUserEvent = async ({ name, position, email, phone }) => {
    const REQUEST_URL = URL;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('email', email);
    formData.append('phone', phone);
    
    const res = await Axios.post(REQUEST_URL, formData);

    // console.log(res, formData)
    return res.data;
}