import {StyleSheet, Text, View} from 'react-native';

function HeaderBg(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.containerBgWhiteLine} />
      <View style={styles.containerInner}>
        <Text style={styles.logo}>UDAC</Text>
        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#1771e4',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: 300,
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    overflow: 'hidden',
  },
  containerBgWhiteLine: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 160,
    height: 230,
    zIndex: 2,
    right: -90,
    bottom: -106,
    transform: [{rotate: '-310deg'}],
  },
  containerInner: {
    marginTop: -150,
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  logoDescription: {
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  },
});
export default HeaderBg;
