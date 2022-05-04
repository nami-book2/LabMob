import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    fontFamily:'Kodchasan sans-serif',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  title: {
    fontfamily: 'Kodchasan sans-serif',
    fontSize: 30,
    fontWeight:"100",
    color: colors.black,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  input: {
    fontSize: 20
  }
})
export default styles;