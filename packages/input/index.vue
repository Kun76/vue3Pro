<template>
  <input :type="text" :value="value" />
</template>

<script>
export default {
  name: "TestIpt",
};
</script>
<script setup>
import {ref,defineProps} from 'vue'
const text = ref("text");
const props = defineProps({
  value: {
    type: String,
    default: "123",
  },
});
</script>

<style>
.testBtn {
  background-color: blueviolet;
  color: #fff;
}
</style>
