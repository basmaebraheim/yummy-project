export interface IAttribute {
    RestaurantsTableService: boolean;
    GoodForMeal: IGoodForMeal;
    Alcohol: string; 
    HasTV: boolean; 
    RestaurantsGoodForGroups: boolean; 
    NoiseLevel: string; WiFi: string; 
    RestaurantsAttire: string; 
    RestaurantsReservations: boolean; 
    OutdoorSeating: boolean; 
    BusinessAcceptsCreditCards: boolean 
    RestaurantsPriceRange2: number; 
    BikeParking: boolean; 
    RestaurantsDelivery: boolean; 
    Ambience:  IAmbience;
    RestaurantsTakeOut: boolean; 
    GoodForKids: boolean; 
    BusinessParking: IBusinessParking;
}

interface IGoodForMeal {
    dessert: boolean; 
    latenight: boolean; 
    lunch: boolean;
    dinner: boolean; 
    breakfast: boolean; 
    brunch: boolean;
} 
interface IAmbience {
    romantic: boolean; 
    intimate: boolean; 
    classy: boolean; 
    hipster: boolean; 
    divey: boolean; 
    touristy: boolean; 
    trendy: boolean; 
    upscale: boolean; 
    casual: boolean
}
interface IBusinessParking {
    garage: boolean;  
    street: boolean;
    validated: boolean; 
    lot: boolean; 
    valet: boolean;
}