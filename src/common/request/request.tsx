import RequestMethod from '../enums/requestEnum';

const get = (url: string): Promise<unknown> => {
    return fetch(url, {
        method: RequestMethod.GET, headers: {
            "Content-Type": "text/plain"
        }
    })
}
const Request = { get };
export default Request;