import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showCart: boolean = false;
  showProfile: boolean = false;
  cartList: any[] = [];
  route: any = {url: '/collections'};
  gender: string | null = '';
  device: string = 'desktop';
  constructor(private cartService: CartServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(event => {
        this.route = {...event}
        this.gender = this.activatedRoute.snapshot.queryParamMap.get('gender');
      });
    this.getCart();
    this.getDevice();
  }

  getDevice(){
    this.cartService.getDevice().subscribe(res => {
      this.device = res;
    })
  }

  getCart() {
    this.cartService.getCartList().subscribe((item) => {
      if (item) {
        this.cartList.push(item);
      }
    })
  }

  onClickCart() {
    this.showProfile = false;
    this.showCart = !this.showCart;
  }
  onClickProfile() {
    this.showCart = false;
    this.showProfile = !this.showProfile;
  }
  getImage(model: string, brand: string) {
    return `../../../assets/images/${brand}/${model}-1.png`
  }

  onDeleteItem(index: number) {
    this.cartList.splice(index, 1)
  }
}
