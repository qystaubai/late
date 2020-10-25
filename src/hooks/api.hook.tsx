import axios from 'axios';

export const useApi = () => {
    const callApi = async (endpoint: string, data?: object, method: string ="GET")=>{
        endpoint = 'http://127.0.0.1:8080' + endpoint;
        console.log(endpoint, method, data);
        const userData: string = JSON.parse(localStorage.getItem('userData') as string);
        try {
            let result;
            switch (method) {
                case "DELETE":
                    result = await axios.delete(endpoint);
                    break;
                case "PUT":
                    result = await axios.put(endpoint, data);
                    break;
                case "POST":
                    result = await axios.post(endpoint, data);
                    break;
                default:
                case "GET":
                    result = await axios.get(endpoint);
                    break;
            }
            return result
        }catch(e){
            throw {error: e}
        }
    }

    return { callApi }
}
