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
	filterCategories: Array<any> = [];
	filterPoints: Array<number> = [];
	user: Array<User>;
	filters: any = { category: "", points: 0 };
	category: string = '';
	points: number;
	maxPoints: number;
	minPoints: number;

	constructor(
		private api: ApiService
		) { }

	ngOnInit() {
		this.api.getProducts().pipe(
			tap(() => this.ghosts = []) 
			).subscribe(data =>{
				this.items = data;
				
				this.items.map(
					o =>{
						o.show = false;
						//Guardo las categorias para armar el filtro
						if(!this.filterCategories.includes(o.category)){
							this.filterCategories.push(o.category);
						}
						//Guardo los puntos para armar el filtro
						if(!this.filterPoints.includes(o.cost)){
							this.filterPoints.push(o.cost);
						}
					});
				this.ghosts = this.items.slice(0, 8);

				//Seteo valores máximos y mínimos para el filtro de puntos
				this.maxPoints = Math.max.apply(null, this.filterPoints);
				this.minPoints = Math.min.apply(null, this.filterPoints);
				this.filters.points = this.maxPoints;
			});

			this.api.getUserInfo().subscribe(data =>{
				this.user = data;
			});
		}

		/**
		 * Determina si una imagen ya esta cargada
		 * @param {[number]} productId
		 */
		isReady(productId) {

			if(this.ready.includes(productId)){
				return true;
			}else{
				return false;
			}

		}	


		onPageChange($event) {
			this.ghosts =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
		}

		/**
		 * Setea una imagen como cargada
		 * @param {[number]} productId 
		 */
		setReady(productId){
			this.ready.push(productId);
		}

		/**
		 * Actualiza el valor del filtro
		 * @param {[object]} filters [description]
		 */
		updateFilters(filters){
			this.filters = Object.assign({}, filters);
		}
	}
