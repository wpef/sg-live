import AOS from 'aos'

import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
          duration: 800, // values from 0 to 3000, with step 50ms
          once: false
        })
    }
})