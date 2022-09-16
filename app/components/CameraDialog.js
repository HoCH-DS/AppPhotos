import React, { Component } from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button } from "react-native";

class CameraDialog extends Component {

    static defaultProps = {
        isOpen: false,
        onClose: () => { }
    }

    state = {
        currentImage: 'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
    }

    getImageFromClipboard = () => {

    }

    save = () => {
        this.props.onClose();
    }

    shot = () => {

    }

    render() {

        const { props } = this;

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isOpen}>

                <View style={styles.modalView}>
                    <View style={styles.previewContainer}>
                        <Image source={{ uri: this.state.currentImage }} />
                        <TouchableOpacity onPress={props.onClose}>
                            <Text style={styles.closeButton}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>

                        <Button title="Salvar"
                            onPress={this.save}
                            color="00062ac" >
                        </Button>

                        <Button title="Bater"
                            onPress={this.shot}
                            color="00062ac">
                        </Button>
                        
                        <Button title="Colar"
                            onPress={this.getImageFromClipboard}
                            color="00062ac">
                        </Button>                      
                    </View>
                </View>
            </Modal>
        );
    }
}

export default CameraDialog;

const styles = StyleSheet.create({
    modalView: {
        flex: 1
    },
    previewContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preview: {
        width: 50,
        padding: 15,
        backgroundColor: 'red',
        borderColor: 'black'
    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'gray'
    },
})