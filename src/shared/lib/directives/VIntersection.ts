import { Directive } from 'vue'

interface bindingType {
  callback: () => void;
  element: HTMLElement;
}

export const VIntersection: Directive<HTMLElement, bindingType> = {
  mounted (el, binding) {
    const options = {
      root: binding.value.element,
      rootMargin: '0px',
      threshold: 0.1
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) binding.value.callback()
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}
