import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.css']
})
export class LinuxComponent implements OnInit {

  image: string;

  constructor() { }

  ngOnInit(): void {
    this.image = 'https://i.ibb.co/JH16g30/linux-Icon.png';
  }

}
