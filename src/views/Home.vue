<template>
  <div class="min-h-screen bg-invoke-bg text-invoke-text flex flex-col items-center justify-start relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-invoke-bg via-invoke-bg/90 to-invoke-bg/80"></div>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-invoke-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-invoke-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- HERO + VSL SECTION -->
    <section class="w-full max-w-6xl mx-auto pt-32 md:pt-36 px-4 sm:px-6 relative z-10">
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <!-- Hero Text & CTA -->
        <div class="w-full md:w-1/2 text-left animate-slide-in-left">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-slide-in-left" style="animation-delay: 100ms;">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-invoke-accent to-invoke-accent">From Concept to MVP In</span>
            <span class="relative inline-block ml-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-invoke-accent to-white animate-pop-in" style="animation-delay: 300ms;">48 Hours</span>
              <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-invoke-accent to-white/50 animate-slide-in-right" style="animation-delay: 400ms;"></span>
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 animate-fade-in" style="animation-delay: 200ms;">
            Your vision, deployed and testable by the weekend. We turn ideas into production-ready applications 
            <span class="relative inline-block whitespace-nowrap">
              <span 
                v-for="(phrase, index) in speedPhrases" 
                :key="phrase"
                class="absolute left-0 transition-opacity duration-500"
                :class="currentPhraseIndex === index ? 'opacity-100' : 'opacity-0'"
              >... {{ phrase }}</span>
              <span class="invisible">... before your investors follow up</span>
            </span>
          </p>
          <div class="animate-slide-up" style="animation-delay: 300ms;">
            <router-link 
              to="/contact" 
              class="whitespace-nowrap inline-block text-center px-7 py-3.5 bg-white text-black rounded-xl hover:bg-invoke-accent hover:text-white transition-all duration-200 hover:shadow-lg font-medium text-base"
            >
              Build your MVP
            </router-link>
          </div>
        </div>
        
        <!-- VSL Section -->
        <div class="w-full md:w-1/2 animate-slide-in-right" style="animation-delay: 200ms;">
          <div class="relative aspect-video bg-invoke-bg/50 border border-invoke-border/10 shadow-2xl rounded-xl overflow-hidden animate-scale-in" style="animation-delay: 300ms;">
            <!-- Placeholder/Skeleton -->
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-invoke-accent/20 flex items-center justify-center animate-pulse">
                <svg class="w-8 h-8 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            <iframe 
              class="w-full h-full relative z-10"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="INVOKE - How We Build Impactful Software Fast"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="absolute bottom-4 left-4 text-white text-lg font-medium animate-fade-in" style="animation-delay: 500ms;">
              See how we build software fast →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT LOGOS SECTION -->
    <section class="w-full max-w-6xl mx-auto py-24 sm:py-28 relative z-10">
      <div class="w-full">
        <div class="text-center mb-8 px-4 sm:px-6">
          <h2 class="text-xl sm:text-2xl font-bold text-invoke-text opacity-0 animate-simple-fade-in" style="animation-delay: 100ms;">Trusted by <span class="text-invoke-accent">Innovators</span></h2>
        </div>
        
        <div class="relative bg-black/20 backdrop-blur-sm border-y border-invoke-border/10 opacity-0 animate-simple-fade-in" style="animation-delay: 200ms;">
          <!-- Edge Gradients -->
          <div class="absolute inset-y-0 left-0 w-40" style="background: linear-gradient(to right, rgb(17, 17, 17) 0%, rgba(17, 17, 17, 0.9) 20%, rgba(17, 17, 17, 0.7) 40%, rgba(17, 17, 17, 0.3) 60%, rgba(17, 17, 17, 0) 100%);"></div>
          <div class="absolute inset-y-0 right-0 w-40" style="background: linear-gradient(to left, rgb(17, 17, 17) 0%, rgba(17, 17, 17, 0.9) 20%, rgba(17, 17, 17, 0.7) 40%, rgba(17, 17, 17, 0.3) 60%, rgba(17, 17, 17, 0) 100%);"></div>
          
          <!-- Logo Container -->
          <div class="flex items-center justify-center gap-8 py-12 px-4 overflow-hidden">
            <div 
              v-for="(logo, index) in clientLogos" 
              :key="index"
              class="flex-shrink-0 w-48 h-20 flex items-center justify-center"
            >
              <img 
                :src="logo" 
                alt="Client Logo" 
                class="w-full h-full object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 filter brightness-0 invert" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CASE STUDIES SECTION -->
    <section id="case-studies" class="w-full max-w-6xl mx-auto py-12 sm:py-8 relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-invoke-text">Our <span class="text-invoke-accent">Cases</span></h2>
          <p class="text-lg text-invoke-text/70 max-w-3xl mx-auto mb-8">
            Real-world solutions that drive business growth
          </p>
          
          <!-- Category Filter -->
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              @click="selectedCategory = null"
              :class="[
                'px-4 py-2 rounded-xl text-sm transition-all duration-200',
                !selectedCategory 
                  ? 'bg-invoke-accent text-invoke-bg' 
                  : 'bg-invoke-bg/40 text-invoke-text/70 hover:bg-invoke-bg/60'
              ]"
            >
              All Stories
            </button>
            <button 
              v-for="(label, id) in categories" 
              :key="id"
              @click="selectedCategory = selectedCategory === id ? null : id"
              :class="[
                'px-4 py-2 rounded-xl text-sm transition-all duration-200',
                selectedCategory === id 
                  ? 'bg-invoke-accent text-invoke-bg' 
                  : 'bg-invoke-bg/40 text-invoke-text/70 hover:bg-invoke-bg/60'
              ]"
            >
              {{ label }}
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <router-link 
            v-for="story in filteredStories" 
            :key="story.id"
            :to="{ name: 'story', params: { id: story.id }}"
            class="group bg-invoke-bg/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-invoke-border/10 hover:border-invoke-accent/30 transition-all duration-300"
          >
            <div class="p-8 space-y-4 relative">
              <!-- Category Badges -->
              <div class="flex flex-wrap items-center gap-2">
                <span 
                  v-for="category in story.categories" 
                  :key="category"
                  class="text-xs px-2 py-1 rounded-full bg-invoke-accent/10 text-invoke-accent">
                  {{ categories[category] }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-semibold group-hover:text-invoke-accent transition-colors">
                {{ story.project }}
              </h3>

              <!-- Description -->
              <p class="text-sm text-invoke-text/70 line-clamp-2">
                {{ story.description }}
              </p>

              <!-- Metrics -->
              <div v-if="story.metrics" class="grid grid-cols-2 gap-3 pt-2">
                <div v-for="metric in story.metrics.slice(0, 2)" 
                     :key="metric.label"
                     :class="story.metrics.length === 1 ? 'col-span-2' : ''"
                     class="bg-invoke-bg/60 rounded-lg p-2 text-center">
                  <div class="text-sm font-medium text-invoke-accent">{{ metric.value }}</div>
                  <div class="text-xs text-invoke-text/60">{{ metric.label }}</div>
                </div>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in story.technologies.slice(0, 3)" 
                  :key="tech"
                  class="text-xs px-2 py-1 rounded-full bg-invoke-bg/60 text-invoke-text/70 group-hover:bg-invoke-accent/10 group-hover:text-invoke-accent transition-colors"
                >
                  {{ tech }}
                </span>
                <span v-if="story.technologies.length > 3" 
                      class="text-xs px-2 py-1 rounded-full bg-invoke-bg/60 text-invoke-text/70 group-hover:bg-invoke-accent/10 group-hover:text-invoke-accent transition-colors">
                  +{{ story.technologies.length - 3 }} more
                </span>
              </div>

              <!-- Read More -->
              <div class="flex items-center justify-between pt-2">
                <span class="text-sm text-invoke-accent group-hover:text-invoke-text transition-colors">
                  Read full story
                </span>
                <svg class="w-4 h-4 text-invoke-accent transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="flex justify-center mt-8">
          <router-link to="/stories" class="px-8 py-4 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg font-medium">
            View All Case Studies
          </router-link>
        </div>
      </div>
    </section>

    <!-- PROCESS SECTION -->
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
      <div class="flex flex-col lg:flex-row items-start gap-16">
        <!-- Left Column - Text Content -->
        <div class="w-full lg:w-7/12">
          <div class="lg:sticky lg:top-24">
            <div class="text-invoke-accent text-lg font-medium mb-4">BUILT BY BUILDERS WHO SHIP</div>
            <h2 class="text-4xl sm:text-5xl font-bold mb-8">
              <span class="text-invoke-text">FROM IDEA TO IMPACT</span>
            </h2>
            
            <div class="space-y-6 text-lg text-invoke-text/80 mb-12">
              <p>
                We started INVOKE because we were tired of watching great ideas stall in bloated dev cycles, endless planning calls, and half-finished builds that never launch.
              </p>
              
              <p>
                Too many founders waste months on Upwork, chase flaky freelancers, or end up managing teams that can't execute.
              </p>
              
              <p>
                We take your idea, cut the fluff, and turn it into a real, testable MVP - usually in under 48 hours.
              </p>

              <p>
                We've shipped investor-ready demos in a weekend, launched profitable features in a day, and helped founders raise funding off version one.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="whitespace-nowrap inline-block text-center px-7 py-3.5 bg-white text-black rounded-xl hover:bg-invoke-accent hover:text-white transition-all duration-200 hover:shadow-lg font-medium text-base"
              >
                Build your MVP
              </router-link>
              <router-link 
                to="/stories" 
                class="whitespace-nowrap inline-block text-center px-7 py-3.5 bg-black/20 backdrop-blur-sm text-white rounded-xl hover:bg-invoke-accent/20 transition-all duration-200 text-base border border-white/10 hover:border-invoke-accent/30"
              >
                View our cases
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right Column - Process Steps -->
        <div class="w-full lg:w-5/12">
          <div class="relative min-h-[520px]">
            <!-- Step 1 -->
            <div class="absolute top-100 right-0 w-[85%]">
              <div class="relative">
                <div class="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-invoke-accent/20 relative z-40">
                  <div class="absolute inset-0 bg-invoke-accent/5 rounded-lg"></div>
                  <div class="flex items-center gap-3 mb-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                    <h3 class="text-base font-semibold text-invoke-text relative z-10">Absurd Speed, Powered by AI</h3>
                  </div>
                  <p class="text-sm text-invoke-text/80 relative z-10">We use AI to accelerate anything that can be automated - so your product goes live faster than you thought possible.</p>
                </div>
              </div>
              </div>

            <!-- Step 2 -->
            <div class="absolute top-[150px] left-0 w-[85%]">
              <div class="relative">
                <div class="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-invoke-accent/20 relative z-30">
                  <div class="absolute inset-0 bg-invoke-accent/5 rounded-lg"></div>
                  <div class="flex items-center gap-3 mb-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                    <h3 class="text-base font-semibold text-invoke-text relative z-10">We Don't Rebuild What's Already Solved</h3>
                  </div>
                  <p class="text-sm text-invoke-text/80 relative z-10">Most software is 80% boilerplate. We drop in proven foundations so we can focus on what actually makes your product work.</p>
                </div>
              </div>
              </div>

            <!-- Step 3 -->
            <div class="absolute top-[325px] right-0 w-[85%]">
              <div class="relative">
                <div class="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-invoke-accent/20 relative z-20">
                  <div class="absolute inset-0 bg-invoke-accent/5 rounded-lg"></div>
                  <div class="flex items-center gap-3 mb-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                    <h3 class="text-base font-semibold text-invoke-text relative z-10">Built by People Who've Shipped Before</h3>
                  </div>
                  <p class="text-sm text-invoke-text/80 relative z-10">You work directly with senior engineers who think like founders - no fluff, no handoffs, no babysitting.</p>
                </div>
              </div>
              </div>

            <!-- Step 4 -->
            <div class="absolute top-[475px] left-0 w-[85%]">
              <div class="relative">
                <div class="bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-invoke-accent/20 relative z-10">
                  <div class="absolute inset-0 bg-invoke-accent/5 rounded-lg"></div>
                  <div class="flex items-center gap-3 mb-2">
                  <svg class="w-5 h-5 text-invoke-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                    <h3 class="text-base font-semibold text-invoke-text relative z-10">Every Feature Tied to a Business Goal</h3>
                  </div>
                  <p class="text-sm text-invoke-text/80 relative z-10">We only build what moves the needle - whether that's traction, revenue, or getting you to the next funding round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="w-full relative z-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-invoke-text">What Our <span class="text-invoke-accent">Clients</span> Say</h2>
          <p class="text-lg text-invoke-text/70 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped
          </p>
          </div>

        <div class="relative">
          <!-- Testimonial Carousel -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${currentSlide * 50}%)` }"
            >
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="index"
                class="w-1/2 flex-shrink-0 px-3 md:px-6"
              >
                <div class="pt-8 px-6">
                  <div class="bg-invoke-bg/50 shadow-lg p-8 rounded-xl border border-invoke-border/10 relative h-[280px] flex flex-col transition-opacity duration-300 hover:opacity-100" :class="currentSlide === Math.floor(index/2) ? 'opacity-100' : 'opacity-80'">
                    <div class="absolute -top-8 -left-6 text-invoke-accent" style="z-index: 999;">
                      <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    
                    <div class="pl-4 border-l-2 border-invoke-accent/30 mt-4 flex flex-col h-full">
                      <p class="text-invoke-text/70 italic mb-4 text-sm">{{ testimonial.quote }}</p>
                      <div class="mt-4 flex items-center">
                        <div class="w-10 h-10 rounded-full bg-invoke-accent/20 overflow-hidden flex items-center justify-center text-invoke-accent">
                          <template v-if="testimonial.image">
                            <img 
                              :src="getTestimonialImage(testimonial.image)" 
                              :alt="testimonial.author"
                            class="w-full h-full object-cover"
                            @error="handleImageError"
                          >
                        </template>
                          <template v-else>
                            {{ getInitials(testimonial.author) }}
                          </template>
                        </div>
                        <div class="ml-3">
                          <p class="font-medium text-invoke-text">{{ testimonial.author }}</p>
                          <p class="text-sm text-invoke-text/50">{{ testimonial.company }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide" 
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-invoke-bg text-invoke-text p-2 rounded-full shadow-lg hover:bg-invoke-accent transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            @click="nextSlide" 
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-invoke-bg text-invoke-text p-2 rounded-full shadow-lg hover:bg-invoke-accent transition-colors z-10"
            aria-label="Next testimonials"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Dots Indicator -->
          <div class="flex justify-center mt-8 space-x-3">
            <button 
              v-for="index in slideCount" 
              :key="index"
              @click="goToSlide(index - 1)"
              :class="[
                'w-3 h-3 rounded-full transition-colors',
                currentSlide === index - 1 ? 'bg-invoke-accent' : 'bg-invoke-text/30 hover:bg-invoke-text/50'
              ]"
              :aria-label="`Go to testimonial group ${index}`"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA SECTION -->
    <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10">
      <div class="bg-invoke-bg/50 shadow-lg p-8 sm:p-12 rounded-xl border border-invoke-border/10 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-invoke-text">Ready to <span class="text-invoke-accent">Build</span> Something Great?</h2>
        <p class="text-lg text-invoke-text/70 max-w-3xl mx-auto mb-8">
          Let's discuss your project and create something amazing together
        </p>
        
        <router-link to="/contact" class="inline-block px-10 py-5 bg-invoke-text text-invoke-bg rounded-xl hover:bg-invoke-accent transition-all duration-200 hover:shadow-lg font-medium text-lg">
          Book Your Strategy Call
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectTree from '../components/ProjectTree.vue'
import testimonialsData from '../data/homepage_testimonials.json'
import storiesData from '../data/stories.json'
import ihairumLogo from '../assets/images/client_logos/ihairum_logo.webp'
import mintseoLogo from '../assets/images/client_logos/mintseo_logo.svg'

export default {
  name: 'Home',
  components: {
    ProjectTree
  },
  data() {
    return {
      speedPhrases: [
        'before your investors follow up',
        'before your competitors schedule their next meeting',
        'while others are still writing the brief',
        'before your co-founder finishes that Notion doc'
      ],
      currentPhraseIndex: 0,
      phraseInterval: null,
      testimonials: testimonialsData.testimonials,
      currentSlide: 0,
      testimonialInterval: null,
      imageLoadError: false,
      clientLogos: [
        ihairumLogo,
        mintseoLogo,
        ihairumLogo,
        mintseoLogo
      ],
      stories: Object.values(storiesData.stories),
      categories: storiesData.categories,
      selectedCategory: null
    }
  },
  computed: {
    slideCount() {
      return Math.ceil(this.testimonials.length / 2)
    },
    filteredStories() {
      let stories = this.selectedCategory 
        ? this.stories.filter(story => story.categories.includes(this.selectedCategory))
        : this.stories;
      
      // Sort by priority (lower numbers first)
      return stories.sort((a, b) => {
        const priorityA = a.priority !== undefined ? a.priority : 999;
        const priorityB = b.priority !== undefined ? b.priority : 999;
        return priorityA - priorityB;
      }).slice(0, 4); // Show only first 4 stories on homepage
    }
  },
  methods: {
    getInitials(name) {
      if (!name) return ''
      return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
    },
    handleImageError(event) {
      this.imageLoadError = true
    },
    getTestimonialImage(imageName) {
      try {
        return new URL(`../assets/images/testemonials/${imageName}`, import.meta.url).href
      } catch (error) {
        console.error('Error loading image:', error)
        return ''
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slideCount
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount
    },
    goToSlide(index) {
      this.currentSlide = index
    },
    startCarousel() {
      this.testimonialInterval = setInterval(() => {
        this.nextSlide()
      }, 8000)
    },
    rotatePhrases() {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.speedPhrases.length;
    }
  },
  mounted() {
    this.startCarousel()
    this.phraseInterval = setInterval(this.rotatePhrases, 4000)
  },
  beforeDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval)
    }
    if (this.phraseInterval) {
      clearInterval(this.phraseInterval)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom scrollbar for the work panel */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Ensure the panel stays above other content */
.fixed {
  position: fixed;
}

/* Smooth transitions for the panel */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(100%);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.4s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-right {
  animation: slideInRight 0.4s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.animate-pop-in {
  animation: popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
  opacity: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes simpleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-simple-fade-in {
  animation: simpleFadeIn 0.5s ease-out forwards;
}
</style> 