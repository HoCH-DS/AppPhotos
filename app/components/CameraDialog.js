import { TestScheduler } from "jest";
import React, { Component } from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button } from "react-native";

class CameraDialog extends Component{

    static defaultProps = {
        isOpen: false
    }

    state = {
        currentImage: 'https://th.bing.com/th/id/R.9c1cdb0adcf6b9ed186c9fb82e0cde25?rik=vb1l%2bgMv1i1u%2bg&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED405%2f5d425bfb1cc2a.jpeg&ehk=nMMzv093kd0dqIjkSHlLvoalbuxBT3cHptofRUzHxRg%3d&risl=&pid=ImgRaw&r=0'
    }
    
    render() {

        const { props } = this;

        return (
            <Modal 
                animationType="slide"
                transparent={false}
                visible={props.isOpen} 
            >
                <View>
                    <Image source={{url: this.state.currentImage}} />
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Button 
                        title="Salvar"
                        onPress={this.save}
                        color="00062ac"
                    />

                    <Button 
                        title="Bater"
                        onPress={this.shot}
                        color="00062ac"
                    />

                    <Button 
                        title="Colar"
                        onPress={this.getImageFromClipboard}
                        color="00062ac"
                    />
                </View>

                <View>

                </View>

            </Modal>
        );
    }
}

export default CameraDialog;