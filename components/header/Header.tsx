import {StyleSheet, View} from 'react-native';
import HeaderBg from './HeaderBg';

function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <HeaderBg />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});
export default Header;
