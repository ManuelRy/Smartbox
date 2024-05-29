<template>
    <div class="relative w-full" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative flex overflow-hidden h-56 rounded-lg md:h-96">
            <!-- Carousel items -->
            <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: transformStyle }">
                <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2" v-for="(item, index) in items" :key="index">
                    <img :src="item.image" class="block w-full h-full object-cover" :alt="'Slide ' + index" />
                </div>
            </div>
        </div>
        <!-- Carousel controls -->
        <button @click="prev"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button @click="next"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { image: '/img/carousel/1.png' },
                { image: '/img/carousel/2.png' },
                { image: '/img/carousel/3.png' },
                { image: '/img/carousel/2.png' },
                { image: '/img/carousel/3.png' },
                // Add more items as needed
            ],
            currentIndex: 0,
            visibleItems: 1  // Default value
        };
    },
    computed: {
        transformStyle() {
            return `translateX(-${(this.currentIndex * 100) / this.visibleItems}%)`;
        },
    },
    methods: {
        next() {
            if (this.currentIndex < this.items.length - this.visibleItems) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.items.length - this.visibleItems;
            }
        },
        updateVisibleItems() {
            if (typeof window !== 'undefined') {
                if (window.innerWidth >= 1024) {
                    this.visibleItems = 3;  // For large screens (lg)
                } else if (window.innerWidth >= 640) {
                    this.visibleItems = 2;  // For medium screens (sm)
                } else {
                    this.visibleItems = 1;
                }
            }
        },
        updateTransformStyle() {
            this.updateVisibleItems();
        }
    },
    mounted() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.updateTransformStyle);
            this.updateTransformStyle();
        }
    },
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.updateTransformStyle);
        }
    },
};
</script>

<style>
/* Ensure smooth transitions */
[data-carousel="static"]>.flex {
    transition: transform 0.7s ease-in-out;
}
</style>