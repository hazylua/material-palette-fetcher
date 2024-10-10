import { ServerResponseBody } from "../types/server";

export function getServerResponse<T>(
    msg: string | null | undefined,
    data: T,
): ServerResponseBody<T> {
    return {
        msg: msg ?? "An error has occurred.",
        data,
    };
}
