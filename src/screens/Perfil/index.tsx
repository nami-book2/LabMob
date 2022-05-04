import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/Card.Social";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/lazaro.png")} />
        <Text style={styles.title}>Nicole Mendonça</Text>
        <CardSocial>
          <>
          <MaterialCommunityIcons name="weight-kilogram" size={24} color="black" />
            <TextInput placeholder="Peso:" />
          </>
        </CardSocial>
        <CardSocial>
          <>
          <MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />
            <TextInput placeholder="Altura:" />
          </>
        </CardSocial>
        <CardSocial>
          <>
          <Fontisto name="date" size={24} color="black" />
            <TextInput placeholder="Data de nascimento:" />
          </>
        </CardSocial>
        <Button
          title="Salvar"
          type="green"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="purple"
          onPress={() => console.log("Alterar Dados")}
        />
        <Button title="Voltar" type="purple" onPress={() => console.log("Voltar")} />
      </ImageBackground>
    </View>
  );
}