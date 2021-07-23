function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      demonHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },

  methods: {
    startGame() {
      this.playerHealth = 100;
      this.demonHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },

    attackDemon() {
      this.currentRound++;
      const damageValue = getRandomValue(5, 12);
      this.demonHealth -= damageValue;
      this.addLog("player", "attack", damageValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const damageValue = getRandomValue(8, 15);
      this.playerHealth -= damageValue;
      this.addLog("demon", "attack", damageValue);
    },

    specialDemonAttack() {
      this.currentRound++;
      const damageValue = getRandomValue(10, 25);
      this.demonHealth -= damageValue;
      this.addLog("player", "attack", damageValue);
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);

      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.addLog("player", "heal", healValue);
      this.attackPlayer();
    },

    surrender() {
      this.winner = "demon";
      this.playerHealth = 0;
    },

    addLog(who, action, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: action,
        actionValue: value,
      });
    },
  },

  computed: {
    demonBar() {
      if (this.demonHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.demonHealth + "%" };
    },

    playerBar() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },

    mayUserSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.demonHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "demon";
      }
    },

    demonHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
