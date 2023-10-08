<template>
    <section class="sec mt-10 mb-0" id="skills">
        <h2 class="_title text-3xl">Stacks</h2>

        <div class="mt-10 flex flex-wrap gap-4 flex-wrap skills items-center justify-center">
            <div v-for="skill in skills" class="bg-car relative p-2 skill-card rounded-none shadow-sm p- flex flex-col items-center justify-center gap-2">
                <div>
                     <img :src="skill.svg" alt="skill" class="w-full">
                </div>
                <h5 class="fs-12 text-center">{{skill.name}}</h5>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Skill { name: string, icon?: string, svg?:string }

const skills : Skill[] = [
{
      name: "Python",
      svg: '/icons/python.svg',
    },
    {
      name: "JavaScript",
      svg: '/icons/js.svg',
    },
    {
      name: "TypeScript",
      svg: '/icons/ts.svg',
    },
    {
      name: "Express.Js",
      svg: '/icons/express.svg',
    },
    {
      name: "Node.Js",
      svg: '/icons/node.svg',
    },
    {
      name: "React",
      svg: '/icons/react.svg',
    },
    {
      name: "Vue",
      svg: '/icons/vue.svg',
    },
    {
      name: "Nuxt",
      svg: '/icons/nuxt.svg',
    },
    {
      name: "MongoDb",
      svg: '/icons/mongo.svg',
    },
    {
      name: "Ionic",
      svg: '/icons/ionic.svg',
    },
    {
      name: "Flutter",
      svg: '/icons/flutter.svg',
    },
    {
      name: "HTML",
      svg: '/icons/html.svg',
    },
    {
      name: "CSS",
      svg: '/icons/css.svg',
    },
]

</script>