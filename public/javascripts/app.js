const routes = [
    { path: "/effects", component: effects },
    { path: "/materials", component: materials }
]

    const router = new VueRouter({
        routes // short for `routes: routes`
      })
      
      // 4. Create and mount the root instance.
      // Make sure to inject the router with the router option to make the
      // whole app router-aware.
      const app = new Vue({
        router
      }).$mount('#app')