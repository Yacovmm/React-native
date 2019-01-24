import React from 'react';
import { StyleSheet,FlatList, View,Text,SafeAreaView,ActivityIndicator,TextInput,Button } from 'react-native';

class ManutScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
             titulo = "",
             descricao= ""  
        }
    }
 
    render() {
        return (

          <View>
            <Text>Titulo</Text>
            <TextInput value={this.state.titulo}  placeholder="Digite o titulo aqui"></TextInput>
            <Text>Descrição</Text>
            
            <TextInput
                value={this.state.descricao}
                style={styles.textArea}
                
                placeholder="Descrição"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                />
            
                <Button title="Adicionar" onPress={ () => props.action.addItem(this.state) } />
          </View>
        );
    }

}

const styles = StyleSheet.create({
    textAreaContainer: {
      borderColor: COLORS.grey20,
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start"
    }
  })