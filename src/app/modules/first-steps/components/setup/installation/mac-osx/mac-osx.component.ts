import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-osx',
  templateUrl: './mac-osx.component.html',
  styleUrls: ['./mac-osx.component.css']
})
export class MacOsxComponent implements OnInit {

  image: string;

  constructor() { }

  ngOnInit(): void {
    this.image = 'https://i.ibb.co/mHpK0XB/macos.png';
  }

}
