import React from "react";
import { View } from "react-native";
import { CardSocialComp } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function CardSocial({ children }: CardSocialComp) {
  return <View style={styles.cardSocial}>{children}</View>;
}