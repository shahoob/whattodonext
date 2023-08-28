import TodoItem from './item';
import TodoList from './list';

describe('TodoList', () => {
  let list: TodoList;

  beforeEach(() => {
    list = new TodoList('testing');
  })

  it('should construct correctly', () => {
    expect(list).toBeInstanceOf(TodoList);
    expect(list.name).toBe('testing');
    expect(list.todos).toEqual([]);
  });

  it('should be able to manipulate the list', () => {
    list.todos.push(new TodoItem({ name: 'test code' }));
    expect(list.todos).toContainEqual(new TodoItem({ name: 'test code' }));

    list.todos.pop();
    expect(list.todos).toEqual([]);
  });
})
