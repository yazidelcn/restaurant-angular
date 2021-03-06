import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';




@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {

  dish :Dish;
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location, 
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dish= this.dishService.getDish(id);
  }

  goBack(){
    this.location.back();
  }
}
