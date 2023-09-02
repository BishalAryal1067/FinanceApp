<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, sameAs } from "@vuelidate/validators";

//importing elements
import InputField from "../../components/FormElements./InputField.vue";

//variable for switching password visibility
const showPassword = ref(null);

//input fields
const formData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

//field validation rules
const validationRules = {
  email: { required, email },
  password: { required },
  confirmPassword: { required, sameAs: sameAs(formData.password) },
};

//initializing validation
const validation = useVuelidate(validationRules, formData);

// function to generate message for empty fields
const generateEmptyMessage = (element, value) => {
  return element.$errors[0].$validator == "required"
    ? element.$errors[0].$message.replace(
        "Value",
        value.charAt(0).toUpperCase() + value.slice(1)
      )
    : null;
};

//method to register user
const registerUser = async () => {
  //vaildate fields
  const validationResult = await validation.value.$validate();
  console.log(
  );
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
          Join us!
        </p>
        <p class="text-black_1 text-[.875rem] font-semibold mt-[.1rem]">
          Create an account
        </p>
      </div>
      <div
        class="input-field-wrapper w-full bg-grey_2 py-6 px-11 flex flex-col gap-4"
      >
        <!--email input-->
        <input-field
          v-model:model-value="formData.email"
          :input-header="'Email'"
          :placeholder="'Enter your email'"
          :data-to-bind="formData.email"
          @input="validation.email.$touch"
        ></input-field>
        <!--password-->
        <input-field
          :input-type="showPassword ? 'text' : 'password'"
          :input-header="'Password'"
          :placeholder="'Create an password'"
          @input="validation.password.$touch"
          v-model="formData.password"
        ></input-field>
        <!--confirm password-->
        <input-field
          :input-type="showPassword ? 'text' : 'password'"
          :input-header="'Confirm password'"
          :placeholder="'Re-enter password'"
          v-model="formData.confirmPassword"
          @input="validation.confirmPassword.$touch"
        ></input-field>

        <!--forgot password?-->
        <span
          class="flex w-full justify-between items-center text-[.75rem] p-0 m-0 text-grey_3 font-semibold"
        >
          <!--show password-->
          <span class="flex items-center gap-2">
            <input type="checkbox" :value="'show'" v-model="showPassword" />
            <label for="" class="no-underline cursor-default hover:no-underline"
              >Show password</label
            >
          </span>
        </span>
        <input
          type="submit"
          value="Create my account"
          class="cursor-pointer bg-blue_shade_1 text-[white] font-semibold py-3 rounded-md"
          @click.prevent="registerUser"
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
