<template>
    <section>
        <div class="post-container">
            <div class="post-container__item">
                <a href="#" alt="" class="post-container__item__element">
                    <img :src="'profile.jpg'" alt="" class="nav-profile__img">
                </a>
                <div class="post-container__item__element">
                    <textarea name="" placeholder="What is happening?!" :rows="numberOfRows"></textarea>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

let numberOfRows = ref(2);

onMounted(() => {
    let textArea = document.querySelector('textarea');

    const updateHeight = () => {
        numberOfRows.value = Math.max(textArea.scrollHeight / 20, 2);
    };

    textArea.addEventListener('input', () => {
        updateHeight();
        let isWrapped = textArea.scrollHeight > textArea.clientHeight;

        if (isWrapped) {
            updateHeight();
        }
    });
});

</script>


<style scoped>
section {
    padding: 1.5rem 2rem;
    min-height: 8rem;
    height: auto;
    border-bottom: 1px solid var(--twitter-hover);
    position: relative;
    width: 100%;
}

.post-container {
    position: relative;
    width: 100%;
}

.post-container__item__element img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
}

.post-container__item {
    display: flex;
    position: relative;
    width: 100%;
}

.post-container__item__element:has(textarea) {
    width: 100%;
}

textarea {
    background-color: var(--twitter-dark);
    border: 0;
    padding: 0.5rem 2rem;
    outline: 0;
    width: 100%;
    color: var(--twitter-light);
    font-family: var(--primary-font);
    overflow-y: hidden;
}

</style>