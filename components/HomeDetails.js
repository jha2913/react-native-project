
import React, { useState } from "react";
import { View, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, CheckBox, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DATA } from '../shared/list2';

const Item = ({ item, onPress, style, navigation }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Image source={require('../Image/smile2.jpg')}
      style={{width: 260, height: 220}} />
      <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>

);

const HomeDetails = ({ route, navigation }) => {
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
      <ScrollView>
    
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
      />

      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />

      <View style={styles.container}>
      <View style={styles.checkboxContainer}>
      <Text style={styles.label}></Text>
      <Image source={require('../Image/mm.jpg')}
      style={{margin: 0, width: 330, height: 550}} />
      </View>
    </View>

        </ScrollView>
        <Button
        title="테스트시작"
        onPress={() => { navigation.navigate("List") }}
        color="purple"
        style={{width:300, height: 200}} />
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
