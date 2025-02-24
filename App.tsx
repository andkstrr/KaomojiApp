import React, { useState } from 'react';
import { 
  View, 
  Text,
  Image, 
  StyleSheet, 
  StatusBar, 
  FlatList, 
  TouchableOpacity, 
  ToastAndroid 
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
// import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [dataKaomoji] = useState([
    ' ˶ᵔ ᵕ ᵔ˶ ', '₍ᐢ.  ̫.ᐢ₎', 'ദ്ദി •⩊• )',
    'ଘ(੭ˊᵕˋ)੭', '(˶ˆᗜˆ˵)', '૮ ˙Ⱉ˙ ა rawr!',
    '૮₍˶ •. • ⑅₎ა ♡', '૮꒰˶> ᴗ <˶꒱ა',
    '૮ ˶ᵔ ᵕ ᵔ˶ ა', '⸜(｡˃ ᵕ ˂ )⸝♡', '૮₍ ˃ ⤙ ˂ ₎ა', 
    ' ˶ᵔ ᵕ ᵔ˶ ', '₍ᐢ.  ̫.ᐢ₎', 'ദ്ദി •⩊• )',
    'ଘ(੭ˊᵕˋ)੭', '(˶ˆᗜˆ˵)', '૮ ˙Ⱉ˙ ა rawr!',
    '૮₍˶ •. • ⑅₎ა ♡', '૮꒰˶> ᴗ <˶꒱ა',
    '૮ ˶ᵔ ᵕ ᵔ˶ ა', '⸜(｡˃ ᵕ ˂ )⸝♡', '૮₍ ˃ ⤙ ˂ ₎ა'
  ]);

  function copyKaomoji(kaomoji: string) {
    Clipboard.setString(kaomoji)
    ToastAndroid.show('Copied to Clipboard', ToastAndroid.SHORT)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#4A90E2'} barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Kaomoji App ^^</Text>
      </View>
      <FlatList 
        data={dataKaomoji}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.kaomojiCard}>
            <Text style={styles.textKaomoji}>{item}</Text>
            <TouchableOpacity onPress={() => copyKaomoji(item)}>
              <Image source={ require('./assets/copy.png') } style={ styles.icon } />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 5,
  },
  textHeader: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  kaomojiCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6A6AFF',
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },
  textKaomoji: {
    color: '#FFF',
    fontSize: 22,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    alignItems: 'center'
  }
});