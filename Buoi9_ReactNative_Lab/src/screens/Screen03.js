import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

const arrImage = {
    'blueDetail.png': require('../../blueDetail.png'),
    'redDetail.png': require('../../redDetail.png'),
    'pinkDetail.png': require('../../pinkDetail.png'),
    'bitwo-removebg-preview.png': require('../../bitwo-removebg-preview.png'),
  };

export default function Screen03(props) {
  const [tym, setTym] = useState(false);
  const [defaultBike, setDefaultBike] = useState(props.route.params || {
    img: require("../../redPreview.png"),
    name: ' Pina Mountain', 
    price: 499
  })
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={arrImage[defaultBike.img] || defaultBike.img} />
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ height: 80, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {defaultBike.name}
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.59)',
              }}>
              15% OFF I {defaultBike.price * 0.15}$
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textDecoration: 'line-through',
              }}>
              ${defaultBike.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Description</Text>
          <Text
            style={{
              fontSize: 16,
              marginVertical: 10,
              color: 'rgba(0, 0, 0, 0.57)',
            }}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={() => setTym(!tym)}>
            <Image
            source={require('../../akar-icons_heart.png')}
            style={{
              width: 20,
              height: 20,
              backgroundColor: tym == true ? 'pink' : 'transparent',
            }}  
          />
          </Pressable>
          
          <Pressable
            style={{
              width: '80%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              backgroundColor: 'rgba(233, 65, 65, 1)',
            }}
            onPress={() => navigate('Screen02')}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
              Add to cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
