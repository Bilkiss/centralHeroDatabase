import { Component, OnInit } from '@angular/core';

import { EndpointService } from "../../services/endpoint.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  superheroList = [];

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
      if(res){
        this.superheroList = res.results;

      }
    }, error => {
      console.log('Res search: ', error);
    })
  }

}
