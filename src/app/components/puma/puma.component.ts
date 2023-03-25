import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrls: ['./puma.component.css']
})
export class PumaComponent implements OnInit {

  dataSource: any = {}
  isLoading: boolean = true;
  constructor() { }
  
  ngOnInit(): void {
    this.dataSource = data.puma;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getImage(model: string){
    return `../../../assets/images/puma/${model}-1.png`
  }

  setColor(color: string){
    return `background-color: ${color};`
  }

}
