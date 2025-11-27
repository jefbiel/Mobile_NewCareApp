#  Mobile NewCare.

##  Integrantes do Grupo
- **Gilson Dias Ramos Júnior** — RM552345  
- **Gustavo Beserra Assumção** — RM553076  
- **Jeferson Gabriel de Mendonça** — RM553149  
- **Larissa Estella Gonçalves dos Santos** — RM552695  

---

## Funcionalidades do Projeto
-  **Autenticação**: Tela de login com validação de formulário (usuário e senha obrigatórios) e feedback de erro.  
-  **Navegação**: Abas *Início*, *Hábitos* e *Ajustes* com React Navigation (Bottom Tabs + Stack).  
-  **Hábitos**: Lista de hábitos, registro de progresso diário e visualização de evolução com barra de progresso.  
-  **Persistência**: Armazenamento local de hábitos e progresso via AsyncStorage.  
-  **Componentes reutilizáveis**: Card, Header, ProgressBar, QuickActions e EmptyState.  
-  **Configurações**: Tela de ajustes para preferências de usuário (tema, notificações, unidade de medida).  
-  **Acessibilidade básica**: Títulos claros, áreas clicáveis com feedback, contraste e rolagem adequada.  

---

## 📦 Requisitos e Dependências

Instale as dependências abaixo para que o projeto funcione corretamente:


# React Navigation (núcleo, stack e tabs)
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Peer-dependencies para navegação (inclui safe-area)
npm install react-native-screens react-native-safe-area-context

# AsyncStorage e Picker
npm install @react-native-async-storage/async-storage @react-native-picker/picker

# Ícones e tipos para desenvolvimento
npm install react-native-vector-icons
npm install --save-dev @types/react-native-vector-icons

# React Navigation (núcleo, stack e tabs)
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Peer-dependencies para navegação (inclui safe-area)
npm install react-native-screens react-native-safe-area-context

# AsyncStorage e Picker
npm install @react-native-async-storage/async-storage @react-native-picker/picker

# Ícones e tipos para desenvolvimento
npm install react-native-vector-icons
npm install --save-dev @types/react-native-vector-icons


# 📱 Mobile NewCare

## 👥 Integrantes do Grupo
- **Gilson Dias Ramos Júnior** — RM552345  
- **Gustavo Beserra Assumção** — RM553076  
- **Jeferson Gabriel de Mendonça** — RM553149  
- **Larissa Estella Gonçalves dos Santos** — RM552695  

---

## 🚀 Funcionalidades do Projeto
- **Autenticação**: Tela de login com validação de formulário e feedback de erro.  
- **Navegação**: Abas *Início*, *Hábitos* e *Ajustes* com React Navigation (Bottom Tabs + Stack).  
- **Hábitos**: Lista de hábitos, registro de progresso diário e visualização de evolução com barra de progresso.  
- **Persistência**: Armazenamento local via AsyncStorage.  
- **Componentes reutilizáveis**: Card, Header, ProgressBar, QuickActions e EmptyState.  
- **Configurações**: Preferências de usuário (tema, notificações, unidade de medida).  
- **Acessibilidade básica**: Títulos claros, áreas clicáveis com feedback, contraste e rolagem adequada.  

---

## Dependências Principais
O projeto já possui todas as dependências listadas no `package.json`.  
Após o `git clone`, basta rodar `npm install` ou `yarn install`.

- **React Navigation**: `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`  
- **Peer dependencies**: `react-native-screens`, `react-native-safe-area-context`  
- **Armazenamento**: `@react-native-async-storage/async-storage`  
- **Picker**: `@react-native-picker/picker`  
- **Ícones**: `react-native-vector-icons` (+ `@types/react-native-vector-icons` para desenvolvimento)  
- **Gradle Plugin**: `@react-native/gradle-plugin` (necessário para builds Android)  

---

## 🛠️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repo>
   cd MobileNewCareApp
