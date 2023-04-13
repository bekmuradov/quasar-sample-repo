import { AuthStateProperties, defineStore } from 'pinia'
import { InitialAuthState } from 'src/services/firebase/base'
import type { Unsubscribe } from '@firebase/firestore'
import type { Unsubscribe as AuthObserver, User } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    isReady: false,
    auth: {} as User,
    user: {},
    userType: 'host',
    unsubUsersListener: {} as Unsubscribe,
    authStateUnsubscribe: {} as AuthObserver,
    uid: ''
  } as AuthStateProperties),
  actions: {
    async setAuthState (data: InitialAuthState) {
      this.isAuthenticated = data.isAuthenticated
      this.isReady = data.isReady
      this.uid = data.uid
      this.auth = data.auth
    }
  }
})
