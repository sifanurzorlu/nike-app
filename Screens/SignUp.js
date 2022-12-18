import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import BackIcon from 'react-native-vector-icons/Feather'
import userMocks from '../Mocks/userMocks'
import {addToDb} from '../db.js'
//import PocketBase from 'pocketbase'

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [data, setData] = useState({})

  //const client = new PocketBase('http://127.0.0.1:8090')

  function navigate() {
    navigation.navigate('SignIn')
  }

  useEffect(() => {
    setData({ fullName: fullName, email: email, mobile: mobile, password: password, confirmPassword: confirmPassword })
  }, [fullName, email, mobile, password, confirmPassword])

  async function createUser() {
    console.log('DATA: ', data)
    addToDb(data)
    //await client.records
    //   .create('test1', data)
    //   .then((response) => console.log('Create Başarılı User: ', response.data))
    //   .catch((err) => console.log('Create Hatalı Hata: ', err.message))
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image style={styles.ImageStyle} source={require('../assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.BottomView}>
        <BackIcon onPress={navigate} style={styles.Icon} name="chevron-left" size={50} />
        <Text style={styles.Heading}>
          Create{'\n'}
          Account
        </Text>
        <View style={styles.FormView}>
          <TextInput onChangeText={(val) => setFullName(val)} placeholder={'Full Name*'} style={styles.TextInput} />
          <TextInput onChangeText={(val) => setEmail(val)} placeholder={'Email Address*'} style={styles.TextInput} />
          <TextInput onChangeText={(val) => setMobile(val)} placeholder={'Mobile*'} style={styles.TextInput} />
          <TextInput
            onChangeText={(val) => setPassword(val)}
            placeholder={'Password*'}
            secureTextEntry={true}
            style={styles.TextInput}
          />
          <TextInput
            onChangeText={(val) => setConfirmPassword(val)}
            placeholder={'Confirm Password*'}
            secureTextEntry={true}
            style={styles.TextInput}
          />
          <TouchableOpacity onPress={createUser} style={styles.Button}>
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    height: '20%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  ImageStyle: {
    marginTop: 20,
    width: '40%',
    resizeMode: 'contain',
  },
  Heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 2,
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
    marginBottom: 20,
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
  Icon: {
    marginLeft: 5,
    marginTop: 10,
  },
})

export default SignUp
