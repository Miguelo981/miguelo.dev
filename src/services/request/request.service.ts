import axios, { AxiosResponse } from 'axios';
import { HOST } from '../../config/api.config';

axios.defaults.headers.common['X-API-KEY'] = 'test';

export async function makeGetRequest(path: string): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.get(HOST + path);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePostRequest(path: string, payload?: any): Promise<AxiosResponse | any> {
    try {
        const { data } = await axios.post(HOST + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePutRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.put(HOST + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makePatchRequest(path: string, payload?: any): Promise<any | boolean> {
    try {
        const { data } = await axios.patch(HOST + path, payload);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}

export async function makeDeleteRequest(path: string): Promise<any | boolean> {
    try {
        const { data } = await axios.delete(HOST + path);
        return data;
    } catch (e: any) {
        return e.response.data
    }
}