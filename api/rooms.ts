import axios from "axios";

/** GET: rooms */
export function queryRooms(params: {
    page: number;
    /** Limit of result */
    limit: number;
    /** Id of destination */
    sid?: number | string | string[] | undefined;
    /** Search room by property */
    property_type?: number | string | string[] | undefined;
  }) {
    return axios.get<API.Payload<API.RoomListItem[]>>(`https://api.luxstay.com/api/search`, {
        params: {
            ...params
        }
    });
}

export function queryRoom(id: string | string[] | undefined) {
    return axios.get<API.Payload<API.RoomItem>>(`https://api.luxstay.com/api/rooms/${id}`);
}