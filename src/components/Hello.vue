<template>
  <div class="hello">
    <v-btn color="error" @click.native.prevent="confirmDestruction">DESTROY WORLD</v-btn>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    confirmDestruction() {
      this.$store
        .dispatch("Confirmer/ask", {
          title: "Really Destroy world?",
          body: "This would suck, dude! Don't be a dick!"
        })
        .then(confirmation => {
          if (confirmation) {
            this.destroyWorld();
          } else {
            this.celebrateSaviour();
          }
        });
    },
    destroyWorld() {
      alert("World destroyed!");
    },
    celebrateSaviour() {
      alert("World saved by our hero!!");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>