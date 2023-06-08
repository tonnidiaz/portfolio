<template>
    <div id="services" class="w-100p">
      <h1 class="header-txt fs-35 ta-c">SERVICES</h1>
  
      <div class="mt-20">
        <div class="row  jc-c " style="padding: 0 !important;">
         <div v-for="(it, i) in personalInfo.services" class="col-12 col-md-6 pd-5">
            <ServiceCard class=""  :icon="it.icon" :servive="it.name"/>
         </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { personalInfo } from "@/utils/vars";
import ServiceCard from "./ServiceCard.vue";
  </script>
  
  <style >
  td:nth-child(odd){
      font-weight: 600;
  }
  td:nth-child(even){
      color: rgb(200,200,200);
  }
  
  td{
      padding-bottom: 10px;
  }
  </style>