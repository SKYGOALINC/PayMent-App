import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

function Home(props) {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      // Add Event Listener for hardwareBackPress
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, []),
  );
  return (
    <View style={styles.container}>
      <Text>Hello welocme to Skygoal Payment App</Text>
      <Text style={{marginVertical: 40}}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default Home;
