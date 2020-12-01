import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import firebase from '../config/firebase'
import { TextInput } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = async () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(u => {
      navigation.push('Home')
    })
    .catch(error => {
       switch (error.code) {
          case 'auth/email-already-in-use':
            firebase.auth().signInWithEmailAndPassword(email, password).then(()=>navigation.push('Home'))
            break;
          case 'auth/invalid-email':
            alert(`Email address ${this.state.email} is invalid.`);
            break;
          case 'auth/operation-not-allowed':
            alert(`Error during sign up.`);
            break;
          case 'auth/weak-password':
            alert('Password is not strong enough. Add additional characters including special characters and numbers.');
            break;
          default:
            console.log(error.message);
            break;
        }
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.circle}>
        <Image 
          style={styles.img}
          source = {require('../assets/images.jpg')} />

        </View>
        <Text style={{ marginTop: 16 }}>Your Email?</Text>

        <View style={styles.inputContainer}>
          <TextInput  onChangeText={(txt) => setEmail(txt)} placeholder="Enter your email" />
          <TextInput  onChangeText={(txt) => setPassword(txt)} placeholder="Enter your password" />
        </View>
      </View>
      {
        email != null &&
        <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
          <View style={styles.footer}>
            <Text style={styles.btnTxt}>Next</Text>
            <Text style={styles.arrow}>---></Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footer: { 
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginRight: 16

     },
  content: { 
    padding: 16, 
    alignItems: 'center',
    width: '100%' 
  },

  inputContainer: {
     marginTop: 32,
     alignSelf: 'flex-start',

    },
  circle: { 
    backgroundColor: '#00BFFF',
    width: 80,
    height: 80,
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 64,
       },
  img: {
     width: 50,
     height: 40 },
  btn: {
     flexDirection: 'row', 
     backgroundColor: 'black', 
     color: 'white',
     position: 'absolute',
     height: 40, 
     width: '100%',
     bottom: 0, 
     alignItems: 'center', 
     justifyContent: 'flex-end' },
  btnTxt: { 
    color: 'white'
 },

  arrow: { 
    color: 'white'
 }

});
