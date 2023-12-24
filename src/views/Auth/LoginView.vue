<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref, onMounted, onUpdated } from "vue";
import { supabase } from "@controller/supabaseConnection";
//importing vuelidate for validation
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
//importing elements
import InputField from "@component/FormElements/InputField.vue";
import Button from "@component/FormElements/Button.vue";
import { convertToHex } from "@helper/colorConverter.js";
//import router
import { useRouter } from "vue-router";
import { authStore } from "@store/AuthStore";
//import icon
import Icon from "@icon/Icon.vue";



const authSession = authStore();
console.log(authSession);


const router = useRouter();

const formData = reactive({
  email: "",
  password: "",
});

onMounted(() => {
  authError.value = [];
  if(authSession.userSession){
    console.log("current user =", authSession.userSession.email);
    router.push({ name: "dashboard" });
  }
});

const authError = ref([]);
const showPassword = ref(null);

const validationRules = {
  email: { required },
  password: { required },
};
//initalizing validation
const validation = useVuelidate(validationRules, formData);

const loginUser = async () => {
  const validationResult = await validation.value.$validate();
  try {
    if (validationResult) {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        authError.value.push("Unable to login!");
      } else {
        authSession.setSession(formData.email);
        router.push({ name: "dashboard" });
      }
    } else {
      authError.value.push("Incorrect email or password");
    }
  } catch (error) {
    throw error;
  }
};
</script>

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
          v-model:model-value="formData.email"
        ></input-field>
        <input-field
          :input-type="showPassword ? 'text' : 'password'"
          :input-header="'Password'"
          :placeholder="'Enter your password'"
          v-model:model-value="formData.password"
        ></input-field>

        <!--error message-->
        <div
          v-if="authError.length > 0"
          class="w-full flex items-center justify-center gap-2 border-[.5px] border-red_1 rounded-lg py-2 text-xs text-red_1"
        >

        <Icon :iconName="'triangle-exclamation'" :fill="'red_1'"/>
          {{ authError[0] }}
        </div>

        <!--forgot password?-->
        <span
          class="flex w-full justify-between items-center text-[.75rem] p-0 m-0 text-grey_3 font-semibold"
        >
          <!--show password-->
          <span class="flex items-center gap-2">
            <input type="checkbox" value="show" v-model="showPassword" />
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
        <Button
          :label="'Login'"
          :class="'bg-blue_shade_1 text-grey_2 font-medium py-3 rounded-lg'"
          @click.prevent="loginUser"
        />
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

<style scoped></style>
