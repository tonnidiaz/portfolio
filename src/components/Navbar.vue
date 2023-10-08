
<template>
    <Navbar solid class="fixed w-full left-0 z-[100] top-0">
      <template #logo>
        <NavbarLogo link="/" alt="">
          Thabiso
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink isActive link="#">Home</NavbarLink>
          <NavbarLink link="#about">About</NavbarLink>
          <NavbarLink link="#portfolio">Portfolio</NavbarLink>
          <NavbarLink link="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      </template>
    </Navbar>
</template>
<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>