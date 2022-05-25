import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    textDecorationColor: colors.white,
    backgroundColor: colors.orange,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.orangeLight,
    margin: 5,
    borderRadius: 5,
    padding: 5
  }
})

export default styles