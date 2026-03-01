<template>
  <section id="contact" class="relative py-32 bg-[#FDFCFB] overflow-hidden px-6 md:px-12 lg:px-24">
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none" 
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 24px 24px;">
    </div>
    
    <div class="absolute top-0 right-0 w-1/4 h-1/4 bg-[#800000]/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        <div class="space-y-16">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <span class="h-[1px] w-12 bg-[#800000]"></span>
              <span class="text-[#800000] font-bold uppercase tracking-[0.6em] text-[10px]">Get In Touch</span>
            </div>
            <h2 class="text-[#1A1A1A] text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tighter leading-[0.9]">
              Let’s Create <br>
              <span class="font-serif italic text-[#800000]">Magic.</span>
            </h2>
            <p class="text-[#1A1A1A]/60 text-lg font-light max-w-md leading-relaxed">
              Have a vision in mind? We are here to transform your special moments into timeless visual stories.
            </p>
          </div>

          <div class="grid gap-10">
            <div v-for="(info, index) in contactInfo" :key="index" class="group flex items-start gap-6">
              <div class="w-12 h-12 rounded-full border border-[#800000]/20 flex items-center justify-center text-[#800000] transition-all duration-500 group-hover:bg-[#800000] group-hover:text-white group-hover:scale-110">
                <i :class="info.icon"></i>
              </div>
              <div>
                <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-[#800000]/40 mb-1">{{ info.label }}</p>
                <p class="text-xl text-[#1A1A1A] font-light">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 bg-[#800000]/5 blur-3xl rounded-full opacity-50"></div>
          <div class="relative bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(128,0,0,0.08)] border border-[#1A1A1A]/5">
            <form @submit.prevent class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="relative group">
                  <input type="text" required class="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#800000] transition-all text-[#1A1A1A] placeholder-transparent">
                  <label class="absolute left-0 top-4 text-[#1A1A1A]/40 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#800000] peer-valid:-top-4 peer-valid:text-[10px]">Full Name</label>
                </div>
                <div class="relative group">
                  <input type="email" required class="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#800000] transition-all text-[#1A1A1A] placeholder-transparent">
                  <label class="absolute left-0 top-4 text-[#1A1A1A]/40 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#800000] peer-valid:-top-4 peer-valid:text-[10px]">Email Address</label>
                </div>
              </div>

              <div class="relative group">
                <select class="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#800000] transition-all text-[#1A1A1A] appearance-none cursor-pointer">
                  <option disabled selected>Select Event Type</option>
                  <option>Wedding Photography</option>
                  <option>Event Cinematography</option>
                  <option>Corporate Shoot</option>
                </select>
                <div class="absolute right-0 top-6 pointer-events-none text-[#800000]">
                  <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
              </div>

              <div class="relative group">
                <textarea rows="4" required class="peer w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#800000] transition-all text-[#1A1A1A] placeholder-transparent resize-none"></textarea>
                <label class="absolute left-0 top-4 text-[#1A1A1A]/40 text-sm uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#800000] peer-valid:-top-4 peer-valid:text-[10px]">Your Message</label>
              </div>

              <button class="w-full group/btn relative py-6 bg-[#1A1A1A] text-white overflow-hidden rounded-2xl transition-all duration-500 shadow-xl">
                <span class="relative z-10 font-bold tracking-[0.4em] text-[10px] uppercase flex items-center justify-center gap-4">
                  Send Inquiry
                  <i class="fa-solid fa-arrow-right-long transition-transform duration-500 group-hover/btn:translate-x-2"></i>
                </span>
                <div class="absolute inset-0 bg-[#800000] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  { icon: 'fa-solid fa-phone', label: 'Call Us', value: '+880 1629 833 169' },
  { icon: 'fa-solid fa-envelope', label: 'Email Address', value: 'imagery990@gmail.com' },
  { icon: 'fa-solid fa-location-dot', label: 'Our Studio', value: 'Savar, Dhaka, BD' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@200;300;400;600&display=swap');

section {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

select {
  background-image: none;
}
</style>