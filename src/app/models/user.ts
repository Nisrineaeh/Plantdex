import { Plant } from "./plant";

export interface User {
    id:number,
    name: string,
    usernmane: string,
    email: string,
    password: string,
    role:string
    favoritePlants: Plant[];
}
