<script setup lang="ts">
import theButton from '@/components/interfaceComponents/TheButton.vue'
import pageTitle from '@/components/interfaceComponents/pageTitle.vue'
import randomQuote from '@/components/blog-news-apps/random__quotes.vue'
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
                <Suspense>
                    <randomQuote />
                </Suspense>
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

<style scoped lang="scss">
.about_main {
    height: 100%;
    width: 100%;
    gap: 30px;
    overflow-y: auto;

    .about-main-info {
        height: 700px;
        width: 100%;
        position: relative;

        .main-pic {
            width: 100%;
            height: 700px;
            object-fit: cover;
            border-radius: 20px;
        }

        .about-info-text {
            position: absolute;
            width: 600px;
            height: 500px;
            top: 0;
            left: 0;
            padding: 40px 30px;
            gap: 30px;

            .main-text-up {
                color: var(--white);
                gap: 30px;

                .years {
                    background-color: var(--lime);
                    padding: 20px 30px;
                    font-size: 25px;
                    border-radius: 10px;
                }
            }

            .main-text-down {
                color: var(--white);
                padding: 10px 40px;
                font-size: 25px;
                gap: 20px;
            }
        }
    }

    .gym-info {
        width: 100%;
        height: 350px;

        .gym-info-img {
            height: 100%;
            width: 50%;
            gap: 30px;

            .gym-pic {
                width: 250px;
                height: 250px;
                object-fit: cover;
                border-radius: 50%;
            }

        }

        .gym-info-text {
            height: 100%;
            width: 40%;
            font-size: 25px;
            color: var(--white);
        }
    }

    @include forLaptop() {
        .gym-info {
            flex-direction: column;
            gap: 30px;

            .gym-info-img {
                width: 100%;

                .gym-pic {
                    width: 200px;
                    height: 200px;
                }
            }

            .gym-info-text {
                width: 100%;
            }
        }
    }

    @include forTablets() {
        .about-main-info {
            flex-direction: column;
            justify-content: start;
            align-items: start;

            .main-pic {
                height: 300px;
            }

            .about-info-text {
                position: relative;
                width: 100%;
                align-items: start;

                .main-text-down {
                    align-items: start;
                    padding: 0;
                }
            }


        }

        .gym-info {
            margin-top: 150px;
        }

    }

    @include forMobile() {
        .about-main-info {
            .about-info-text {
                padding: 30px 10px 10px 10px;

                .main-text-up {
                    font-size: 12px;

                    .years {
                        font-size: 12px;
                        padding: 15px 10px
                    }
                }
            }
        }

        .gym-info {
            .gym-info-img {
                flex-direction: column;
            }
        }
    }
}
</style>