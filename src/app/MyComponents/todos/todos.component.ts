import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[];
  editTask!: Todo;

  constructor() {
    this.localItem = localStorage.getItem('todos') as string;
    this.todos = [];
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onClickEdit(todo: Todo) {
    this.editTask = todo;
  }

  onSubmitEditTaskForm(data: any) {
    const todo = {
      sno: this.editTask.sno,
      title: data.title,
      description: data.description,
      status: data.status,
    };
    const index = this.todos.findIndex((one) => one.sno === data.sno);
    this.todos.splice(index, 1) && this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onClickDelete(sno: any) {
    const index = this.todos.findIndex((one) => one.sno === sno);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  isFound(array: any, status: string) {
    return array.some((element: any) => {
      if (element.status === status) {
        return true;
      }
      return false;
    });
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      const todo = {
        sno: event.item.data.sno,
        title: event.item.data.title,
        description: event.item.data.description,
        status: event.container.id,
      };
      const index = this.todos.findIndex(
        (one) => one.sno === event.item.data.sno
      );
      this.todos.splice(index, 1) && this.todos.push(todo); // drop at the end of container
      // this.todos[index].status = event.container.id; // drop by date added
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
