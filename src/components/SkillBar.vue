<template>
    <div class="w-100p skill">
        <div class="progress">
            <div class="bar" :style="`width: ${val}%`"><span>{{val}}%</span></div>
            
        </div>
        <div class="mx-">{{ title }}</div>
    </div>
</template>
<script setup lang="ts">

defineProps({
    val: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: ""
    }
})
</script>