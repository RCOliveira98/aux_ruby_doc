import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-use',
  templateUrl: './who-use.component.html',
  styleUrls: ['./who-use.component.css']
})
export class WhoUseComponent implements OnInit {

  array: any[];

  constructor() { }

  ngOnInit(): void {
    this.array = [
      {url: 'https://i.ibb.co/QpyydHz/heroku.png', content: 'Heroku'},
      {url: 'https://i.ibb.co/wYMLzwP/basecamp.png', content: 'Basecamp'},
      {url: 'https://i.ibb.co/ZBtLF12/github.png', content: 'github'},
      {url: 'https://i.ibb.co/zfBjSgq/nasa.png', content: 'Nasa'},
      {url: 'https://i.ibb.co/0fHjR8X/metasploit.png', content: 'Metasploit'},
      {url: 'https://i.ibb.co/y4DSPnY/groupon.png', content: 'Groupon'},
      {url: 'https://i.ibb.co/51BJdSv/recordtv.png', content: 'Record tv'},
      {url: 'https://i.ibb.co/Hz1VDB4/shopfy.png', content: 'Shopfy'},
      {url: 'https://i.ibb.co/3NZr5bb/gitlab.png', content: 'Gitlab'},
      {url: 'https://i.ibb.co/dgspkT7/vagrant.png', content: 'Vagrant'},
      {url: 'https://i.ibb.co/MMfsYj9/slideshare.png', content: 'Slideshare'},
      {url: 'https://i.ibb.co/smsz5jB/estante-Virtuak.jpg', content: 'Estante virtual'}
    ];
  }

}
