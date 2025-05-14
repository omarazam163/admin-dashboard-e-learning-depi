/* eslint-disable prettier/prettier */

const authProvider = {
  login: async ({ username, password }: { username: string; password: string }) => {
  // const email = 'mostafagada111@gmail.com';
  // const password = 'Mostafa@123';

  const formData = new FormData();
  formData.append('Email', username);
  formData.append('Password', password);

  const request = new Request('https://localhost:7180/api/Auth/Login', {
    method: 'POST',
    body: formData,
    headers: new Headers({
      'Accept': 'multipart/form-data',
    }),
  });

  try {
    const response = await fetch(request);
    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const { accessToken } = responseBody.data;
    localStorage.setItem('token', accessToken);  

    console.log('Stored Token:', localStorage.getItem('token')); 

    return Promise.resolve();
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Login failed');
  }
},

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => {
    const role = localStorage.getItem('role');
    return Promise.resolve(role);
  },

  checkError: (error: { status: number; }) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      return Promise.reject();
    }
    return Promise.resolve();
  }
};

export default authProvider;
