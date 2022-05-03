import { ISignIn, ISignUp } from '~/types/auth';

import { api } from '../client';

class AuthService {
  async signIn(payload: ISignIn) {
    try {
      const { data } = await api.post('sessions', payload);
      return data;
    } catch {
      throw new Error('Error on sign in');
    }
  }

  async signUp(payload: ISignUp) {
    try {
      await api.post('users', payload);
    } catch {
      throw new Error('Error on sign up');
    }
  }
}

const authService = new AuthService();

export { authService };
