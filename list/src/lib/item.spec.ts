import TodoItem from "./item";

describe('TodoItem', () => {
  let item: TodoItem;

  beforeEach(() => {
    item = new TodoItem({
      name: 'test code',
      data: { id: 420 },
      sub_todos: [
        new TodoItem({ name: 'write testing code' }),
        new TodoItem({ name: 'write code' }),
        new TodoItem({ name: 'do tdd' }),
      ]
    });
  })

  it('should work', () => {
    expect(item.name).toBe('test code');
    expect(item.data).toEqual({ id: 420 });
    expect(item.sub_todos).toContainEqual(new TodoItem({ name: 'do tdd' }));
  });
});
