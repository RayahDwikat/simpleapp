import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase'
import DateRangePicker from "react-native-daterange-picker";
import Navigation from '../config/navigation';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

  const [date, setDate] = useState({})
  useEffect(() => {

    var starCountRef = firebase.database().ref('dates/');
    starCountRef.on('value', (snapshot) => {
      setDate(snapshot.val())
    });
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <MaterialIcons name='menu' size={28} style={styles.icon} />
      </View>
      <Text style={styles.txt}>I would like to book a meeting with business development at/on {date && date.startDate}</Text>
      <TouchableOpacity
        style={styles.buttonDate}
        onPress={() => navigation.push('Calendar')}>
        <Text style={styles.dateText}>Date</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
  },
  txt: {
    color: 'white',
    fontSize: 15,
    marginTop: 50,
    lineHeight: 30
  },
  buttonDate: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 60,
    height: 30,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    color: '#00BFFF',
  },
  icon: {
    left: 20,
    color: '#FFFFFF',
    marginRight: 300,
    marginTop: 10,

  },
});
