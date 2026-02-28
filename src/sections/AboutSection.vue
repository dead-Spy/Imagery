<template>
  <section id="about" class="relative py-32 bg-[#FDFCFB] overflow-hidden px-6 md:px-12 lg:px-24">
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none" 
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 32px 32px;">
    </div>

    <div class="container mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
        
        <div class="w-full lg:w-3/5 flex gap-8 items-center h-[500px] md:h-[650px]">
          
          <div class="hidden md:block h-full w-32 shrink-0 relative">
            <div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FDFCFB] to-transparent z-20 pointer-events-none"></div>
            <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FDFCFB] to-transparent z-20 pointer-events-none"></div>

            <swiper
              :direction="'vertical'"
              :slides-per-view="4"
              :space-between="16"
              :loop="true"
              :speed="5000"
              :autoplay="{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }"
              :modules="[Autoplay, Mousewheel, FreeMode]"
              :mousewheel="true"
              :freeMode="true"
              class="h-full w-full linear-swiper"
            >
              <swiper-slide v-for="(img, index) in scrollImages" :key="'scroll-' + index">
                <div class="w-full aspect-square rounded-xl overflow-hidden shadow-md border-2 border-white/50 grayscale hover:grayscale-0 transition-all duration-500 cursor-grab active:cursor-grabbing">
                  <img :src="img" class="w-full h-full object-cover" alt="Gallery item">
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <div class="relative flex-1 flex justify-center items-center perspective-2000">
            <div class="relative w-full max-w-[260px] md:max-w-[300px] aspect-[3/4] group">
              <div class="absolute inset-0 z-10 transform rotate-[-12deg] -translate-x-8 translate-y-8 shadow-xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[-25deg] group-hover:-translate-x-40 group-hover:-translate-y-12">
                <img src="@/assets/image3.jpg" class="w-full h-full object-cover">
                <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="bg-white/90 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-[#800000]">Design</span>
                </div>
              </div>

              <div class="absolute inset-0 z-20 transform rotate-0 translate-x-0 translate-y-0 shadow-2xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-20">
                <img src="@/assets/image2.jpg" class="w-full h-full object-cover scale-110">
                <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="bg-[#800000] px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-white">Events</span>
                </div>
              </div>

              <div class="absolute inset-0 z-30 transform rotate-[12deg] translate-x-8 -translate-y-8 shadow-2xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[25deg] group-hover:translate-x-40 group-hover:-translate-y-12">
                <img src="@/assets/image1.jpg" class="w-full h-full object-cover">
                <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="bg-white/90 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-[#800000]">Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5 space-y-10 text-center lg:text-left">
          <div class="space-y-6">
            <div class="flex items-center justify-center lg:justify-start gap-4">
              <span class="h-[1px] w-16 bg-[#800000]"></span>
              <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[12px]">
                Premium Perspective
              </span>
            </div>
            <h2 class="text-[#1A1A1A] text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tighter">
              Unfolding Every <br>
              <span class="font-serif italic text-[#800000] drop-shadow-sm">Dimension.</span>
            </h2>
            <div class="relative max-w-md mx-auto lg:mx-0 pt-4">
              <p class="text-[#1A1A1A]/80 text-lg leading-relaxed font-light italic border-l-2 border-[#800000] pl-8 text-left">
                From grand setups to silent glances—we cover every layer of your story with artistic precision and luxury flair.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center lg:justify-start gap-12 pt-4">
            <div v-for="n in ['01', '02', '03']" :key="n" class="group cursor-default text-left">
              <h4 class="text-[#800000] font-serif italic text-3xl transition-transform duration-500 group-hover:-translate-y-1">{{ n }}</h4>
              <div class="h-[1px] w-full bg-[#1A1A1A]/10 mt-1 overflow-hidden">
                <div class="h-full bg-[#800000] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
              <p class="text-[9px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/50 mt-2">Phase</p>
            </div>
          </div>

          <div class="pt-6">
            <button class="group relative px-12 py-5 bg-[#1A1A1A] text-white overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.3)] w-full sm:w-auto">
              <span class="relative z-10 font-bold tracking-[0.25em] text-[11px] uppercase">Start the Experience</span>
              <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

      </div>
    </div>
    
    <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none"></div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

const scrollImages = [image1, image2, image3, image1, image2, image3, image1, image2];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.perspective-2000 {
  perspective: 2000px;
}

.linear-swiper :deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
</style>