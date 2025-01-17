import { AxiosDefaults, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosObservable } from './axios-observable.interface';
declare class Axios {
    private axiosInstance;
    static defaults: AxiosDefaults;
    static interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    constructor(axiosInstance: AxiosInstance);
    get defaults(): any;
    get interceptors(): any;
    static request<T = any>(config: AxiosRequestConfig): AxiosObservable<T>;
    static get<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
    static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    static put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    static patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    static delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
    static head<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
    static create(config: AxiosRequestConfig): Axios;
    request<T = any>(config: AxiosRequestConfig): AxiosObservable<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T>;
}
export default Axios;
export { Axios };
