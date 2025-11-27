import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

type Props = { title: string; description?: string };

export default function Card({ title, description }: Props) {
  return (
    // Container principal do card
    <View style={styles.card}>

      {/* Título do card */}
      <Text style={styles.title}>{title}</Text>

      {/* Renderiza a descrição apenas se ela existir */}
      {description ? <Text style={styles.desc}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: colors.surface, 
    borderRadius: 12, 
    padding: 12,
    borderWidth: 1, 
    borderColor: colors.gray,
  },
  // Estilo do título e da descrição
  title: { fontWeight: 'bold', marginBottom: 6 },
    desc: { color: colors.gray },
});
