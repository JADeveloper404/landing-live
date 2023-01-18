import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {}

  getDataWompi(id: string) {
    return this.http.get(`https://sandbox.wompi.co/v1/transactions/${id}`);
  }
}
