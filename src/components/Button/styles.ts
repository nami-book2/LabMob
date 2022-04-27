import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.greenLight,
    borderRadius: 5,
    margin: 10
  },
  buttonSecondary: {
    backgroundColor: colors.purple,
    borderRadius: 5,
    margin: 10
  },
  buttonThird: {
    backgroundColor: colors.purpleLight,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;