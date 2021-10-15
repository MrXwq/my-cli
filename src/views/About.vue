<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div>{{ token }}</div>
        <Test></Test>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Test from '../components/Test'
export default defineComponent({
    components: {
        Test
    },
    setup() {
        const store = useStore()
        const token = computed(() => store.state.token)
        return { token }
    }
})
</script>
