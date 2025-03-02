import AuthStore from "./Auth/";
import { definestore } from "pinia";

const store = definestore("store", () => ({
  ...AuthStore,
}));

export default store;
