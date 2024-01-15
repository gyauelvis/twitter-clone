<template>
    <div class="sidebar">
        <div class="sidebar__item sidebar__item--sticky">
            <input type="text" class="sidebar__item__ele search roboto-regular" placeholder="Search" >
        </div>
        <div class="sidebar__item sidebar__item--card">

        </div>
        <div class="sidebar__item sidebar__item--card sidebar__item--card-special">

        </div>
        <div class="sidebar__item sidebar__item--card sidebar__item--card-special-trends">

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sidebar{
    width: 45%;
    max-width: 35rem;
    height: 100%;
    border-left: 1px solid var(--twitter-hover);
    position: relative;
    padding: 0rem 1rem 0 1rem;
    flex-direction: column;
    gap: 1rem;
    display: none;

    .sidebar__item{
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        .sidebar__item__ele{
            width: 100%;
            height: 3rem;
            border-radius: 5rem;
            background-color: var(--twitter-hover);
            outline: none;
            border: 0;
            padding: 0 3rem;
            color:var(--twitter-light)
        }
    }
    
    .sidebar__item--sticky{
        position: sticky;
        background-color: var(--twitter-dark);
        z-index: 9;
        top: 0;
        padding: 1rem 0;
    }
    .sidebar__item--card{
        background-color: var(--twitter-hover);
        height: 10rem;
        border-radius: 1rem;
    }
    .sidebar__item--card-special{
        height: 12rem;
    }
    .sidebar__item--card-special-trends{
        height: 20rem;
    }
}


@media screen and (min-width: 660px) {
    .sidebar{
        display: flex;
    }
}



</style>