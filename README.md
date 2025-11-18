<h1 align="center">
  ♠️ Jogo de 21 (Blackjack Simplificado)
</h1>

<p align="center">
  <strong>Um jogo de cartas interativo desenvolvido com JavaScript Puro (Vanilla JS)</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-regras-do-jogo">Regras</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-autor">Autor</a>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge" alt="Status Concluído">
</div>

<hr>

## 🎲 Sobre o Projeto

Este projeto é uma implementação web do clássico jogo de cartas **21 (Blackjack)**. O objetivo foi praticar lógica de programação, manipulação do DOM e estilização dinâmica. O jogador compete contra o computador (Dealer) para ver quem chega mais perto da soma 21 sem ultrapassar esse valor.

O jogo possui uma interface limpa, responsiva e feedbacks visuais imediatos para as ações do usuário.

---

## ⚙️ Funcionalidades

- [x] **Sistema de Pontuação:** Cálculo automático da soma das cartas em tempo real.
- [x] **Ações do Jogador:**
  - **Comprar Carta (Hit):** Adiciona uma carta à mão do jogador.
  - **Manter Mão (Stand):** Encerra a vez do jogador e passa para o Dealer.
- [x] **Inteligência do Dealer:** O computador joga automaticamente seguindo a regra de "comprar até atingir no mínimo 17".
- [x] **Verificação de Vitória:** Lógica automática para determinar se houve vitória, derrota ou empate.
- [x] **Reiniciar:** Botão para resetar o tabuleiro e começar uma nova partida instantaneamente.
- [x] **Animações:** Efeitos visuais simples ao distribuir as cartas (CSS Keyframes).

---

## 📜 Regras do Jogo (Implementadas)

1. O objetivo é ter uma pontuação maior que a do Dealer, sem ultrapassar **21**.
2. As cartas possuem valores aleatórios entre **1 e 11**.
3. Se o jogador ultrapassar 21 ("Estourar"), ele perde imediatamente.
4. Ao clicar em "Manter Mão", o Dealer revela suas cartas e joga.
5. O Dealer é obrigado a comprar cartas até que sua soma seja **17 ou mais**.

---

## 🚀 Tecnologias Utilizadas

- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML):** Estrutura semântica da aplicação.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilização responsiva, layout flexbox e animações.
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Lógica do jogo, manipulação de estado e eventos do DOM.

---

## 📂 Estrutura de Pastas

```bash
├── style.css             # Estilização do tabuleiro e cartas
├── script.js             # Lógica do jogo (sorteio, pontuação, turnos)
├── index.html            # Interface do usuário
└── .replit               # Arquivo de configuração (se rodar no Replit)
````

-----

## 🔧 Como Executar

Este é um projeto estático e leve, não requer instalação de dependências complexas.

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/LuizHenriqueGon/NOME-DO-REPOSITORIO.git](https://github.com/LuizHenriqueGon/NOME-DO-REPOSITORIO.git)
    ```
2.  **Acesse a pasta do projeto:**
    Navegue até o diretório onde os arquivos foram salvos.
3.  **Abra o jogo:**
    Basta dar um duplo clique no arquivo `index.html` para abri-lo em seu navegador padrão.
