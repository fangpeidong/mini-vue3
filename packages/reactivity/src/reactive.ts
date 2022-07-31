import { isObject } from '@vue/shared'

const reactiveMap = new WeakMap()

enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
}

export function reactive(target) {
  if (!isObject(target)) {
    return target
  }

  if (target[ReactiveFlags.IS_REACTIVE]) {
    return
  }

  const exisitingProxy = reactiveMap.get(target)

  if (exisitingProxy) {
    return exisitingProxy
  }

  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      if (key === ReactiveFlags.IS_REACTIVE) {
        return true
      }
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      return Reflect.set(target, key, value, receiver)
    },
  })

  reactiveMap.set(target, proxy)

  return proxy
}
