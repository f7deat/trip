import axios from "axios";

export function queryAmenities() {
    return axios.get<API.Payload<API.AmenitiesListItem[]>>(`https://api.luxstay.com/api/amenities`);
}

export function queryPropertyTypes() {
    return axios.get<API.Payload<API.PropertyTypesListItem[]>>(`https://api.luxstay.com/api/propertyTypes`)
}