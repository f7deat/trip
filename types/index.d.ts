declare namespace API {
    export type Payload<T> = {
        data: T;
    }
    
    export type AmenitiesListItem = {
        id: string;
        name: string;
    }
    
    export type RoomListItem = {
        id: number;
        name: string;
        introduction: string;
        apartment_rules: string;
        apartment_manual: string;
        num_bedrooms: number;
        num_bathrooms: number;
        num_beds: number;
        maximum_guests: number;
        booking_type: string;
        status: string;
        popular: boolean;
        url: string;
        reviews_count: number;
        rating: number;
        checkin_date_price: number;
        checkin_date_price_formatted: string;
        photos: Payload<PhotoListItem>;
    }
    export type PhotoListItem = {
        thumbnail: string;
        original: string;
        count: number;
        slides: number;
    }
}