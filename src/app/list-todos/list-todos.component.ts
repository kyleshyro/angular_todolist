import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] | any;
  message: string | any;

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('rajaofera').subscribe((response) => {
      this.todos = response;
    });
  }
  deleteTodo(id: any) {
    this.todoService.deleteToDo('rajaofera', id).subscribe((response) => {
      console.log(response);
      this.message = `Task n: ${id} Deleted Successfully`;
      this.refreshTodos();
    });
    console.log(`delete to do ${id}`);
  }

  updateTodo(id: any) {
    console.log(`Update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
