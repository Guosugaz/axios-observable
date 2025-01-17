"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObservable = void 0;
const rxjs_1 = require("rxjs");
const axios_1 = require("axios");
function createObservable(promiseFactory, ...args) {
    let config = args[args.length - 1];
    config = config ? Object.assign({}, config) : {};
    args[args.length - 1] = config;
    let cancelSource;
    const hasCancelToken = !!config.cancelToken;
    if (hasCancelToken) {
        console.warn(`No need to use cancel token, just unsubscribe the subscription would cancel the http request automatically`);
    }
    const observable = new rxjs_1.Observable((subscriber) => {
        if (!hasCancelToken) {
            cancelSource = axios_1.default.CancelToken.source();
            config.cancelToken = cancelSource.token;
        }
        promiseFactory(...args)
            .then((response) => {
            subscriber.next(response);
        })
            .catch((error) => {
            subscriber.error(error);
        })
            .finally(() => {
            subscriber.complete();
        });
    });
    const _subscribe = observable.subscribe.bind(observable);
    observable.subscribe = (...args2) => {
        const subscription = _subscribe(...args2);
        const _unsubscribe = subscription.unsubscribe.bind(subscription);
        subscription.unsubscribe = () => {
            if (cancelSource) {
                cancelSource.cancel();
            }
            _unsubscribe();
        };
        return subscription;
    };
    return observable;
}
exports.createObservable = createObservable;
