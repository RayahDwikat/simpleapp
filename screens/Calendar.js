import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import firebase from '../config/firebase'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    // firebase.database().ref('date/').set({start: dates.startDate, endDate: dates.endDate})
    // .then(()=> {

        
    // })
    this.setState({
        ...dates,
      });
  };

  render() {
    const { startDate, endDate, displayedDate } = this.state;
    return (
      <View style={styles.container}>
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});