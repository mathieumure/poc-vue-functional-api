<template>
  <div class="container">
    <!-- Cover -->
    <div class="cover">
      <img src="/public/images/zenidex.png" />
    </div>

    <!-- Searchbar -->
    <div class="field m-t">
      <search @onSearchChange="onSearchChange" />
    </div>
    <result :criteria="searchCriteria" />
  </div>
</template>

<script>
import Search from "../components/Search";
import Result from "../components/Result";

export default {
  name: "home",
  components: {
    Search,
    Result
  },

  data() {
    return {
      searchCriteria: ""
    };
  },
  methods: {
    onSearchChange(newValue) {
      this.searchCriteria = newValue;
    }
  }
};
</script>

<style></style>
