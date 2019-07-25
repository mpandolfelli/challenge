import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Item } from './models/item.model';
import { User } from './models/user.model';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	apiURL: string = 'https://coding-challenge-api.aerolab.co';
	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8',
	    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDI3ODhjYjkxNmMxMDAwNmNkMDFhMmYiLCJpYXQiOjE1NjI4NzIwMTF9.Eb_zTL588UrIS98Ikoa_cxm3wzx0gSsdLmm6d_t4i3k'
	  })
	};
	 
	constructor(
		private http: HttpClient
		) { }

	public getUserInfo(){
		return this.http.get<User[]>(`${this.apiURL}/user/me`, this.httpOptions);
	}

	public getHistory(){
		return this.http.get<User[]>(`${this.apiURL}/user/history`, this.httpOptions);
	}

	public getProducts(){
		return this.http.get<Item[]>(`${this.apiURL}/products`, this.httpOptions);
	}

	public redeem(item){
		const httpBody = new HttpParams().set('productId', item);
		return this.http.post(`${this.apiURL}/redeem`, httpBody, this.httpOptions);
	}
}
