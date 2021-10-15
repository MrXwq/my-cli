<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div>{{ token }}</div>
        <About></About>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import About from '../components/About'
export default defineComponent({
    components: {
        About
    },
    setup() {
        const store = useStore()
        const token = computed(() => store.state.token)
        return { token }
    }
})
</script>
