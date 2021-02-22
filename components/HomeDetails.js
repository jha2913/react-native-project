
import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, CheckBox, Button } from "react-native";
import { DATA } from '../shared/list2';

const Item = ({ item, onPress, style }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image source={require('../Image/smile2.jpg')}
      style={{ width: 260, height: 220 }} />
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>

);

const HomeDetails = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isSelected, setSelection] = useState(false);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "royalblue" : "gold";

    return (

      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (

    <SafeAreaView style={styles.container}>

      {/* <Image source={require('../Image/mm.jpg')}
      style={{margin: 0, width: 130, height: 150}} /> */}


<CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        extraData={selectedId}
      >
        
      </FlatList>
      <Button
        title="테스트시작"
        onPress={() => { navigation.navigate("List") }}
        color="purple"
        style={{ width: 300, height: 200 }} />

    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 50,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
  },


  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default HomeDetails;
