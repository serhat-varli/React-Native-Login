import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from './components/header/Header';
import Login from './components/login/Login';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <Header />
          <Login />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
