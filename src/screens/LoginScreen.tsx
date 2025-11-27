import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../styles/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  // Estados para armazenar email e senha digitados
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Valida formato básico de e-mail
  const validarEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  // Ação executada ao clicar em "Entrar"
  const handleLogin = () => {
    // Verifica e-mail
    if (!validarEmail(email)) {
      Alert.alert('Informação', 'E-mail inválido.');
      return;
    }

    // Verifica senha
    if (senha.length < 6) {
      Alert.alert('Informação', 'Senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Se estiver tudo certo, redireciona para a área principal
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo do app */}
      <Image
        source={require('../assets/images/newcareLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Saudação (título removido conforme solicitado) */}
      <Text style={styles.subtitle}>Bem-vindo(a)! Faça login para continuar.</Text>

      {/* Campo de e-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Layout principal centralizado
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: colors.bg },

  // Título do app
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8, color: colors.primary },

  // Logo do app (aumentado)
  logo: { width: 320, height: 160, marginBottom: 12, alignSelf: 'center' },

  // Texto informativo abaixo do título
  subtitle: { fontSize: 14, color: colors.muted, marginBottom: 24, textAlign: 'center' },

  // Estilo dos campos de texto
  input: {
    width: '90%',
    height: 48,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.surface,
    marginBottom: 12,
  },

  // Botão de login
  button: { backgroundColor: colors.primary, paddingVertical: 14, paddingHorizontal: 32, borderRadius: 10 },

  // Texto dentro do botão
  buttonText: { color: colors.surface, fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
});
