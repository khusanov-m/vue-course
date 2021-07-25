<template>
  <section>
    <user-data @add-User="addUser"> </user-data>
    <active-user
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :age="user.age"
    >
    </active-user>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Muhammad",
          age: "18",
        },
        {
          name: "Mansur",
          age: "18",
        },
      ],
    };
  },

  methods: {
    addUser(name, age) {
      const newUserData = {
        name: name,
        age: age,
      };
      this.users.push(newUserData);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 30px;
  background: linear-gradient(to right, #4b79a1, #283e51);
  color: #fff;
  display: flex;
  height: 93vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 1px;
}

input {
  padding: 5px;
  margin-right: 50px;
}

input:focus {
  outline: none;
}

li {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  margin-right: 30px;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

button {
  border: 0;
  cursor: pointer;
  margin: 0 auto;
  height: 27px;
  text-transform: uppercase;
}
</style>
