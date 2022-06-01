import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 30,
    fontWeight:"100",
    color: colors.black,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  link: {
    fontSize: 20,
  },
    img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  input: {
    fontSize: 20
  }
})
export default styles;