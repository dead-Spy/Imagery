<template>
  <section id="contact-section" class="px-6 lg:px-32 py-16 lg:py-24 relative overflow-hidden bg-brand-cream/30">
    <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div class="lg:col-span-5 space-y-10 lg:space-y-12 text-center lg:text-left">
          <div>
            <span class="text-brand-maroon font-bold tracking-[0.2em] uppercase text-sm">Contact Us</span>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-maroon mt-4 mb-6 leading-tight">
              Let’s Capture <br> <span class="text-brand-dark italic">Your Story</span>
            </h1>
            <p class="text-brand-dark/70 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              Have a special event coming up? We'd love to hear from you. Reach out and let's create something magical together.
            </p>
          </div>

          <div class="space-y-6 md:space-y-8">
            <div class="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 group">
              <div class="w-14 h-14 bg-white border border-brand-rose/40 rounded-2xl flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                <i class="fa-solid fa-phone text-xl"></i>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-brand-maroon text-sm uppercase tracking-wider mb-1">Call Us</h4>
                <div class="flex items-center justify-center lg:justify-start gap-2">
                  <i class="fa-solid fa-phone-flip text-brand-dark/30 text-sm"></i>
                  <p class="text-brand-dark font-semibold text-base md:text-lg">+880 1629 833 169</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 group">
              <div class="w-14 h-14 bg-white border border-brand-rose/40 rounded-2xl flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                <i class="fa-solid fa-envelope text-xl"></i>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-brand-maroon text-sm uppercase tracking-wider mb-1">Email Address</h4>
                <div class="flex items-center justify-center lg:justify-start gap-2">
                  <i class="fa-solid fa-paper-plane text-brand-dark/30 text-sm"></i>
                  <p class="text-brand-dark font-semibold text-base md:text-lg">imagery990@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-6 group">
              <div class="w-14 h-14 bg-white border border-brand-rose/40 rounded-2xl flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                <i class="fa-solid fa-location-dot text-xl"></i>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-brand-maroon text-sm uppercase tracking-wider mb-1">Our Studio</h4>
                <div class="flex items-center justify-center lg:justify-start gap-2">
                  <i class="fa-solid fa-map-pin text-brand-dark/30 text-sm"></i>
                  <p class="text-brand-dark font-semibold text-base md:text-lg">Savar, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-brand-rose/20 relative">
            <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div class="md:col-span-1">
                <label class="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-maroon mb-2 md:mb-3 ml-1">Full Name</label>
                <input type="text" class="w-full bg-brand-cream/50 border border-brand-rose/30 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:bg-white focus:border-brand-maroon transition-all text-brand-dark font-medium" placeholder="John Doe">
              </div>

              <div class="md:col-span-1">
                <label class="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-maroon mb-2 md:mb-3 ml-1">Email Address</label>
                <input type="email" class="w-full bg-brand-cream/50 border border-brand-rose/30 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:bg-white focus:border-brand-maroon transition-all text-brand-dark font-medium" placeholder="john@example.com">
              </div>

              <div class="md:col-span-2">
                <label class="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-maroon mb-2 md:mb-3 ml-1">Event Type</label>
                <div class="relative">
                  <select class="w-full bg-brand-cream/50 border border-brand-rose/30 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:bg-white focus:border-brand-maroon transition-all text-brand-dark font-medium appearance-none">
                    <option>Wedding Photography</option>
                    <option>Event Cinematography</option>
                    <option>Corporate Shoot</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>

              <div class="md:col-span-2">
                <label class="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-maroon mb-2 md:mb-3 ml-1">Message</label>
                <textarea rows="4" class="w-full bg-brand-cream/50 border border-brand-rose/30 rounded-xl md:rounded-2xl py-3 md:py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand-maroon/10 focus:bg-white focus:border-brand-maroon transition-all text-brand-dark font-medium resize-none" placeholder="Tell us about your event..."></textarea>
              </div>

              <div class="md:col-span-2 mt-2 md:mt-4">
                <button class="group relative w-full overflow-hidden rounded-xl md:rounded-2xl bg-brand-maroon px-8 py-4 md:py-5 font-bold text-white transition-all duration-300 hover:bg-brand-dark shadow-lg shadow-brand-maroon/20">
                  <span class="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs md:text-sm">
                    Send Inquiry
                    <i class="fa-solid fa-paper-plane text-[10px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-brand-rose/20 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cream/20 -z-20"></div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23800000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.2rem center;
  background-size: 1rem;
}
@media (min-width: 768px) {
  select {
    background-position: right 1.5rem center;
    background-size: 1.2rem;
  }
}
</style>