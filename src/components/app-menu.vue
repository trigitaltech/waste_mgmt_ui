<script>
import MetisMenu from 'metismenujs/dist/metismenujs'

import { authComputed } from '@state/helpers'
import { authProtectedRoutes } from '@routes'

/**
 * Application menu component
 */
export default {
  components: {},
  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
  },
  data() {
    return {
      menuItems: authProtectedRoutes,
      ticket:false,
      menuItems1:[]
    }
  },
  computed: {
    ...authComputed,
  },
  mounted: function() {
    console.log(authProtectedRoutes)
     console.log("ROLES",this.$store.getters['auth/loggedInDetails'].user.roles[0].name)
this.menuItems1=this.menuItems
this.menuItems = []
    for(var j=0; j<this.menuItems1.length;j++){
      if(this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "ENCODER" || 
      this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "VOLUME_CHECKER" ||
       this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "CONTROL_CHECKER"){
        if(this.menuItems1[j].name === "Trips" || this.menuItems1[j].name ===  "Reports" ){
          this.menuItems.push(this.menuItems1[j])
        }
       }
        else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "OFFICE_ENCODER"){
           if(this.menuItems1[j].name === "ServiceRequest" || this.menuItems1[j].name ===  "Reports" ){
          this.menuItems.push(this.menuItems1[j])
        }
        }
         else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "BILLING"){
           if(this.menuItems1[j].name === "ServiceRequest" || this.menuItems1[j].name ===  "Reports" || this.menuItems1[j].name === "Trips" ){
          this.menuItems.push(this.menuItems1[j])
        }
        }
         else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "PAYROLL"){
           if(this.menuItems1[j].name === "ServiceRequest" || this.menuItems1[j].name ===  "Reports" || this.menuItems1[j].name === "Trips" || this.menuItems1[j].name === "Payroll" ){
          this.menuItems.push(this.menuItems1[j])
        }
        }
         else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "LGU"){
           if(this.menuItems1[j].name === 'LGU'){
            // var lguData1 = this.menuItems1[j].children[1];
            // this.menuItems1[j].children = [];
            // this.menuItems1[j].children.push(lguData1)
          this.menuItems.push(this.menuItems1[j])
        }
        }
          else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "HAULER"){
           if(this.menuItems1[j].name === "HAULERS" ){
          this.menuItems.push(this.menuItems1[j])
           }
          }
         else if (this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "DRIVER" || this.$store.getters['auth/loggedInDetails'].user.roles[0].name === "HELPER" ){
           if(this.menuItems1[j].name === "HAULERS" ){
          this.menuItems.push(this.menuItems1[j])
        }
        }
      else {
        this.menuItems.push(this.menuItems1[j])
      }
    }
    // eslint-disable-next-line no-unused-vars
    var menuRef = null
    if (this.mode === 'horizontal') {
      menuRef = new MetisMenu('#side-menu').on('shown.metisMenu', function(
        event
      ) {
        window.addEventListener('click', function menuClick(e) {
          
          if (!event.target.contains(e.target)) {
            menuRef.hide(event.detail.shownElement)
            window.removeEventListener('click', menuClick)
          }
        })
      })
    } else {
      menuRef = new MetisMenu('#side-menu')
    }

    var links = document.getElementsByClassName('side-nav-link-ref')
    var matchingMenuItem = null
    // let menuItemEl = null
    for (var i = 0; i < links.length; i++) {
      if (window.location.hash === links[i].hash) {
        matchingMenuItem = links[i]
        break
      }
    }

    const activeClass = this.mode === 'horizontal' ? 'active' : 'mm-active'
    const dropdownActiveClass =
      this.mode === 'horizontal' ? 'active' : 'mm-show'

    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active')
      var parent = matchingMenuItem.parentElement

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add(activeClass)
        const parent2 = parent.parentElement

        if (parent2) {
          parent2.classList.add(dropdownActiveClass)
        }
        const parent3 = parent2.parentElement
        if (parent3) {
          parent3.classList.add(activeClass)
          var childAnchor = parent3.querySelector('.has-dropdown')
          if (childAnchor) childAnchor.classList.add('active')
        }

        const parent4 = parent3.parentElement
        if (parent4) parent4.classList.add(dropdownActiveClass)
        const parent5 = parent4.parentElement
        if (parent5) parent5.classList.add(activeClass)
      }
    }
  },
  methods: {
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item && item.children !== undefined
        ? item.children.length > 0
        : false
    },
  },
}
</script>

<template>
  <!--- Sidemenu -->
<div class="mm-active">
  <ul id="side-menu" class="metismenu">
    <li
      v-for="item in menuItems"
      :key="`item-${item.name}`"
      class="side-nav-title side-nav-item"
    >
      <p v-if="item.header" class="menu-title mb-0">{{ item.header }}</p>

      <a v-if="hasItems(item)" href="javascript:void(0);" class="side-nav-link">
        <feather v-if="item.icon" :type="item.icon"></feather>
        <span>{{ item.name }}</span>
        <span class="menu-arrow"></span>
      </a>

      <router-link
        v-if="!hasItems(item)"
        tag="a"
        :to="`${item.path}`"
        class="side-nav-link side-nav-link-ref"
      >
        <feather v-if="item.icon" :type="item.icon"></feather>
        <span>{{ item.name }}</span>
        <span
          v-if="item.badge"
          :class="
            'badge badge-' + item.badge.varient + ' float-right font-size-11'
          "
          >{{ item.badge.text }}</span
        >
      </router-link>

      <ul v-if="hasItems(item)" class="nav-second-level">
        
        <li
          v-for="subitem in item.children"
          :key="`sub-item-${subitem.name}`"
          :class="{ 'side-nav-item': hasItems(subitem) }"
          
        >
       
          <!-- <a
            v-if="hasItems(subitem)"
            href="javascript:void(0);"
            class="side-nav-link-a-ref"
            
          > -->
           <a v-if="hasItems(subitem)" href="javascript:void(0);" class="side-nav-link">
        <feather v-if="item.icon" :type="item.icon"></feather>
        <span>{{ item.name }}</span>
        <span class="menu-arrow"></span>
      <!-- </a> -->

          
           
            {{ subitem.name }}
            <span class="menu-arrow"></span>
            
          </a>

          <router-link
            v-if="!hasItems(subitem)"
            tag="a"
            :to="`${item.path}/${subitem.path}`"
            class="side-nav-link-ref"
            > <feather v-if="subitem.icon" :type="subitem.icon"></feather>{{ subitem.name }}</router-link
          >

          <ul
            v-if="hasItems(subitem)"
            class="nav-third-level"
            aria-expanded="false"
          >
            <li
              v-for="subSubitem in subitem.children"
              :key="`sub-sub-item-${subSubitem.name}`"
            >
              <router-link
                tag="a"
                :to="`${item.path}/${subitem.path}/${subSubitem.path}`"
                class="side-nav-link-ref"
                >{{ subSubitem.name }}</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
  <!-- End Sidebar -->
</template>
<style  scoped>
.nav-second-level li a, .nav-thrid-level li a {
    color: #8C94C0 !important;
    display: block !important;
    padding: 12px 30px !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    position: relative !important;
    -webkit-transition: all 0.4s !important;
    transition: all 0.4s !important;
    border-left: 3px solid transparent !important;
    text-align: left !important;
}
.left-sidebar > .mm-active > ul > li > a, .left-sidebar > .mm-active > ul > li > ul > li > a {
    /* color: #4b4b5a; */
    color: #8C94C0 !important;
    display: block !important;
    padding: 12px 30px !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    position: relative !important;
    -webkit-transition: all 0.4s !important;
    transition: all 0.4s !important;
    border-left: 3px solid transparent !important;
    text-align: left !important;
}
</style>