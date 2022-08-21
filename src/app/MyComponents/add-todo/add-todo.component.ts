import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  description!: string;
  status!: string;
  myForm!: FormGroup;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      description: ['', [Validators.required, Validators.minLength(25)]],
      status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(data: any) {
    const todo = {
      sno: Math.floor(Date.now() + Math.random()),
      title: data.title,
      description: data.description,
      status: data.status,
    };
    this.todoAdd.emit(todo);
  }
}
