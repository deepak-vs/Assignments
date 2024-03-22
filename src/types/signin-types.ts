import { StackNavigationProp } from '@react-navigation/stack'

export interface ISignInProps {
    navigation: StackNavigationProp<any>
  }

export interface IFormErrors {
    username?: string;
    phone?: string;
    password?: string;
  }
  