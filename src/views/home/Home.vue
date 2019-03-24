<template>
  <div class="home container">

    <MyHeader></MyHeader>
    <MySearch></MySearch>

  </div>
</template>

<script>
import MyHeader from '@/components/header/Header';
import MySearch from '@/components/search/Search';

export default {
  name: "home",
  components: {
    MyHeader,
    MySearch
  }
};
</script>

