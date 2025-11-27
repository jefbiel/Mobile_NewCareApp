import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/theme';

// Este arquivo configura a navegação do app:
// - define as abas da barra inferior (ícones e telas);
// - define a pilha principal (tela de Login -> abas principais).

// Componentes pequenos que retornam imagens usadas como ícones das tabs.
// Eles recebem a cor e o tamanho que o sistema de navegação pede.
const HomeIcon = ({ color, size }: { color: string; size: number }) => {
  const iconStyle = { width: size, height: size, tintColor: color };
  return <Image source={require('../assets/images/home.png')} style={iconStyle} />;
};

const HabitsIcon = ({ color, size }: { color: string; size: number }) => {
  const iconStyle = { width: size, height: size, tintColor: color };
  return <Image source={require('../assets/images/habits.png')} style={iconStyle} />;

};

// (ícones para tabs restantes)

const SettingsIcon = ({ color, size }: { color: string; size: number }) => {
  const iconStyle = { width: size, height: size, tintColor: color };
  return <Image source={require('../assets/images/setting.png')} style={iconStyle} />;
};

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HabitoScreen';
import InicioScreen from '../screens/InicioScreen';
// telas `DesafiosScreen`, `ExameScreen` e `TextosScreen` foram removidas.
import SettingsScreen from '../screens/AjustesScreen';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type TabParamList = {
  InicioScreen: undefined;
  Home: undefined;
  Ajustes?: undefined;
};

const Tabs = createBottomTabNavigator<TabParamList>();

// Navegador de tabs principal da aplicação
function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
      }}
    >
      <Tabs.Screen name="InicioScreen" component={InicioScreen} options={{ tabBarIcon: HomeIcon, tabBarLabel: 'Início' }} />
      <Tabs.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: HabitsIcon, tabBarLabel: 'Hábitos' }} />
      {/* As abas Desafios e Exames foram removidas */}
     
      <Tabs.Screen name="Ajustes" component={SettingsScreen} options={{ tabBarIcon: SettingsIcon }} />
    </Tabs.Navigator>
  );
}

// Navegador raiz que gerencia a navegação entre a tela de login e as tabs principais
export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
