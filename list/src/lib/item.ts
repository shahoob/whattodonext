export interface ITodoItem<T = unknown> {
  name: string;
  sub_todos?: TodoItem[];
  due_date?: Date;
  completed?: boolean;
  data?: T;
}

export default class TodoItem<DT = unknown> implements ITodoItem<DT> {
  public name!: string;
  public sub_todos: TodoItem[] = [];
  public due_date?: Date;
  public completed = false;

  public data?: DT;

  constructor({ name, sub_todos, due_date, completed, data }: ITodoItem<DT>) {
    this.name = name;
    if (sub_todos !== undefined) this.sub_todos = sub_todos;
    this.due_date = due_date;
    if (completed !== undefined) this.completed = completed;
    if (data !== undefined) this.data = (data as DT);
  }
}
