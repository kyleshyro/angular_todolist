import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class helloworldbean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<helloworldbean>(
      'http://localhost:8080/helloworldbean'
    );
    //  console.log('Execute Hello World Bean Service');
  }

  //http://localhost:8080/helloworldbean-pathVariable/raja

  executeHelloWorldBeanServiceWithPathVariable(name: any) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http.get<helloworldbean>(
      `http://localhost:8080/helloworldbean-pathVariable/${name}`,
      { headers }
    );
    //  console.log('Execute Hello World Bean Service');
  }
  createBasicAuthenticationHttpHeader() {
    let username = 'rajaofera';
    let password = 'raja';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  //Access to XMLHttpRequest at 'http://localhost:8080/helloworldbean' from origin 'http://localhost:4200'
  //has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
