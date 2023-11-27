<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const footerMenu = ref(null)
const preFooterBloks = ref(null)
footerMenu.value = data.story.content.footerMenu
preFooterBloks.value = data.story.content.preFooterBlocks

const logo = {
  default : data.story.content.logo,
  white : data.story.content.logo_white ?? data.story.content.logo
}

const socialBar = data.story.content.socialBar
const copyright = data.story.content.copyright
const partnerBanner = data.story.content.partnersBanner

</script>
 
<template>
  <footer>
    <preFooter :bloks="preFooterBloks" />
    <div class="footerBody w-full bg-black pt-12">
      <div class="container flex flex-col md:flex-row">
        <div class="w-full pb-6 md:w-1/2">
          <img class="w-44" :src="logo.white.filename" />
        </div>
        <div class="w-full md:w-1/2">
          <menuGrid :menu="footerMenu" />
        </div>
      </div>
      <div class="footerEnd container flex flex-row">
          <div class="w-1/2 flex flex-col">
            <SocialBar :iconLinks="socialBar"/>
            <p class="pt-6 text-[#505050]">© {{copyright}}</p>
          </div>
          <div class="w-1/2">
            <PartnerBanner :logos="partnerBanner" />
          </div>
      </div>    
    </div>
  </footer>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>