<script setup>
</script>

<template>
<div class="container">
<p class="text"><slot/></p>
</div>
</template>

<style scoped>
.container {
  background: #F5C4C6FF;
  border-radius: 8px;
}
.text {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #C12126FF;
}
</style>