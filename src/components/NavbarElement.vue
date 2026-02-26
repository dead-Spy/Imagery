<template>
	<header class="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
		<nav 
			:class="[
				isScrolled || isMobileMenuOpen ? 'bg-brand-cream shadow-lg' : 'bg-brand-cream/80 backdrop-blur-xl',
				'relative pointer-events-auto w-full md:w-auto h-16 md:h-16 border-b md:border border-brand-rose/20 md:rounded-full px-6 md:px-2 flex items-center justify-between md:justify-center transition-all duration-300'
			]"
		>
			<div class="flex md:hidden items-center">
				<p class="text-2xl font-serif italic tracking-tighter text-brand-maroon drop-shadow-sm">Imagery</p>
			</div>

			<div 
				class="hidden md:block absolute h-10 bg-brand-maroon rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg shadow-brand-maroon/30"
				:style="activeIndicatorStyle"
			></div>

			<div class="hidden md:flex relative items-center justify-between w-full h-full px-4">
				<a 
					v-for="(item, index) in menuItems" 
					:key="index"
					:href="'#' + item.id"
					:ref="'menuItem' + index"
					@click="setActive(index)"
					class="relative px-10 h-full flex items-center justify-center text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-500 z-10"
					:class="activeIndex === index ? 'text-white' : 'text-brand-dark/70 hover:text-brand-maroon'"
				>
					{{ item.name }}
				</a>
			</div>

			<button 
				@click="isMobileMenuOpen = !isMobileMenuOpen" 
				class="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[70]"
			>
				<span :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''" class="w-7 h-0.5 bg-brand-maroon transition-all duration-300"></span>
				<span :class="isMobileMenuOpen ? 'opacity-0' : ''" class="w-7 h-0.5 bg-brand-maroon transition-all duration-300"></span>
				<span :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''" class="w-7 h-0.5 bg-brand-maroon transition-all duration-300"></span>
			</button>

			<transition name="dropdown">
				<div v-if="isMobileMenuOpen" class="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-rose/10 shadow-2xl md:hidden overflow-hidden rounded-b-3xl">
					<div class="flex flex-col p-6 gap-4">
						<a 
							v-for="(item, index) in menuItems" 
							:key="index" 
							:href="'#' + item.id" 
							@click="handleMobileClick(index)" 
							class="text-xl font-bold text-brand-dark/80 hover:text-brand-maroon transition-colors uppercase tracking-widest py-3 border-b border-brand-rose/5 last:border-none"
						>
							{{ item.name }}
						</a>
						<a 
							href="#contact-section" 
							@click="isMobileMenuOpen = false" 
							class="bg-brand-maroon text-white text-center py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg mt-2 active:scale-95 transition-transform"
						>
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
				{ name: 'Home', id: 'home' },
				{ name: 'About', id: 'about' },
				{ name: 'Services', id: 'services' },
				{ name: 'Contact', id: 'contact-section' }
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
html {
	scroll-behavior: smooth;
}
</style>