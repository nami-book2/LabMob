import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interfaces";
import styles from "./styles";

export default function Button({ onPress, type, title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        type == "green"
          ? styles.buttonPrimary
          : type == "purple"
          ? styles.buttonThird
          : styles.buttonSecondary
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}