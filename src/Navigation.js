import React, { Component } from 'react';
import { MainScreen } from "./screens"
import teste1 from "./screens/ManutScreen/teste1.js"
import { ManutScreen } from "./screens"
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Provider, { withStorageAndAction } from "./screens/ManutScreen/provider";


const Navegador = createStackNavigator({
    MainScreen: {
        screen: withStorageAndAction(MainScreen),
        navigationOptions: {
            title: 'Todo List',
        }
    },
    teste1: {
        screen: withStorageAndAction(teste1),
        navigationOptions: {
            title: 'Adicione suas tarefas!',
        }
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