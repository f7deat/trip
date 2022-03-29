import axios from "axios";

export function queryAmenities() {
    return axios.get<API.Payload<API.AmenitiesListItem[]>>(`https://api.luxstay.com/api/amenities`);
}