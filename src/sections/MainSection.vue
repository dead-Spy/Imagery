<template>
  <section id="home" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-cream px-6 lg:px-20 py-20">
    
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 gap-20">
      
      <div class="w-full lg:w-1/2 space-y-10 text-center lg:text-left animate-fade-in-up">
        <div class="space-y-4">
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-px w-12 bg-brand-maroon/40"></span>
            <span class="text-brand-maroon font-bold uppercase tracking-[0.5em] text-[11px]">Luxury Storytelling</span>
          </div>
          <h1 class="font-display text-brand-dark text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05]">
            Eternal <br>
            <span class="font-serif italic text-brand-maroon">Moments</span> <br>
            In Frame
          </h1>
        </div>

        <p class="text-brand-dark/70 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium italic border-l-2 border-brand-maroon/10 pl-6">
          "Transforming ephemeral moments into timeless visual legacies through the lens of cinematic excellence."
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
          <button class="w-full sm:w-auto group relative overflow-hidden bg-brand-maroon text-white px-10 py-5 rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(128,0,0,0.25)]">
            <span class="relative z-10 font-bold tracking-[0.2em] text-xs uppercase text-white">View Portfolio</span>
            <div class="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <button class="w-full sm:w-auto group px-10 py-5 rounded-full border-2 border-brand-maroon/10 hover:border-brand-maroon transition-all duration-500">
            <span class="font-bold tracking-[0.2em] text-xs uppercase text-brand-maroon">Book A Session</span>
          </button>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center items-center relative py-24">
        <div class="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] group perspective-2000">
          
          <div class="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border-[12px] border-white overflow-hidden transition-all duration-1000 transform rotate-[-12deg] group-hover:rotate-[-25deg] group-hover:-translate-x-36 group-hover:-translate-y-8 opacity-90 group-hover:opacity-100">
            <img src="@/assets/card1.jpg" class="w-full h-full object-cover" alt="Wedding Moment 1">
          </div>

          <div class="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border-[12px] border-white overflow-hidden transition-all duration-1000 transform rotate-[8deg] group-hover:rotate-[22deg] group-hover:translate-x-36 group-hover:-translate-y-8 delay-75 opacity-90 group-hover:opacity-100">
            <img src="@/assets/card2.jpg" class="w-full h-full object-cover" alt="Wedding Moment 2">
          </div>

          <div class="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[12px] border-white overflow-hidden transition-all duration-1000 z-20 group-hover:-translate-y-20 group-hover:scale-105">
            <img src="@/assets/card3.jpg" class="w-full h-full object-cover" alt="Wedding Moment 3">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-white border border-brand-maroon/10 rounded-full flex items-center justify-center z-30 shadow-xl animate-float group-hover:scale-110 transition-transform overflow-hidden p-6">
            <img src="@/assets/logo.png" class="w-full h-full object-contain" alt="JM Imagery Logo">
          </div>

        </div>
      </div>
    </div>

    <div class="absolute top-1/2 left-0 w-64 h-64 bg-brand-maroon/5 rounded-full blur-[100px] -z-10"></div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-fade-in-up {
  animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.perspective-2000 {
  perspective: 2000px;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

@media (max-width: 1024px) {
  .group-hover\:-translate-x-36 { transform: rotate(-15deg) translateX(-50px) scale(0.9) !important; }
  .group-hover\:translate-x-36 { transform: rotate(12deg) translateX(50px) scale(0.9) !important; }
}
</style>