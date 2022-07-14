import { Component } from '@angular/core';
import {Item} from './Item/item';
@Component({  
	selector: 'items-component',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})

export class ItemsComponent {
	items: Item [] = [
		{
			title:"shirt",
			description:"just a plain tshirt",
			category:"shirts",
			file_url:'blank',
			updated_at:'blank',
			image_url:'http://placekitten.com/200/200',
			price:15,
		},
		{
			title:"shoes",
			description:"just a plain shoes",
			category:"footwears",
			file_url:'blank',
			updated_at:'blank',
			image_url:'http://placekitten.com/200/200',
			price:15,
		},
		{
			title:"pants",
			description:"just a plain pair of pants",
			category:"bottoms",
			file_url:'blank',
			updated_at:'blank',
			image_url:'http://placekitten.com/200/200',
			price:15,
		},
		{
			title:"shorts",
			description:"just a plain pair of shorts",
			category:"bottoms",
			file_url:'blank',
			updated_at:'blank',
			image_url:'http://placekitten.com/200/200',
			price:15,
		},
	]
}