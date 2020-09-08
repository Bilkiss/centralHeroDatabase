import { Component, OnInit } from '@angular/core';

import { EndpointService } from "../../services/endpoint.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  superheroList = [];
  noHeroMsg;

  constructor(
    public endpointService: EndpointService
  ) { }

  ngOnInit(): void {
  }

  search(event){
    console.log('event: ', event.target.value);
    const getName = event.target.value;
    this.endpointService.request('search_superhero', 'get', getName).subscribe( res => {
      console.log('Res search: ', res);
      console.log('Res.error search: ', res.error);
      this.noHeroMsg = res.error;
      console.log('this.noHeroMsg: ', this.noHeroMsg);
      if(res){
        this.superheroList = res.results;
      }
    }, error => {
      console.error('Error!! search: ', error);
    })
  }

}
