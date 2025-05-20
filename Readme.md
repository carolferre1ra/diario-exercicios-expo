# 🏃‍♂️ Diário de Exercícios

Este é um aplicativo mobile desenvolvido com **Expo** e **React Native** (utilizando **TypeScript**) para ajudar os usuários a registrar e acompanhar seus exercícios diários. O objetivo é fornecer uma interface simples e intuitiva para adicionar novos treinos e visualizar os detalhes de cada um.

## ✨ Funcionalidades Principais

* **Registro de Exercícios:** Adicione novos exercícios com nome, duração, nível de intensidade e observações.
* **Visualização da Lista:** Veja todos os exercícios cadastrados em uma lista organizada.
* **Detalhes do Exercício:** Acesse informações detalhadas sobre cada treino registrado.
* **Persistência de Dados:** Os exercícios são salvos localmente no dispositivo (usando `AsyncStorage`).

## 📱 Telas do Aplicativo

Aqui estão algumas capturas de tela do aplicativo:

### 1. Tela Inicial - Seus Exercícios
![Tela Inicial - Lista de Exercícios](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_1.jpg)
*Descrição da tela inicial: Exibe a lista de exercícios cadastrados e um botão para adicionar novos.*

### 2. Tela de Detalhes - Exercício Individual
![Tela de Detalhes do Exercício](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_3.jpg)
*Descrição da tela de detalhes: Mostra informações completas de um exercício selecionado, como duração, nível e observações.*

### 3. Tela de Adicionar Novo Exercício
![Tela de Adicionar Exercício](https://raw.githubusercontent.com/carolferre1ra/diario-exercicios-expo/main/docs/tela_2.jpg)
*Descrição da tela de adição: Permite ao usuário preencher os dados para cadastrar um novo exercício, incluindo a seleção do nível via ActionSheet.*

**Observação:** A pasta `docs` mencionada nos caminhos das imagens (`/docs/`) é uma convenção comum para armazenar arquivos de documentação, incluindo imagens. Você precisará criar essa pasta e colocar suas imagens lá.

## 🚀 Como Executar o Projeto

Para executar este projeto em seu ambiente local, siga os passos abaixo:

### Pré-requisitos
* Node.js (versão 18.x ou superior recomendada)
* npm ou Yarn
* Expo CLI (`npm install -g expo-cli` ou `yarn global add expo-cli`)

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
    * Use um emulador de Android/iOS.
    * Leia o QR code com o aplicativo Expo Go no seu celular.
    * Pressione `w` para abrir no navegador web (opcional).

## 🛠 Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [TypeScript](https://www.typescriptlang.org/)
* [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/usage)
* [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet)
* [uuid](https://www.npmjs.com/package/uuid) (para geração de IDs únicos)

## 📝 Licença

Este projeto está licenciado sob a licença MIT.

---
Desenvolvido com ❤️ por [Caroline Ferreira/ carolferre1ra]