import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  createDataRequest,
  updateDataRequest,
  deleteDataRequest,
} from './action';

export const ToDoApp = () => {
  const [title, setTitle] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleAddJob = () => {
    dispatch(createDataRequest({ name: title }));
    setTitle('');
  };

  const handleUpdate = () => {
    dispatch(updateDataRequest(updateId, { name: title }));
    setTitle('');
    setUpdateId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteDataRequest(id));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: 60,
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 30 }}>To Do App</Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '75%',
            borderWidth: 1,
            borderColor: '#222',
            height: 30,
            paddingHorizontal: 10,
          }}>
          <TextInput
            value={title}
            placeholder="Enter your to do..."
            style={{ height: '100%', outlineStyle: 'none' }}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <Button
          color="lightblue"
          title={updateId ? 'Update' : 'Create'}
          onPress={updateId ? handleUpdate : handleAddJob}
        />
      </View>

      {/** list cong viec */}
      {data.length > 0 ? (
        <FlatList
          style={{ width: '90%' }}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{ width: '100%', height: 40, justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
              <Text>{item.name}</Text>
               <View style={{ flexDirection: 'row',gap:10 }}>
              <Button color="green" title="Update" onPress={() => { setTitle(item.name); setUpdateId(item.id); }} />
              <Button color="gray" title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
            </View>
          )}
        />
      ) : (
        <View>
          <Text>Not job for to day</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
