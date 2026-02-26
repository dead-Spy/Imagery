<template>
	<section id="portfolio-section" class="px-6 lg:px-32 py-24 relative overflow-hidden">
		<div class="flex gap-8 flex-col md:flex-row items-end mb-16">
			<h1 class="font-display text-5xl font-bold text-brand-maroon leading-tight uppercase">
				OUR <br> PORTFOLIO
			</h1>
			<div class="h-0.5 w-20 bg-brand-maroon mb-4 hidden md:block"></div>
			<p class="font-medium text-brand-dark/70 xl:w-1/2">
				Every frame tells a story. Explore our collection of captured emotions, stunning celebrations, and cinematic moments that last a lifetime.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
			<div class="flex flex-col gap-4">
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio1.jpg" alt="Gallery 1" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio2.jpg" alt="Gallery 2" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
			</div>
			
			<div class="flex flex-col gap-4 mt-8 md:mt-12">
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio3.jpg" alt="Gallery 3" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio4.jpg" alt="Gallery 4" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio8.jpg" alt="Gallery 8" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio5.jpg" alt="Gallery 5" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
			</div>

			<div class="flex flex-col gap-4 mt-8 md:mt-12">
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio7.jpg" alt="Gallery 7" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio6.jpg" alt="Gallery 6" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio9.jpg" alt="Gallery 9" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
				<div class="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group">
					<img src="@/assets/portfolio/portfolio10.jpg" alt="Gallery 10" class="w-full transform group-hover:scale-110 transition duration-500">
				</div>
			</div>
		</div>

		<div class="flex justify-end">
			<a href="#" class="group flex items-center gap-3">
				<span class="font-bold text-brand-maroon text-lg group-hover:mr-2 transition-all duration-300 italic">View More Masterpieces</span>
				<div class="bg-brand-maroon text-white p-3 rounded-full group-hover:scale-110 transition-all">
					<i class="fa-solid fa-arrow-right"></i>
				</div>
			</a>
		</div>

		<div class="bg-brand-rose/5 h-96 w-96 rounded-full absolute top-1/2 -left-20 -translate-y-1/2 -z-10 blur-3xl"></div>
	</section>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>