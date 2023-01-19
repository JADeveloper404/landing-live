import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private localApi = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getDataWompi(id: string) {
    return this.http.get(`https://sandbox.wompi.co/v1/transactions/${id}`);
  }

  postMethod(methodName: string, body: any) {
    return this.http.post(this.localApi + methodName, body, { responseType: 'text' });
  }
}
