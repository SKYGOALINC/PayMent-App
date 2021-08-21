import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';

import {RazorpayApiKey} from '../utils/config.js';

const Payment = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [loading, setloading] = useState(false);

  const createOrder = async () => {
    const {data} = await axios.post(
      'https://skygoaltech.herokuapp.com/createOrder',
      {
        amount: amount * 100,
        currency: 'INR',
      },
    );
    return data;
  };
  const verifyPayment = async (orderID, transaction) => {
    const {data} = await axios.post(
      'https://skygoaltech.herokuapp.com/verifySignature',
      {
        orderID: orderID,
        transaction: transaction,
      },
    );
    return data.validSignature;
  };

  const onPay = async () => {
    console.log('OnPay');
    setloading(true);

    const order = await createOrder();
    var options = {
      name: 'Welocme to SkyGoaltechlabs',
      description: 'Payment to Skygoaltechlabs',
      order_id: order.id,
      key: RazorpayApiKey,
      prefill: {
        email: '',
        contact: '',
        name: '',
      },
      theme: {color: '#a29bfe'},
    };
    RazorpayCheckout.open(options)
      .then(async transaction => {
        const validSignature = await verifyPayment(order.id, transaction);
        alert('Is Valid Payment: ' + validSignature);
      })
      .then(() => setloading(false))
      .then(() => navigation.navigate('Welcome'))
      .catch(() => {
        alert('Payment Failed: ');
        navigation.navigate('Pay');
        setloading(false);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Insert any amount in below input</Text>
        <TextInput
          value={amount}
          keyboardType="number-pad"
          onChangeText={amount => setAmount(amount)}
          placeholder={'amount'}
          style={styles.input}
        />
        <Text
          style={{
            color: 'blue',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          {amount}
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={onPay}>
            <Text style={styles.buttonText}>Buy for ₹ {amount}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
  button: {
    width: '80%',
    backgroundColor: '#a29bfe',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    marginBottom: 50,
  },
});

export default Payment;
