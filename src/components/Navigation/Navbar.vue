<script setup>
import Icon from "@icon/Icon.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {logoutUser} from "@controller/authController";
import {authStore} from "@store/AuthStore";
import  Button from '@component/FormElements/Button.vue';
const activeNavItem = ref([]);
const router = useRouter();
const route = useRoute();
const authSession = authStore();

const navItems = [
  {title:'Manage your finanaces', icon:'coins', path:'dashboard'},
  {title:'Settings', icon:'gear', path:'settings'},
  {title:'Profile and preferences', icon:'user', path:'profile'},
  {title:'Create a bill', icon:'plus', path:'add-details'}
]

const handleNavigation = async (item)=>{
  if(router.hasRoute(item.path)){
    handleActiveRoute(item.path)
    router.push({name:item.path});
  }
}

const handleActiveRoute = (path)=>{
  activeNavItem.value.pop();
    activeNavItem.value.push(path);
}

const handleLougout = async () =>{
  const {err} = await logoutUser();
  if(!err){
   authSession.clearSession();
   router.push({name : "auth.login"});
  }
  else {
    alert('LogoutFailed')
  }
  console.info()
}

onMounted(()=>{
  handleActiveRoute(route.name)
})

</script>

<template>
  <div
    class="flex flex-col min-w-[7.5rem] items-center justify-between text-xl py-12 gap-6 bg-black_2 h-screen max-h-screen"
  >
    <!--wrapper for navigation elements-->
    <div id="navigation_wrapper" class="flex flex-col jutify-start gap-6 items-center">
    <!--navigation elements-->
    <div id="nav-box" 
    v-for="(item, index) in navItems" 
    class="cursor-pointer flex flex-col justify-center items-center gap-[.125rem]" 
    @click="handleNavigation(item)"
    >
      <tippy :content="item.title" :id="index">
        <Icon :iconName="item.icon"/>
      </tippy>
      <Transition>
        <span class="flex w-[.35rem] h-[.35rem] bg-green_1 rounded-[50%]"
      v-if="activeNavItem[0]==item.path"></span>
      </Transition>
    </div>
    </div>
    <!--Logout Button-->
    <tippy :content="'Logout'">
    <Button @click="handleLougout">
      <Icon :iconName="'right-from-bracket'" fill="red_2"/>
    </Button>
    </tippy>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
  transform: translateY(10px);
}
</style>
