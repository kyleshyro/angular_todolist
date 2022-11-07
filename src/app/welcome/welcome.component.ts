import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  helloworldbean,
  WelcomeDataService,
} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
//Class is similar to java
export class WelcomeComponent implements OnInit {
  //String message =""
  message = 'some welcome message here';
  name = '';
  welcomeMessageFromService = '';

  //Activated Route, take the parameter that is passed in
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    console.log(this.message);
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    //console.log('get welcome message');
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error),
      complete: () => console.log('completed welcome message'),
    });

    //console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter() {
    this.service
      .executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe({
        next: (response) => this.handleSuccessfulResponse(response),
        error: (error) => this.handleErrorResponse(error),
        complete: () => console.log('completed welcome Parameter'),
      });

    //console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response: helloworldbean) {
    this.welcomeMessageFromService = response.message;
    //console.log(response.message);
  }
  handleErrorResponse(error: any): void {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
