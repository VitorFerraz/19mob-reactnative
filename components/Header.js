import { Platform } from 'react-native'
import HeaderiOS from './HeaderiOS';
import HeaderAndroid from './HeaderAndroid';

const HeaderPlatform = Platform.select({
  ios: () => HeaderiOS,
  android: () => HeaderAndroid,
  default: () => HeaderAndroid
})();

export default HeaderPlatform;