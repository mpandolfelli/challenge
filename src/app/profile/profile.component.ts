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
	history: Array<any> = [];
	constructor(
		private api: ApiService
		) { }

	ngOnInit() {
		this.api.getUserInfo().subscribe(data =>{
			this.user = data;
		});
	}

}