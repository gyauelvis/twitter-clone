import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    let sidebarStatus = ref(false);
    let postEntity = ref({
        like: 0,
        comment:0,
        retweet:0
    });

    let toggleSidebar = () => {
        let sidebar = document.querySelector('.sidebar');
        let overlay = document.querySelector('.overlay');
        if (sidebarStatus.value === false) {
            sidebar.style.transform = 'translateX(0%)';
            overlay.style.display = 'block'
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            overlay.style.display = 'none'
        }
        sidebarStatus.value = !sidebarStatus.value;
    }

    let togglePostEntity = (type) => {
        postEntity.value[type] += 1;
    }
    return { sidebarStatus, toggleSidebar, postEntity, togglePostEntity}
})