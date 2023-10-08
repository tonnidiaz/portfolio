
<template>
    <Navbar solid class="fixed w-full left-0 z-[100] top-0">
      <template #logo>
        <NavbarLogo link="/" alt="">
          Thabiso
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu" class="_menu" ref="menuRef">
          <NavbarLink  link="#" @click="hideMenu">Home</NavbarLink>
          <NavbarLink link="#about" @click="hideMenu">About</NavbarLink>
          <NavbarLink link="#portfolio" @click="hideMenu">Portfolio</NavbarLink>
          <NavbarLink link="#contact" @click="hideMenu">Contact</NavbarLink>
        </NavbarCollapse>
      </template>
      <template #menu-icon >
        <div class="menu-toggle">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

        </div>
      </template>
    </Navbar>
</template>
<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import { onMounted, onUnmounted, ref, watch } from 'vue';
import $ from 'jquery'
const menuRef = ref<any>()
const hideMenu = ()=>{
    if (!menuRef.value.$el.classList.contains('hidden'))
    $('.menu-toggle').trigger('click')
}

function onBodyClick (e: any){
    const _menu = menuRef.value.$el// as HTMLDivElement
    if(!_menu.contains(e.target)){
        hideMenu()
    }
}
onMounted(()=>{
    document.body.addEventListener('mousedown', onBodyClick)
})

onUnmounted(()=>{
    document.body.removeEventListener('mousedown', onBodyClick)
})
</script>