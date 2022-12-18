import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'


const images = {
    img1: require('../assets/images/nike1.jpeg'),
    img2: require('../assets/images/nike1.jpeg'),
    img3: require('../assets/images/nike1.jpeg'),
    img4: require('../assets/images/nike1.jpeg'),
    img5: require('../assets/images/nike1.jpeg'),
    img6: require('../assets/images/nike1.jpeg'),
    img7: require('../assets/images/nike1.jpeg')

}

const ShoesCard = ({ shoes }) => {
  


  return (
    <View style={styles.shoesImg}>
            <Image style={styles.ImageStyle} source={images[shoes.imgName]} />
            <Text>{shoes.shoeName}</Text>
            <Text>{shoes.shoeDescription}</Text>
            <Text>{shoes.shoePrice} $</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  shoesImg:  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    },
    
  ImageStyle: {
    marginTop: 20,
    width: '50%',
    resizeMode: 'contain',
  },
})

export default ShoesCard
