<script>
import { layoutComputed } from '@state/helpers'
import Topbar from '@components/topbar'
import SideBar from '@components/side-bar'
import Rightsidebar from '@components/right-sidebar'
import Footer from '@components/footer'

export default {
	components: { Topbar, SideBar, Rightsidebar, Footer },
	data() {
		return {
			isMenuCondensed: false,
			isMobileMenuOpened: false,
			user: this.$store ? this.$store.state.auth.currentUser : {} || {},
			layout: this.$store ? this.$store.state.layout.layoutType : null || null,
			theme: this.$store
				? this.$store.state.layout.leftSidebarTheme
				: null || null,
			type: this.$store
				? this.$store.state.layout.leftSidebarType
				: null || null,
			width: this.$store ? this.$store.state.layout.layoutWidth : null || null,
		}
	},
	computed: {
		...layoutComputed,
	},
	created: () => {
		document.body.classList.remove('authentication-bg')
		document.body.classList.remove('authentication-bg-pattern')
		document.body.removeAttribute('data-layout')
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
				navigator.userAgent
			)
		) {
			if (window.screen.width >= 728 && window.screen.width <= 1028) {
				document.body.classList.add('left-side-menu-condensed')
			}
		}
	},
	methods: {
		toggleMenu() {
			document.body.classList.toggle('left-side-menu-condensed')
			this.isMenuCondensed = !this.isMenuCondensed
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
					navigator.userAgent
				)
			) {
				this.isMobileMenuOpened = !this.isMobileMenuOpened
				document.body.classList.toggle('sidebar-enable')
				if (window.screen.width <= 425) {
					document.body.classList.remove('left-side-menu-condensed')
				}
			}
		},
		toggleRightSidebar() {
			document.body.classList.toggle('right-bar-enabled')
		},
		hideRightSidebar() {
			document.body.classList.remove('right-bar-enabled')
		},
	},
}
</script>

<template>
	<div id="wrapper">
		<Topbar :user="user" :is-menu-opened="isMobileMenuOpened" />
		<SideBar
			:is-condensed="isMenuCondensed"
			:theme="leftSidebarTheme"
			:type="leftSidebarType"
			:width="layoutWidth"
			:user="user"
		/>
		<!-- ============================================================== -->
		<!-- Start Page Content here -->
		<!-- ============================================================== -->

		<div class="content-page">
			<div class="content">
				<!-- Start Content-->
				<div class="container-fluid">
					<slot />
				</div>
			</div>
			<Footer />
		</div>
		<Rightsidebar />
	</div>
</template>
<style>
#sidebar-menu>.mm-active>ul>li>a, #sidebar-menu>.mm-active>ul>li>ul>li>a {
	/* color: #4b4b5a; */
	color: #8C94C0;
    display: block;
    padding: 12px 30px;
    font-size: 15px;
    font-weight: 400;
    position: relative;
    -webkit-transition: all .4s;
    transition: all .4s;
    border-left: 3px solid transparent;
}
#sidebar-menu>.mm-active>ul>li>a.active, #sidebar-menu>.mm-active>ul>li>ul>li>a.active {
    border-left: 5px solid #5369f8;
    color: #5369f8;
    background-color: #f7f7ff;
}
#sidebar-menu>.mm-active>ul>li>a>span {
    vertical-align: middle;
}
#sidebar-menu>.mm-active>ul>li>a i, #sidebar-menu>.mm-active>ul>li>ul>li>a i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 10px 0 3px;
    color: #8C94C0;
    fill: rgba(75,75,90,.12);
}
#sidebar-menu .menu-arrow {
    -webkit-transition: -webkit-transform .15s;
    transition: -webkit-transform .15s;
    transition: transform .15s;
    transition: transform .15s,-webkit-transform .15s;
    position: absolute;
    right: 30px;
    display: inline-block;
    font-family: unicons;
    text-rendering: auto;
    line-height: 1.3rem;
    font-size: .9rem;
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
    top: 15px;
}
#sidebar-menu .menu-arrow:before {
    content: "\e82f";
}
#sidebar-menu li.mm-active>a>span.menu-arrow {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
#sidebar-menu>.mm-active>ul>li>ul {
    padding-left: 0px;
}
</style>