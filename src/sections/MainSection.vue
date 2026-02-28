<template>
  <section id="home" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFCFB] px-6 md:px-12 lg:px-24 py-20">
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none" 
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 24px 24px;">
    </div>

    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 gap-16 lg:gap-24">
      <div class="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
        <div class="space-y-6">
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-[1px] w-16 bg-[#800000]"></span>
            <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[12px]">
              Visual Storytellers
            </span>
          </div>
          
          <h1 class="text-[#1A1A1A] text-5xl md:text-8xl lg:text-9xl font-extralight leading-[0.95] tracking-tighter">
            Artistic <br>
            <span class="font-serif italic text-[#800000] drop-shadow-sm">Precision</span>
          </h1>
        </div>

        <div class="relative max-w-md mx-auto lg:mx-0">
          <p class="text-[#1A1A1A]/80 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-[#800000] pl-8">
            "Documenting the poetry of life through a cinematic lens. Your legacy, beautifully preserved in every frame."
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
          <button class="w-full sm:w-auto group relative px-12 py-5 bg-[#1A1A1A] text-white overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.3)]">
            <span class="relative z-10 font-bold tracking-[0.25em] text-[11px] uppercase group-hover:text-white">View Portfolio</span>
            <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button class="w-full sm:w-auto group flex items-center gap-4 text-[#1A1A1A] hover:text-[#800000] transition-all duration-300">
            <span class="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#1A1A1A]/20 group-hover:border-[#800000] transition-colors">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#800000]/10 opacity-75"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="relative z-10">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </span>
            <span class="font-bold tracking-[0.2em] text-[11px] uppercase">Watch Film</span>
          </button>
        </div>
      </div>

      <div class="w-full lg:w-1/2 relative flex flex-col items-center justify-center">
        <div class="absolute -inset-10 bg-[#800000]/5 blur-[120px] rounded-full"></div>
        
        <swiper
          :effect="'cards'"
          :grabCursor="true"
          :loop="true"
          :speed="800"
          :autoplay="{ 
            delay: 4000, 
            disableOnInteraction: true,
            pauseOnMouseEnter: true 
          }"
          :modules="modules"
          :cardsEffect="{
            slideShadows: false,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 10
          }"
          @touchStart="handleInteraction"
          class="mySwiper w-full max-w-[280px] md:max-w-[400px] h-[420px] md:h-[580px]"
        >
          <swiper-slide v-for="(img, index) in galleryImages" :key="index" 
            class="group rounded-2xl overflow-hidden bg-white shadow-xl border-[8px] border-white ring-1 ring-black/5">
            <img :src="img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" :alt="'Gallery Image ' + index" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </swiper-slide>
        </swiper>

        <div class="flex items-center gap-3 mt-8 md:hidden opacity-40">
          <span class="h-[1px] w-8 bg-[#1A1A1A]"></span>
          <span class="text-[9px] uppercase tracking-[0.3em] font-medium text-[#1A1A1A]">Swipe to see more</span>
          <span class="h-[1px] w-8 bg-[#1A1A1A]"></span>
        </div>

        <div class="absolute -bottom-6 -right-2 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center z-30 shadow-2xl p-4 md:p-6 animate-spin-slow ring-1 ring-black/5">
          <img src="@/assets/logo.png" class="w-full h-full object-contain" alt="Studio Logo">
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-1/4 h-1/4 bg-[#800000]/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-64 h-64 bg-[#1A1A1A]/5 blur-[120px] rounded-full pointer-events-none"></div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

import card1 from '@/assets/card1.jpg';
import card2 from '@/assets/card2.jpg';
import card3 from '@/assets/card3.jpg';
import card4 from '@/assets/card4.jpg';
import card5 from '@/assets/card5.jpg';

const modules = [EffectCards, Autoplay, Keyboard];
const galleryImages = [card1, card2, card3, card4, card5];

const handleInteraction = (swiper) => {
  swiper.autoplay.stop();
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.mySwiper :deep(.swiper-slide) {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

@media (max-width: 640px) {
  .mySwiper {
    height: 380px;
    width: 260px;
  }
}
</style>