import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    width: '30%',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    borderColor: 'rgba(233, 65, 65, 0.53)',
    borderWidth: 1,
  },
  txtBtn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(190, 182, 182, 1)',
  },
});

export default function Screen02(props) {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const arrImage = {
    'blueDetail.png': require('../../blueDetail.png'),
    'redDetail.png': require('../../redDetail.png'),
    'pinkDetail.png': require('../../pinkDetail.png'),
    'bitwo-removebg-preview.png': require('../../bitwo-removebg-preview.png'),
  };

  const [bikes, setBikes] = useState([]);

  const getData = async (type = 'All') => {
    const BASE_URL =
      'https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/bike';
    const res = await new Promise((resolve) => {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
          switch (type) {
            case 'All': {
              resolve(data);
              break;
            }
            case 'Roadbike': {
              const newData = data.filter((bike) => bike.type == "Roadbike");
              resolve(newData);
              break;
            }
            case 'Mountain': {
              const newData = data.filter((bike) => bike.type == "Mountain");
              resolve(newData);
              break;
            }
          }
        });
    });
    setBikes(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const [active, setActive] = useState({
    All: true,
    Roadbike: false,
    Mountain: false,
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: 50, paddingLeft: 10, paddingTop: 5 }}>
        <Text style={{ fontSize: 18, color: '#E94141', fontWeight: 'bold' }}>
          The world’s Best Bike
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Pressable
          style={[
            styles.btn,
            {
              backgroundColor: active.All == true ? 'yellow' : 'null',
            },
          ]}
          onPress={() => {
            setActive((pre) => {
              return {
                All: true,
                Roadbike: false,
                Mountain: false,
              };
            });
            getData();
          }}>
          <Text style={styles.txtBtn}>All</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              backgroundColor: active.Roadbike == true ? 'yellow' : 'null',
            },
          ]}
          onPress={() => {
            setActive((pre) => {
              return {
                All: false,
                Roadbike: true,
                Mountain: false,
              };
            });
            getData('Roadbike');
          }}>
          <Text style={styles.txtBtn}>RoadBike</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            {
              backgroundColor: active.Mountain == true ? 'yellow' : 'null',
            },
          ]}
          onPress={() => {
            setActive((pre) => {
              return {
                All: false,
                Roadbike: false,
                Mountain: true,
              };
            });
            getData('Mountain');
          }}>
          <Text style={styles.txtBtn}>Mountain</Text>
        </Pressable>
      </View>
      <View style={{ flex: 4, alignItems: 'center' }}>
        <FlatList
          data={bikes}
          renderItem={({ item }) => (
            <Pressable
              style={{
                width: 167,
                height: 200,
                backgroundColor: 'rgba(247, 186, 131, 0.15)',
                borderRadius: 6,
                marginHorizontal: 5,
                marginVertical: 5,
                padding: 10,
              }}
              onPress={() => navigate('Screen03', data={...item})}>
              <View
                style={{
                  position: 'absolute',
                  width: 20,
                  height: 20,
                  top: 5,
                  left: 5,
                }}>
                <Image
                  source={require('../../akar-icons_heart.png')}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: '65%',
                  justifyContent: 'center',
                }}>
                <Image source={arrImage[item.img]} />
              </View>
              <View
                style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginBottom: 4,
                  }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  ${item.price}
                </Text>
              </View>
            </Pressable>
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
