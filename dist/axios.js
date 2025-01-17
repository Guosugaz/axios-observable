"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
const axios_1 = require("axios");
const create_observable_1 = require("./create-observable");
class Axios {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    get defaults() {
        return this.axiosInstance.defaults;
    }
    get interceptors() {
        return this.axiosInstance.interceptors;
    }
    static request(config) {
        return (0, create_observable_1.createObservable)(axios_1.default.request, config);
    }
    static get(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.get, url, config);
    }
    static post(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.post, url, data, config);
    }
    static put(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.put, url, data, config);
    }
    static patch(url, data, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.patch, url, data, config);
    }
    static delete(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.delete, url, config);
    }
    static head(url, config) {
        return (0, create_observable_1.createObservable)(axios_1.default.head, url, config);
    }
    static create(config) {
        return new Axios(axios_1.default.create(config));
    }
    request(config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.request, config);
    }
    get(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.get, url, config);
    }
    head(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.head, url, config);
    }
    post(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.post, url, data, config);
    }
    put(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.put, url, data, config);
    }
    patch(url, data, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.patch, url, data, config);
    }
    delete(url, config) {
        return (0, create_observable_1.createObservable)(this.axiosInstance.delete, url, config);
    }
}
exports.Axios = Axios;
Axios.defaults = axios_1.default.defaults;
Axios.interceptors = axios_1.default.interceptors;
exports.default = Axios;
