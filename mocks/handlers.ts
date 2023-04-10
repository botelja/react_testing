import { rest } from 'msw'

export const handlers = [
 
  rest.get('http://localhost:3001/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com' },
        { id: 2, firstName: 'Bob', lastName: 'Jones', email: 'bob@example.com' },
      ]),
    );
  }),

  rest.post('http://localhost:3001/api/user', (req, res, ctx) => {

    return res(ctx.json({ id: 3, firstName: 'Dick', lastName: 'Tracy', email: 'dick@example.com' }));
  }),
]