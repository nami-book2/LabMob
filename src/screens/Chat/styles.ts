import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    width: "95%",
    height: 65,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    padding: 5
  }
})

export default styles;