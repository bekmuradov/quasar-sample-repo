/* eslint-disable */
import 'pinia'
import type {Unsubscribe} from '@firebase/firestore'
import type {Unsubscribe as AuthObserver} from 'firebase/auth'
import {ConfirmationResult, User} from 'firebase/auth'
import {LocationQueryValue} from 'vue-router'

export interface CountryObject {
  label: string;
  country_code: string;
  phone_code: number;
  flag: string;
}
export type AppUserType = 'host'| 'guest'
type AuthTab = 'signin' | 'signup'
type SignUpSteps = 'emailSignUp' | 'verifyEmail'
export type Onboardning = 'userDetails' | 'userPhone' | 'inputPin' | 'businessDetails' | 'businessDetailsGuest' | 'businessLinks'
export interface UtmData {
  [key: string] : string | LocationQueryValue | LocationQueryValue[]
}
declare module 'pinia' {
  export interface AuthStateProperties<> {
    $authFunctions: any;
    $router: any,
    router: any,
    $fbServices: any,
    $twilio: any,
    $paymentFunctions: any,
    isAuthenticated: boolean,
    isReady: boolean,
    auth: User,
    user: {},
    userType: AppUserType,
    unsubUsersListener: Unsubscribe,
    authStateUnsubscribe: AuthObserver,
    uid: string,
  }
}
