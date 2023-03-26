import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  genderToggle: string[] = [];
  colorToggle: string[] = [];
  brandToggle: string[] = [];
  dataSource: any = [];
  dataSourceBackup: any = [];
  isLoading: boolean = true;
  brand: string = '';
  gender: string = '';
  colors: string[] = [];
  valueSlider = 0;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.url
    if(this.router.url.split("/")[2]){
      this.getDataByBrand();
      return;
    }
    this.getDataByGender();
  }

  getDataByBrand() {
    this.brand = this.router.url.split("/")[2];
    this.dataSource = data.filter(item => item.brand === this.brand);
    this.colors = this.dataSource.map((item: any) => item.color);
    this.colors = this.colors.filter( (ele,pos)=> this.colors.indexOf(ele) == pos)
    this.dataSourceBackup = [...this.dataSource];
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getDataByGender() {
    this.gender = this.router.url.split("/")[1] === 'men' ? 'm' : 'w';
    this.dataSource = data.filter(item => item.gender === this.gender);
    this.colors = this.dataSource.map((item: any) => item.color);
    this.colors = this.colors.filter( (ele,pos)=> this.colors.indexOf(ele) == pos)
    this.dataSourceBackup = [...this.dataSource];
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getImage(model: string, brand: string) {
    if(this.brand){
      return `../../../assets/images/${this.brand}/${model}-1.png`
    }
    return `../../../assets/images/${brand}/${model}-1.png`
  }

  setColor(color: string) {
    return `background-color: ${color};`
  }
  
  
  filterByColor(event: any){
    if(event.length == 0) return;
    this.genderToggle = [];
    this.brandToggle = [];
    this.valueSlider = 0;
    this.dataSource = [];
    event.forEach((color: any) => {
      this.dataSource = [...this.dataSource,...this.dataSourceBackup.filter((item: any) => item['color'] === color)]
    })
  }
  
  filterByGender(event: any){
    if(event.length == 0) return;
    this.colorToggle = [];
    this.brandToggle = [];
    this.valueSlider = 0;
    this.dataSource = [];
    event.forEach((gender: any) => {
      this.dataSource = [...this.dataSource,...this.dataSourceBackup.filter((item: any) => item['gender'] === gender)]
    })
  }
  
  filterByBrand(event: any){
    if(event.length == 0) return;
    this.colorToggle = [];
    this.genderToggle = [];
    this.valueSlider = 0;
    this.dataSource = [];
    event.forEach((brand: any) => {
      this.dataSource = [...this.dataSource,...this.dataSourceBackup.filter((item: any) => item['brand'] === brand)]
    })
  }
  
  clearFilters(){
    this.colorToggle = [];
    this.genderToggle = [];
    this.brandToggle = [];
    this.valueSlider = 0;
    this.dataSource = [...this.dataSourceBackup];
  }

  valueChange(valor: any){
    if(valor.target.value == 0) return;
    this.colorToggle = [];
    this.genderToggle = [];
    this.brandToggle = [];
    this.dataSource = [];
    this.dataSource = [...this.dataSource,...this.dataSourceBackup.filter((item: any) => item['price'] <= valor.target.value)]
  }

  onSelectItem(model: string, brand: string){
    console.log('brand', brand)
    console.log('model', model)
    this.router.navigate(['details', { queryParams: { brand: brand, model: model } } ]);
  }

}
