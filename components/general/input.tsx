import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function Input(props: any): React.JSX.Element {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor="#ddd"
        value={text}
        onChangeText={text => setText(text)}
        ref={props.inputRef}
      />
    </View>
  );
}
export default Input;
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#edeef2',
    marginBottom: 15,
    borderRadius: 5,
  },
});
