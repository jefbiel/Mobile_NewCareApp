Integrantes do grupo
Integrante: GILSON DIAS RAMOS JÚNIOR — RM552345

Integrante: GUSTAVO BESERRA ASSUMÇÃO — RM553076

Integrante: JEFERSON GABRIEL DE MENDONÇA — RM553149

Integrante: LARISSA ESTELLA GONÇALVES DOS SANTOS — RM552695

Funcionalidades do projeto

Autenticação: Tela de login com validação de formulário (usuário e senha obrigatórios) e feedback de erro.

Navegação: Abas “Início”, “Hábitos” e “Ajustes” com React Navigation (Bottom Tabs + Stack).

Hábitos: Lista de hábitos, registro de progresso diário e visualização de evolução com barra de progresso.

Persistência: Armazenamento local de hábitos e progresso via AsyncStorage.

Componentes reutilizáveis: Card, Header, ProgressBar, QuickActions e EmptyState.

Configurações: Tela de ajustes para preferências de usuário (tema, notificações, unidade de medida).

Acessibilidade básica: Títulos claros, áreas clicáveis com feedback, contraste e rolagem adequada.

Requisitos e dependências
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