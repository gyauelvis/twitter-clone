<template>
    <section class="sidebar">
        <div class="sidebar__profile-info">
            <div class="sidebar__profile-info__img-username">
                <img :src="'profile.jpg'" alt="" class="nav-profile__img">
                <div>
                    <h2 class="roboto-bold">g.elvis</h2>
                    <span class="roboto-light">@gyauboahen</span>
                </div>
            </div>
            <div class="sidebar__profile-info__add">
                +
            </div>
        </div>
        <div class="sidebar__followings">
            <div class="sidebar__followings__following">
                <span class="roboto-regular">100</span>
                <h3 class="roboto-light">Following</h3>
            </div>
            <div class="sidebar__followings__followers">
                <span class="roboto-regular">200</span>
                <h3 class="roboto-light">Followers</h3>
            </div>
        </div>
        <div class="sidebar__btns">
            <a href="#" class="sidebar__btns__item sidebar__btns__item--special">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z">
                            </path>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="#" class="sidebar__btns__item sidebar__btns__item--special">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
                        stroke="#fff" stroke-width="1.5" />
                    <path
                        d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                        stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <span class="roboto-bold">Home</span>
            </a>
            <a href="#" class="sidebar__btns__item sidebar__btns__item--special">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#fff"
                        stroke-width="1.5" stroke-linejoin="round" />
                    <path
                        d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                        stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <span class="roboto-bold">Mail</span>
            </a>
            <a href="#" class="sidebar__btns__item sidebar__btns__item--special">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z"
                        stroke="#fff" stroke-width="1.5" />
                    <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19" stroke="#fff" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="roboto-bold">Notification</span>
            </a>

            <a href="#" class="sidebar__btns__item sidebar__btns__item--special">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 17.5L22 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                        stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <span class="roboto-bold">Explore</span>
            </a>
            <a href="#" class="sidebar__btns__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                        stroke="#fff" stroke-width="1.5" />
                </svg>
                <span class="roboto-bold">Profile</span>
            </a>
            <a href="#" class="sidebar__btns__item">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z">
                            </path>
                        </g>
                    </g>
                </svg>
                <span class="roboto-bold">Premium</span>
            </a>
            <a href="#" class="sidebar__btns__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="roboto-bold">Lists</span>
            </a>
            <a href="#" class="sidebar__btns__item sidebar__btns__item--hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="roboto-bold">Bookmarks</span>
            </a>
            <a href="#" class="sidebar__btns__item ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path
                        d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z"
                        stroke="#fff" stroke-width="1.5" />
                    <path
                        d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z"
                        stroke="#fff" stroke-width="1.5" />
                </svg>

                <span class="roboto-bold">Communities</span>
            </a>
            <a href="#" class="sidebar__btns__item sidebar__btns__item--hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"
                        stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M14.551 12C14.551 13.3807 13.4317 14.5 12.051 14.5C10.6703 14.5 9.55099 13.3807 9.55099 12C9.55099 10.6193 10.6703 9.5 12.051 9.5C13.4317 9.5 14.551 10.6193 14.551 12Z"
                        stroke="#fff" stroke-width="1.5" />
                    <path d="M5 12L6 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M18 12L19 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <span class="roboto-bold">Monetization</span>
            </a>
        </div>
        <div class="sidebar__dropdowns">
            <div class="sidebar__dropdowns__item">
                <span class="roboto-bold">Creator Studio</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#fff" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="sidebar__dropdowns__item">
                <span class="roboto-bold">Professional Tools</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#fff" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div class="sidebar__dropdowns__item">
                <span class="roboto-bold">Settings and Support</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="#fff" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <div class="sidebar__post-btn">
            <a href="#" class='roboto-bold'>Post</a>
        </div>
        <div class="sidebar__profile-img">
            <img :src="'profile.jpg'" alt="" class="nav-profile__img">
        </div>
    </section>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { onMounted } from 'vue'
const store = useCounterStore();

let sidebar;
let previousScreenSize;
let getProfileInfo = () => {
    if (window.innerWidth >= 1200) {
        let sidebarChildren = Array.from(sidebar.children);
        sidebarChildren.forEach(item => {
            if (item.classList.contains('sidebar__profile-info')) {
                let duplicatedItem = item.cloneNode(true);
                duplicatedItem.style.display = 'flex';
                duplicatedItem.style.position = 'absolute';
                duplicatedItem.style.bottom = '2rem';
                duplicatedItem.style.width = '80%';
                let duplicatedItemChildren = Array.from(duplicatedItem.children);
                duplicatedItemChildren.forEach(item => {
                    if (item.classList.contains('sidebar__profile-info__img-username')) {
                        item.style.display = 'flex';
                        item.style.flexDirection = 'row';
                        item.style.alignItems = 'center';
                        item.style.gap = '0.8rem';
                    } else if (item.classList.contains('sidebar__profile-info__add')){
                        item.innerHTML = '<span>...</span>'
                        item.style.border='0';
                    } 
                })

                sidebar.appendChild(duplicatedItem);
            }
        })
    }
    previousScreenSize = window.innerWidth;
}
window.addEventListener('resize', () => {
    let sidebarChildren = Array.from(sidebar.children);
    if (!sidebarChildren[sidebarChildren.length - 1].classList.contains('sidebar__profile-info')) getProfileInfo();
    if (window.innerWidth < 1200 && previousScreenSize >= 1200) {
        console.log(window.innerWidth," " ,previousScreenSize)
        sidebarChildren[sidebarChildren.length - 1].style.display = 'none';
    }
})
onMounted(() => {
    sidebar = document.querySelector('.sidebar');
    getProfileInfo();
})
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    width: 70%;
    min-width: 17rem;
    background-color: var(--twitter-dark);
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
    scroll-behavior: smooth;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    z-index: 99;
    border-right: 1px solid var(--twitter-hover);
}

.sidebar__post-btn {
    display: none;
}

.sidebar__profile-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.sidebar__profile-info h2 {
    color: var(--twitter-light);
    font-size: 1.4rem;
}

.sidebar__profile-info span {
    color: var(--twitter-gray);
    font-weight: 500;
}

.sidebar__profile-info__img-username {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.sidebar__profile-info__img-username img,
.sidebar__profile-img img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
}

.sidebar__profile-info__add {
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
    border: 1px solid var(--twitter-light);
    width: 2rem;
    height: 2rem;
    text-align: center;
    color: var(--twitter-light);
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar__followings,
.sidebar__followings div {
    display: flex;
}

.sidebar__followings {
    gap: 1rem;
    padding: 1rem 0;
}

.sidebar__followings div {
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

}

.sidebar__followings span {
    color: var(--twitter-light);
    font-size: 1rem;
}

.sidebar__followings h3 {
    color: var(--twitter-gray);
    font-weight: 500;
    font-size: 1rem;
}

.sidebar__btns__item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-radius: 2rem;
    transition: background 200ms linear;
}

.sidebar__btns__item--special,
.sidebar__profile-img {
    display: none;
}

.sidebar__btns__item span {
    color: var(--twitter-light);
    font-size: 1.4rem;
}

.sidebar__btns__item:hover,.sidebar__profile-info:hover{
    background-color: var(--twitter-hover);
}

.sidebar__btns__item svg {
    width: 1.6rem;
    height: 1.6rem;
}

.sidebar__dropdowns {
    display: flex;
    flex-direction: column;
}

.sidebar__dropdowns__item {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 0;
}

.sidebar__dropdowns::before {
    content: '';
    display: block;
    background-color: var(--twitter-gray);
    width: 100%;
    height: 0.5px;
    margin: 0.5rem 0;
}

.sidebar__dropdowns__item span {
    color: var(--twitter-light);
    font-size: 1.2rem;
}

.sidebar::-webkit-scrollbar {
    width: 2px;
}

.sidebar__profile-img {
    position: absolute;
    bottom: 1rem;
}


@media screen and (min-width: 540px) {
    .sidebar {
        position: sticky;
        top: 0;
        left: 0;
        height: 100vh;
        overflow-x: hidden;
        white-space: nowrap;
        min-width: 3rem;
        width: 12%;
        transform: translateX(0);
        .sidebar__btns__item--special,
        .sidebar__profile-img {
            display: flex;
        }
    }

    .sidebar__profile-info,
    .sidebar__followings,
    .sidebar__dropdowns,
    .sidebar__post-btn {
        display: none;
    }
}

.sidebar__profile-info{
    border-radius: 2rem;
    transition: background 200ms linear;
}

@media screen and (min-width: 540px) and (max-width: 1199px) {
    .sidebar__btns__item span {
        display: none;
    }
}


@media screen and (min-width: 660px) {
    .sidebar {
        display: flex;
        width: 8rem;
        justify-content: flex-end;
    }

    .sidebar svg,
    .sidebar img {
        width: 2rem;
        height: 2rem;
    }

}

@media screen and (min-width: 1000px) {
    .sidebar {
        width: 7rem;
    }
}

@media screen and (min-width: 1200px) {
    .sidebar {
        display: flex;
        flex-direction: column;
        width: 35%;
        max-width: 25rem;
        align-items: center;
        justify-content: flex-start;
        padding: 0.;
    }

    .sidebar__btns__item span,
    .sidebar__btns__item {
        display: flex;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .sidebar svg,
    .sidebar img {
        width: 1.8rem;
        height: 1.8rem;
    }

    .sidebar__btns__item {
        padding: 0.6rem;
    }

    .sidebar__btns__item--hidden {
        display: none;
    }

    .sidebar__post-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85%;
        margin: 1rem;
        background-color: var(--twitter-blue);
        height: 3rem;
        border-radius: 2rem;
        text-align: center;
    }

    .sidebar__post-btn a {
        font-size: 1.2rem;
        color: var(--twitter-light);

    }

    .sidebar__profile-img {
        display: none !important;
    }
    .sidebar__profile-info{
        padding: 0.6rem;
    }
}
</style>