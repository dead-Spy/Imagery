<template>
	<main-section></main-section>

	<about-section @open-experience="isProcessOpen = true"></about-section>

	<transition name="luxury-fade">
		<process-section v-if="isProcessOpen" @close="isProcessOpen = false"></process-section>
	</transition>

	<service-section></service-section>

	<portfolio-section></portfolio-section>

	<contact-section></contact-section>
</template>

<script>
import { ref, watch } from 'vue';
import MainSection from '@/sections/MainSection.vue';
import AboutSection from '@/sections/AboutSection.vue';
import ProcessSection from '@/sections/ProcessSection.vue';
import ServiceSection from '@/sections/ServiceSection.vue';
import PortfolioSection from '@/sections/PortfolioSection.vue';
import ContactSection from '@/sections/ContactSection.vue';

export default {
	components: {
		MainSection,
		AboutSection,
		ProcessSection,
		ServiceSection,
		PortfolioSection,
		ContactSection,
	},
	setup() {
		const isProcessOpen = ref(false);

		watch(isProcessOpen, (value) => {
			if (value) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
		});

		return {
			isProcessOpen
		};
	}
}
</script>

<style scoped>
.luxury-fade-enter-active,
.luxury-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.luxury-fade-enter-from,
.luxury-fade-leave-to {
  opacity: 0;
  transform: scale(1.05) translateY(20px);
}
</style>