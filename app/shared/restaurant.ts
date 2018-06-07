import { IAttribute } from './attribute';
export interface IRestaurant {
    id: number;
    state: string;
    address: string;
    attributes: IAttribute;
    business_id: string;
    categories: Array<string>;
    city: string;
    hours: IHour;
    is_open: number;
    latitude: number;
    longitude: number;
    name: string;
    neighborhood: string;
    postal_code: number;
    review_count: number;
    stars: number;
}

interface IHour {
    Monday: string; 
    Tuesday: string; 
    Friday: string; 
    Wednesday: string; 
    Thursday: string; 
    Sunday: string; 
    Saturday: string;
}