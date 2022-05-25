import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import data from "../../services/data";
import Card from "../../components/Card";
import styles from "./styles";

export default function Chat() {
  const renderItem = ({ item }: any) => <Card data={item} />;
  return (
    <ImageBackground
      source={require("../../assets/fundo.png")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.rowSearch}>
          
        <Text style={styles.title}> Meu Treino</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}