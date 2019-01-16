<template>
  <div class="home">

    <MyHeader></MyHeader>
    <MyDetail></MyDetail>

  </div>
</template>

<script>
import MyHeader from '@/components/header/Header';
import MyDetail from '@/components/vista_detallada/Vista_detallada';

export default {
  name: "home",
  components: {
    MyHeader,
    MyDetail
  }
};
</script>