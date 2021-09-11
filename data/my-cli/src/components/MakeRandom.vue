<template>
  <div>{{ makeRandom() }}</div>
</template>

<script>
import randomatic from "randomatic";
export default {
  props: {
    pattern: {
      type: String,
      default: "*",
    },
    length: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    makeRandom() {
      return randomatic(this.pattern, this.length);
    },
  },
};
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
