import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
import { Apireponse } from '../models/apirep';
import { ApiById } from '../models/api-by-id';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  items: Plant[] = [];


  constructor(private http: HttpClient) { }

  getPlants(): Observable<Apireponse> {
    return this.http.get<Apireponse>('http://localhost:3000/api/plants');
  }

  onSelectPlant(plant: Plant) {
    this.items.push(plant);
  }

  getPlantById(id: number): Observable<ApiById> {
    return this.http.get<ApiById>(`http://localhost:3000/api/plants/${id}`);
  }

  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/api/plants', plant);
  }

  modifyPlant(id: number, updateData: Plant): Observable<Plant> {
    return this.http.put<Plant>(`http://localhost:3000/api/plants/${id}`, updateData);
  }

  deletePlant(id: number) {
    // console.log('ok pour le service')
    return this.http.delete(`http://localhost:3000/api/plants/${id}`)
  }
}