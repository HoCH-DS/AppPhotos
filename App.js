import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import PictureList from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";

export default class App extends Component {

  state = {
    PictureList:
      [
        { id: '1', url: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png' },
        { id: '2', url: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png' },
        { id: '3', url: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png' },
        { id: '4', url: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png' },

      ],
    isModalOpen: false
  }

  onPictureSelect = (item) => {

  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = (response) => {
    this.setState({ isModalOpen: false });
  }

  render() {

    const { state } = this;

    return (
      <View style={styles.container}>
        <PictureList list={state.PictureList} onClick={this.onPictureSelect} />
        <View style={styles.footer}>
          <Button
            onPress={this.openModal}
            title="Nova Foto"
            color="#00062ac"
          />
        </View>
        <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    textAlign: 'center'
  },
});