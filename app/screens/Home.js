import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Hello welocme to Skygoal Payment App</Text>
      <Text>
        This is a live payment app where you can select the amount you want to
        pay.
      </Text>

      <Button
        title="Go to Payments"
        onPress={() => props.navigation.navigate('Pay')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default Home;
