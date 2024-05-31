<template>
  <div class="container">
    <img :src="getImage(value)" alt="Bias" />
  </div>
</template>

<script>
import LeftBias from '../assets/LeftBias.jpg';
import NeutralBias from '../assets/NeutralBias.jpg';
import RightBias from '../assets/RightBias.jpg';

export default {
  props: {
    value: {
      type: String,
      required: true,
      validator: function(value) {
        return ['Left', 'Neutral', 'Right'].includes(value);
      },
    },
  },
  methods: {
    getImage(value) {
      switch (value) {
        case 'Left':
          return LeftBias;
        case 'Neutral':
          return NeutralBias;
        case 'Right':
          return RightBias;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 120px;
  background-color: #ddd;
  border-radius: 12px;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
}
</style>
