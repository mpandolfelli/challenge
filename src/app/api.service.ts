import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from './models/item.model';
import { User } from './models/user.model';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	apiURL: string = 'https://coding-challenge-api.aerolab.co';
	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDI3ODhjYjkxNmMxMDAwNmNkMDFhMmYiLCJpYXQiOjE1NjI4NzIwMTF9.Eb_zTL588UrIS98Ikoa_cxm3wzx0gSsdLmm6d_t4i3k'
	  })
	};
	 
	constructor(
		private http: HttpClient
		) { }

	public getUserInfo(){
		return this.http.get<User[]>(`${this.apiURL}/user/me`, this.httpOptions);
	}

	public getProducts(){
		return this.http.get<Item[]>(`${this.apiURL}/products`, this.httpOptions);
	}
}
