import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase'
import DateRangePicker from "react-native-daterange-picker";
import Navigation from '../config/navigation';
export default function Home({navigation}) {


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" />
      <Text style={styles.txt}>I would like to book a meeting with business development at/on {12}</Text>
      <TouchableOpacity onPress={() => navigation.push('Calendar')}>
        <Text>Date</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
  },
  txt: {
    color: 'white'
  }
});
