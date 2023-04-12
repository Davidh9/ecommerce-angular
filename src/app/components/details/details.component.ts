import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CarouselComponent } from '../carousel/carousel.component';

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
  firstImage: boolean = true;
  lastmage: boolean = false;
  counter: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cartService: CartServiceService,
    private snackBar: MatSnackBar,
    private location: Location) { }

  ngOnInit(): void {
    this.brand = this.activatedRoute.snapshot.queryParamMap.get('brand');
    this.model = this.activatedRoute.snapshot.queryParamMap.get('model');
    this.dataSource = data.filter(item => item.brand === this.brand && item.model === this.model);
  }

  getMainImage(num: number) {
    return `../../../assets/images/${this.brand}/${this.model}-${num}.png`
  }

  getSecundaryImage(num: number) {
    return `../../../assets/images/${this.brand}/${this.model}-${num}.png`
  }

  onSelectImage(num: number) {
    this.mainImage = num;
  }

  openDialog() {
    this.dialog.open(CarouselComponent);
  }

  onRes() {
    if (this.counter == 0) return;
    this.counter--;
  }

  onSum() {
    this.counter++;
  }

  onAddToCart() {
    if (this.counter === 0) {

      console.log('error');
      return;
    }
    this.cartService.setItem({ data: this.dataSource, pzs: this.counter });
    this.counter = 0;
    this.snackBar.open('Item added successfully', 'Ok', {
      duration: 3000,
    });
  }

  onBack(){
    this.location.back();
  }
}
