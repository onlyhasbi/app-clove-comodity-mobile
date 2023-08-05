export default interface IResponse<T> {
    data: T,
    error_message?: string,
    error_code?: string,
    paginate?: IResponsePaginate
}

export interface IResponsePaginate{
    current_page: number,
    from: number,
    last_page: number,
    per_page: number,
    total: number,
}
