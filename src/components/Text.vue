<template>
    <div>
        自组件
        {{msg}}
    </div>
</template>

<script lang='ts'>
    import { defineComponent }  from 'vue'
    export default defineComponent({
        name: '',
        props:  ['msg']
    })
</script>