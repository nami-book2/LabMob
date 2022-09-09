import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    buttonTopPosition: {
        position:  "absolute",
        top: "5%",
        right: "5%",
    },
    textClose: {
        color:colors.white,
        fontSize: 20,
    },
    collumPreviewVisible: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
    },
    rowPreviewVisible: {
        flexDirection: "row",
        justifyContent:"space-between",
    },
    buttonPreviewVisible: {
        width: 130,
        height: 40,
        alignItems: "center",
        borderRadius: 4,
    },
    textPreviewVisible: {
        color: colors.white,
        fontSize: 20,
    },
    buttonStartOver: {
        width: 130,
        borderRadius: 4,
        backgroundColor: colors.red,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        height: 40,
    },
    textStartOver: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
    },
    startOver: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default style