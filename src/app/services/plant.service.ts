import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import{ Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  items: Plant[]=[];

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]>{
    return this.http.get<Plant[]>('http://localhost:3000/plants');
  }

  onSelectPlant(plant: Plant) {
    this.items.push(plant);
  }
}
