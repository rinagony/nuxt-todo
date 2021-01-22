<template>
  <div id="main">
    <Navbar />
    <main>
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  middleware: ["auth"],
};
</script>

<style lang="scss">
@import "./../assets/scss/style.scss";
h2 {
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
}
.container {
  @include for-medium-up {
    padding-left: 120px;
  }
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

#main {
  background: #eff1f9;
  font-family: 'Montserrat', sans-serif;
}
</style>
