import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import ShoesCard from './ShoeCard'

const Main = ({ navigation }) => {
  
    const shoes = [{
        id: 1,
        imgName: "img1",
        shoeName: "Ayakkabı1",
        shoePrice: 10,
        shoeDescription: "Description1"
    },
    {
        id: 2,
        imgName: "img1",
        shoeName: "Ayakkabı2",
        shoePrice: 10,
        shoeDescription: "Description2"    },
    {
        id: 3,
        imgName: "nike1.jpeg",
        shoeName: "Ayakkabı3",
        shoePrice: 10,
        shoeDescription: "Description3"    },
    {
        id: 4,
        imgName: "nike1.jpeg",
        shoeName: "Ayakkabı4",
        shoePrice: 10,
        shoeDescription: "Description4"    },
    {
        id: 5,
        imgName: "nike1.jpeg",
        shoeName: "Ayakkabı1",
        shoePrice: 10,
        shoeDescription: "Description1"    },
    {
        id: 6,
        imgName: "nike1.jpeg",
        shoeName: "Ayakkabı1",
        shoePrice: 10,
        shoeDescription: "Description1"    },
    {
        id: 7,
        imgName: "nike1.jpeg",
        shoeName: "Ayakkabı1",
        shoePrice: 10,
        shoeDescription: "Description1"    }]

  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image style={styles.ImageStyle} source={require('../assets/images/logo.png')} />
      </View>
      <ScrollView style={styles.BottomView}>
        <Text style={styles.Heading}>
            Shoes
        </Text>
        {
            shoes.map(shoe => {
               return <ShoesCard key={shoe.key} shoes={shoe}/>
            })
        }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  shoesImg:  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }
    ,
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

export default Main
