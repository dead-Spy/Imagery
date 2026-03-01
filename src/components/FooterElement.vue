<template>
  <footer class="bg-[#FDFCFB] w-full pt-32 pb-12 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-[#1A1A1A]/5">
    
    <div class="absolute inset-0 opacity-[0.12] pointer-events-none" 
         style="background-image: radial-gradient(#800000 0.8px, transparent 0.8px); background-size: 24px 24px;">
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        
        <div class="lg:col-span-5 space-y-8">
          <h2 class="font-serif italic text-6xl text-[#1A1A1A] tracking-tighter">Imagery.</h2>
          <p class="text-[#1A1A1A]/60 text-lg font-light leading-relaxed max-w-sm">
            Crafting visual legacies through cinematic storytelling and elite photography. We turn moments into timeless art pieces.
          </p>
          <div class="flex gap-4 pt-4">
            <a v-for="(social, i) in socials" :key="i" :href="social.link" target="_blank" 
               class="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/60 hover:text-white hover:bg-[#800000] hover:border-[#800000] transition-all duration-500 transform hover:-translate-y-2">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-8">
            <h4 class="text-[#800000] font-bold uppercase tracking-[0.4em] text-[10px]">Navigation</h4>
            <ul class="space-y-4">
              <li v-for="link in ['Home', 'Services', 'Portfolio', 'Contact']" :key="link">
                <a href="#" class="text-[#1A1A1A]/70 hover:text-[#800000] text-sm font-medium transition-all duration-300 flex items-center gap-2 group">
                  <span class="w-0 h-[1px] bg-[#800000] transition-all duration-300 group-hover:w-4"></span>
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-8">
            <h4 class="text-[#800000] font-bold uppercase tracking-[0.4em] text-[10px]">Studio</h4>
            <ul class="space-y-4 text-[#1A1A1A]/70 text-sm font-medium">
              <li class="flex items-start gap-3">
                <i class="fa-solid fa-location-dot mt-1 text-[#800000]"></i>
                Savar, Dhaka, Bangladesh
              </li>
              <li class="flex items-center gap-3">
                <i class="fa-solid fa-phone text-[#800000]"></i>
                +880 1629 833 169
              </li>
              <li class="flex items-center gap-3">
                <i class="fa-solid fa-envelope text-[#800000]"></i>
                imagery990@gmail.com
              </li>
            </ul>
          </div>

          <div class="space-y-8">
            <h4 class="text-[#800000] font-bold uppercase tracking-[0.4em] text-[10px]">Newsletter</h4>
            <div class="relative group">
              <input type="email" placeholder="Email Address" class="w-full bg-transparent border-b border-[#1A1A1A]/10 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#800000] transition-all placeholder:text-[#1A1A1A]/30">
              <button class="absolute right-0 top-3 text-[#1A1A1A]/40 hover:text-[#800000] transition-colors">
                <i class="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
            <p class="text-[9px] uppercase tracking-widest text-[#1A1A1A]/40">Subscribe for updates</p>
          </div>
        </div>
      </div>

      <div class="pt-12 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-6">
          <p class="text-[#1A1A1A]/40 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 Imagery Studio
          </p>
          <span class="h-4 w-[1px] bg-[#1A1A1A]/10 hidden md:block"></span>
          <p class="text-[#1A1A1A]/40 text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer hover:text-[#800000] transition-colors">
            Privacy Policy
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#1A1A1A]/40 text-[10px] font-bold uppercase tracking-[0.3em]">Developed by</span>
          <a href="https://tanvir-amin.netlify.app/" target="_blank" 
             class="text-[#1A1A1A]/80 hover:text-[#800000] text-[10px] font-bold uppercase tracking-[0.3em] transition-all border-b border-[#1A1A1A]/10 hover:border-[#800000] pb-1">
            Tanvir Amin
          </a>
        </div>
      </div>
    </div>

    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-[#800000]/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-[#800000]/5 blur-[100px] rounded-full pointer-events-none"></div>
  </footer>
</template>

<script setup>
const socials = [
  { icon: 'fa-brands fa-facebook-f', link: 'https://facebook.com/Imagery' },
  { icon: 'fa-brands fa-instagram', link: 'https://instagram.com/Imagery.990' },
  { icon: 'fa-brands fa-whatsapp', link: 'https://wa.me/8801629833169' },
  { icon: 'fa-solid fa-globe', link: 'https://tanvir-amin.netlify.app/' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@200;400;500;600&display=swap');

footer {
  font-family: 'Inter', sans-serif;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>