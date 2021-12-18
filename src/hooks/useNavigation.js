import {useNavigation as useRNNavigtion} from '@react-navigation/native';
import {screenName} from '../utils/constants';
import useUser from './useUser';

export default function useNavigation(screen) {
  const {isLogin} = useUser();
  const AUTH_SCREEN = [screenName.signIn, screenName.signUp];
  const {navigate} = useRNNavigtion();

  if (AUTH_SCREEN.includes(screen) && isLogin) return null;
  return {navigate};
}
