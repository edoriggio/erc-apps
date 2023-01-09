<template>
    <div class="presentation">
        <div class="left">
            <div class="name">
                Hello,
                <h1>I'm Edoardo</h1>
            </div>

            <div class="description">
                Software Engineering Student. Web and Mobile <br> Developer.
                Into UI/UX design. Creator of <br> ERC Apps.
            </div>

            <div class="links">
                <a href="mailto:officialercapps@gmail.com">
                    <span>Contact Me</span>
                </a>

                <socials/>
            </div>
        </div>

        <div class="right">
            <img :src="pic" alt="profile-pic"/>
        </div>
    </div>
</template>

<script>
import Socials from '@/components/Socials'
import profilePic from '@/assets/profile-pic.jpg'

export default {
    components: {
        Socials
    },
    data: () => ({
        pic: profilePic
    })
}
</script>

<style scoped>
.presentation {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 0 150px;
}

.left {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
}

.name {
    font-size: 20px;
}

.name > h1 {
    margin-top: 5px !important;

    font-size: 35px;
}

.links {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: 100%;

    gap: 0 20px;

    margin-top: 30px !important;
}

.links > a {
    padding-top: 10px;
    padding-bottom: 10px;

    width: 150px;

    border-radius: 10px;

    background: #F1F3F6;
    box-shadow: inset 0 0 15px rgb(55 84 170 / 0%),
                inset 0 0 20px rgb(255 255 255 / 0%),
                7px 7px 15px rgb(55 84 170 / 15%),
                -7px -7px 20px rgb(255 255 255),
                inset 0 0 4px rgb(255 255 255 / 20%);
    transition: box-shadow 399ms ease-in-out;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;

    text-align: center;
    text-decoration: none;

    color: #000000;
}

.links > a:hover {
    box-shadow: inset 7px 7px 15px rgb(55 84 170 / 15%),
                inset -7px -7px 20px rgb(255 255 255),
                0 0 4px rgb(255 255 255 / 20%);
    transition: box-shadow 399ms ease-in-out;
}

.description {
    text-align: justify;

    font-style: normal;
    font-weight: normal;
    font-size: 15px;

    line-height: 20px;

    color: #6D6D6D;
}

.right > img {
    width: 300px;
    height: 300px;

    border-radius: 261px;
    box-shadow: 12px 12px 24px #cdcfd1,
                -12px -12px 24px #ffffff;
}

@media (max-width: 856px) {
    .presentation {
        flex-direction: column-reverse;

        gap: 50px 0;

        align-items: center;

        z-index: -1;
    }

    .right > img {
        width: 200px;
        height: 200px;
    }
}
</style>
