import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import{ Observable } from 'rxjs';
import { Apireponse } from '../models/apireponse';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  items: Plant[]=[];

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Apireponse>{
    return this.http.get<Apireponse>('http://localhost:3000/api/plants');
  }

  onSelectPlant(plant: Plant) {
    this.items.push(plant);
  }
}
