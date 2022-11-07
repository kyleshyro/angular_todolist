import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

    home = 'Home';

    electronics = 'iPhone';

    fashion= 'Yeezy 350 v2';
  constructor() { }

  ngOnInit(): void {
  }

}
