
export interface ResponseWrapper<T> {
    status: string;
    code: string;
    objectValue: T;
}
