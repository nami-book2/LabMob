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
  },
  button: {
    position:"absolute",
    bottom:0,
    right:0,
    backgroundColor:colors.BlueViolet,
    width:50,
    height:50,
    borderRadius:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText: {
    color: colors.white,
    fontSize:28,
    fontWeight:"bold",
  },
})

export default styles;