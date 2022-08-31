import React from "react";
import { Text, View, Image } from "react-native";
import { IMensagemState } from "../../interfaces/Mensagem.Interface";
import styles from "./styles";
import { format } from "date-fns";

export default function Card({ data }: IMensagemState) {
  return (
    <View style={styles.card}>
      <Text>
        {data.user.nome} - {" "}
        {format(new Date(data.Created_at), "dd/MM/yyyy HH:mm:ss")}
      </Text>
      <View style={styles.card}>
        <Text>Treino {data.titulo}</Text>
        <Text>Repetições {data.mensagem}</Text>
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
