import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private localApi = "https://landing-live-server-production.up.railway.app/";

  constructor(private http: HttpClient) {}

  getDataWompi(id: string) {
    return this.http.get(`https://production.wompi.co/v1/transactions/${id}`);
  }

  postMethod(methodName: string, body: any) {
    return this.http.post(this.localApi + methodName, body, { responseType: 'text' });
  }
}
