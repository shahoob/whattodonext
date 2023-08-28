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

  it.todo('should be able to serialize into a string properly');
  it.todo('should be able to de-serialize from a string');
  it.todo('should know how much is done currently');
})
