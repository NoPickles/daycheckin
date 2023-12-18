<script setup>
import Checkbox from '../components/Checkbox.vue'
import Pomo from '../components/Pomo.vue';


defineProps({
  promos: Number
})

</script>

<template>
  <main>
    <Pomo />

    <Checkbox :promos="promos"/>
  </main>
</template>


