<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

/**
 * Login component
 */
export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      username: '',
      password: '',
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
    }
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === 'production'
        ? {}
        : {
            username: 'Use "admin" to log in with the mock API',
            password: 'Use "password" to log in with the mock API',
          }
    },
  },
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    async tryToLogIn() {
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null

      try {
       const payload = {
password: this.password,
mobile:this.username
}
        this.logIn({payload})
          .then((token) => {
            this.tryingToLogIn = false
            this.isAuthError = false
            // Redirect to the originally requested page, or to the home page
            this.$router.push(
              this.$route.query.redirectFrom || { name: 'Dashboard' }
            )
          })
          .catch((error) => {
            console.log(error)
             this.$toasted.error(error.message.error,{
               duration: 7000
             })
            this.tryingToLogIn = false
            this.authError = error
              ? error
              : ''
            this.isAuthError = true
          })
      } catch (error) {
        this.$toasted.error("something went wrong")
      }
    },
  },
}
</script>


<template>
  <Layout>
    <!-- end row -->
    <div class="account-pages my-5">
      <div class="container">
        <div class="container my-5 px-0 z-depth-1">
          <!--Section: Content-->
          <section
            class="p-5 my-md-5 text-center"
            style="
              background-image: linear-gradient(109.6deg, #30cfd0 11.2%, #330867 92.5%);
              background-size: cover;
              background-position: center center;
            "
          >
            <form class="my-5 mx-md-5" action="">
              <div class="row">
                 <div class="col-lg-6 d-none d-md-inline-block">
                  <div class="mx-auto mb-5">
                    <a routerLink="/">
                      <img src="@assets/images/eco.jpg" alt height="270" />
                      <!-- <h3 class="d-inline align-middle ml-1 text-logo">In View</h3> -->
                    </a>
                  </div>
                </div>
                <div class="col-md-6 mx-auto">
                  <!-- Material form login -->
                  <div class="col-lg-6 d-none d-md-inline-block">
                    <!--Card content-->
                    <div class="card-body">
                      <!-- Form -->
                      <form
                        class="text-center"
                        style="color: #757575"
                        action="#!"
                      >
                        <h3
                          class="font-weight-bold my-6 pb-2 dark-grey-text"
                          style="color: white; margin-left: 50px"
                          >Log In</h3
                        >

                        <!-- Name -->
                        <input
                          type="email"
                          id="defaultSubscriptionFormPassword"
                          class="form-control mb-4"
                          placeholder="Mobile No"
                          v-model="username"
                          style="width: 250px"
                        />

                        <!-- Email -->
                        <input
                          type="password"
                          id="defaultSubscriptionFormEmail"
                          class="form-control"
                          placeholder="Password"
                          v-model="password"
                          style="width: 250px"
                        />
                        <!-- <large id="passwordHelpBlock" class="form-text  blue-text ">
                  <a href="" style="color:white;margin-left:180px" >Register </a>
                </large> -->

                        <div class="text-center">
                          <!-- <button type="button" class="btn btn-outline-orange btn-rounded my-4 waves-effect">Warning</button> -->
                         
                          <b-button
                            style="
                              background-image: linear-gradient(109.6deg, rgba(48, 207, 208, 1) 11.2%, rgba(51, 8, 103, 1) 92.5%);
                            
                            "
                            class="btn btn-outline-orange btn-rounded my-4 waves-effect"
                            text="Create Tenant"
                            @click="tryToLogIn"
                            >Login</b-button
                          >
                             <b-button
                            style="
                              background-image: linear-gradient(109.6deg, rgba(48, 207, 208, 1) 11.2%, rgba(51, 8, 103, 1) 92.5%);
                              margin-left:50px
                            "
                            class="btn btn-outline-orange btn-rounded my-4 waves-effect"
                            text="Create Tenant"
                              @click="$router.push({path:'/register'})"
                            >Register</b-button
                          >
                        </div>
                      </form>
                      <!-- Form -->
                    </div>
                  </div>
                  <!-- Material form login -->
                </div>
               
              </div>
            </form>
          </section>
          <!--Section: Content-->
        </div>
      </div>
      <!-- end container -->
    </div>
  </Layout>
</template>

<style lang="scss" module></style>
<style lang="stylus" scoped>
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: auto;
  padding: 0rem;
}
</style>
<style lang="stylus" scoped>
element.style {
    background-size: cover;
    background-position: center center;
    background-image: linear-gradient( 109.6deg, rgba(48, 207, 208, 1) 11.2%, rgba(51, 8, 103, 1) 92.5% );
}
</style>