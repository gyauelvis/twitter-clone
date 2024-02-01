<template>
    <div class="feed-container">
        <div class="feed-card">
            <div class="feed-card__profile-img">
                <img :src="'profile.jpg'" alt="" class="nav-profile__img">
            </div>
            <div class="feed-card__tweet">
                <div class="tweet-info">
                    <div class="tweet__header">
                        <div class="name">
                            <span class="tweet__username">
                                <a href="#">g.elvis</a>
                            </span>
                            <span class="profile__name">
                                <a href="#">@gyauboahen</a>
                            </span>
                        </div>
                        <span class="tweet__time">Jan 27</span>
                    </div>
                    <div class="tweet__content">
                        <span class="text-content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia blanditiis ducimus doloribus
                            labore
                            ipsa et possimus in obcaecati mollitia debitis?
                        </span>
                        <div class="img-content">
                            <img :src="'inlove.png'" alt="" class="post-img">
                        </div>

                    </div>
                    <div class="tweet__icons">
                        <div class="action-icons">
                            <a href="#" class="comment" @click.prevent="toggleEntity('comment')">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 13.5H16M8 8.5H12" stroke="#71767b" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
                                            stroke="#71767b" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <span>{{ store.postEntity.comment }}</span>
                                </div>
                            </a>
                            <a href="" class="retweet" @click.prevent="toggleEntity('retweet')">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.3884 3L17.3913 3.97574C17.8393 4.41165 18.0633 4.62961 17.9844 4.81481C17.9056 5 17.5888 5 16.9552 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16"
                                            stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M7.61156 21L6.60875 20.0243C6.16074 19.5883 5.93673 19.3704 6.01557 19.1852C6.09441 19 6.4112 19 7.04478 19H14.8058C18.779 19 22 15.866 22 12C22 10.5128 21.5233 9.13383 20.7105 8"
                                            stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span>{{ store.postEntity.retweet }}</span>
                                </div>
                            </a>
                            <a href="#" class="like">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                                            stroke="#71767B" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <span>{{ store.postEntity.like }}</span>
                                </div>
                            </a>
                            <a href="#" class="views">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
                                        stroke="#71767b" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M10 7L12 7" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M18 7L20 7" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M8 15L10 15" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M16 15L18 15" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10 5L10 17" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M18 5L18 17" stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div class="other-icons">
                            <a href="#" class="bookmark">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                                        stroke="#71767b" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M4 7H20" stroke="#71767b" stroke-width="1.5" />
                                </svg>
                            </a>

                            <a href="#" class="share">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998"
                                        stroke="#71767B" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M20.9995 6.02505L20 6.02252C16.2634 6.01307 14.3951 6.00834 13.0817 6.95241C12.6452 7.26614 12.2622 7.6482 11.9474 8.08388C11 9.39491 11 11.2632 11 14.9998M20.9995 6.02505C21.0062 5.86242 20.9481 5.69881 20.8251 5.55309C20.0599 4.64662 18.0711 2.99976 18.0711 2.99976M20.9995 6.02505C20.9934 6.17087 20.9352 6.31591 20.8249 6.44657C20.0596 7.35286 18.0711 8.99976 18.0711 8.99976"
                                        stroke="#71767B" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter';

let store = useCounterStore();
let clonePosts = () => {
    let feedCard = document.querySelector('.feed-card')
    for (let i = 0; i < 10; i++) {
        let feedCardClone = feedCard.cloneNode(true);
        feedCard.parentNode.insertBefore(feedCardClone, feedCard.nextSibling)
    }
}

let toggleEntity = (arg) => store.togglePostEntity(arg);

onMounted(() => {
    clonePosts();
    document.querySelectorAll('.action-icons').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            store.togglePostEntity('like');
        })
    })
    
    document.querySelectorAll('.like').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.toggle('like-activate');
        })
    })
})
</script>

<style scoped>
.feed-container {
    .feed-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid var(--twitter-hover);
        font-family: var(--primary-font);
        color: var(--twitter-light);

        .tweet-info {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;

            .tweet__header {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
                align-items: center;
                padding-bottom: 0.2rem;

                .name {
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                    align-items: center;

                    .tweet__username a {
                        color: var(--twitter-light);
                        font-weight: bold;
                        font-size: 1.1rem;
                    }

                    .profile__name a {
                        color: var(--twitter-gray);
                        font-size: 1rem;
                    }
                }

                .tweet__time {
                    color: var(--twitter-gray);
                    font-size: 1rem;
                }
            }

            .tweet__content {
                line-height: 1.4rem;
                font-weight: 400;
                width: 100%;
                position: relative;

                .post-img {
                    max-width: 100%;
                    object-fit: cover;
                    border-radius: 1rem;
                    margin: 0.5rem 0.2rem;
                    border: 1px solid var(--twitter-hover);
                }
            }

        }

        .tweet__icons {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0 0 0;

            .action-icons {
                display: flex;
                justify-content: space-between;
                width: 70%;
                align-items: center;

                a div {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 1rem;
                    font-family: var(--primary-font);
                    align-items: center;
                    color: var(--twitter-gray);
                }

                @media screen and (max-width: 540px) {
                    a div {
                        gap: 0.5rem;

                    }
                }
            }

            .other-icons {
                display: flex;
                gap: 1rem;
            }
        }

        .tweet__icons svg {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
}

.like-activate {
    fill: var(--twitter-like);
    stroke: var(--twitter-like);
}
</style>