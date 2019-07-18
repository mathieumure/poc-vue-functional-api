<template>
  <div>
    <router-link to="/"><h1>Home</h1></router-link>
    <span v-if="loading">
      <h1>Loading...</h1>
    </span>
    <card
      class="column is-2 has-text-centered"
      :pokemon="pokemon"
      v-else-if="pokemon"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
import { computed, onMounted } from "vue-function-api";

export default {
  name: "pokemon",
  components: { Card },
  props: ["id"],
  setup(
    { id },
    {
      root: { $store }
    }
  ) {
    const pokemon = computed(() => $store.getters.pokemonDetail[id]);

    const loading = computed(() => $store.getters.loading);

    onMounted(() => {
      $store.dispatch("LOAD_POKEMON_DETAIL", { pokemonId: id });
    });

    return {
      pokemon,
      loading
    };
  }
};
</script>

<style scoped></style>
