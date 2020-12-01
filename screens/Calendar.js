import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import firebase from '../config/firebase'
import { TouchableOpacity } from "react-native-gesture-handler";

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
    
    this.setState({
      ...dates,
    });
  };

  onSubmit = ()=> {
    let {startDate, endDate} =this.state

    if(!endDate) return

    firebase.database()
    .ref('dates/')
    .set({startDate: startDate.toString(), endDate: endDate.toString()})
    .then((e)=>this.props.navigation.pop())
      .catch((e)=>console.log(e))
  }

  render() {
    console.log(this.navigation)
    const { startDate, endDate, displayedDate } = this.state;
    
    return (
      <View style={styles.container}>
        <Text>{startDate&&startDate.toString()} - {endDate&&endDate.toString()}</Text>
        <DateRangePicker
          onChange={this.setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Open Calendar</Text>
          </View>
        </DateRangePicker>

        <TouchableOpacity onPress={()=> this.onSubmit()} style={styles.btn}>
          <Text style={styles.btnText}>Save Date</Text>
        </TouchableOpacity>
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
  btn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    marginTop: 32
  },
  btnText: {
    color: 'white'
  }
});