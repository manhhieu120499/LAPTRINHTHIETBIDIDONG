import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Screen01(props) {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            width: '90%',
            textAlign: 'center',
          }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View style={{ flex: 4, alignItems: 'center' }}>
        <View
          style={{
            width: '80%',
            height: 400,
            alignItems: 'center',
            backgroundColor: '#E941411A',
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <View style={{ width: 220, height: 210 }}>
            <Image
              source={require('../../blueDetatil1.png')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            height: 60,
          }}>
          <Text
            style={{
              fontSize: 20,
              width: 150,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            POWER BIKE SHOP
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Pressable
          style={{
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#E94141',
          }}
          onPress={() => navigate('Screen02')}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
