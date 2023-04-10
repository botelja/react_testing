export async function getAllUsers(): Promise<User[]> {
    try {
      const response = await fetch('http://localhost:3001/api/users');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  export async function createUser(data: User): Promise<User> {
    const response = await fetch(`http://localhost:3001/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: data }),
    });
    return await response.json();
  }
  
  export interface User {
    firstName: string;
    lastName: string;
    email: string;
  }
  