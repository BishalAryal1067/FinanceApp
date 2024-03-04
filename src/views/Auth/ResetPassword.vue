<script setup>
import InputField from "@component/FormElements/InputField.vue";
import Button from "@component/FormElements/Button.vue";
import {useVuelidate} from "@vuelidate/core";
import {sameAs, required, minLength} from "@vuelidate/validators";
</script>

<<template>
  <div class="bg-teal_dark w-screen h-screen flex justify-center items-center">
    <form>
      <p class="text-blue_light text-lg">Check your email for your OTP</p>
      <InputField :placeholder="'Enter OTP'"/>
      <p class="text-blue_light text-lg mt-5">Set your new password</p>
      <InputField :placeholder="'Create new password'"/>
      <InputField :placeholder="'Confirm new password'"/>
      <Button :label="'Reset'" :class="'bg-blue_shade_1 text-[white] text-lg px-[.75rem] py-[.25rem] mt-3 rounded-sm'"/>

    </form>
  </div>
</template>
