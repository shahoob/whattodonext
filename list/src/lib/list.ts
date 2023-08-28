import TodoItem from "./item";

export default class TodoList<DT = unknown> {
  public todos: TodoItem[] = [];
  public name!: string;

  public data?: DT

  constructor(name: string, data?: DT) {
    this.name = name;
    this.data = data;
  }
}
