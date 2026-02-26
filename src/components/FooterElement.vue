<template>
  <footer class="bg-brand-dark w-full pt-20 pb-8 px-6 lg:px-32 border-t border-brand-maroon/30 relative">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div class="flex flex-col items-center md:items-start space-y-5">
          <div>
            <p class="font-display text-4xl font-bold text-white leading-none tracking-tight">Imagery</p>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed text-center md:text-left font-medium">
            Professional photography and cinematography services. We turn your precious moments into timeless masterpieces.
          </p>
          <div class="flex gap-4 pt-2">
            <a v-for="(social, i) in socials" :key="i" :href="social.link" target="_blank" 
               class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-brand-maroon hover:border-brand-maroon transition-all duration-300">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h4 class="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b-2 border-brand-maroon pb-1">Quick Links</h4>
          <ul class="space-y-4 text-center md:text-left">
            <li><a href="#" class="text-gray-300 hover:text-white font-semibold transition-colors">Home</a></li>
            <li><a href="#services-section" class="text-gray-300 hover:text-white font-semibold transition-colors">Our Services</a></li>
            <li><a href="#portfolio-section" class="text-gray-300 hover:text-white font-semibold transition-colors">Portfolio</a></li>
            <li><a href="#contact-section" class="text-gray-300 hover:text-white font-semibold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h4 class="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b-2 border-brand-maroon pb-1">Services</h4>
          <ul class="space-y-4 text-center md:text-left text-gray-300 font-semibold">
            <li class="hover:text-white transition-colors cursor-pointer">Wedding Photography</li>
            <li class="hover:text-white transition-colors cursor-pointer">Cinematic Films</li>
            <li class="hover:text-white transition-colors cursor-pointer">Event Coverage</li>
            <li class="hover:text-white transition-colors cursor-pointer">Portrait Sessions</li>
          </ul>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h4 class="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b-2 border-brand-maroon pb-1">Contact</h4>
          <div class="space-y-4 text-center md:text-left text-gray-300 font-semibold">
            <p class="flex items-center justify-center md:justify-start gap-3">
              <i class="fa-solid fa-location-dot text-brand-maroon text-lg"></i>
              Savar, Dhaka, Bangladesh
            </p>
            <p class="flex items-center justify-center md:justify-start gap-3">
              <i class="fa-solid fa-phone text-brand-maroon text-lg"></i>
              +880 1629 833 169
            </p>
            <p class="flex items-center justify-center md:justify-start gap-3">
              <i class="fa-solid fa-envelope text-brand-maroon text-lg"></i>
              imagery990@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">
          © 2026 Imagery • All Rights Reserved
        </p>
        
        <div class="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
          <span>Developed by</span>
          <a href="https://tanvir-amin.netlify.app/" target="_blank" 
             class="text-white hover:text-brand-maroon transition-all border-b border-white/30 hover:border-brand-maroon pb-0.5">
            Tanvir Amin
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { icon: 'fa-brands fa-facebook-f', link: 'https://facebook.com/Imagery' },
        { icon: 'fa-brands fa-instagram', link: 'https://instagram.com/Imagery.990' },
        { icon: 'fa-brands fa-whatsapp', link: 'https://wa.me/8801629833169' },
        { icon: 'fa-solid fa-globe', link: 'https://tanvir-amin.netlify.app/' }
      ]
    }
  }
}
</script>