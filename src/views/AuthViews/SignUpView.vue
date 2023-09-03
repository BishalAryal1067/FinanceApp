<script setup>
import { RouterLink } from "vue-router";
import { reactive, ref, watch, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, minLength, required, sameAs } from "@vuelidate/validators";
import InputField from "../../components/FormElements./InputField.vue";
import { supabase } from "../../controllers/Auth/suapbaseConnection";
import { useRouter } from "vue-router";

//initialize router
const router = useRouter();

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
  password: { required, min: minLength(7) },
  confirmPassword: {
    required,
    same: sameAs(computed(() => formData.password)),
  },
};

//initializing validation
const validation = useVuelidate(validationRules, formData);

//method to register user
const registerUser = async () => {
  //vaildate fields
  const validationResult = await validation.value.$validate();

  if (validationResult) {
    let { user, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (!error) {
      alert("User created successfully");
      router.push({ name: "auth.login" });
    }
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
          v-model:modelValue="formData.email"
          :input-header="'Email'"
          :placeholder="'Enter your email'"
          :data-to-bind="formData.email"
          @input="validation.email.$touch"
          :has-error="validation.email.$errors.length > 0"
        >
          <span
            v-if="validation.email.$errors.length > 0"
            class="text-red_1 text-xs"
          >
            {{ validation.email.$errors[0].$message }} *
          </span>
        </input-field>
        <!--password-->
        <input-field
          :input-type="showPassword ? 'text' : 'password'"
          :input-header="'Password'"
          :placeholder="'Create an password'"
          @input="validation.password.$touch"
          v-model:model-value="formData.password"
          :has-error="validation.password.$errors.length > 0"
        >
          <span
            v-if="validation.password.$errors.length > 0"
            class="text-red_1 text-xs"
          >
            {{ validation.password.$errors[0].$message }} *
          </span>
        </input-field>
        <!--confirm password-->
        <input-field
          :input-type="showPassword ? 'text' : 'password'"
          :input-header="'Confirm password'"
          :placeholder="'Re-enter password'"
          v-model:model-value="formData.confirmPassword"
          @input="validation.confirmPassword.$touch"
          :has-error="validation.confirmPassword.$errors.length > 0"
        >
          <span
            v-if="
              validation?.confirmPassword?.$errors[0]?.$validator == 'required'
            "
            class="text-red_1 text-xs"
          >
            {{ validation.confirmPassword.$errors[0].$message }} *
          </span>
          <span
            v-else-if="
              validation?.confirmPassword?.$errors[0]?.$validator == 'same'
            "
            class="text-red_1 text-xs"
          >
            {{ "Passwords don't match " }} *
          </span>
        </input-field>

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
