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
import { computed, onMounted, watch, value } from "vue-function-api";

export default {
  name: "result",
  components: {
    Card
  },
  props: ["criteria"],
  setup(
    props,
    {
      root: { $store }
    }
  ) {
    const filterOnPokemon = pokemon => {
      const lowerSearch = props.criteria.toLowerCase();
      const lowerPokemon = pokemon.name.toLowerCase();
      return lowerPokemon.includes(lowerSearch);
    };

    const filteredPokemons = value([]);

    const pokemons = computed(() => $store.getters.pokemons);
    const loading = computed(() => $store.getters.loading);

    watch(
      () => props.criteria,
      () => {
        filteredPokemons.value = pokemons.value.filter(pokemon =>
          filterOnPokemon(pokemon)
        );
      }
    );

    onMounted(() => {
      $store.dispatch("LOAD_POKEMONS");
    });

    return {
      loading,
      filteredPokemons
    };
  }
};
</script>

<style scoped></style>
