# 📱 Guia de Criação de Projetos React Native com Expo

Este repositório é utilizado para armazenar as atividades da disciplina **PROGRAMAÇÃO DE APP**.  
Aqui você encontra um passo a passo simples e padronizado para criar novos projetos com **React Native** utilizando o **Expo**.

---

## 🚀 O que é Expo?

O **Expo** é um framework e plataforma que facilita o desenvolvimento de aplicativos móveis com **React Native**.  
Ele oferece uma CLI própria, diversos recursos prontos (câmera, notificações, ícones, etc.) e elimina a necessidade de configurar Android Studio ou Xcode para começar.

Com o Expo, você pode criar, rodar e testar seus apps de forma muito mais rápida.  

---

## 🛠️ Criando um novo projeto

Siga sempre os passos abaixo quando for iniciar um novo projeto.

### 1️⃣ Criar o projeto
```bash
npx create-expo-app nome-do-projeto --template blank-typescript
```
> Troque `nome-do-projeto` pelo nome desejado.  
> O parâmetro `--template blank-typescript` usa o template padrão (TypeScript).

---

### 2️⃣ Acessar a pasta do projeto
```bash
cd nome-do-projeto
```

---

### 3️⃣ Iniciar o servidor de desenvolvimento
```bash
npx expo start
```

Esse comando abre o **Metro Bundler** no navegador.  
Você pode rodar o app em:
- **Dispositivo físico** → escaneando o QR Code com o aplicativo **Expo Go**  
- **Emulador Android/iOS** (se configurado na máquina)

---

## 📂 Estrutura básica de um projeto

```
nome-do-projeto/
 ├── assets/           # Arquivos estáticos (imagens, ícones, fontes)
 ├── node_modules/     # Dependências do projeto
 ├── App.tsx           # Arquivo principal da aplicação
 ├── package.json      # Configurações e scripts do projeto
 ├── tsconfig.json     # Configuração TypeScript
 └── app.json          # Configuração do Expo
```

---

## ⚡ Comandos úteis

- `npx expo start -c` → inicia o projeto limpando o cache  
- `npm install pacote` → adiciona uma nova dependência  
- `npm run lint` → roda o linter (se configurado)

---

---

## 🛠️ Dicas úteis

### 🔄 Resetando dependências
Às vezes o projeto pode quebrar por causa de conflitos ou versões corrompidas.  
Para limpar tudo e reinstalar do zero:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

---

## 📖 Referências

- [Documentação do Expo](https://docs.expo.dev/)  
- [React Native Docs](https://reactnative.dev/)  

--- 