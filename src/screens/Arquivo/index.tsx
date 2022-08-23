import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import styles from "./styles"

export default function ImagePickerExemple() {
    const [image, setImage] = useState<null | string>(null);

    useEffect(() =>{
        (async () => {
          if (Platform.OS !== "web") {
              const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== "granted") {
                  Alert.alert("Voce precisa dar permissão para acessar suas imagens!");
              }
          }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect:[4,3],
          quality:1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleCloseFile = () => {
        setImage(null);
    };

    return (
      <View style={styles.container}>
        {image ? (
          <ImageBackground source={{ uri: image }} style={styles.container}>
            <View style={styles.butonnTopPosition}>
              <TouchableOpacity onPress={handleCloseFile}>
                <Text style={styles.textClose}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.collumPreviewVisible}>
              <View style={styles.rowPreviewVisible}>
                <TouchableOpacity
                    onPress={() => pickImage()}
                    style={styles.buttonPreciewVisible}
                >
                    <Text style={styles.textPreviewVisible}>Novo arquivo</Text>        
                </TouchableOpacity>
              </View>    
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.startOver}>
              <TouchableOpacity
                onPress={() =>pickImage()}
                style={styles.buttonStartOver}
              >
                <Text style={styles.textStartOver}>Abrir arquivo</Text>
              </TouchableOpacity>
          </View>

        )}
      </View>
    );
}