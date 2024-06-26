<script setup>
const url = "https://api.breakingbadquotes.xyz/v1/quotes";
async function randomQuote() {
    const response = await fetch(url);
    const data = await response.json();
    const endQuote = data[0].quote;
    const endAuthor = data[0].author
    return { endQuote, endAuthor }
}
const quote_rand = await randomQuote()
const quote = quote_rand.endQuote;
const author = quote_rand.endAuthor;


</script>


<template>
    <div class="blog__quotes__card dfCol jcc aic">
        <span class="quote__title df jcc aic">Go Motivation!</span>
        <span class="quote df jcc aic">{{ quote }}</span>
        <span class="author df jcc aic">{{ author }}</span>
    </div>
</template>


<style scoped lang="scss">
.blog__quotes__card {
    height: 250px;
    width: 500px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
    border: 1px solid var(--lime);
    padding: 20px;
    gap: 30px;

    .quote__title {
        font-size: 40px;
        color: var(--white);
        width: 100%;
        height: 10%;
    }

    .quote {
        font-size: 20px;
        color: var(--white);
        font-weight: 200;
        width: 90%;
        height: 25%;
        text-align: center;
    }

    .author {
        font-size: 20px;
        color: aliceblue;
        font-weight: 100;
        width: 100%;
        height: 5%;
    }
}
</style>
