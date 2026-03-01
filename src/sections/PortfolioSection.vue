<template>
  <section id="portfolio" class="relative py-32 bg-[#FDFCFB] overflow-hidden px-6 md:px-12 lg:px-24">
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none" 
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 24px 24px;">
    </div>

    <div class="container mx-auto relative z-10">
      
      <div class="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
        <div class="space-y-6 max-w-2xl text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-[1px] w-16 bg-[#800000]"></span>
            <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[12px]">
              Our Collection
            </span>
          </div>
          <h2 class="text-[#1A1A1A] text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tighter">
            Visual <br>
            <span class="font-serif italic text-[#800000] drop-shadow-sm">Masterpieces.</span>
          </h2>
        </div>
        
        <div class="lg:w-1/3 text-center lg:text-right">
          <p class="text-[#1A1A1A]/60 text-lg font-light leading-relaxed italic border-r-0 lg:border-r-2 border-[#800000] pr-0 lg:pr-8">
            Every frame tells a story. Explore our collection of captured emotions and cinematic moments that last a lifetime.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        
        <div class="space-y-4 md:space-y-6 lg:space-y-8">
          <div v-for="img in col1" :key="img" class="group relative overflow-hidden rounded-3xl bg-[#1A1A1A]">
            <img :src="img" class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span class="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
            </div>
          </div>
        </div>

        <div class="space-y-4 md:space-y-6 lg:space-y-8 pt-12 md:pt-20">
          <div v-for="img in col2" :key="img" class="group relative overflow-hidden rounded-3xl bg-[#1A1A1A]">
            <img :src="img" class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span class="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Explore</span>
            </div>
          </div>
        </div>

        <div class="space-y-4 md:space-y-6 lg:space-y-8">
          <div v-for="img in col3" :key="img" class="group relative overflow-hidden rounded-3xl bg-[#1A1A1A]">
            <img :src="img" class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span class="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Art</span>
            </div>
          </div>
        </div>

        <div class="space-y-4 md:space-y-6 lg:space-y-8 pt-12 md:pt-20">
          <div v-for="img in col4" :key="img" class="group relative overflow-hidden rounded-3xl bg-[#1A1A1A]">
            <img :src="img" class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span class="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Cinema</span>
            </div>
          </div>
        </div>

        <div class="space-y-4 md:space-y-6 lg:space-y-8">
          <div v-for="img in col5" :key="img" class="group relative overflow-hidden rounded-3xl bg-[#1A1A1A]">
            <img :src="img" class="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span class="text-white text-[9px] font-bold uppercase tracking-[0.4em] border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">Moment</span>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-24 flex justify-center">
        <button class="group relative px-16 py-6 bg-[#1A1A1A] text-white overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(128,0,0,0.3)]">
          <span class="relative z-10 font-bold tracking-[0.3em] text-[11px] uppercase italic">Discover More Stories</span>
          <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>

    </div>

    <div class="absolute top-0 right-0 w-1/4 h-1/4 bg-[#800000]/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 right-10 w-64 h-64 bg-[#1A1A1A]/5 blur-[100px] rounded-full pointer-events-none"></div>
  </section>
</template>

<script setup>
import img1 from '@/assets/portfolio/portfolio1.jpg'
import img2 from '@/assets/portfolio/portfolio2.jpg'
import img3 from '@/assets/portfolio/portfolio3.jpg'
import img4 from '@/assets/portfolio/portfolio4.jpg'
import img5 from '@/assets/portfolio/portfolio5.jpg'
import img6 from '@/assets/portfolio/portfolio6.jpg'
import img7 from '@/assets/portfolio/portfolio7.jpg'
import img8 from '@/assets/portfolio/portfolio8.jpg'
import img9 from '@/assets/portfolio/portfolio9.jpg'
import img10 from '@/assets/portfolio/portfolio10.jpg'

const col1 = [img1, img2]
const col2 = [img3, img4]
const col3 = [img8, img5]
const col4 = [img7, img6]
const col5 = [img9, img10]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

@media (min-width: 1024px) {
  .grid > div:nth-child(even) {
    transform: translateY(0);
  }
}
</style>