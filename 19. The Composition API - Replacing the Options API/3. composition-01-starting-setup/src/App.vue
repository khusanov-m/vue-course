<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
// Composition API
import { ref } from 'vue';

export default {
  setup() {
    // with `ref`
    const uName = ref('Maximilian');
    const uAge = ref(31);
    // with `reactive`
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31
    // });

    function setNewAge() {
      uName.value = 'Muhammad';
      uAge.value = 18;
    }

    // with `ref`
    // setTimeout(function() {
    //   // uName.value = 'Muhammad';
    //   // uAge.value = 18;
    //   user.name = 'Muhammad';
    //   user.age = 18
    // }, 2000);

    // with `ref`
    return { userName: uName, age: uAge, setAge: setNewAge };

    // with `reactive`
    // return { user: user, setAge: setNewAge };
  }

  // Options API
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 18;
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
