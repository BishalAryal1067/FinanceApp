import state from "./state";

import { computed } from "vue";

const isAuthenticated = computed(() => state.isAuthenticated);
const email = computed(() => state.email);
const userID = computed(() => state.id);

export default {
  isAuthenticated,
  email,
  userID,
};
