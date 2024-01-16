<template>
    <section>
        <div class="post-container">
            <div class="post-container__item">
                <a href="#" alt="" class="post-container__item__element" @click.prevent="store.toggleSidebar">
                    <img :src="'profile.jpg'" alt="" class="nav-profile__img">
                </a>
                <div class="post-container__item__element">
                    <textarea name="" placeholder="What is happening?!"></textarea>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>


<style scoped>


section{
    padding: 1.5rem 2rem;
    height: 10rem;
    border-bottom: 1px solid var(--twitter-hover);
    width: 100%;
    position: relative;
}
.post-container__item__element img{
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
}

.post-container__item{
    display: flex;
    position: relative;
}

textarea{
    background-color: var(--twitter-dark);
    
    border: 1px solid red;
    outline: 0;
    color: var(--twitter-light);
}

</style>