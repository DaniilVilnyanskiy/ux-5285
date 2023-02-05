<template>
  <InlineSvg :class="concat" :src="`/images/svg/${name}.svg`"
    :transformSource="transform"
  />
</template>
<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg
  },
  props: {
    name: {
      type: String,
      default: 'add'
    }
  },
  computed: {
    concat: function () {
      return 'icon icon-' + this.name;
    },
    concatXlink: function () {
      return '/images/svg/sprite.svg#' + this.icon
    }
  },
  methods: {
    transform (svg) {
      const fills = svg.querySelectorAll('[fill]');
      const strokes = svg.querySelectorAll('[stroke]');
      fills.forEach((fill) => fill.removeAttribute('fill'));
      strokes.forEach((stroke) => stroke.removeAttribute('stroke'));

      svg.removeAttribute('fill');
      svg.removeAttribute('stroke');
      return svg;
    }
  }
}
</script>
