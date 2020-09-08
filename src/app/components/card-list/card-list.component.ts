import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() superhero;
  @Input() messageNoHero;

  listView: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(){
    this.listView = !this.listView;
  }

}
