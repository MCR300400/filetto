<template>
    <div class="game-view">
      <div class="content-container">
        <div class="sidebar">
          <div class="player-input">
            <input v-model="player1Name" placeholder="Nome Giocatore X" />
            <input v-model="player2Name" placeholder="Nome Giocatore O" />
            <button @click="startGame">Inizia</button>
          </div>
  
          <div v-if="gameStarted">
            <h2>Punteggi</h2>
            <table class="scoreboard">
              <thead>
                <tr>
                  <th>Giocatore</th>
                  <th>Punteggio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ player1Name || 'Giocatore X' }}</td>
                  <td>{{ scores.player1 }}</td>
                </tr>
                <tr>
                  <td>{{ player2Name || 'Giocatore O' }}</td>
                  <td>{{ scores.player2 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div class="game-area">
          <div v-if="gameStarted">
            <div class="board">
              <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
                <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="makeMove(rowIndex, colIndex)">
                  {{ cell }}
                </div>
              </div>
            </div>
            <p class="message">{{ message }}</p>
            <button v-if="gameOver" class="btn" @click="restartGame">Ricomincia</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    name: 'GameView',
    data() {
      return {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        playerTurn: 'X',
        message: '',
        gameOver: false,
        gameStarted: false,
        player1Name: '',
        player2Name: '',
        scores: {
          player1: 0,
          player2: 0
        }
      };
    },
    methods: {
      startGame() {
        if (!this.player1Name || !this.player2Name) {
          alert('Inserisci i nomi di entrambi i giocatori!');
          return;
        }
        this.gameStarted = true;
        this.restartGame();
      },
      makeMove(row, col) {
        if (this.board[row][col] || this.gameOver) return;
  
        this.board[row][col] = this.playerTurn;
        if (this.checkWinner()) {
          this.message = `Giocatore ${this.playerTurn} ha vinto!`;
          this.gameOver = true;
          if (this.playerTurn === 'X') {
            this.scores.player1 += 1;
          } else {
            this.scores.player2 += 1;
          }
        } else if (this.board.flat().every(cell => cell)) {
          this.message = 'Pareggio!';
          this.gameOver = true;
        } else {
          this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
          this.message = `Tocca a ${this.playerTurn}`;
        }
      },
      checkWinner() {
        const winPatterns = [
          // Righe
          [[0, 0], [0, 1], [0, 2]],
          [[1, 0], [1, 1], [1, 2]],
          [[2, 0], [2, 1], [2, 2]],
          // Colonne
          [[0, 0], [1, 0], [2, 0]],
          [[0, 1], [1, 1], [2, 1]],
          [[0, 2], [1, 2], [2, 2]],
          // Diagonali
          [[0, 0], [1, 1], [2, 2]],
          [[0, 2], [1, 1], [2, 0]]
        ];
  
        return winPatterns.some(pattern => {
          const [a, b, c] = pattern;
          return this.board[a[0]][a[1]] &&
                 this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
                 this.board[a[0]][a[1]] === this.board[c[0]][c[1]];
        });
      },
      restartGame() {
        this.board = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ];
        this.playerTurn = 'X';
        this.message = `Tocca a ${this.playerTurn} iniziare!`;
        this.gameOver = false;
      }
    }
  }
  </script>
  
  
  
  
  <style scoped>
  .game-view {
    display: flex;
    justify-content: center; /* Centratura orizzontale del contenuto */
    align-items: center;     /* Centratura verticale del contenuto */
    height: 100vh;           /* Altezza della viewport */
    padding: 20px;
  }
  
  .content-container {
    display: flex;
    justify-content: center; /* Centratura orizzontale del contenuto */
    align-items: center;     /* Centratura verticale del contenuto */
    gap: 20px;               /* Spazio tra la sidebar e la griglia di gioco */
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .player-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .player-input input {
    margin: 5px;
    padding: 5px;
    font-size: 16px;
  }
  
  .player-input button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .player-input button:hover {
    background-color: #3e8e41;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    gap: 1px;
  }
  
  .cell {
    border: 1px solid black;
    width: 150px;
    height: 150px;
    text-align: center;
    font-size: 48px;
    line-height: 150px;
    cursor: pointer;
  }
  
  .message {
    font-size: 1.5rem;
    margin-top: 10px;
  }
  
  .btn {
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #3e8e41;
  }
  
  .scoreboard {
    margin-top: 20px;
    border-collapse: collapse;
    width: 200px;
  }
  
  .scoreboard th, .scoreboard td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .scoreboard th {
    background-color: #f4f4f4;
  }
  </style>
  