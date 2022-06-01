import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, SairScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.DeepPink,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.DeepPinkLight,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Meu treino"
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="clock-time-nine-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          TabBarIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}