import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import { MainScreen } from "./screens"
import teste1 from "./screens/teste1.js"
import { ManutScreen } from "./screens"
import { createAppContainer, createStackNavigator } from 'react-navigation';


const Navegador = createStackNavigator({
    MainScreen: {
        screen: MainScreen,
        // navigationOptions: {
        //     // header: null         

        // }
    },
    teste1: {
        screen: teste1
    },
    // ManutScreen: {
    //     screen: ManutScreen
    // }

});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;


// const stackNavigationConfig = {
//     "Main": {
//         screen: MainScreen,
//         navigationOptions: {
//             header: null
//         }
//     },
//     "ManutScreen": {
//         screen: () => <Text>ADD SEU TODO</Text>,
//         navigationOptions: {
//             tabBarVisible: false,
//             title: "Tela em Stack 1"
//         }
//     }
// };

// const StackNavigator = createStackNavigator(stackNavigationConfig);


// export default createAppContainer(StackNavigator);

// export default MainScreen