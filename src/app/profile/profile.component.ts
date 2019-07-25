import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	user: Array<User>;
	constructor(
		private api: ApiService
		) { }

	ngOnInit() {
		this.api.getUserInfo().subscribe(data =>{
			this.user = data;
		});
		this.api.getHistory().subscribe(data =>{
			console.log(data);
		});
	}

}