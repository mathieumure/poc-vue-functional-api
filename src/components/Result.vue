<template>
  <!-- Result set -->
  <div class="resultset">
    <div class="columns is-multiline">
      <div v-if="loading">
        <h1>Loading...</h1>
      </div>

      <router-link
        class="column is-2 has-text-centered"
        v-for="pokemon of filteredPokemons"
        :to="`/pokemon/${pokemon.id}`"
        :key="pokemon.id"
      >
        <!-- Pokemon -->
        <card :pokemon="pokemon" v-if="!loading"></card>
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "result",
  components: {
    Card
  },
  props: ["criteria"],
  computed: {
    pokemons() {
      return this.$store.getters.pokemons;
    },
    filteredPokemons() {
      return this.pokemons.filter(pokemon => this.filterOnPokemon(pokemon));
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    filterOnPokemon: function(pokemon) {
      const lowerSearch = this.criteria.toLowerCase();
      const lowerPokemon = pokemon.name.toLowerCase();
      return lowerPokemon.includes(lowerSearch);
    }
  },
  mounted() {
    this.$store.dispatch("LOAD_POKEMONS");
  }
};
</script>

<style scoped></style>
