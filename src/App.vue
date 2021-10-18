<template>
    <div id="nav">
        <router-link to="/manage/home">Home</router-link>|
        <router-link to="/manage/test">Test</router-link>
    </div>
    <router-view />
</template>
<style lang="less">
@import "./app.less";
</style>
