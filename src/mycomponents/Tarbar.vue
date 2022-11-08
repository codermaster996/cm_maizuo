<template>
    <footer>
        <ul>
        <!-- v-router(3之前,包括3) -1- 声明式导航 -->

        <!-- <router-link to="/films" active-class="dashiactive" tag="li">电影</router-link>

        <router-link to="/cinemas" active-class="dashiactive" tag="li">影院</router-link>

        <router-link to="/center" active-class="dashiactive" tag="li">我的</router-link> -->

        <!-- v-router(3之前,包括3) -1- 声明式导航 -->

        <router-link to="/films" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'dashiactive':''" >
                <i class="iconfont icon-video"></i>
                <span>电影</span>
            </li>
        </router-link>

        <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'dashiactive':''" >
                <i class="iconfont icon-training"></i>
                <span>影院</span>
            </li>
        </router-link>

        <router-link to="/center" custom v-slot="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'dashiactive':''" >
                <i class="iconfont icon-service"></i>
                <span>我的</span>
            </li>
        </router-link>

        </ul>
    </footer>
</template>
<style lang="scss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.0625rem;
        background-color: white;
        z-index: 100;
        ul{
            display: flex;
            li{
                flex: 1;
                line-height: 1.53125rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                i{
                    font-size: 20px;
                }
                span{
                    font-size: 16px;
                }
            }
        }
    }
    .dashiactive{
        color: red;
    }
</style>
