<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div>{{ token }}</div>
        <about></about>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import about from '../components/about'
export default defineComponent({
    components: {
        about
    },
    setup() {
        const store = useStore()
        const token = computed(() => store.state.token)
        return { token }
    }
})
</script>
