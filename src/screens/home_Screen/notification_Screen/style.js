import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors.js';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  tpview: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '5%',
    borderBottomRightRadius: 20,
    backgroundColor: colors.view_bl,
    justifyContent: 'space-between',
  },
  tptext: {
    fontSize: 30,
    alignSelf: 'center',
    color: colors.bgcolor,
  },
  img: {
    width: '20%',
    height: '100%',
    tintColor: colors.diff_tx,
  },
  flview: {
    backgroundColor: colors.bgcolor2,
    margin: '5%',
    padding: '2%',
    borderRadius: 10,
  },
  fltext: {
    color: colors.view_bl,
    fontSize: 20,
  },
});
