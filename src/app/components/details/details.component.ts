import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  brand: string | null = '';
  model: string | null = '';
  dataSource: any[] = [];
  mainImage: number = 1;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.brand = this.activatedRoute.snapshot.queryParamMap.get('brand');
    this.model = this.activatedRoute.snapshot.queryParamMap.get('model');
    this.dataSource = data.filter(item => item.brand === this.brand && item.model === this.model);
    console.log('this.dataSource', this.dataSource)
  }

  getMainImage(num: number){
    return `../../../assets/images/${this.brand}/${this.model}-${num}.png`
  }

  getSecundaryImage(num: number){
    return `../../../assets/images/${this.brand}/${this.model}-${num}.png`
  }

  onSelectImage(num: number){
    this.mainImage = num;
  }

}
