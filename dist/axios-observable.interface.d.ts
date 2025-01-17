import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare type AxiosObservable<T> = Observable<AxiosResponse<T>>;
