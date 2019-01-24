import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
// import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import {MainScreen} from "./screens"


// Estrutura de Navegação
// - Stack
// --- Tabs
// ------ Inicial
// ------ Icons
// ------ Maps
// ------ Camera
// --- Stack1

// Configurando Stack Navigator

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

export default MainScreen