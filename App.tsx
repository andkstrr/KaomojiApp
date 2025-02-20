import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard'
// import Icon from 'react-native-vector-icons/FontAwesome'

const App = () => {
  // Kaomoji
  const [dataKaomoji, setDataKaomoji] = useState([
    ' ˶ᵔ ᵕ ᵔ˶ ',
    '₍ᐢ.  ̫.ᐢ₎',
    'ദ്ദി •⩊• )',
    'ଘ(੭ˊᵕˋ)੭',
    '(˶ˆᗜˆ˵)',
    '૮ ˙Ⱉ˙ ა rawr!    ',
    '૮₍˶ •. • ⑅₎ა ♡',
    '૮꒰˶> ᴗ <˶꒱ა',
    '૮ ˶ᵔ ᵕ ᵔ˶ ა',
    '⸜(｡˃ ᵕ ˂ )⸝♡',
    '૮₍ ˃ ⤙ ˂ ₎ა',
    

  ])

  function copyKaomoji(kaomoji: string) {
    Clipboard.setString(kaomoji)
  }

  return (
    <View style={ styles.container }>
       {/* StatusBar */}
       <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />
       
       <View style={ styles.header }>
          {/* <Icon name="rocket" size={30} color="#900" /> */}
          <Text style={ styles.textHeader }>Kaomoji ^^</Text>
       </View>
      
       {/* FlatList Kaomoji */}
       <FlatList 
          data={ dataKaomoji }
          // identifikasi item unik
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={ styles.bgKaomoji }>
              <TouchableOpacity onPress={() => copyKaomoji(item)}>
                <Text style={ styles.textKaomoji }>{ item }</Text>
              </TouchableOpacity>
            </View>
          )}
        />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21252b'
  },
  header: {
    backgroundColor: '#282c34',
    paddingVertical: 20,
    paddingLeft: 20
  },
  textHeader: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    elevation: 3 // sedikit shadow
  },
  textKaomoji: {
    color: '#fff',
    alignItems: 'center',
    paddingLeft: 35,
    fontSize: 40,
  },
  bgKaomoji: {
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#282c34',
    borderRadius: 10,
    elevation: 3 // sedikit shadow
  }
})