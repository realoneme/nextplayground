

interface IFetchRequestInit extends RequestInit {
    url: string;
    data?: any
}
const postData = async (postData: IFetchRequestInit) => {
    const {
        url, mode = 'cors', cache = 'no-cache', credentials = 'same-origin', headers = {
            'Content-Type': 'application/json'
        }, redirect = 'follow', referrerPolicy = 'no-referrer', data
    } = postData
    return await fetch(url, {
        method: 'POST',
        mode,
        cache,
        credentials,
        headers,
        redirect,
        referrerPolicy,
        body: JSON.stringify(data)
    })
}
const getData = async (getData: IFetchRequestInit) => {
    const {
        url, mode = 'cors', cache = 'no-cache', credentials = 'same-origin', headers = {
            'Content-Type': 'application/json'
        }, redirect = 'follow', referrerPolicy = 'no-referrer'
    } = getData;
    console.log('url',url);
    
    return await fetch(url, {
        method: 'GET',
        mode,
        cache,
        credentials,
        headers,
        redirect,
        referrerPolicy,
    })
}
const DBURL = 'mongodb+srv://admin:admin@cluster0.rk8ufhm.mongodb.net/?retryWrites=true&w=majority'


export {
    DBURL,
    postData,
    getData
}