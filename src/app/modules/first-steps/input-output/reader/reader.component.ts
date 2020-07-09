import { Component, OnInit } from '@angular/core';

import { faMemory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  memory = faMemory;

  constructor() { }

  ngOnInit(): void {
  }

}
