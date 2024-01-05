import { ref } from 'vue'

export default function useIsMobile() {
  const isMobile = ref(false)
  isMobile.value = window.innerWidth <= 1200
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1200
  })
  return {
    isMobile
  }
}