import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    textDecorationColor: colors.white,
    backgroundColor: colors.greenLight,
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
    backgroundColor: colors.green,
    margin: 5,
    borderRadius: 5,
    padding: 5
  },
  img: {
    width:100,
    height:100,
  },
})

export default styles