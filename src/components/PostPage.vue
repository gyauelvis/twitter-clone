<template>
    <section>
        <div class="post-container">
            <div class="post-container__item">
                <a href="#" alt="" class="post-container__item__element">
                    <img :src="'profile.jpg'" alt="" class="nav-profile__img">
                </a>
                <div class="post-container__item__element">
                    <div class="post-container__item__element__item">
                        <a href="#" class="everyone">Everyone</a>
                        <textarea name="" placeholder="What is happening?!" :rows="numberOfRows"></textarea>
                        <a href="#" class="reply">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="injected-svg" data-src="/icons/earth-stroke-sharp.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#1d9bf0">
                                <path
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 9.20746 3.14465 6.68227 4.99037 4.86802M12 22C11.037 21.2864 11.1907 20.4555 11.6738 19.6247C12.4166 18.3474 12.4166 18.3474 12.4166 16.6444C12.4166 14.9414 13.4286 14.1429 17 14.8571C18.6047 15.1781 19.7741 12.9609 21.8573 13.693M12 22C16.9458 22 21.053 18.4096 21.8573 13.693M21.8573 13.693C21.9511 13.1427 22 12.5771 22 12C22 7.11857 18.5024 3.05405 13.8766 2.17579M13.8766 2.17579C14.3872 3.11599 14.1816 4.23551 13.1027 4.66298C11.3429 5.3603 12.6029 6.64343 11.1035 7.4356C10.1038 7.96372 8.6044 7.83152 7.10496 6.24716C6.31517 5.41264 5.83966 4.95765 4.99037 4.86802M13.8766 2.17579C13.2687 2.06039 12.6414 2 12 2C9.26969 2 6.79495 3.09421 4.99037 4.86802"
                                    stroke="#1d9bf0" stroke-width="1.5"></path>
                            </svg>
                            <span>Everyone can reply</span>

                        </a>
                    </div>

                    <div class="icons_post">
                        <div class="icon">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/image-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    role="img" color="#1d9bf0">
                                    <circle cx="7.5" cy="7.5" r="1.5" stroke="#1d9bf0" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></circle>
                                    <path
                                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                        stroke="#1d9bf0" stroke-width="1.5"></path>
                                    <path d="M5 20.9999C9.37246 15.775 14.2741 8.884 21.4975 13.5424" stroke="#1d9bf0"
                                        stroke-width="1.5"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/gif-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    role="img" color="#1d9bf0">
                                    <path
                                        d="M6.85668 17.0758C6.89852 17.4879 7.26651 17.788 7.6786 17.7462C8.0907 17.7043 8.39085 17.3363 8.349 16.9243L6.85668 17.0758ZM5.98284 18.7564C5.57216 18.8104 5.28303 19.1871 5.33705 19.5978C5.39107 20.0085 5.76777 20.2976 6.17845 20.2436L5.98284 18.7564ZM20.5 16.75C20.9142 16.75 21.25 16.4142 21.25 16C21.25 15.5858 20.9142 15.25 20.5 15.25V16.75ZM16.1371 22C16.1371 22.4142 16.4729 22.75 16.8871 22.75C17.3013 22.75 17.6371 22.4142 17.6371 22H16.1371ZM19.4677 19.75C19.882 19.75 20.2177 19.4142 20.2177 19C20.2177 18.5858 19.882 18.25 19.4677 18.25V19.75ZM17.1894 16.2929L17.7113 16.8316L17.7113 16.8316L17.1894 16.2929ZM13.8065 22.75C14.2207 22.75 14.5565 22.4142 14.5565 22C14.5565 21.5858 14.2207 21.25 13.8065 21.25V22.75ZM10.7097 21.25C10.2955 21.25 9.95968 21.5858 9.95968 22C9.95968 22.4142 10.2955 22.75 10.7097 22.75V21.25ZM10.7097 15.25C10.2955 15.25 9.95968 15.5858 9.95968 16C9.95968 16.4142 10.2955 16.75 10.7097 16.75V15.25ZM13.8065 16.75C14.2207 16.75 14.5565 16.4142 14.5565 16C14.5565 15.5858 14.2207 15.25 13.8065 15.25V16.75ZM4.25 20V18H2.75V20H4.25ZM5.56452 21.25C5.05735 21.25 4.75009 21.2485 4.52871 21.2197C4.42645 21.2064 4.37266 21.1904 4.34605 21.1797C4.33389 21.1749 4.32841 21.1716 4.327 21.1707C4.32583 21.1699 4.3253 21.1695 4.32419 21.1684L3.28049 22.2458C3.59506 22.5505 3.97497 22.6602 4.33498 22.7071C4.6758 22.7515 5.09846 22.75 5.56452 22.75V21.25ZM2.75 20C2.75 20.4496 2.7483 20.8646 2.79491 21.2004C2.84486 21.5603 2.9626 21.9378 3.28049 22.2458L4.32419 21.1684C4.32341 21.1677 4.32323 21.1674 4.32341 21.1677C4.32358 21.1679 4.32372 21.1681 4.32371 21.168C4.32369 21.168 4.32321 21.1673 4.32231 21.1656C4.32139 21.1639 4.31987 21.1609 4.31788 21.1562C4.3093 21.136 4.29388 21.0894 4.28067 20.9942C4.2517 20.7854 4.25 20.4933 4.25 20H2.75ZM6.87903 20C6.87903 20.4933 6.87734 20.7854 6.84836 20.9942C6.83515 21.0894 6.81973 21.136 6.81116 21.1562C6.80917 21.1609 6.80764 21.1639 6.80673 21.1656C6.80582 21.1673 6.80534 21.168 6.80533 21.168C6.80532 21.1681 6.80545 21.1679 6.80563 21.1677C6.8058 21.1674 6.80562 21.1677 6.80484 21.1684L7.84854 22.2458C8.16643 21.9378 8.28417 21.5603 8.33412 21.2004C8.38073 20.8646 8.37903 20.4496 8.37903 20H6.87903ZM5.56452 22.75C6.03057 22.75 6.45323 22.7515 6.79405 22.7071C7.15406 22.6602 7.53397 22.5505 7.84854 22.2458L6.80484 21.1684C6.80373 21.1695 6.80321 21.1699 6.80203 21.1707C6.80062 21.1716 6.79515 21.1749 6.78298 21.1797C6.75637 21.1904 6.70258 21.2064 6.60032 21.2197C6.37894 21.2485 6.07168 21.25 5.56452 21.25V22.75ZM5.56452 15.25C5.09846 15.25 4.6758 15.2485 4.33498 15.2929C3.97497 15.3398 3.59506 15.4495 3.28049 15.7542L4.32419 16.8316C4.3253 16.8305 4.32583 16.8301 4.327 16.8294C4.32841 16.8285 4.33389 16.8251 4.34605 16.8203C4.37266 16.8097 4.42645 16.7937 4.52871 16.7803C4.75009 16.7515 5.05735 16.75 5.56452 16.75V15.25ZM4.25 18C4.25 17.5067 4.2517 17.2146 4.28067 17.0058C4.29388 16.9106 4.3093 16.864 4.31788 16.8438C4.31987 16.8391 4.32139 16.8361 4.32231 16.8344C4.32321 16.8327 4.32369 16.832 4.32371 16.832C4.32372 16.832 4.32358 16.8322 4.32341 16.8324C4.32323 16.8326 4.32341 16.8323 4.32419 16.8316L3.28049 15.7542C2.9626 16.0622 2.84486 16.4397 2.79491 16.7996C2.7483 17.1355 2.75 17.5505 2.75 18H4.25ZM8.37903 20C8.37903 19.4773 8.06147 19.14 7.74861 18.9679C7.47002 18.8147 7.15589 18.7615 6.92628 18.7396C6.68159 18.7161 6.44716 18.7211 6.2808 18.7304C6.19586 18.7351 6.12453 18.7412 6.07324 18.7463C6.04751 18.7488 6.02662 18.7512 6.01133 18.7529C6.00369 18.7538 5.99742 18.7546 5.99265 18.7552C5.99026 18.7555 5.98824 18.7557 5.9866 18.7559C5.98578 18.756 5.98506 18.7561 5.98443 18.7562C5.98412 18.7563 5.98383 18.7563 5.98356 18.7563C5.98343 18.7563 5.98325 18.7564 5.98318 18.7564C5.98301 18.7564 5.98284 18.7564 6.08065 19.5C6.17845 20.2436 6.17829 20.2436 6.17814 20.2437C6.1781 20.2437 6.17795 20.2437 6.17787 20.2437C6.1777 20.2437 6.17755 20.2437 6.17742 20.2437C6.17717 20.2438 6.17701 20.2438 6.17693 20.2438C6.17678 20.2438 6.17699 20.2438 6.17753 20.2437C6.17861 20.2436 6.18104 20.2433 6.18474 20.2429C6.19213 20.242 6.2045 20.2406 6.22112 20.239C6.2545 20.2357 6.30414 20.2314 6.36436 20.228C6.48832 20.2211 6.64099 20.2191 6.78339 20.2327C6.85381 20.2395 6.91283 20.2492 6.95915 20.2607C7.00726 20.2726 7.02627 20.2825 7.02559 20.2822C7.02428 20.2814 6.98423 20.2594 6.94386 20.2005C6.89815 20.1338 6.87903 20.059 6.87903 20H8.37903ZM18.9516 16.75H20.5V15.25H18.9516V16.75ZM17.6371 22V19H16.1371V22H17.6371ZM17.6371 19V18H16.1371V19H17.6371ZM19.4677 18.25H16.8871V19.75H19.4677V18.25ZM18.9516 15.25C18.4856 15.25 18.0629 15.2485 17.7221 15.2929C17.3621 15.3398 16.9822 15.4495 16.6676 15.7542L17.7113 16.8316C17.7124 16.8305 17.7129 16.8301 17.7141 16.8294C17.7155 16.8285 17.721 16.8251 17.7331 16.8203C17.7598 16.8097 17.8135 16.7937 17.9158 16.7803C18.1372 16.7515 18.4444 16.75 18.9516 16.75V15.25ZM17.6371 18C17.6371 17.5067 17.6388 17.2146 17.6678 17.0058C17.681 16.9106 17.6964 16.864 17.705 16.8438C17.707 16.8391 17.7085 16.8361 17.7094 16.8344C17.7103 16.8327 17.7108 16.832 17.7108 16.832C17.7108 16.832 17.7107 16.8322 17.7105 16.8324C17.7103 16.8326 17.7105 16.8323 17.7113 16.8316L16.6676 15.7542C16.3497 16.0622 16.232 16.4397 16.182 16.7996C16.1354 17.1355 16.1371 17.5505 16.1371 18H17.6371ZM13.8065 21.25H12.2581V22.75H13.8065V21.25ZM12.2581 21.25H10.7097V22.75H12.2581V21.25ZM10.7097 16.75H12.2581V15.25H10.7097V16.75ZM12.2581 16.75H13.8065V15.25H12.2581V16.75ZM11.5081 16V22H13.0081V16H11.5081ZM5.56452 16.75C5.80993 16.75 6.00604 16.7447 6.21058 16.7526C6.40943 16.7604 6.55492 16.7799 6.66056 16.8111C6.76033 16.8406 6.79032 16.8704 6.79867 16.8799C6.80343 16.8853 6.8416 16.9273 6.85668 17.0758L8.349 16.9243C8.30883 16.5286 8.1749 16.1734 7.92501 15.8893C7.67871 15.6092 7.37149 15.4571 7.08581 15.3726C6.56671 15.2192 5.93379 15.25 5.56452 15.25V16.75Z"
                                        fill="#1d9bf0"></path>
                                    <path
                                        d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13"
                                        stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path
                                        d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2"
                                        stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/menu-09-stroke-sharp.svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    role="img" color="#1d9bf0">
                                    <path d="M4 8.5L20 8.5" stroke="#1d9bf0" stroke-width="1.5" stroke-linejoin="round">
                                    </path>
                                    <path d="M4 15.5L20 15.5" stroke="#1d9bf0" stroke-width="1.5" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/smile-stroke-sharp.svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    role="img" color="#1d9bf0">
                                    <circle cx="12" cy="12" r="10" stroke="#1d9bf0" stroke-width="1.5"
                                        stroke-linejoin="round"></circle>
                                    <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
                                        stroke="#1d9bf0" stroke-width="1.5" stroke-linejoin="round"></path>
                                    <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="#1d9bf0" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/calendar-03-stroke-rounded.svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#1d9bf0">
                                    <path d="M18 2V4M6 2V4" stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                                        stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M3.5 8H20.5" stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                                        stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M3 8H21" stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="injected-svg"
                                    data-src="/icons/location-01-stroke-rounded.svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#1d9bf0">
                                    <path
                                        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                                        stroke="#1d9bf0" stroke-width="1.5"></path>
                                    <path
                                        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                                        stroke="#1d9bf0" stroke-width="1.5"></path>
                                </svg>
                            </a>
                        </div>
                        <button :disabled="isPostDisabled">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
let isPostDisabled = ref(true);

let numberOfRows = ref(2);

onMounted(() => {
    let textArea = document.querySelector('textarea');
    let whoReply = document.querySelector('.reply');
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
    textArea.addEventListener('focus', () => {
        document.querySelector('.everyone').style.display = 'flex';
        whoReply.style.display = 'flex';
        document.querySelector('.post-container__item__element__item').style.borderBottom = '1px solid var(--twitter-hover)';
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.everyone {
    color: var(--twitter-blue);
    border: 1px solid var(--twitter-blue);
    border-radius: 1rem;
    padding: 0.1rem;
    width: 5rem;
    font-family: var(--primary-font);
    display: none;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
    font-size: small;
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

.icons_post {
    display: flex;
    justify-content: space-between;
}

.icon {
    display: flex;
    gap: 1rem;
    padding: 0 1.5rem;
}

.icon svg {
    width: 1.2rem;
    height: 1.2rem;
}

.icons_post button {
    background-color: var(--twitter-blue);
    border: 0;
    outline: 0;
    width: 4rem;
    font-family: var(--primary-font);
    color: var(--twitter-light);
    font-size: medium;
    height: 1.8rem;
    border-radius: 1rem;
}

div:has(button)>a:disabled {
    opacity: 0.5;
}

.reply {
    color: var(--twitter-blue);
    padding: 1rem 1.5rem;
    font-family: var(--primary-font);
    font-weight: bold;
    font-size: 1rem;
    display: none;
}
.reply svg{
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 0.2rem;
}
</style>