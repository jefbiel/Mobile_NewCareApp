// Utilitário para mapear categorias/ícones para assets
export const CATEGORY_ICON_KEY: Record<string, string> = {
  sono: 'sleep',
  exercicios: 'running',
  alimentacao: 'nutrition',
  hidratacao: 'water',
  mente: 'brain',
  exames: 'terms-and-conditions',
};

export function iconKeyForCategory(category: string) {
  return CATEGORY_ICON_KEY[category] || 'appointment';
}

export function iconAssetForKey(key?: string) {
  switch (key) {
    case 'sleep':
      return require('../assets/images/sleep.png');
    case 'running':
      return require('../assets/images/running.png');
    case 'nutrition':
      return require('../assets/images/nutrition.png');
    case 'water':
      return require('../assets/images/water.png');
    case 'brain':
      return require('../assets/images/brain.png');
    case 'terms-and-conditions':
      return require('../assets/images/terms-and-conditions.png');
    default:
      return require('../assets/images/appointment.png');
  }
}

export default iconAssetForKey;
