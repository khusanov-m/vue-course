<template>
  <form class="form" @submit.prevent="addUser">
    <input type="text" v-model="enteredName" placeholder="Your name" />
    <input type="text" v-model="enteredAge" placeholder="Your age" />
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],

  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    addUser() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
