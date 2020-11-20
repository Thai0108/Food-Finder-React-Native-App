import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

var { height, width } = Dimensions.get("window");

export default class Address extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "",
      latitude: 20.957847,
      longitude: 107.085281
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>latitude {this.state.latitude}</Text>
        <MapView style={{ width: width, height: height}}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0121,
          }}
          onPress={(e) => this.onClickMap(e.nativeEvent)}
          >
          <MapView.Marker draggable
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            title="Here"
            onDragEnd={(e) => this.movementMarker(e.nativeEvent)} />
        </MapView>
      </View>
    );
  }
  movementMarker(e) {
    
    const {latitude,longitude} = e.coordinate
    this.setState({
      latitude: latitude,
      longitude: longitude
    })
  }
  onClickMap(e)
  {
    const {latitude,longitude} = e.coordinate
    this.setState({
      latitude: latitude,
      longitude: longitude
    })
  }
}