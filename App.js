import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button} from "react-native";

import PictureList from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";

export default class App extends Component {

  state = {
    PictureList: [
      
      {id: '1', url: 'https://th.bing.com/th/id/R.9c1cdb0adcf6b9ed186c9fb82e0cde25?rik=vb1l%2bgMv1i1u%2bg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED405%2f5d425bfb1cc2a.jpeg&ehk=nMMzv093kd0dqIjkSHlLvoalbuxBT3cHptofRUzHxRg%3d&risl=&pid=ImgRaw&r=0'},
      {id: '2', url: 'https://th.bing.com/th/id/R.9c1cdb0adcf6b9ed186c9fb82e0cde25?rik=vb1l%2bgMv1i1u%2bg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED405%2f5d425bfb1cc2a.jpeg&ehk=nMMzv093kd0dqIjkSHlLvoalbuxBT3cHptofRUzHxRg%3d&risl=&pid=ImgRaw&r=0'},
      {id: '3', url: 'https://th.bing.com/th/id/R.9c1cdb0adcf6b9ed186c9fb82e0cde25?rik=vb1l%2bgMv1i1u%2bg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED405%2f5d425bfb1cc2a.jpeg&ehk=nMMzv093kd0dqIjkSHlLvoalbuxBT3cHptofRUzHxRg%3d&risl=&pid=ImgRaw&r=0'},
      {id: '4', url: 'https://th.bing.com/th/id/R.9c1cdb0adcf6b9ed186c9fb82e0cde25?rik=vb1l%2bgMv1i1u%2bg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED405%2f5d425bfb1cc2a.jpeg&ehk=nMMzv093kd0dqIjkSHlLvoalbuxBT3cHptofRUzHxRg%3d&risl=&pid=ImgRaw&r=0'},
    ],
    isModalOpen: false
  }
  
  onPictureSelect = (item) => {
    
  }

  openModal = () => {

  }

  render() {

    const { state } = this;

    return (
      <View style={StyleSheet.container}>
        <PictureList list={state.PictureList} onClick={this.onPictureSelect}/>
        <View style={styles.footer}>
          <Button 
            onPress={this.openModal}
            title="Nova Foto"
            color="#00062ac"
            />
        </View>
        <CameraDialog isOpen={state.isModalOpen}/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F%FCFF',
    },
    footer: {
      padding: 15,
      backgroundColor: '#999',
      width: '100%',
      textAlign: 'center',
    },
});