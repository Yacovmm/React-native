import React, {createContext} from 'react';

// Criando um contexto
const ReactContext = createContext({});

// Criando um HOC para adicionar a storage e a action no componente
export const withStorageAndAction = (Comp) => (props) => (<ReactContext.Consumer>
    { (value) => <Comp {...props} storage={value.storage} action={value.action}/> }
</ReactContext.Consumer>);

// Criando o componente de provider que vai gerenciar o estado centralizado
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: []
        }
    }

    render() {
        return (<ReactContext.Provider value={{
                storage: this.state,
                action: {
                    addItem: (obj) => this.setState({listItem: [obj]}),
                    
                }
            }}>
                {this.props.children}
            </ReactContext.Provider>)
    }
}