const REST_PORT = 5000;
const REST_HOST = `http://localhost:${REST_PORT}`;

export const REST = {
  auth: {
    login: `${REST_HOST}/auth/login`,
    logout: `${REST_HOST}/auth/logout`,
  },
  user: {
    create: `${REST_HOST}/users`,
    get: (username: string) => `${REST_HOST}/users/${username}`,
    update: (username: string) => `${REST_HOST}/users/${username}`,
    delete: (username: string) => `${REST_HOST}/users/${username}`,
  },
  plans: {
    create: (name: string) => `${REST_HOST}/plans/${name}`,
    get: `${REST_HOST}/plans`,
    update: (name: string) => `${REST_HOST}/plans/${name}`,
    delete: (name: string) => `${REST_HOST}/plans/${name}`,
  },
  vitals: `${REST_HOST}/vitals`,
};
