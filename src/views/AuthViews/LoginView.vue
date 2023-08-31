<template>
  <div
    class="min-h-screen max-w-screen bg-teal_dark text-base flex flex-col justify-center items-center"
  >
    <form action="" class="rounded-lg overflow-hidden">
      <!--form heading-->
      <div class="bg-blue_shade_1 box-border py-6 px-11">
        <p class="text-grey_2 text-2xl leading-none my-0 font-medium">
          Welcome Back !
        </p>
        <p class="text-black_1 text-[.875rem] font-semibold mt-[.1rem]">
          Sign in to start organizing finances
        </p>
      </div>
      <div
        class="input-field-wrapper w-full bg-grey_2 py-6 px-11 flex flex-col gap-4"
      >
        <!--email input-->
        <input-field
          :input-header="'Email'"
          :placeholder="'Enter your email'"
        ></input-field>
        <input-field
          input-type="password"
          :input-header="'Password'"
          :placeholder="'Enter your password'"
        ></input-field>

        <!--forgot password?-->
        <span
          class="flex w-full justify-between items-center text-[.75rem] p-0 m-0 text-grey_3 font-semibold"
        >
          <!--show password-->
          <span class="flex items-center gap-2">
            <input type="checkbox" :value="showPassword" />
            <label for="" class="no-underline cursor-default hover:no-underline"
              >Show password</label
            >
          </span>
          <router-link
            to="/reset-password"
            class="text-grey_3 font-light hover:underline"
            >Forgot password?</router-link
          >
        </span>
        <input type="submit" value="Sign me in" />
        <span
          class="flex justify-center items-center text-[.75rem] text-blue_shade_2 font-semibold hover:underline"
        >
          <router-link to="/auth/register"
            >Oops! I haven't created an account yet</router-link
          >
        </span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";

//importing elements
import InputField from "../../components/FormElements./InputField.vue";

const formData = reactive({
  email: "",
  password: "",
});

const showPassword = ref(null);
</script>

<style scoped></style>
