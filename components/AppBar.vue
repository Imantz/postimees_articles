<script setup lang="ts">
    import { SectionData } from 'composables/section';

    const { data: section } = useNuxtData<SectionData>('section');
</script>

<template>
    <div id="app-bar">
        <div class="menu-button-container">
            <MenuButton />
        </div>
        <Logo class="logo"/>
        <div class="title">{{ section?.description }}</div>
        <div class="social-networks">
          <IconLink class="facebook" alt="Facebook" src="/assets/img/Facebook.png" :to="(section?.meta?.social.facebook as string)" />
          <IconLink class="twitter" alt="Twitter" src="/assets/img/Twitter.png" :to="(section?.meta?.social?.twitter as string)" />
          <IconLink class="email" alt="Email" src="/assets/img/Email.png" to="#mail" />
          <CommentCounter class="counter" />
          <IconLink class="share" alt="Share" src="/assets/img/share.png" to="#share" />
          <IconLink class="avatar" alt="Avatar" src="/assets/img/avatar.png" to="#avatar" />
        </div>
        <div class="login-container">
            <NuxtLink class="login" to="#login">Logi Sisse</NuxtLink>
        </div>
    </div>
</template> 

<style lang="scss">
    #app-bar {
        background-color: #21B2EF;
        height: 84px;
        display: flex;
        align-items: center;
        gap: 24px;

        .menu-button-container {
            height: 100%;
            width: 82px;
            min-width: 82px;
            background-color: #44bff2;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title {
            width: 100%; 
            text-align: center;
            color: #fff;
        }
        
        .social-networks {
            min-width: max-content;
            display:flex;
            gap: 8px;

            .share,
            .avatar {
                display: none;
            }
        }
        
        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 24px;
            border-left: 1px solid #44bff2;
            height: 100%;

            .login {
                text-transform: uppercase; 
                min-width: max-content;
                color: #fff;
                margin-right: 24px;
                text-decoration: unset;
            }
        }
    }

    @media (max-width: 768px) {
        #app-bar {
            padding-right: 24px;
            
            .logo {
                margin-right: auto;
            }
            .title {
                display: none;
            }
            
            .social-networks {
                .facebook, 
                .twitter,
                .counter,
                .email {
                    display: none;
                }
                .share,
                .avatar {
                    display: unset;
                }
            }

            .login-container {
                display: none;
            }
        }
    }
</style>