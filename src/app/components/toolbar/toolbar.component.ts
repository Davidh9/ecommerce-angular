import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  options: boolean[] = [true,false,false,false,false];
  constructor() { }

  ngOnInit(): void {
  }

  activeOption(index: number) {
    this.options = [false,false,false,false,false];
    this.options[index] = true;
  }

}
