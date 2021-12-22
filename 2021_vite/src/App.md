<script setup>
const x = $ref(10);
</script>

## Local state

<v-slider v-model="x" />

> <v-math>x = {{ x }}</v-math>

## Global state

<v-slider v-model="v.x" />

> <v-math>v.x = {{ v.x }}</v-math>
