import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../utils/item.animation';
import { ApiService } from '../api.service';
import { tap, map } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { User } from '../models/user.model';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	animations: [
	trigger('fadeOut', fadeOut()),
	trigger('fadeIn', fadeIn()) 
	],
	styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
	ghosts = new Array(8).fill('');
	items: any;
	ready: Array<Item> = [];
	categories: Array<any> = [];
	user: Array<User>;

	constructor(
		private api: ApiService
		) { }

	ngOnInit() {
		this.api.getProducts().pipe(
				tap(() => this.ghosts = [])   // clear ghosts
		).subscribe(data =>{
			this.items = data;
			this.ghosts = this.items.slice(0, 8);
			this.ghosts.map(
				o =>{
					o.show = false;
					if(!this.categories.includes(o.category)){
						this.categories.push(o.category);
					}
					
				});
			
		});

		this.api.getUserInfo().subscribe(data =>{
			this.user = data;
		});
			


	}
	hasProp(productId) {

		if(this.ready.includes(productId)){
			return true;
		}else{
			return false;
		}
		
	}	
	onPageChange($event) {
		this.ghosts =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
	}

	ver(productId){
		this.ready.push(productId);
	}
}
