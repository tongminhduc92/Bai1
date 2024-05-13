import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    alert(`Tên đăng nhập: ${username}\nMật khẩu: ${password}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.background}> 
        <View style={styles.content}>
          <TextInput
            style={[styles.textinput, styles.inputSquare]}
            value={username}
            onChangeText={setUsername}
            placeholder="Tên đăng nhập"
            placeholderTextColor="gray"
            color="gray"
          />
          <TextInput
            style={[styles.textinput, styles.inputSquare]}
            value={password}
            onChangeText={setPassword}
            placeholder="Mật khẩu"
            placeholderTextColor="gray"
            color="gray"
            secureTextEntry={true}
          />
          <TouchableOpacity style={[styles.button, styles.buttonSquare]} onPress={handleClick}>
            <Text style={{ color: 'white' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
  textinput: {
    borderWidth: 1, 
    borderColor: 'black', 
    marginVertical: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white', 
  },
  inputSquare: {
    width: '100%', 
  },
  button: {
    backgroundColor: 'red',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonSquare: {
    width: '100%',
  },
});