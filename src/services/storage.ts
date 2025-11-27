import AsyncStorage from '@react-native-async-storage/async-storage';

// Salva um valor no armazenamento local usando uma chave específica
export async function saveItem(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {}
}

// Busca um valor salvo pela chave. Retorna null se der erro.
export async function getItem(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

// Remove um item armazenado pela chave
export async function removeItem(key: string) {
  try { 
    await AsyncStorage.removeItem(key); 
  } catch {}
}

// Limpa completamente todos os dados do AsyncStorage
export async function clearAll() {
  try { 
    await AsyncStorage.clear(); 
  } catch {}
}

// Tenta anexar uma linha de log em um arquivo `text.txt` no dispositivo usando react-native-fs.
// Se RNFS não estiver disponível, grava um array de logs em AsyncStorage na chave '@samvita:progressLog'.
export async function appendProgressLog(line: string) {
  try {
    // require dinamicamente para não quebrar ambientes que não têm o módulo
    const RNFS: any = require('react-native-fs');
    const path = `${RNFS.DocumentDirectoryPath}/text.txt`;
    const exists = await RNFS.exists(path);
    if (exists) {
      await RNFS.appendFile(path, line + '\n', 'utf8');
    } else {
      await RNFS.writeFile(path, line + '\n', 'utf8');
    }
  } catch {
    try {
      const key = '@samvita:progressLog';
      const raw = await AsyncStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push({ time: Date.now(), text: line });
      await AsyncStorage.setItem(key, JSON.stringify(arr));
    } catch {}
  }
}
