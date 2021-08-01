<template>
  <!-- <h3>{{ counter }}</h3> 
  The same with mapGetters below
  -->
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters('numbers',['finalCounter'])
  }
};
</script>
