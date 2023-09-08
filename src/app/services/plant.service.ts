import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
import { Apireponse } from '../models/apirep';
import { ApiById } from '../models/api-by-id';
import { FavoritesResponse } from '../models/favorisrep';
import { ImageUpload } from '../models/image-upload';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  items: Plant[] = [];

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/api/plants');
  }

  onSelectPlant(plant: Plant) {
    this.items.push(plant);
  }

  getPlantById(id: number): Observable<Plant> {
    return this.http.get<Plant>(`http://localhost:3000/api/plants/${id}`);
  }

  addPlant(plant: Plant): Observable<Plant> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.post<Plant>('http://localhost:3000/api/plants', plant, { headers: headers });
  }

  modifyPlant(id: number, updateData: Plant): Observable<Plant> {
    // const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') }), { headers: headers }
    return this.http.put<Plant>(`http://localhost:3000/api/plants/${id}`, updateData);
  }

  deletePlant(id: number) {
    // console.log('ok pour le service')
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.delete(`http://localhost:3000/api/plants/${id}`, { headers: headers })
  }

  addFavorite(userId: number, plantId: number): Observable<FavoritesResponse> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.post<FavoritesResponse>(`http://localhost:3000/api/plants/${userId}/favorites/${plantId}`,{}, { headers: headers });
  }

  removeFavorite(userId: number, plantId: number): Observable<FavoritesResponse> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.delete<FavoritesResponse>(`http://localhost:3000/api/plants/${userId}/favorites/${plantId}`, { headers: headers });
  }

  getUserFavorites(userId: number): Observable<FavoritesResponse> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') })
    return this.http.get<FavoritesResponse>(`http://localhost:3000/api/plants/${userId}/favorites`, { headers: headers });
  }

  uploadImage(imageData: FormData): Observable<ImageUpload> {
    return this.http.post<ImageUpload>('http://localhost:3000/api/plants/upload', imageData);
  }


}