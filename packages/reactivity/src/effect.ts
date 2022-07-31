export let activeEffect = undefined
class ReactiveEffect {
  public active = true
  constructor(public fn) {}

  run() {
    if (!this.active) {
      this.fn()
      return
    }
    // 依赖收集
    try {
      activeEffect = this
      return this.fn()
    } finally {
      activeEffect = undefined
    }
  }
}

export function effect(fn) {
  const _effect = new ReactiveEffect(fn)
  _effect.run()
}
