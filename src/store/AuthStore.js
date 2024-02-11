import {defineStore} from "pinia";
import {ref, computed} from "vue";

const localStorage = window.localStorage

export const authStore = defineStore('authStore',()=>{
  //state
  const userSession = JSON.parse(localStorage.getItem("session")) || ref("");
  //getters
  const getSession = computed(()=> JSON.parse(localStorage.getItem('session')));
  //actions
  function setSession(email){
    const user = {email: email, isLoggedIn:true, date:new Date()}
    localStorage.setItem('session', JSON.stringify(user));
  }

  return {userSession, getSession, setSession}

});