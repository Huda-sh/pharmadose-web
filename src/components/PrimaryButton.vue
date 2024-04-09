<script setup>

</script>

<template>
  <button class="button mt-3"><slot/></button>
</template>

<style scoped>
/* Button 4 */
.button {
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #FFFFFFFF;
  background: #00426FFF;
  opacity: 1;
  border: none;
  border-radius: 4px;
}
/* Hover */
.button:hover {
  color: #FFFFFFFF;
  background: #003457FF;
}
/* Pressed */
.button:hover:active {
  color: #FFFFFFFF;
  background: #00263FFF;
}
/* Disabled */
.button:disabled {
  opacity: 0.4;
}
</style>