import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Food from './Food'
import Cart from './Cart'
import Address from './Address'
import Profile from './Profile'

var { width } = Dimensions.get("window")

console.disableYellowBox = true;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: 1,
        };
    }

    render() {
        return (
            <View style={{ flex: 1, }}>

                <View style={styles.bottomTab}>
                    <TouchableOpacity style={styles.itemTab} onPress={() => this.setState({ module: 1 })}>
                        <Icon name="md-restaurant" size={30} color={this.state.module == 1 ? "#900" : "gray"} />
                        <Text>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemTab} onPress={() => this.setState({ module: 2 })}>
                        <Icon name="md-basket" size={30} color={this.state.module == 2 ? "#900" : "gray"} />
                        <Text>Cart</Text>
                    </TouchableOpacity>
                </View>
                {  this.state.module == 1 ?
                    <Food />
                    : <Cart />
                }
            </View>
        );
    }

}
const styles = StyleSheet.create({
    bottomTab: {
        height: 60,
        width: width,
        // backgroundColor: '',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 8,
        shadowOpacity: 1,
        shadowRadius: 50,
    },
    itemTab: {
        width: width / 4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})