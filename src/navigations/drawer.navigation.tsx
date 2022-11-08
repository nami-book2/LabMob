import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { VideoAudioScreen, AcelerometroScreen, PedometroScreen, MagnetoScreen, GiroscopioScreen } from "../screens";
import { MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";


const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.green },
                headerTintColor: colors.black,
                drawerStyle: {
                    backgroundColor: colors.green,
                },
                drawerInactiveTintColor: colors.black,
                drawerActiveTintColor: colors.black,
            }}
        >
            <Drawer.Screen
                name="VideoAudio"
                component={VideoAudioScreen}
                options={{
                    drawerLabel: "Video Audio ",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="car"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
             <Drawer.Screen
                name="Magneto"
                component={MagnetoScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                        <FontAwesome
                            name="magnet"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedômetro",
                    drawerIcon: () => (
                        <Foundation
                            name="foot"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Giroscopio"
                component={GiroscopioScreen}
                options={{
                    drawerLabel: "Gyroscópio",
                    drawerIcon: () => (
                        <FontAwesome
                            name="balance-scale"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}