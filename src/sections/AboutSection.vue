<template>
	<section id="about" class="relative py-32 bg-brand-cream overflow-hidden">
		<div class="max-w-[1400px] mx-auto px-6 lg:px-20 relative">
			<div class="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
				
				<div class="w-full lg:w-3/5 flex gap-8 items-center h-[500px] md:h-[650px]">
					
					<div class="hidden md:flex flex-col gap-4 h-full overflow-hidden relative w-32 shrink-0">
						<div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-brand-cream to-transparent z-10"></div>
						<div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-cream to-transparent z-10"></div>
						
						<div class="flex flex-col gap-4 animate-infinite-scroll">
							<div v-for="(img, index) in scrollImages" :key="'scroll-1-' + index" class="w-full aspect-square rounded-xl overflow-hidden shadow-md border-2 border-white/50 grayscale hover:grayscale-0 transition-all duration-500">
								<img :src="img" class="w-full h-full object-cover" alt="Gallery item">
							</div>
							<div v-for="(img, index) in scrollImages" :key="'scroll-2-' + index" class="w-full aspect-square rounded-xl overflow-hidden shadow-md border-2 border-white/50 grayscale hover:grayscale-0 transition-all duration-500">
								<img :src="img" class="w-full h-full object-cover" alt="Gallery item">
							</div>
						</div>
					</div>

					<div class="relative flex-1 flex justify-center items-center perspective-2000">
						<div class="relative w-full max-w-[260px] md:max-w-[300px] aspect-[3/4] group">
							<div class="absolute inset-0 z-10 transform rotate-[-12deg] -translate-x-8 translate-y-8 shadow-xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[-25deg] group-hover:-translate-x-40 group-hover:-translate-y-12">
								<img src="@/assets/image3.jpg" class="w-full h-full object-cover">
								<div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
									<span class="bg-white/90 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-brand-maroon">Design</span>
								</div>
							</div>

							<div class="absolute inset-0 z-20 transform rotate-0 translate-x-0 translate-y-0 shadow-2xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-20">
								<img src="@/assets/image2.jpg" class="w-full h-full object-cover scale-110">
								<div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
									<span class="bg-brand-maroon px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-white">Events</span>
								</div>
							</div>

							<div class="absolute inset-0 z-30 transform rotate-[12deg] translate-x-8 -translate-y-8 shadow-2xl rounded-2xl overflow-hidden border-4 border-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[25deg] group-hover:translate-x-40 group-hover:-translate-y-12">
								<img src="@/assets/image1.jpg" class="w-full h-full object-cover">
								<div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
									<span class="bg-white/90 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-brand-maroon">Photography</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-2/5 space-y-10">
					<div class="space-y-6">
						<div class="flex items-center gap-4">
							<span class="w-16 h-[1px] bg-brand-maroon"></span>
							<span class="text-brand-maroon text-[11px] font-bold uppercase tracking-[0.6em]">Premium Perspective</span>
						</div>
						<h2 class="font-display text-5xl lg:text-7xl text-brand-dark leading-tight">
							Unfolding Every <br>
							<span class="italic text-brand-maroon font-normal">Dimension.</span>
						</h2>
						<p class="text-brand-dark/70 text-lg leading-relaxed font-light">
							From grand setups to silent glances—we cover every layer of your story with artistic precision and luxury flair.
						</p>
					</div>

					<div class="flex flex-wrap gap-8 pt-4">
						<div v-for="n in ['01', '02', '03']" :key="n" class="flex flex-col gap-1">
							<h4 class="text-brand-maroon font-bold text-2xl font-display italic leading-none">{{ n }}</h4>
							<p class="text-[9px] uppercase tracking-widest font-bold text-brand-dark opacity-60">Phase</p>
						</div>
					</div>

					<div class="pt-6">
						<button class="px-10 py-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-brand-maroon transition-all duration-500 shadow-xl">
							Start the Experience
						</button>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			scrollImages: [
				require('@/assets/image1.jpg'),
				require('@/assets/image2.jpg'),
				require('@/assets/image3.jpg'),
				require('@/assets/image1.jpg'),
				require('@/assets/image2.jpg'),
				require('@/assets/image3.jpg'),
				require('@/assets/image1.jpg')
			]
		}
	}
}
</script>

<style scoped>
.perspective-2000 {
	perspective: 2000px;
}

@keyframes infinite-scroll {
	from { transform: translateY(0); }
	to { transform: translateY(-50%); }
}

.animate-infinite-scroll {
	animation: infinite-scroll 25s linear infinite;
}

.animate-infinite-scroll:hover {
	animation-play-state: paused;
}
</style>