import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer, createStackNavigator } from 'react-navigation';


const viewPadding = 10;
class teste1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

    };

    // static navigationOptions = {
    //     title: 'Adicione suas tarefas!',

    // };

    changeTextHandler = text => {
        
        this.setState({ text: text });
    };


    // addTask = () => {
    //     let notEmpty = this.state.text.trim().length > 0;

    //     if (notEmpty) {
    //         this.setState(
    //             prevState => {
    //                 let { tasks, text } = prevState;
    //                 return {
    //                     tasks: tasks.concat({ key: tasks.length, text: text }),
    //                     text: ""
    //                 };
    //             },
    //             () => Tasks.save(this.state.tasks)
    //         );
    //     }
    // };


    render() {
        return (
            <View style={styles.container}
            >

                <TextInput style={styles.text}
                    placeholder="O que você tem em mente?"
                    returnKeyType="done"
                    returnKeyLabel="done"
                    onChangeText={(text) => this.changeTextHandler(text)}
                    value={this.state.text}
                >

                </TextInput>
                <TouchableOpacity style={styles.text} onPress={() =>  {
                    this.props.action.addTask(this.state.text);
                    this.props.navigation.navigate('MainScreen');
                }}>
                    <Icon size={50} name="tasks"></Icon>
                </TouchableOpacity>
            </View>
        );
    }
}

// let Tasks = {
//     convertToArrayOfObject(tasks, callback) {
//         return callback(
//             tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
//         );
//     },
//     convertToStringWithSeparators(tasks) {
//         return tasks.map(task => task.text).join("||");
//     },
//     all(callback) {
//         return AsyncStorage.getItem("TASKS", (err, tasks) =>
//             this.convertToArrayOfObject(tasks, callback)
//         );
//     },
//     save(tasks) {
//         AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
//     }
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        padding: viewPadding,
        paddingTop: 20
    },
    text: {
        textAlign: "center",
        flexDirection: "row",
        fontSize: 18,
        justifyContent: "center",
        paddingTop: 50

    },
    input: {
        flex: 3,
        textAlign: "center",
        flexDirection: "row",
        fontSize: 18
    }
});

export default teste1
