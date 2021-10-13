import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Signal Application',
      desc: 'Monitoring the current prices of financial markets, be informed of the latest news and analysis in the field of investment funds, Cryptopurrency, stock market, gold, coins and foreign exchange.',
      livedemo: 'https://play.google.com/store/apps/details?id=ir.part.app.signal&hl=fa&gl=US',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/signal.jpg',
    },

    {
      id: 2,
      title: 'Trustply',
      desc: 'P2P money exchange and Local Businesses Directory, Peer to peer currency exchange with no commission and without the intervention of banks and financial intermediaries',
      livedemo: 'https://trustply.com/',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/trustply.jpg',
      tech: 'React, Node, MongoDB, Express'
    }

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
