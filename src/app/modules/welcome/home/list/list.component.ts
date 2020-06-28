import { Component, OnInit } from '@angular/core';

interface ListOfTools {
  title: string;
  description: string;
  url: string;
  img: string;
  content: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tools: ListOfTools[];

  constructor() { }

  ngOnInit(): void {
    this.tools = [
      {
        title: 'Angular', description: 'Único framework desktop e mobile!',
        img: 'https://i.ibb.co/Khk7dqW/angular.png', url: 'https://angular.io/',
        content: 'Aprenda uma maneira de criar aplicativos com o Angular e reutilize seu código e habilidades para criar aplicativos para qualquer destino de implantação.'
      },
      {
        title: 'Bootstrap', description: 'Framework css mais popular do mundo!',
        img: 'https://i.ibb.co/d4ZFkmN/bootstrap.png', url: 'https://getbootstrap.com/',
        content: 'Crie e personalize rapidamente sites responsivos para dispositivos móveis com o Bootstrap, o kit de ferramentas de código-fonte aberto mais popular do mundo, com variáveis ​​e mixins Sass, sistema de grade responsivo, componentes pré-construídos extensos e plug-ins JavaScript poderosos.'
      },
      {
        title: 'Icons8', description: 'Biblioteca de ícones gratuitos',
        img: 'https://i.ibb.co/9Gm116N/icons8.png', url: 'https://icons8.com.br/icons',
        content: 'Ícones grátis, fotos, vetores, músicas e ferramentas.'
      },
      {
        title: 'NgZorro', description: 'Biblioteca de componentes UI angular!',
        img: 'https://i.ibb.co/xXp0Cm8/ngzorro.png', url: 'https://ng.ant.design/docs/introduce/en',
        content: 'Seguindo a especificação Ant Design, desenvolvemos uma biblioteca de UI Angular ng-zorro-antd que contém um conjunto de componentes e demos de alta qualidade para criar interfaces de usuário interativas e ricas.'
      },
      {
        title: 'Undraw', description: 'Crie sites, produtos e aplicativos melhor projetados.',
        img: 'https://i.ibb.co/zZ7LMxD/undraw.jpg', url: 'https://undraw.co/illustrations',
        content: 'Lançado em 2017, com o objetivo simples de mostrar que nós designers devemos contribuir com a comunidade de código aberto, para ajudar a trazer belas habilidades de design para todos.'
      }
    ];
  }

}
