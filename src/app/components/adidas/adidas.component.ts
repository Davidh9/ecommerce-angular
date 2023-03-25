import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit {
  dataSource: any = {}
  isLoading: boolean = true;
  constructor() { }
  
  ngOnInit(): void {
    this.dataSource = data.adidas;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getImage(model: string){
    return `../../../assets/images/adidas/${model}-1.png`
  }

  setColor(color: string){
    return `background-color: ${color};`
  }
}
