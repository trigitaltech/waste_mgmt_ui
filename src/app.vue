<script>
import appConfig from '@src/app.config'
import Timer from "@src/components/Timer.vue"
export default {
 	components: {
		Timer
	},
	computed: {
		isIdle() {
      // console.log(this.$store.state.idleVue.idleTime)
      // console.log("hai",localStorage.getItem("auth.currentUser"))
      // debugger
      if(localStorage.getItem("auth.currentUser")!== "null" && this.$store.state.idleVue.isIdle) {
        // console.log("hello")
      this.$store.dispatch('auth/logOut')
      this.$router.push({ name: 'login' })
      // this.refresh()
        // return this.$store.state.idleVue.isIdle;
          this.$swal({
                title: 'session Expired!',
                type: 'success',
                text: `  Please login to Continue.`,
                duration: 5000,
              })
      } 
      return this.$store.state.idleVue.isIdle;
    },
    isUser() {
      if(localStorage.getItem("auth.currentUser")!== "null") {
        return true;
    } else {
      return false;
    }
    }
	},
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
  // logout() {
  //     this.$store.dispatch('auth/logOut')
  //     this.$router.push({ name: 'login' })
  //     this.refresh()
  //   },
}
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <Timer v-if="isIdle && isUser" />
    <RouterView :key="$route.fullPath" />
      <notifications
        group="alert"
        classes="vue-notification"
        position="bottom right"
      />
    <!-- <p>Is it Idle? - {{ isIdle }}</p> -->
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Design variables and utilities from src/design.
@import '@design';
</style>
