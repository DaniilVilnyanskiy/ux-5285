<template>
  <div :class="['input', `${title.length > 1 ? 'input__mt' : ''}`]">
    <label
        v-if="title.length > 1"
        :for="randomId"
        class="input__title"
    >
      {{title}}
    </label>
    <input
        :id="randomId"
        :type="type"
        placeholder=" "
    >
    <label
        class="input__placeholder"
        :for="randomId"
    >
      {{placeholder}}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'undefined'
    },
    placeholder: {
      type: String,
      default: 'undefined'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      randomId: Math.floor(Math.random() * 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  border-radius: var(--bs-border-radius);
  width: 100%;
  position: relative;
  &__mt {
    margin-top: 23px;
  }
  input {
    position: relative;
    padding: 14px 16px;
    width: 100%;
    border: none;
    outline: none;
    &:focus,
    &:not(:placeholder-shown) {
      + .input__placeholder {
        display: none;
      }
    }
    &::-webkit-search-cancel-button {
      display: none !important;
    }
  }
  .input__title {
    position: absolute;
    top: -23px;
  }
  .input__placeholder {
    display: block;
    padding: 14px 16px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: var(--txt-gray-1);
  }
  &::after {
    content: '';
    display: block;
    border: 1px solid #D3D6DB;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }
}
</style>
