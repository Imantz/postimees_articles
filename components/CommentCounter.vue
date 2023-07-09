<template>
    <div   class="comment-counter">
        <NuxtLink class="link" to="#comments">
            <img src="/assets/img/jutumull.png" alt="comments" />
            <span class="count">777</span>
        </NuxtLink>
    </div>
</template>

<style lang="scss">
    .comment-counter {
        height: 48px;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        .link {
            display: flex;
            text-decoration: unset;
            .count {
                margin-left: 4px;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
</style>