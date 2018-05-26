import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.251339, 
          longitude:115.129872
        },
        title: 'Bumi Perkemangan Danau Buyan',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.322385,
          longitude: 115.361571
        },
        title: 'BALIWOSO',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude: -8.252512,
          longitude: 115.117469
        },
        title: 'Camping Ground Buyan'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.123862, 
          longitude: 115.079188
        },
        title: 'Gereja Kemah Daud'
      },
      {
        key:3,
        latlng: {
          latitude: -8.275732,
          longitude: 115.152810
        },
        title: 'Kebun Raya Bedugul'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Tempat Kemah di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://gus.merta281198@gmail.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }

});