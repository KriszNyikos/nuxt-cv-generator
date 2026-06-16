import { computed } from 'vue'

export const useIsHuRoute = () => {
  const route = useRoute()
  const isHu = computed(() => (route.path || '').startsWith('/hu'))
  return { isHu }
}

export default useIsHuRoute
