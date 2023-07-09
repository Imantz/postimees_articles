<template>
    <div class="menu-button">
        <span></span>
    </div>
</template> 

<style lang="scss">
    .menu-button {
        height: 48px;
        width: 48px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        span,
        span::before,
        span::after {
            display: block;
            background-color: #fff;
            position: absolute;
            height: 4px;
            width: 30px;
            border-radius: 2px;
        }

        span::before {
            content: '';
            margin-top: -8px;
        }

        span::after {
            content: '';
            margin-top: 8px;
        }
    }
</style>