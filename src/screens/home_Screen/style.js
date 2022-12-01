import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
  },
  smllicon: {
    height: 100,
    tintColor: colors.bgcolor2,
    width: 100,
    overflow: 'visible',
    alignSelf: 'center',
    marginLeft: 25,
  },
  lrgtxt: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.txtin,
    fontFamily: 'sans-serif-medium',
  },
  fltxt: {
    fontWeight: '900',
    fontFamily: 'sans-serif-medium',
    fontSize: 15,
    textAlign: 'left',
    marginVertical: 5,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  flview: {
    flex: 0.4,
    backgroundColor: colors.view_bl,
    margin: 15,
    padding: 10,
    borderRadius: 20,
  },
  flview2: {
    flex: 0.4,
    backgroundColor: colors.diff_tx,
    margin: 15,
    padding: 10,
    borderRadius: 20,
  },
  menu: {
    height: 35,
    width: 35,
    margin: 10,
    tintColor: colors.bgcolor,
  },
  blulrgtxt: {
    textAlign: 'right',
    fontSize: 15,
    color: colors.view_bl,
    fontFamily: 'sans-serif-medium',
    marginRight: '5%',
  },
});
