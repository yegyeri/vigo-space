<script setup>
import theButton from '@/components/interfaceComponents/TheButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
const aboutImg = {
    mainPic: 'https://img2.akspic.ru/crops/9/5/9/5/3/135959/135959-chelovecheskoe_telo-bedra-fitness_centr-fitnes_professional-myshca-3840x2160.jpg',
    circlePic1: 'https://i.pinimg.com/564x/8d/ac/04/8dac045cdacd091bebcca573d067ab17.jpg',
    circlePic2: 'https://i.pinimg.com/736x/35/b6/21/35b6216edf5358a3ad9954b6cf22c915.jpg'
}
const aboutText = {
    text1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vel quam sint, repellat vero necessitatibus iure aspernatur temporibus doloribus iusto',
    text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dignissimos aspernatur excepturi vitae beatasit amet consectetur adipisicing elit.e voluptatsisit amet consectetur adipisicing elit.t amet consectetur adipisicing elit.e quo nisi ipsa ea aperiam.'
}
</script>

<template>
    <div class="about_main dfCol jcs ais">
        <pageTitle :icon="'bx-trophy'" :text="'About our gyms'" />
        <div class="about-main-info df jcc aic">
            <img :src="aboutImg.mainPic" alt="mainPic" class="main-pic">
            <div class="about-info-text dfCol jcs aic">
                <div class="main-text-up df jcc aic">
                    <div class="years">10+ YEARS</div>
                    <span>Of Successful Work &<br>Experience Of Training</span>
                </div>
                <div class="main-text-down dfCol jcc aic">
                    <span>{{ aboutText.text1 }}</span>
                    <theButton :icon="'bxs-rocket'" :text="'TRY TICKET'" />
                </div>
            </div>
        </div>
        <div class="gym-info df jcc aic">
            <div class="gym-info-img df jcc aic">
                <img :src="aboutImg.circlePic1" alt="lol" class="gym-pic">
                <img :src="aboutImg.circlePic2" alt="lol2" class="gym-pic">
            </div>
            <div class="gym-info-text df jcc aic">
                <span>{{ aboutText.text2 }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about_main {
    height: 100%;
    width: 100%;
    gap: 30px;
    overflow-y: auto;

    .about-main-info {
        height: 500px;
        width: 100%;
        position: relative;

        .main-pic {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 20px;
        }

        .about-info-text{
            position: absolute;
            width: 500px;
            height: 500px;
            top: 0;
            left: 0;
            padding: 40px 30px;
            gap: 30px;
            .main-text-up{
                color: var(--white);
                gap: 30px;
                .years{
                    background-color: var(--lime);
                    padding: 20px 30px;
                    font-size: 25px;
                    border-radius: 10px;
                }
            }
            .main-text-down{
                color: var(--white);
                padding: 10px 40px;
                font-size: 25px;
                gap: 20px;
            }
        }

        /* .about-cards {
            width: 100%;
            height: 400px;

            .about-card {
                width: 600px;
                height: 300px;
                background-color: var(--dark);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20px;

                .about-card-pic {
                    width: 200px;
                    height: 300px;
                    object-fit: cover;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    border-right: 1px solid var(--lime);
                }

                .about-card-info {
                    padding: 20px;
                    font-size: 23px;
                    color: var(--white);

                    span {
                        &:nth-child(1) {
                            color: var(--lime);
                            font-size: 30px;
                        }
                    }

                }
            }
        }

        .about-info-blocks {
            width: 100%;
            height: 300px;

            .left_info {
                height: 100%;
                width: 50%;
                gap: 20px;

                .one_pic {
                    background-image: url('./png/1pic.jpg');
                    background-position: center;
                    background-size: cover;
                    height: 250px;
                    width: 250px;
                    border-radius: 50%;
                }

                .two_pic {
                    background-image: url('./png/2pic.jpg');
                    background-position: center;
                    background-size: cover;
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                }
            }
        } */

    }
    .gym-info{
        width: 100%;
        height: 100%;
        .gym-info-img{
            height: 100%;
            width: 50%;
            gap: 30px;
            .gym-pic{
                width: 250px;
                height: 250px;
                object-fit: cover;
                border-radius: 50%;
            }

        }
        .gym-info-text{
            height: 100%;
            width: 40%;
            font-size: 25px;
            color: var(--white);
        }
    }
}
</style>