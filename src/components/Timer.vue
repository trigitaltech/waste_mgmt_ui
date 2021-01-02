<template>
  <div v-cloak v-if="this.$store.state.auth.currentUser !== 'null'" class="jumbotron UICountdown">
    <span>
        <h1>Your session Expired!</h1>
        <p>
            Please login to Continue.
        </p>
        
    </span>
</div>
</template>