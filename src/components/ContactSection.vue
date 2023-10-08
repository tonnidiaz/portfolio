<template>
    <section class="sec" id="contact">
        <h2 class="_title">Get in touch</h2>
        <div class="my-5">
            <div class="flex contact items-center justify-center gap-3">
                <span class="mt-2">
                    <i class="fi fi-br-envelope"></i>
                </span>
                <span>{{ contactDetails.email }}</span>
            </div>
            <div class="flex contact items-center justify-center gap-3">
                <span class="mt-2">
                    <i class="fi fi-br-envelope"></i>
                </span>
                <span>{{ contactDetails.email2 }}</span>
            </div>
            <div class="flex contact items-center justify-center gap-3">
                <span class="mt-2">
                    <i class="fi fi-br-mobile-notch"></i>
                </span>
                <span>{{ contactDetails.phone }}</span>
            </div>
        </div></section>
</template>
<script setup lang="ts">
    const contactDetails = {
        email: 'obediencekoza@gmail.com',
        email2: 'openbytes@yahoo.com',
        phone: '+27 76 919 6476'
    }
</script>