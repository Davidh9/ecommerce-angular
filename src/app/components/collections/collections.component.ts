import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  device: string = 'desktop';
  constructor(private router: Router, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getDevice();
  }

  navigateTo(route: string){
    this.router.navigate([`collections/${route}`]);
  }

  getDevice(){
    this.cartService.getDevice().subscribe(res => {
      this.device = res;
    })
  }
}
