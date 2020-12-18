<script>
import { layoutComputed } from '@state/helpers'
import Vertical from '@router/layouts/vertical'
import Horizontal from '@router/layouts/horizontal'

export default {
  components: { Vertical, Horizontal },
  data() {
    return {
      user:{}
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('auth.currentUser'))
    console.log(this.user)
  },
  computed: {
    ...layoutComputed,
  },
  methods: {},
}
</script>

<template>
  <div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>

    <Horizontal v-if="layoutType === 'horizontal' && user.roles[0].code!='ENCODER'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>
