import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit {

  image: string;
  url: string;

  constructor() { }

  ngOnInit(): void {
    this.image = 'https://i.ibb.co/BVX8JzS/windows.png';
    this.url = 'https://rubyinstaller.org/';
  }

}
