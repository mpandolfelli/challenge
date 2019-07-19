import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './models/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'app';
	user: Array<User>;
	
	constructor(private api: ApiService){

	}

	ngOnInit() {
		this.api.getUserInfo().subscribe(data =>{
			this.user = data;
		});

	}
	

}
