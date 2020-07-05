import { Component, OnInit } from '@angular/core';

interface EditorText {
  url: string;
  img: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IdeComponent implements OnInit {

  editors: EditorText[];

  constructor() { }

  ngOnInit(): void {
    this.editors = [
      {
        url: 'https://atom.io/',
        img: 'https://i.ibb.co/YDPb2K7/atom.png',
        title: 'Atom',
        content: 'Atom é um editor de texto de código aberto disponível para as plataformas Linux, macOS e Microsoft Windows'
      },
      {
        url: 'https://www.sublimetext.com/',
        img: 'https://i.ibb.co/tKhz7GF/sublime.png',
        title: 'Sublime',
        content: 'O Sublime Text é um software multiplataforma de edição de texto, no entanto utilizado por muitos desenvolvedores para editar código-fonte, escrito em linguagem Python',
      },
      {
        url: 'https://code.visualstudio.com/',
        img: 'https://i.ibb.co/2hzGjNZ/vscode2.png',
        title: 'Visual Studio Code',
        content: 'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.',
      }
    ];
  }

}
