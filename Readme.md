# 🏃‍♂️ Diário de Exercícios

Este é um aplicativo mobile desenvolvido com **Expo** e **React Native** (utilizando **TypeScript**) para ajudar os usuários a registrar e acompanhar seus exercícios diários. O objetivo é fornecer uma interface simples e intuitiva para adicionar novos treinos e visualizar os detalhes de cada um.

## ✨ Funcionalidades Principais

- **Registro de Exercícios:** Adicione novos exercícios com nome, duração, nível de intensidade e observações.
- **Visualização da Lista:** Veja todos os exercícios cadastrados em uma lista organizada.
- **Detalhes do Exercício:** Acesse informações detalhadas sobre cada treino registrado.
- **Persistência de Dados:** Os exercícios são salvos localmente no dispositivo (usando `AsyncStorage`).

## 📱 Telas do Aplicativo

Aqui estão algumas capturas de tela do aplicativo:

### 1. Tela Inicial - Seus Exercícios

![Tela Inicial - Lista de Exercícios](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_1.jpg)
_Descrição da tela inicial: Exibe a lista de exercícios cadastrados e um botão para adicionar novos._

### 2. Tela de Detalhes - Exercício Individual

![Tela de Detalhes do Exercício](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_3.jpg)
_Descrição da tela de detalhes: Mostra informações completas de um exercício selecionado, como duração, nível e observações._

### 3. Tela de Adicionar Novo Exercício

![Tela de Adicionar Exercício](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_2.jpg)
_Descrição da tela de adição: Permite ao usuário preencher os dados para cadastrar um novo exercício, incluindo a seleção do nível via ActionSheet._

**Observação:** A pasta `docs` mencionada nos caminhos das imagens (`/docs/`) é uma convenção comum para armazenar arquivos de documentação, incluindo imagens. Você precisará criar essa pasta e colocar suas imagens lá.

## 🚀 Como Executar o Projeto

Para executar este projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão 18.x ou superior recomendada)
- npm ou Yarn
- Expo CLI (`npm install -g expo-cli` ou `yarn global add expo-cli`)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/carolferre1ra/diario-exercicios-expo.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-projeto-exercicios
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Inicie o servidor de desenvolvimento do Expo:**
    ```bash
    npx expo start
    # ou
    yarn start
    ```
5.  **Abra o aplicativo:**
    - Use um emulador de Android/iOS.
    - Leia o QR code com o aplicativo Expo Go no seu celular.
    - Pressione `w` para abrir no navegador web (opcional).


## 🧪 Diferença entre Testes Unitários e Testes End-to-End (E2E) em Aplicações Mobile

Em aplicações mobile, diferentes tipos de testes são utilizados para garantir a qualidade e estabilidade do código. Os dois principais são:

## ✅ Testes Unitários

Testes unitários verificam o funcionamento isolado de pequenas partes do código, como funções, hooks ou componentes. Eles são rápidos e ajudam a detectar falhas lógicas em partes específicas da aplicação sem depender da interface ou de recursos externos.

## ✅ Testes End-to-End (E2E)

Testes E2E simulam o comportamento do usuário e validam o funcionamento da aplicação como um todo, do início ao fim. Eles verificam se todos os componentes interagem corretamente entre si, passando pela interface, navegação, armazenamento de dados e outros serviços.

## 🧹 Testes Unitários Implementados

Utilizamos a biblioteca @testing-library/react-native para realizar testes unitários nos componentes da aplicação.

## ✔️ Componentes testados

- **ExerciseItem:**  
  Verifica se nome, duração, nível e data do exercício são renderizados corretamente;  
  Simula clique no item e testa se navega para a tela correta;

- **InputControl:**  
  Verifica se o placeholder e valor aparecem corretamente;  
  Simula digitação e testa se onChangeText é chamado;

- **AddButton:**  
  Verifica se o botão com texto "➕ Adicionar" aparece;  
  Testa se o botão leva para a tela correta (rota /add);

- **ExercicioDetalhes:**  
  Testa a exibição completa das informações de um exercício individual;


## 🔍 Arquivos de teste

_tests_/ExerciseItem.test.tsx

_tests_/InputControl.test.tsx

_tests_/AddButton.test.tsx

_tests_/ExercicioDetalhes.test.tsx


## ⚙️ Instalação de Dependências e Execução dos Testes

**📦 Bibliotecas Utilizadas**

@testing-library/react-native

jest

jest-expo

@testing-library/jest-native

## Como Instalar as Dependências

Execute os comandos abaixo na raiz do projeto:
# Instale as dependências do projeto
npm install
# ou
yarn install

# Garanta que as bibliotecas de teste estejam instaladas
npm install --save-dev @testing-library/react-native jest jest-expo @testing-library/jest-native
# ou
yarn add --dev @testing-library/react-native jest jest-expo @testing-library/jest-native

## ▶️ Como Executar os Testes
yarn test
# ou
npm test

O Jest irá automaticamente encontrar e executar os arquivos com padrão *.test.tsx.
## 📱 Ambiente de Execução dos Testes

Os testes unitários são executados em ambiente de desenvolvimento via terminal, sem a necessidade de emulador Android ou iOS. Não é necessário rodar o app em um dispositivo ou emulador para executar os testes.

## 🛠 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TypeScript](https://www.typescriptlang.org/)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/usage)
- [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet)
- [uuid](https://www.npmjs.com/package/uuid) (para geração de IDs únicos)

## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido com ❤️ por [Caroline Ferreira/ carolferre1ra]
