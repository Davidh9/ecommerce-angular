import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  dataSource: any = {}
  isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    let auxAd = data.adidas.filter(item => item.gender === 'w');
    let auxNi = data.nike.filter(item => item.gender === 'w');
    let auxPu = data.puma.filter(item => item.gender === 'w');
    this.dataSource = [...auxAd,...auxNi,...auxPu];
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getImage(item: any) {
    return `../../../assets/images/${item.brand}/${item.model}-1.png`
  }

  setColor(color: string) {
    return `background-color: ${color};`
  }
}
