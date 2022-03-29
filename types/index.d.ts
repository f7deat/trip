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

    export type Address = {
        address_line_1: string;
        area: string;
        area_id: number;
        area_path: string;
        city: string;
        city_id: number;
        city_path: string;
        state: string;
        state_id: number;
        state_path: string;
        country: string;
        country_path: string;
        latitude: string;
        longitude: string;
        full_address: string;
    }

    export type Destination = {
        id: number;
        name: string;
        url: string;
    }

    export type RoomItem = {
        id: number;
        host_id: number;
        name: string;
        url: string;
        summary: string;
        introduction: string;
        introduction_ko: string;
        apartment_rules: string;
        apartment_manual: string;
        checkin_guide: string;
        num_bedrooms: string;
        num_bathrooms: string;
        num_beds: string;
        area: string;
        maximum_guests: number;
        booking_type: string;
        status: string;
        submit_status: string;
        cancellation_policy: string;
        rating: number;
        review_count: number;
        like_count: number;
        favourable_rates: number;
        max_infants: number;
        instant_fake: boolean;
        partner_room: boolean;
        featured_photo: string;
        address: Payload<Address>;
        destinations: Payload<Destination[]>;
    }
}