import { rest } from 'msw';
import { server } from '../../mocks/server';
import { getAllUsers, createUser, User } from '../../src/services/UserService';

describe('users API', () => {
  it('should fetch a list of users', async () => {
    const result = await getAllUsers();
    expect(result).toEqual([
      { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
      { id: 2, firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
    ]);
  });

  it('should create a new user', async () => {
    const user: User = { firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com' };
    server.use(  rest.post('http://localhost:3001/api/user', (req, res, ctx) => {
        return res(ctx.json({ id: 3, ...user }));
      }))
    const result = await createUser(user);
    expect(result).toEqual({ id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie@example.com' });
  });

  it('should handle errors when fetching a list of users', async () => {
    server.use(rest.get('http://localhost:3001/api/users', (req, res, ctx) => {
      return res(ctx.status(500));
    }));

    const result = await getAllUsers();
    expect(result).toEqual([]);
  });
});
