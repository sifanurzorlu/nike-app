import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import {isUserCorrect} from '../db.js'

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  // Sayfa Yönlendirme
  function navigate() {
    navigation.navigate('SignUp')
  }

  const checkUser = () => {
    if(isUserCorrect(userName, password)){
      navigation.navigate('Main')
    }
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image style={styles.ImageStyle} source={require('../assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.BottomView}>
        <Text style={styles.Heading}>
          Welcome{'\n'}
          Back
        </Text>
        <View style={styles.FormView}>
          <TextInput onChangeText={(val) => setUserName(val)}  placeholder={'Email Address'} style={styles.TextInput} />
          <TextInput onChangeText={(val) => setPassword(val)} placeholder={'Password'} secureTextEntry={true} style={styles.TextInput} />
          <TouchableOpacity style={styles.Button} onPress={checkUser}>
            <Text style={styles.ButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.TextButton} onPress={navigate}>
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  TopView: {
    width: '100%',
    height: '30%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  ImageStyle: {
    marginTop: 20,
    width: '50%',
    resizeMode: 'contain',
  },
  Heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 60,
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  TextInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 20,
  },
  Button: {
    width: '80%',
    height: 52,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  SignUpText: {
    color: 'gray',
  },
  TextButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
})

export default SignIn
