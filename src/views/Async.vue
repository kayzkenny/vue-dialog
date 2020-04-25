<template>
  <div class="hello">
    <AsyncDialog />
    <v-btn color="error" @click.native.prevent="confirmDestruction">DESTROY WORLD</v-btn>
  </div>
</template>

<script>
import AsyncDialog from "../components/asyncDialog";
export default {
  name: "Async",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    AsyncDialog
  },

  methods: {
    async confirmDestruction() {
      try {
        await this.$store.dispatch("AsyncConfirmer/ask", {
          title: "Really Destroy world?",
          body: "This would suck, dude! Don't be a dick!"
        });
      } catch (error) {
        console.log(error);
      }
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