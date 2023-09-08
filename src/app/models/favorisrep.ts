import { Plant } from "./plant";

export interface FavoritesResponse {
    data: {
        favorites: Plant[];
    };
}