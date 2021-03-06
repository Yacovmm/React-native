import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform
} from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createStackNavigator } from 'react-navigation';



const viewPadding = 10;

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  //this.props.storage.tasks
  }) //Como pegar o state task do teste1 e jogar aqui?
  constructor(props) {
    super(props);
    this.state = {
      // tasks: [],
      text: ""
    }

  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  // addTask = () => {
  //   let notEmpty = this.state.text.trim().length > 0;

  //   if (notEmpty) {
  //     this.setState(
  //       prevState => {
  //         let { tasks, text } = prevState;
  //         return {
  //           tasks: tasks.concat({ key: tasks.length, text: text }),
  //           text: ""
  //         };
  //       },
  //       () => Tasks.save(this.state.tasks)
  //     );
  //   }
  // };

  // deleteTask = i => {
  //   this.setState(
  //     prevState => {
  //       let tasks = prevState.tasks.slice();

  //       tasks.splice(i, 1);

  //       return { tasks: tasks };
  //     },
  //     () => Tasks.save(this.state.tasks)
  //   );
  // };

  // componentDidMount() {
  //   Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  // }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <FlatList
          style={styles.list}
          data={this.props.storage.tasks}
          keyExtractor={(item, index) => index.toFixed(0)}
          renderItem={({ item, index }) =>
            <View
            key={index.toFixed(0)}>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.props.action.deleteTask(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="O que você tem em mente?"
          returnKeyType="done"
          returnKeyLabel="done"
        />


        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Todo" onPress={() => this.props.navigation.navigate('teste1')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>

      </View>
    );
  }
}

// let Tasks = {
//   convertToArrayOfObject(tasks, callback) {
//     return callback(
//       tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
//     );
//   },
//   convertToStringWithSeparators(tasks) {
//     return tasks.map(task => task.text).join("||");
//   },
//   all(callback) {
//     return AsyncStorage.getItem("TASKS", (err, tasks) =>
//       this.convertToArrayOfObject(tasks, callback)
//     );
//   },
//   save(tasks) {
//     AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 0,
    width: "100%"
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});


export default MainScreen

