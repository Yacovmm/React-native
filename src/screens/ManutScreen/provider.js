import React, { createContext } from 'react';
import { AsyncStorage } from 'react-native';

// Criando um contexto
const ReactContext = createContext({});

// Criando um HOC para adicionar a storage e a action no componente
export const withStorageAndAction = (Comp) => (props) => (<ReactContext.Consumer>
    {(value) => <Comp {...props} storage={value.storage} action={value.action} />}
</ReactContext.Consumer>);

let Tasks = {
    convertToArrayOfObject(tasks, callback) {
      return callback(
        tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
      );
    },
    convertToStringWithSeparators(tasks) {
      return tasks.map(task => task.text).join("||");
    },
    all(callback) {
      return AsyncStorage.getItem("TASKS", (err, tasks) =>
        this.convertToArrayOfObject(tasks, callback)
        
      );
    },
    save(tasks) {
        // alert(tasks);
        // alert(this.convertToStringWithSeparators(tasks));
    
        
      AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));

    }
  };

  
   
  


// Criando o componente de provider que vai gerenciar o estado centralizado
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            

        }
    }

    componentDidMount() {
        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
      }

    render() {
        return (<ReactContext.Provider value={{
            storage: this.state,
            action: {
                addTask: (text) => {
                    let notEmpty = text.trim().length > 0;
                
                    if (notEmpty) {
                    //   this.setState(
                    //     prevState => {
                    //       let { tasks, text } = prevState;
                    //       return {
                    //         tasks: tasks.concat({ key: tasks.length, text: text }),
                    //         text: ""
                    //       };
                    //     },
                    //     () => Tasks.save(this.state.tasks)
                    //   );
                    let newTasks = [...this.state.tasks, {text}];
                    this.setState({ tasks: newTasks});
                    Tasks.save(newTasks);

                    }
                  },
                  deleteTask: i => {
                    // this.setState(
                    //   prevState => {
                    //     let tasks = prevState.tasks.slice();
                
                    //     this.storage.tasks.splice(i, 1);
                
                    //     return { tasks: tasks };
                    //   },
                    //   () => Tasks.save(this.state.tasks)
                    // );
                    let newTasks = this.state.tasks.splice(i, 1);
                    this.setState({ tasks: newTasks});
                    Tasks.save(newTasks);
                  }

            }
        }}>
            {this.props.children}
        </ReactContext.Provider>)
    }
}

// addTask = (text) => {
//     let notEmpty = this.state.text.trim().length > 0;

//     if (notEmpty) {
//       this.setState(
//         prevState => {
//           let { tasks, text } = prevState;
//           return {
//             tasks: tasks.concat({ key: tasks.length, text: text }),
//             text: ""
//           };
//         },
//         () => Tasks.save(this.state.tasks)
//       );
//     }
//   };

//   deleteTask = i => {
//     this.setState(
//       prevState => {
//         let tasks = prevState.tasks.slice();

//         tasks.splice(i, 1);

//         return { tasks: tasks };
//       },
//       () => Tasks.save(this.state.tasks)
//     );
//   };