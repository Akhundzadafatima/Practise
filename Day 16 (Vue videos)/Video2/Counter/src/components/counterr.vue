<template>
  <div id="container" class="container">
    <div id="number" class="number" :value="number">{{ number }}</div>

    <div id="buttons" class="buttons">
      <button id="minus" class="minus" @click="minus">-</button>
      <button id="plus" class="plus" @click="plus">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    plus() {
      this.number = this.number + 1;
    },
    minus() {
      this.number = this.number - 1;
    },
  },
};
</script>
