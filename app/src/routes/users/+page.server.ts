import type { PageServerLoad} from './$types';

export const load: PageServerLoad = async () =>{
  type User = {
		id: number;
		email: string;
		name: string | null;
	};

  const response: Response = await fetch('http://api:3000/users', {
      method: 'GET',
      headers: {
          'content-type': 'application/json'
      }
  });

  const users:User[] = await response.json();
  
  return {
    users: users
  };
}