import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

// Componente ProgressBar que exibe uma barra de progresso baseada na prop 'progress'.
export default function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.max(0, Math.min(progress, 1));

  // Estilo dinâmico para a largura da barra interna baseado no progresso
  const innerStyle: any = { width: `${pct * 100}%` };
  return (
    <View style={styles.outer}>
      <View style={[styles.inner, innerStyle]} />
    </View>
  );
}

// Estilos do componente ProgressBar
const styles = StyleSheet.create({
  outer: { width: '100%', height: 12, backgroundColor: colors.bg, borderRadius: 8, overflow: 'hidden' },
  inner: { height: '100%', backgroundColor: colors.primary },
});
