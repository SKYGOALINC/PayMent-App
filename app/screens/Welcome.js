import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

function Welcome({navigation}) {
  setTimeout(() => {
    navigation.navigate('Home'); // Stack Name
  }, 1500);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome</Text>
      <Text style={styles.txt1}>To</Text>
      <Image source={require('../assets/skygoal.png')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  txt: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 70,
    marginLeft: 15,
  },
  txt1: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  img: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.5,
  },
});

export default Welcome;
