<template>
    <div class="footer">
        <img src="https://i.postimg.cc/0Q1qcqmZ/logo-clear.png" alt="erc apps logo">
        <socials/>
        <p>&copy; 2022 ERC Apps</p>
    </div>
</template>

<script>
import Socials from '@/components/Socials'

export default {
    name: 'footer-view',
    components: {
        Socials
    }
}
</script>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    height: 100px;
    width: 90%;

    margin-bottom: 50px !important;
    margin-top: 90px !important;

    background: #F1F3F6;
    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, .15),
    inset -7px -7px 20px rgba(255, 255, 255, 1),
    0px 0px 4px rgba(255, 255, 255, .2);
    border-radius: 30px;
}

.footer > img {
    margin-left: 40px !important;
}

.footer > p {
    margin-right: 50px !important;

    font-family: Consolas, monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    max-height: 20px;
}

img {
    height: 100px;
    width: 100px;
}

@media (max-width: 527px) {
    .footer {
        flex-direction: column;

        justify-content: center;
        align-items: center;

        height: max-content;
    }

    .footer > img,
    .footer > p {
        margin: 0 !important;
    }

    .footer > p {
        margin-top: 30px !important;
        margin-bottom: 30px !important;
    }
}
</style>
