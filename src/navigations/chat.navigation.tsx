import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen, EnviarMensagemScreen } from "../screens";
import { ChatStackParamList } from "../types/Screen.types";


const Stack = createStackNavigator<ChatStackParamList>();

export default function ChatNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="EnviarMensagem" component={EnviarMensagemScreen} />
    </Stack.Navigator>
  );
}