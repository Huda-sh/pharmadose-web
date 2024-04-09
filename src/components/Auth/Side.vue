<template>
  <div class="basis-1/2 bg-gray-100 h-screen right-side">
    <h3 class="mt-32 mx-auto w-fit">
      <slot name="title"></slot>
    </h3>
    <p class="mx-auto w-fit">
      <slot name="text"></slot>
    </p>
    <slot name="default"></slot>
  </div>
</template>
<script setup>
</script>