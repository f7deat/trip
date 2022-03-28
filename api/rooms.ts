import axios from "axios";
import { Payload, RoomListItem } from "../types";

/** GET: rooms */
export function queryRooms(params: {
    page?: number;
  }) {
    return axios.get<Payload<RoomListItem[]>>(`https://api.luxstay.com/api/search?page=1`, {
        params: {
            ...params
        }
    });
}