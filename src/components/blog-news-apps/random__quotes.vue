<script setup>
const url = "https://api.breakingbadquotes.xyz/v1/quotes";
async function randomQuote () {
    const response = await fetch(url);
    const data = await response.json();
    const endQuote = data[0].quote;
    const endAuthor = data[0].author
    return {endQuote, endAuthor}
}
const quote_rand = await randomQuote()
const quote = quote_rand.endQuote;
const author = quote_rand.endAuthor;


</script>


<template>
        <div class="blog__quotes__card">
            <span class="quote__title">Go Motivation!</span>
            <span class="quote">{{quote}}</span>
            <span class="author">{{author}}</span>
        </div>
</template>


<style scoped>
.blog__quotes__card{
    height: 70%;
    width: 70%;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px dashed var(--lime);
    gap: 30px;
}
.quote__title {
    font-size: 40px;
    color: var(--lime);
    width: 100%;
    height: 10%;
    display: grid;
    place-items: center;
}
.quote{
    font-size: 20px;
    color: var(--lime);
    font-weight: 200;
    width: 90%;
    height: 25%;
    display: grid;
    place-items: center;
    text-align: center;
}
.author{
    font-size: 20px;
    color: aliceblue;
    font-weight: 100;
    width: 100%;
    height: 5%;
    display: grid;
    place-items: center;
}
.quote__btn{
    width: 200px;
    height: 40px;
    border-radius: 30px;
    font-size: 20px;
    border: none;
    background-color: var(--lime);
    color: var(--dark2);
}
.quote__btn:hover{
    background-color: var(--dark);
    color: var(--lime);
    border: 1px solid var(--lime);
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
</style>
