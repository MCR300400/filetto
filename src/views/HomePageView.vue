<template>
    <div class="home-page">
      <img src="https://www.dmail.it/on/demandware.static/-/Sites-dret-catalog/default/dw03fffc72/images_dmail/large/DIE000665NOC_s1.jpg.jpg" alt="Logo Filetto" class="logo">
      <h1 class="title">Filetto</h1>
      <p class="subtitle">Sfida i tuoi amici!</p>
      <button class="btn" @click="startGame">Inizia a Giocare</button>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'HomePageView',
    methods: {
      startGame() {
        this.$router.push('/game');
      }
    }
  }
  </script>
  
  
  <style>
  .home-page {
    background: linear-gradient(to right, #ffffff, #ffffff);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  
  .logo {
    /* Maximum width of 60px */
    max-width: 60px;
    animation: spin 2s infinite linear;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .title {
    font-size: 5rem;
    color: #f00;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  .subtitle {
    color: #333;
  }
  
  .btn {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #3e8e41;
  }
  
  .cards-preview {
    display: flex;
    margin-top: 20px;
  }
  
  .card {
    width: 100px;
    height: 150px;
    margin: 0 10px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  </style>
  