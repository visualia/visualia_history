<script setup>
import "visualia3/style.css";

const b = $ref(10);
</script>

<template>
  <v-math>a = {{ b }}</v-math>
  <v-slider v-model="b" />
</template>
