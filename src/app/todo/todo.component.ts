import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number = 0;

  todo: Todo[] | any;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService
        .retrieveToDo('rajaofera', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.id == -1) {
      //Create a todo

      this.todoService.createToDo('rajaofera', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todoList']);
      });
      this;
    } else {
      this.todoService
        .updateToDo('rajaofera', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todoList']);
        });
    }
  }
}
