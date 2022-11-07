import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  //MEthod to retrieve the list of toDo
  retrieveAllTodos(username: any) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
    //  console.log('Execute Hello World Bean Service');
  }

  deleteToDo(username: any, id: any) {
    return this.http.delete<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  retrieveToDo(username: any, id: any) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  updateToDo(username: any, id: any, todo: any) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  createToDo(username: any, todo: any) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
