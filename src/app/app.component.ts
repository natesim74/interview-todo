import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle.trim(),
      status: 'New'
    };

    this.tasks.push(newTask);
    this.taskService.saveTasks(this.tasks);
    this.newTaskTitle = '';
  }

  updateTask(updated: Task) {
    this.tasks = this.tasks.map(t => (t.id === updated.id ? updated : t));
    this.taskService.saveTasks(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskService.saveTasks(this.tasks);
  }
}
