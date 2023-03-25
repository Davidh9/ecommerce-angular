import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit {

  dataSource: any = {}
  isLoading: boolean = true;
  constructor() { }
  
  ngOnInit(): void {
    this.dataSource = data.nike;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getImage(model: string){
    return `../../../assets/images/nike/${model}-1.png`
  }

  setColor(color: string){
    return `background-color: ${color};`
  }
}
