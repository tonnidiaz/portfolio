<template>
  <v-app>
    <Header />
    <v-main class="pdt-70">
    
      <div class="container">
        <HelloWorld />

        <div class=" m-auto">
           <div class="my-10 w- m-auto">
          <AboutSection />
        </div>
        <div class="my-10 w-100p m-auto">
          <Services />
        </div>
        <div id="skills" class="my-10 m-auto w-100p">
          <h1 class="header-txt fs-35 ta-c">SKILLS</h1>
          <div class="mt-20 m-auto row">
            <div v-for="(it, i) in personalInfo.skills" class="col-md-6 mb-5">
              <SkillBar :val="it.level" :title="it.name" />
            </div>
          </div>
        </div>
        <div id="projects" class="my-10 m-auto w-100p">
          <h1 class="header-txt fs-35 ta-c">PROJECTS</h1>
          <div class="mt-20 row">
            <div v-for="(it, i) in personalInfo.projects" class="col col-md-6  pd-10">
               <ProjectCard :img="it.img" :name="it.name" :description="it.description" :links="it.links" />
            </div>
           
          </div>
        </div>
        </div>
       
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import "@material-design-icons/font";
import HelloWorld from "@/components/HelloWorld.vue";
import AboutSection from "./components/AboutSection.vue";
import Services from "./components/Services.vue";
import SkillBar from "./components/SkillBar.vue";
import { personalInfo } from "./utils/vars";
import Header from "./components/Header.vue";
import ProjectCard from "./components/ProjectCard.vue";
</script>
