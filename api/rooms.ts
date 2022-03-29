import axios from "axios";

/** GET: rooms */
export function queryRooms(params: {
    page?: number;
  }) {
    return axios.get<API.Payload<API.RoomListItem[]>>(`https://api.luxstay.com/api/search?page=1&limit=9`, {
        params: {
            ...params
        }
    });
}

export function queryRoom(id: string | string[] | undefined) {
    return axios.get<API.Payload<API.RoomItem>>(`https://api.luxstay.com/api/rooms/${id}`);
}