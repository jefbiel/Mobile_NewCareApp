import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const globalStyles = StyleSheet.create({
  // Estilo base para as telas: usa o fundo definido no tema
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { padding: 16 },
});
