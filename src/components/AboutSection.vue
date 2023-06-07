<template>
  <div id="about" class="m-auto">
    <h1 class="header-txt fs-35 ta-c">About me</h1>
    <p class="info color-white-2 mt-5 ta-c">I'm a Fullstack Web and App developer</p>
    
    <div class="mt-20">
      <table class="m-auto fs-18" cellspacing="20" cellpadding="20"
>
        <tr>
          <td>Name:</td>
          <td>{{ personalInfo.name }}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{{ personalInfo.email }}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>{{ personalInfo.phone }}</td>
        </tr>
        <tr>
          <td>Date of birth:</td>
          <td>{{ personalInfo.date_of_birth }}</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>{{ personalInfo.address }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { personalInfo } from "@/utils/vars";
</script>

<style lang="scss">
td:nth-child(odd){
    font-weight: 600;
}
td:nth-child(even){
    color: rgb(200,200,200);
    padding-left: 20vw;
    text-overflow: ellipsis;
    word-break: break-all;
}
@media screen and (max-width: 500px) {
  td:nth-child(even){
    color: rgb(200,200,200);
    padding-left: 20px;
}
}

td{
  
    padding-bottom: 10px;
}
</style>