import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
import { config } from '../constants/config'
import Circle from './Circles'
import { Dimensions } from 'react-native';



class MainScreen extends Component {

    state = {
        isPressed: false,
        app: {},
        white: [],
        black: [],

    }
    componentDidMount () {
        // console.log(config.firebase)
        if (!firebase.apps.length){
            firebase.initializeApp(config.firebase)
        }

        firebase.database().ref('points/-M7-fgFoB4YiVX4LVQQ8/').on('value', snapshot => {       
            if(snapshot.val().b){
                this.setState({black: snapshot.val().b})   
            }
            if(snapshot.val().w){
                this.setState({white: snapshot.val().w})
            }
            
        })
        }
 
    buttonPressed = () => {
        // this.setState({isPressed: true})
        console.log('window height', Dimensions.get('window').height)
        console.log('window width', Dimensions.get('window').width)
        console.log('screen height', Dimensions.get('screen').height)
        console.log('screen width', Dimensions.get('screen').width)
    }

    
    circle_create = (left, top, color) => {
        // console.log(left)
        return(
            // <View style={{...styles.circle, left: 360, top:390} }></View>
            <Circle left={top} top={left} color={color} />
        )
    }
     
    render(){
        if (!this.state.isPressed){
            return(
                <View style={styles.container}>
                    <Image source={require('../../assets/top-view.jpg')} style={styles.image}/>
                    {/* <TouchableOpacity style={styles.button} onPress={() => this.buttonPressed()}>
                    <Text style={styles.text}>Press</Text>
                    </TouchableOpacity> */}
                    {this.state.black? this.state.black.map(x => this.circle_create(x[0],x[1], 'black')) : <Text>none</Text> }
                    {this.state.white? this.state.white.map(x => this.circle_create(x[0],x[1], 'white')) : <Text>none</Text> }

                </View>
            );
        }
        else{
            return(
                <View style={styles.container}>
                <Image source={require('../../assets/top-view.jpg')}/>
                <TouchableOpacity style={styles.button} onPress={() => this.buttonPressed()}>
                    <Text style={styles.text}>WELL HERE WE ARE</Text>
                </TouchableOpacity>
            </View>
            )
        }
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111211'
    },

    text: {
        alignContent: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,

    },
    button: {
        paddingTop: 155,
        position: 'absolute',
        alignItems: "center",
        padding: 10
      },

    circle: {
        width: 20,
        height: 20,
        borderRadius: 100/2,
        backgroundColor: 'red',
        position: "absolute",
    },
    image: {
        flex: 1,
        aspectRatio: 1.5,
        // height: null,
        resizeMode: 'contain'
    }

})