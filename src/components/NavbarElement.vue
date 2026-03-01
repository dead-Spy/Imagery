<template>
  <header class="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <nav 
      :class="[
        isScrolled || isMobileMenuOpen ? 'bg-[#FDFCFB] shadow-lg' : 'bg-[#FDFCFB]/80 backdrop-blur-xl',
        'relative pointer-events-auto w-full md:w-auto h-16 md:h-16 border-b md:border border-[#800000]/10 md:rounded-full px-6 md:px-2 flex items-center justify-between md:justify-center transition-all duration-300'
      ]"
    >
      <div class="flex md:hidden items-center">
        <p class="text-2xl font-serif italic tracking-tighter text-[#800000] drop-shadow-sm">Imagery</p>
      </div>

      <div 
        class="hidden md:block absolute h-10 bg-[#800000] rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg shadow-[#800000]/30"
        :style="activeIndicatorStyle"
      ></div>

      <div class="hidden md:flex relative items-center justify-between w-full h-full px-4">
        <a 
          v-for="(item, index) in menuItems" 
          :key="index"
          :href="'#' + item.id"
          :ref="'menuItem' + index"
          @click="setActive(index)"
          class="relative px-8 h-full flex items-center justify-center text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 z-10 gap-2"
          :class="activeIndex === index ? 'text-white' : 'text-[#1A1A1A]/70 hover:text-[#800000]'"
        >
          <i :class="item.icon"></i>
          {{ item.name }}
        </a>
      </div>

      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[70]"
      >
        <span :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''" class="w-7 h-0.5 bg-[#800000] transition-all duration-300"></span>
        <span :class="isMobileMenuOpen ? 'opacity-0' : ''" class="w-7 h-0.5 bg-[#800000] transition-all duration-300"></span>
        <span :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''" class="w-7 h-0.5 bg-[#800000] transition-all duration-300"></span>
      </button>

      <transition name="dropdown">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 right-0 bg-[#FDFCFB] border-t border-[#800000]/10 shadow-2xl md:hidden overflow-hidden rounded-b-3xl">
          <div class="flex flex-col p-6 gap-4">
            <a 
              v-for="(item, index) in menuItems" 
              :key="index" 
              :href="'#' + item.id" 
              @click="handleMobileClick(index)" 
              class="flex items-center gap-4 text-xl font-bold text-[#1A1A1A]/80 hover:text-[#800000] transition-colors uppercase tracking-widest py-3 border-b border-[#800000]/5 last:border-none"
            >
              <i :class="item.icon" class="text-lg opacity-70"></i>
              {{ item.name }}
            </a>
            <a 
              href="#contact" 
              @click="isMobileMenuOpen = false" 
              class="bg-[#800000] text-white text-center py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg mt-2 active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <i class="fas fa-paper-plane"></i>
              Hire Us
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      isMobileMenuOpen: false,
      isScrolled: false,
      menuItems: [
        { name: 'Home', id: 'home', icon: 'fas fa-home' },
        { name: 'About', id: 'about', icon: 'fas fa-user' },
        { name: 'Services', id: 'services', icon: 'fas fa-cog' },
        { name: 'Portfolio', id: 'portfolio', icon: 'fas fa-th-large' },
        { name: 'Contact', id: 'contact', icon: 'fas fa-envelope' }
      ],
      activeIndicatorStyle: { width: '0px', left: '0px' }
    }
  },
  mounted() {
    this.$nextTick(() => { setTimeout(this.updateIndicator, 200); });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.updateIndicator);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateIndicator);
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
      this.updateIndicator();
    },
    handleMobileClick(index) {
      this.activeIndex = index;
      this.isMobileMenuOpen = false;
      this.updateIndicator();
    },
    updateIndicator() {
      const activeElement = this.$refs['menuItem' + this.activeIndex];
      if (activeElement && activeElement[0]) {
        const el = activeElement[0];
        const shrinkAmount = 24; 
        this.activeIndicatorStyle = {
          width: `${el.offsetWidth - shrinkAmount}px`,
          left: `${el.offsetLeft + (shrinkAmount / 2)}px`
        };
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
      const scrollPosition = window.scrollY + 300;
      this.menuItems.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (this.activeIndex !== index) {
              this.activeIndex = index;
              this.updateIndicator();
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 500px;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>