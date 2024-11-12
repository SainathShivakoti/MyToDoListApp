import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { TestBed } from '@angular/core/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [AddTaskComponent],  // Add the component here
    providers: [TaskService],
  }).compileComponents();
});


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    const task = { title: this.newTaskTitle, completed: false };
    this.taskService.addTask(task).subscribe(() => {
      this.newTaskTitle = '';
    });
  }
}
