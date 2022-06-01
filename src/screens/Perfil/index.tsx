import React from "react";
import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import CardSocial from "../../components/Card.Social";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import styles from "./styles";
import { ButtonComp, CardSocialComp } from "../../components";
import { useAuth } from "../../hook/auth";

export default function Perfil() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/lazaro.png")} />
        <Text style={styles.title}>{user?.name}</Text>
        <CardSocialComp>
          <>
          <MaterialCommunityIcons name="weight-kilogram" color="black" />
            <TextInput placeholder="Peso:" />
          </>
        </CardSocialComp>
        <CardSocialComp>
          <>
          <MaterialCommunityIcons name="human-male-height-variant" color="black" />
            <TextInput placeholder="Altura:" />
          </>
        </CardSocialComp>
        <CardSocialComp>
          <>
          <Fontisto name="date" color="black" />
            <TextInput placeholder="Data de nascimento:" />
          </>
        </CardSocialComp>
        <ButtonComp
          title="Salvar"
          type="green"
          onPress={() => console.log("Salvar")}
        />
        <ButtonComp
          title="Alterar Senha"
          type="red"
          onPress={() => console.log("Alterar Dados")}
        />
        <ButtonComp title="Voltar" type="DeepPink" onPress={() => console.log("Voltar")} />
      </ImageBackground>
    </View>
  );
}