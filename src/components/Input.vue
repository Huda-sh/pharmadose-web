<script setup>
defineProps({
  modelValue: String,
  type:String,
  placeholder:String,
  errorMessage:String
});
</script>

<template>
  <div class="input relative">
    <div class="absolute inset-y-0 left-0 pl-3 mb-6
                    flex items-center
                    pointer-events-none">
      <svg class="w-6 h-6 mt-5" fill="#686583" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24">
      <slot/>
      </svg>
    </div>
    <input :type="type" :placeholder="placeholder" class="w-full" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>
    <p class="text-red-500 text-xs pt-2" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
input {
  padding: 10px 30px; /* Adjust padding as needed */
}

.input {
  opacity: 1;
}

.input input {
  height: 44px;
  padding-left: 44px;
  padding-right: 16px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  background: #F4F8FAFF;
  border-radius: 12px;
  border-width: 0px;
  outline: none;
}

.input svg {
  width: 20px;
  height: 20px;
  fill: #3B6B8EFF;
}

.input .label {
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
}

.input svg.left {
  left: 16px;
}

/* hover */
.input input:hover {
  color: #5891B9FF;
  background: #F4F8FAFF;
}

/* focused */
.input input:focused {
  color: #BDC1CAFF;
  background: #FFFFFFFF;
}

/* disabled */
.input input:disabled {
  color: #5891B9FF;
  background: #F4F8FAFF;
}

.input :disabled + .icon, .textbox :disabled + .icon + .icon {
  fill: #3B6B8EFF;
}

</style>