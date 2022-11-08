<template>
    <ul>
        <router-link to="/films/Nowplaying" custom v-slot="{navigate,isActive}">
            <li @click="navigate">
                <span :class="isActive?'dashiactive':''">正在热映</span>
            </li>
        </router-link>

        <router-link to="/films/Comingsoon" custom v-slot="{navigate,isActive}">
            <li @click="navigate">
                <span :class="isActive?'dashiactive':''">即将上映</span>
            </li>
        </router-link>
    </ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    font-size: 14px;
    li{
        flex: 1;
        text-align: center;
        // padding-top: 20px;
    }
}

.dashiactive{
    color: red;
    border-bottom: 2px solid red;
    padding-bottom: 10px;
}
</style>
