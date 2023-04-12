import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CartServiceService } from './services/cart-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') sideNav!: MatDrawer;
  title = 'ecommerce-angular';
  route: any = { url: '/collections' };
  scrHeight: any;
  scrWidth: any;
  device: string = 'desktop';
  showFiller: boolean = false;
  sideActive: boolean = false;

  constructor(private router: Router, private deviceService: CartServiceService) {
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.route = event;
    });
    this.setDevice();
    if (window.screen.width < 500) {
      this.device = 'mobile';
      this.deviceService.setDevice('mobile');
      return;
    }
    this.deviceService.setDevice('desktop');
    this.device = 'desktop';

  }

  @HostListener('window:resize', ['$event'])
  setDevice(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 500 || window.screen.width < 500) {
      this.device = 'mobile';
      this.deviceService.setDevice('mobile');
      return;
    }
    this.deviceService.setDevice('desktop');
    this.device = 'desktop';
  }

  onHideSideNav(){
    if(this.sideActive === true){
      this.sideNav.toggle();
      this.sideActive = false;
      return;
    }
    this.sideNav.toggle();
    this.sideActive = true;
  }
}