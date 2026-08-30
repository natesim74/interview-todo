export type TaskStatus =
  | 'New'
  | 'In Progress'
  | 'Rejected'
  | 'Verified'
  | 'Completed';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
