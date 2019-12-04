import Vue from "vue";

// 1.创建传入组件实例
// 2.挂载它从而生成dom结构
// 3.生成dom结构追加到body
// 4.淘汰机制:不需要时组件实例应当被销毁

/* export default function create(Component, props){
  // console.log(Component, props)
  // 1. 创建传入组件实例
  const vm = new Vue({
    render(h){  // h即是createElement(tag, data, children)
      // 返回虚拟dom
      return h(Component, {props})
    }
  }).$mount() // 只挂载,不设置宿主,意思是执行初始化过程,但不追加dom
  // 获取组件实例
  const cmp = vm.$children[0]

  document.body.appendChild(vm.$el)
  // 删除方法
  cmp.remove = ()=>{
    // 移除dom
    document.body.removeChild(vm.$el)
    // 销毁组件
    vm.$destroy()
  }
  return cmp
} */

export default function create(Component, props){
  const vm = Vue.extend(Component)
  const cmp = new vm({propsData: props})
  cmp.$mount()
  document.body.appendChild(cmp.$el)
  cmp.remove = ()=>{
    // 移除dom
    document.body.removeChild(cmp.$el)

    // 销毁组件
    cmp.$destroy()
  }
  return cmp
}