<template>
  <main class="fixed inset-0 z-[100] bg-[#FDFCFB] min-h-screen overflow-y-auto font-sans selection:bg-[#800000] selection:text-white">
    
    <div class="fixed top-8 right-8 md:top-12 md:right-12 z-[110]">
      <button @click="$emit('close')" class="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#1A1A1A] rounded-full transition-all duration-500 hover:scale-110 shadow-2xl">
        <div class="relative w-6 h-6">
          <span class="absolute top-1/2 left-0 w-full h-[1.5px] bg-white rotate-45 transition-transform group-hover:rotate-[135deg]"></span>
          <span class="absolute top-1/2 left-0 w-full h-[1.5px] bg-white -rotate-45 transition-transform group-hover:rotate-[225deg]"></span>
        </div>
      </button>
    </div>

    <section class="relative h-[70vh] flex items-center justify-center overflow-hidden px-6">
      <div class="absolute inset-0 z-0">
        <img :src="heroImage" class="w-full h-full object-cover opacity-20 scale-110" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#FDFCFB]/0 via-[#FDFCFB]/50 to-[#FDFCFB]"></div>
      </div>
      
      <div class="relative z-10 text-center space-y-8 max-w-4xl">
        <div class="flex items-center justify-center gap-4 animate-fadeIn">
          <span class="h-[1px] w-12 bg-[#800000]"></span>
          <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[12px]">The Methodology</span>
          <span class="h-[1px] w-12 bg-[#800000]"></span>
        </div>
        <h1 class="text-[#1A1A1A] text-6xl md:text-8xl font-extralight leading-none tracking-tighter">
          Crafting Your <br />
          <span class="font-serif italic text-[#800000]">Legacy.</span>
        </h1>
        <p class="text-[#1A1A1A]/60 text-lg md:text-xl font-light max-w-2xl mx-auto italic">
          A three-step journey from raw concept to timeless masterpiece. We don't just execute; we evolve.
        </p>
      </div>
    </section>

    <section class="py-24 space-y-32 md:space-y-64 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      
      <div v-for="(phase, index) in phases" :key="index" 
           class="group flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
           :class="index % 2 !== 0 ? 'lg:flex-row-reverse' : ''">
        
        <div class="w-full lg:w-1/2 relative">
          <div class="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img :src="phase.image" :alt="phase.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-[#800000]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>
          <div class="absolute -bottom-10 -right-10 lg:-right-20 hidden md:block">
            <span class="text-[180px] font-serif italic text-[#800000]/5 leading-none select-none">
              0{{ index + 1 }}
            </span>
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-8">
          <div class="space-y-4">
            <h4 class="text-[#800000] font-serif italic text-4xl">Phase 0{{ index + 1 }}</h4>
            <h3 class="text-[#1A1A1A] text-4xl md:text-5xl font-light tracking-tight">{{ phase.title }}</h3>
            <div class="h-[2px] w-24 bg-[#800000]"></div>
          </div>
          
          <p class="text-[#1A1A1A]/80 text-lg leading-relaxed font-light border-l-4 border-[#800000]/10 pl-8">
            {{ phase.description }}
          </p>

          <ul class="space-y-4 pt-4">
            <li v-for="(point, pIndex) in phase.points" :key="pIndex" class="flex items-center gap-4 text-[#1A1A1A]/60 text-sm uppercase tracking-widest font-bold">
              <span class="w-2 h-2 rounded-full bg-[#800000]"></span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

    </section>

    <section class="py-32 bg-[#1A1A1A] text-white text-center px-6">
      <div class="max-w-3xl mx-auto space-y-12">
        <h2 class="text-4xl md:text-6xl font-extralight tracking-tighter leading-tight">
          Ready to begin your <br />
          <span class="font-serif italic text-[#800000]">transformation?</span>
        </h2>
        <button @click="$emit('close')" class="group relative px-16 py-6 border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-[#800000]">
          <span class="relative z-10 font-bold tracking-[0.3em] text-[12px] uppercase">Back to Studio</span>
          <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
    </section>

  </main>
</template>

<script setup>
import { defineEmits } from 'vue';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import heroImage from '@/assets/image4.jpg';

defineEmits(['close']);

const phases = [
  {
    title: "Discovery & Vision",
    description: "Every great project starts with a deep dive into the soul of the concept. We explore your intentions, study the environment, and define the core narrative that will drive every subsequent decision.",
    image: image1,
    points: ["Concept Development", "Moodboard Creation", "Strategic Planning"]
  },
  {
    title: "Curated Execution",
    description: "Our team brings the vision to life with surgical precision. From technical lighting setups to artistic direction, we ensure that every frame captured or every detail placed aligns with the premium standard.",
    image: image2,
    points: ["Artistic Direction", "Technical Setup", "Live Production"]
  },
  {
    title: "The Final Refinement",
    description: "The magic happens in the silence of the edit. We refine every layer, color grade for emotion, and polish the details to ensure the final output isn't just a product, but a timeless piece of art.",
    image: image3,
    points: ["Precision Editing", "Color Grading", "Legacy Delivery"]
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

main {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 1.5s ease-out forwards;
}

main::-webkit-scrollbar {
  width: 5px;
}
main::-webkit-scrollbar-track {
  background: #FDFCFB;
}
main::-webkit-scrollbar-thumb {
  background: #800000;
  border-radius: 10px;
}
</style>