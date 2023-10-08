<template>
    <section class="sec" id="skills">
        <h2 class="text-5xl font-bold text-center">Skills & Experience</h2>
        <div class="my-10">
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, animi? Veniam ab, magnam alias natus, ratione, eos recusandae maxime quos deserunt blanditiis id sit eligendi! Libero veritatis suscipit molestias nobis?</p>
        </div>
        <div class="mt-10 flex gap-4 flex-wrap skills items-center justify-center">
            <div v-for="skill in skills" class="bg-base-100 rounded-md shadow-xl p- flex flex-col items-center ">
                <div>
                     <img :src="skill.svg" alt="skill" width="70">
                </div>
                <h5>{{skill.name}}</h5>
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