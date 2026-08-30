import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() update = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();

  statuses: TaskStatus[] = [
    'New',
    'In Progress',
    'Rejected',
    'Verified',
    'Completed'
  ];

  onStatusChange(status: TaskStatus) {
    this.update.emit({ ...this.task, status });
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
