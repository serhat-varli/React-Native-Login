import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Input from '../general/input';

function Login(this: any): React.JSX.Element {
  return (
    <KeyboardAvoidingView behavior="position">
      <View>
        <View style={styles.constainer}>
          <Text style={styles.head}>Property Tax Server</Text>
          <Text style={styles.headDescription}>
            Unique Door No. Easily Fill Your Entire Property Tax Using App
          </Text>
          <View style={styles.form}>
            <Text style={styles.title}>Sign In</Text>

            <Input
              autoCapitalize="none"
              placeholder="User Name"
              returnKeyType={'next'}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <Input
              autoCapitalize="none"
              secureTextEntry
              placeholder="Password"
              returnKeyType={'go'}
              inputRef={input => (this.passwordInput = input)}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Sign in Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.registerText}>
          <Text>Don't have account? {' '}</Text>
          <TouchableOpacity>
            <Text style={{fontWeight: '700'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  constainer: {
    width: '86%',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 130,
    borderRadius: 7,
    padding: 30,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  registerText: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '400',
    flexDirection: 'row',
  },
  head: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  headDescription: {
    color: '#2b2b2b',
    fontSize: 14,
    fontWeight: '300',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#1672e4',
    borderRadius: 7,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
});
export default Login;
