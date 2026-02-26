<template>
	<section id="services" class="relative py-32 bg-brand-cream overflow-hidden">
		<div class="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
			
			<div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<div class="space-y-6">
					<div class="flex items-center gap-4">
						<span class="w-16 h-[1px] bg-brand-maroon"></span>
						<span class="text-brand-maroon text-[11px] font-bold uppercase tracking-[0.6em]">Premium Services</span>
					</div>
					<h2 class="font-display text-5xl lg:text-7xl text-brand-dark leading-tight">
						Select Your <br>
						<span class="italic text-brand-maroon font-normal">Package.</span>
					</h2>
				</div>

				<div class="flex bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-brand-rose/20 shadow-inner">
					<button 
						@click="activeTab = 'event'"
						:class="activeTab === 'event' ? 'bg-brand-maroon text-white shadow-lg' : 'text-brand-dark hover:text-brand-maroon'"
						class="px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500"
					>
						Event Management
					</button>
					<button 
						@click="activeTab = 'photo'"
						:class="activeTab === 'photo' ? 'bg-brand-maroon text-white shadow-lg' : 'text-brand-dark hover:text-brand-maroon'"
						class="px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500"
					>
						Photography
					</button>
				</div>
			</div>

			<transition name="fade-slide" mode="out-in">
				<div v-if="activeTab === 'event'" key="event" class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div v-for="pkg in eventPackages" :key="pkg.name" class="group bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-brand-rose/20 hover:border-brand-maroon/40 transition-all duration-500 shadow-xl hover:-translate-y-3">
						<div class="mb-8 flex justify-between items-start">
							<div class="w-12 h-12 bg-brand-maroon/10 rounded-2xl flex items-center justify-center text-brand-maroon">
								<i :class="pkg.icon" class="text-xl"></i>
							</div>
							<span class="text-[9px] font-bold text-brand-maroon/40 uppercase tracking-widest">Type: 01</span>
						</div>
						<h4 class="font-display text-3xl text-brand-dark mb-2">{{ pkg.name }}</h4>
						<p class="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-maroon mb-8">{{ pkg.tier }}</p>
						<ul class="space-y-4 mb-12">
							<li v-for="feature in pkg.features" :key="feature" class="text-sm text-brand-dark/70 flex items-start gap-3">
								<span class="text-brand-maroon mt-1.5 w-1.5 h-1.5 rounded-full border border-brand-maroon shrink-0"></span>
								{{ feature }}
							</li>
						</ul>
						<button class="w-full py-5 rounded-2xl bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-maroon transition-all duration-300 shadow-lg">
							Get Quotation
						</button>
					</div>
				</div>

				<div v-else key="photo" class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div v-for="pkg in photoPackages" :key="pkg.name" class="group bg-brand-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-rose transition-all duration-500 shadow-2xl hover:-translate-y-3">
						<div class="mb-8 flex justify-between items-start">
							<div class="w-12 h-12 bg-brand-rose/10 rounded-2xl flex items-center justify-center text-brand-rose">
								<i class="fa-solid fa-camera-retro text-xl"></i>
							</div>
							<span class="text-[9px] font-bold text-brand-rose/40 uppercase tracking-widest">Type: 02</span>
						</div>
						<h4 class="font-display text-3xl text-brand-cream mb-2">{{ pkg.name }}</h4>
						<p class="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-rose mb-8">{{ pkg.tier }}</p>
						<ul class="space-y-4 mb-12">
							<li v-for="feature in pkg.features" :key="feature" class="text-sm text-brand-cream/60 flex items-start gap-3">
								<span class="text-brand-rose mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-rose shrink-0"></span>
								{{ feature }}
							</li>
						</ul>
						<button class="w-full py-5 rounded-2xl bg-brand-maroon text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-rose hover:text-brand-dark transition-all duration-300">
							Book Session
						</button>
					</div>
				</div>
			</transition>

		</div>

		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
			<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-maroon/5 rounded-full blur-[120px]"></div>
			<div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-rose/10 rounded-full blur-[120px]"></div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			activeTab: 'event',
			eventPackages: [
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
			],
			photoPackages: [
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
			]
		}
	}
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
	transition: all 0.4s ease;
}
.fade-slide-enter-from {
	opacity: 0;
	transform: translateY(20px);
}
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>