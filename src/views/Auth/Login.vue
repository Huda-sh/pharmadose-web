<script setup>

import Header from "@/components/Auth/Header.vue";
import Side from "@/components/Auth/Side.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Input from "@/components/Input.vue";
import LoadingIndicator from "@/components/LoadingIndicator.vue";
import {useLoginStore} from "@/stores/Auth/useLoginStore.js";
import {useRouter} from "vue-router";
import ErrorMessage from "@/components/ErrorMessage.vue";

let store = useLoginStore();
const router = useRouter();

async function submit() {
  let status = await store.submitForm()
  if (status === true) {
    router.push('/');
  }
}
</script>

<template>
  <div class="flex flex-row">
    <div class="lg:basis-1/2 mx-auto">
      <Header/>

      <h1 class="title w-fit mx-auto mt-32">Login to your account</h1>
      <ErrorMessage v-if="store.message" class="lg:w-6/12 mx-auto p-3 ps-5 mt-16">{{ store.message }}</ErrorMessage>
      <form @submit.prevent="submit" v-if="!store.isLoading">
        <Input class="mt-6 mx-auto lg:w-6/12" v-model="store.form.email" type="email" placeholder="Enter your email"
               :errorMessage="store.errors.email">
          <path
              d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </Input>
        <Input class="mt-6 mx-auto lg:w-6/12" v-model="store.form.password" type="password"
               placeholder="Enter your password" :errorMessage="store.errors.password">
          <path
              d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </Input>
        <PrimaryButton type="submit" class="lg:w-6/12 w-full mx-auto mt-16 mb-3">Sign up</PrimaryButton>
        <p class="mx-auto w-fit font-semibold">Don't have an account?
          <RouterLink class="text-blue-900 font-bold" to="/signup">Sign up</RouterLink>
        </p>
      </form>
      <LoadingIndicator class="mt-20" v-if="store.isLoading"></LoadingIndicator>

    </div>
    <Side class="hidden lg:block">
      <template #title>Hello Again!</template>
      <template #default><img class="mt-12 mx-auto w-fit" src="../.././assets/img/signup.svg"></template>
    </Side>
  </div>
</template>

<style scoped>

</style>