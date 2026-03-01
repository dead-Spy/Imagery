<template>
  <section id="services" class="relative py-32 bg-[#FDFCFB] overflow-hidden px-6 md:px-12 lg:px-24">
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none"  
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 24px 24px;">
    </div>

    <div class="container mx-auto relative z-10">
      
      <div class="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
        <div class="space-y-6 text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-[1px] w-16 bg-[#800000]"></span>
            <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px] md:text-[12px]">
              Premium Services
            </span>
          </div>
          <h2 class="text-[#1A1A1A] text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-tighter">
            Select Your <br>
            <span class="font-serif italic text-[#800000] drop-shadow-sm">Package</span>
          </h2>
        </div>

        <div class="flex bg-white/80 backdrop-blur-md p-2 rounded-full border border-[#1A1A1A]/5 shadow-sm mx-auto lg:mx-0">
          <button 
            @click="activeTab = 'event'"
            :class="activeTab === 'event' ? 'bg-[#800000] text-white shadow-lg' : 'text-[#1A1A1A] hover:text-[#800000]'"
            class="px-8 md:px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500"
          >
            Event Management
          </button>
          <button 
            @click="activeTab = 'photo'"
            :class="activeTab === 'photo' ? 'bg-[#800000] text-white shadow-lg' : 'text-[#1A1A1A] hover:text-[#800000]'"
            class="px-8 md:px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500"
          >
            Photography
          </button>
        </div>
      </div>

      <transition name="fade-slide" mode="out-in">
        <div v-if="activeTab === 'event'" key="event" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(pkg, index) in eventPackages" :key="pkg.name" 
               class="group relative bg-white border border-[#1A1A1A]/5 p-10 rounded-[2rem] hover:shadow-[0_30px_60px_-15px_rgba(128,0,0,0.1)] transition-all duration-700 hover:-translate-y-3">
            <div class="mb-8 flex justify-between items-start">
              <div class="w-14 h-14 bg-[#800000]/5 rounded-2xl flex items-center justify-center text-[#800000] transition-colors duration-500 group-hover:bg-[#800000] group-hover:text-white">
                <i :class="pkg.icon" class="text-xl"></i>
              </div>
              <span class="text-[9px] font-bold text-[#800000]/30 uppercase tracking-[0.3em]">Tier {{ index + 1 }}</span>
            </div>
            <h4 class="font-serif italic text-3xl text-[#1A1A1A] mb-2 group-hover:text-[#800000] transition-colors duration-500">{{ pkg.name }}</h4>
            <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-[#800000] mb-8">{{ pkg.tier }}</p>
            
            <div class="h-[1px] w-full bg-[#1A1A1A]/5 mb-8"></div>
            
            <ul class="space-y-5 mb-12">
              <li v-for="feature in pkg.features" :key="feature" class="text-sm text-[#1A1A1A]/70 flex items-start gap-3 font-light">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#800000]/20 border border-[#800000] shrink-0"></span>
                {{ feature }}
              </li>
            </ul>

            <button class="w-full group/btn relative py-5 bg-[#1A1A1A] text-white overflow-hidden rounded-xl transition-all duration-500">
              <span class="relative z-10 font-bold tracking-[0.25em] text-[10px] uppercase">Get Quotation</span>
              <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        <div v-else key="photo" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(pkg, index) in photoPackages" :key="pkg.name" 
               class="group relative bg-[#1A1A1A] p-10 rounded-[2rem] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-3">
            <div class="mb-8 flex justify-between items-start">
              <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#FDFCFB] transition-colors duration-500 group-hover:bg-[#800000]">
                <i class="fa-solid fa-camera-retro text-xl"></i>
              </div>
              <span class="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Tier {{ index + 1 }}</span>
            </div>
            <h4 class="font-serif italic text-3xl text-[#FDFCFB] mb-2 group-hover:text-[#800000] transition-colors duration-500">{{ pkg.name }}</h4>
            <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-[#800000] mb-8">{{ pkg.tier }}</p>
            
            <div class="h-[1px] w-full bg-white/5 mb-8"></div>

            <ul class="space-y-5 mb-12">
              <li v-for="feature in pkg.features" :key="feature" class="text-sm text-[#FDFCFB]/60 flex items-start gap-3 font-light">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#800000] shrink-0"></span>
                {{ feature }}
              </li>
            </ul>

            <button class="w-full group/btn relative py-5 bg-[#800000] text-white overflow-hidden rounded-xl transition-all duration-500">
              <span class="relative z-10 font-bold tracking-[0.25em] text-[10px] uppercase">Book Session</span>
              <div class="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              <span class="absolute inset-0 flex items-center justify-center z-20 font-bold tracking-[0.25em] text-[10px] uppercase text-[#1A1A1A] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500">Book Session</span>
            </button>
          </div>
        </div>
      </transition>

    </div>

    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-1/4 h-1/4 bg-[#800000]/5 blur-[150px] rounded-full pointer-events-none"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('event');

const eventPackages = [
  {
    name: 'Royal Wedding',
    tier: 'Premium Planning',
    icon: 'fa-solid fa-crown',
    features: ['Venue Decoration & Lighting', 'Catering Management', 'Guest Coordination', 'On-site Supervisor']
  },
  {
    name: 'Classic Birthday',
    tier: 'Theme Based',
    icon: 'fa-solid fa-cake-candles',
    features: ['Themed Stage Design', 'Magic Show & Hosting', 'Customized Backdrops', 'Photography Included']
  },
  {
    name: 'Corporate Event',
    tier: 'Professional',
    icon: 'fa-solid fa-handshake',
    features: ['Sound & Visual Setup', 'Guest Reception', 'Itinerary Planning', 'VIP Management']
  }
];

const photoPackages = [
  {
    name: 'Wedding Story',
    tier: 'Cinematic Cinema',
    features: ['2 Senior Photographers', 'Cinematic Wedding Film', 'Unlimited Digital Shots', 'Premium Photo Album']
  },
  {
    name: 'Event Snapshot',
    tier: 'Half Day',
    features: ['1 Senior Photographer', '150 Edited Photos', '4 Hours Coverage', 'Online Gallery Access']
  },
  {
    name: 'Portrait Session',
    tier: 'Conceptual',
    features: ['Outdoor Locations', 'Creative Retouching', 'Social Media Teaser', 'All High-res Files']
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>