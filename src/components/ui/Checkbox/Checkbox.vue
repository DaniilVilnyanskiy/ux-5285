<template>
  <div :class="['checkbox', `${toggle ? 'toggle' : ''}`]">
    <input
        type="checkbox"
        class="checkbox__input"
        :name="`name-${randomId}`"
        :checked="check"
        :disabled="disable"
    >
    <label
        :id=randomId
        :for=randomId
        :class="['checkbox__label', `${reverse ? 'checkbox__label_reverse' : ''}`]"
        @click="toggleChecked"
    >
      {{ placeholder }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Checkbox'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      randomId: Math.floor(Math.random() * 1000),
      check: this.checked,
      disable: this.disabled,
    }
  },
  methods: {
    toggleChecked(e) {
      if (this.disable) return;
      let inputCheck = e.target.previousElementSibling.checked;
      this.check = !inputCheck;
    }
  }
}
</script>
<style lang="scss">
.checkbox {
  &__input {
    width: 0;
    height: 0;
    &:checked + .checkbox__label {
      &:before {
        border-color: #2149AF;
        background-color: #FED731;
      }
      &:after {
        display: block;
      }
    }
    &:disabled + .checkbox__label {
      cursor: not-allowed;
      &:before {
        border-color: #f5f5f5;
        background-color: #F4F5F7;

      }
      &:before, &:after {
        cursor: not-allowed;
      }
    }
  }
  &__label {
    position: relative;
    padding-left: 28px;
    &_reverse {
      padding-left: 0;
      padding-right: 28px;
      &:before {
        left: auto !important;
        right: 0;
      }
      &:after {
        left: auto !important;
        right: 8px;
      }
    }
    &:before {
      content: '';
      background-color: #ffffff;
      border-radius: 2px;
      left: 0;
      height: 20px;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 20px;
      border: 1px solid var(--outline);
      transition: border-color 0.2s ease-in-out;
      cursor: pointer;
    }
    &:after {
      content: '';
      border: solid var( --black-primary);
      border-width: 0 1.5px 1.5px 0;
      display: none;
      height: 10px;
      left: 8px;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(calc(-50% - 2px)) rotate(45deg);
      transform: translateY(calc(-50% - 2px)) rotate(45deg);
      width: 5px;
      cursor: pointer;
    }
  }

  // toggle style
  &.toggle {
    input {
      &:disabled {
        + label {
          &:after {
            background: var(--disable) !important;
          }
        }
      }
      &:checked {
        + label {
          &:after {
            left: 21px;
            background: var(--black-primary);
          }
        }
      }
      + label {
        padding-left: 47px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 40px;
          height: 22px;
          border: 1px solid var(--outline);
          border-radius: 22px;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          left: 3px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          border-radius: 16px;
          background: var(--outline);
          transition: left 0.2s ease-in-out, right 0.2s ease-in-out, background 0.2s ease-in-out;
          border: none;
        }
      }
    }
  }
}
</style>
