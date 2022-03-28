import axios from "axios";
import { AmenitiesListItem, Payload } from "../types";

export function queryAmenities() {
    return axios.get<Payload<AmenitiesListItem[]>>(`https://api.luxstay.com/api/amenities`);
}