import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';
import { tap, map } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { User } from '../models/user.model';


@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',

	styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
	ghosts = new Array(12).fill('');
	items: any;
	ready: Array<Item> = [];
	filterCategories: Array<any> = [];
	messages: any;
	filterPoints: Array<number> = [];
	user: Array<User>;
	filteredCategory: string = "";
	filteredPoints: number;
	category: string = '';
	points: number;
	maxPoints: number;
	minPoints: number;
	orderBy: string = 'asc' ;
	hoverIndex:number = -1;
	constructor(
		private api: ApiService,
		private snackBar: MatSnackBar,
		private router: Router
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
				//this.ghosts = this.items.slice(0, 8);
				this.ghosts = this.items;

				//Seteo valores máximos y mínimos para el filtro de puntos
				this.maxPoints = Math.max.apply(null, this.filterPoints);
				this.minPoints = Math.min.apply(null, this.filterPoints);
				this.filteredPoints = this.maxPoints;
				this.points = this.maxPoints;
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
		 onHover(i:number){
		 	this.hoverIndex = i;
		 }



		/**
		 * Setea una imagen como cargada
		 * @param {[number]} productId 
		 */
		 setReady(productId){
		 	this.ready.push(productId);
		 }

		/**
		 * Actualiza el valor del filtro de categorias
		 * @param {[object]} filters [description]
		 */
		 filterByCategory(category){
		 	this.filteredCategory = category;
		 }
		 filterByPoints(){
		 	this.filteredPoints = this.points;
		 }

		 setOrder(order){
		 	this.orderBy = order;
		 }

		 redeem(itemId){

		 	this.api.redeem(itemId).subscribe(data =>{
		 		this.messages = data;
				this.snackBar.open(this.messages.message, 'OK', {
				  duration: 2000,
				});
				this.router.navigate(['/profile']);
				
		 	})
		 }
		}
