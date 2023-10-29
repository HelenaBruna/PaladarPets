import { portion } from "./portion";

export interface classifier {
    class: string,
    cluster: number,
    sql_data: portion;
}