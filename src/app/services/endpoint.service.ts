import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    public http: HttpClient
  ) { }

  baseUrl = 'https://www.superheroapi.com/api.php/3637032069640355/';

  endpoints:any = {
    search_superhero: (name) => `${this.baseUrl}search/${name}`,
  }

  // generic http request handler
  request(key: endpointType, method, urlParams?, payload?) {
    if (this.endpoints.hasOwnProperty(key)) {
      if(urlParams){

        return this.http[method](this.endpoints[key](urlParams), payload);
      }
      return this.http[method](this.endpoints[key], payload);
    }
    return { error: true, reason: `${method} request to ${this.endpoints[key]} was not sent` };
  }

}

export type endpointType = 'search_superhero' ;
