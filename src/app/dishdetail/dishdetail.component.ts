import { Component, OnInit, Input } from '@angular/core';
import { Dish} from '../shared/dish';
import { from } from 'rxjs';
// export const DISH = {
// 	name: 'Uthappizza',
// 	image: '/assets/images/3.jpg',
// 	category: 'mains',
// 	label: 'Hot',
// 	price: '4.99',
// 	description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
// 	comments: [
// 		{
// 			rating: 5,
// 			comment: "Imagine all the eatables, living in conFusion!",
// 			author: "John Lemon",
// 			date: "2020-05-16T17:57:28.556094Z"
// 		},
// 		{
// 			rating: 4,
// 			comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
// 			author: "Paul McVites",
// 			date: "2019-01-05T17:57:28.556094Z"
// 		},
// 		{
// 			rating: 3,
// 			comment: "Eat it, just eat it!",
// 			author: "Michael Jaikishan",
// 			date: "2018-06-13T17:57:28.556094Z"
// 		},
// 		{
// 			rating: 4,
// 			comment: "Ultimate, Reaching for the stars!",
// 			author: "Ringo Starry",
// 			date: "2019-04-02T17:57:28.556094Z"
// 		},
// 		{
// 			rating: 2,
// 			comment: "It's your birthday, we're gonna party!",
// 			author: "25 Cent",
// 			date: "2020-05-02T17:57:28.556094Z"
// 		}
// 	]
// };

@Component({
	selector: 'app-dishdetail',
	templateUrl: './dishdetail.component.html',
	styleUrls: ['./dishdetail.component.scss'],
	// encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {

	@Input()
	dish = Dish;

	constructor() { }
	
	// dish = DISH;

	ngOnInit() {
	}

}
