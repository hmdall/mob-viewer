import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { render } from 'react-dom'


class Circle extends Component {
    
    render(){
        // console.log(this.props.left, this.props.top)
        return(
            <View 
                key={this.props.left+this.props.top} 
                style={{...styles.circle,
                        left:this.props.left,
                        top: this.props.top, 
                        backgroundColor: this.props.color,
                        }}>
            </View>
        )
    }
}



export default Circle

const styles = StyleSheet.create({
    circle: {
        width: 20,
        height: 20,
        borderRadius: 100/2,
        position: "absolute",
    }

})