import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  brand: string | null = '';
  model: string | null = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.brand = this.activatedRoute.snapshot.queryParamMap.get('brand');
    this.model = this.activatedRoute.snapshot.queryParamMap.get('model');
  }
  getMainImage(num: number){
    return `../../../assets/images/${this.brand}/${this.model}-${num}.png`
  }
}
