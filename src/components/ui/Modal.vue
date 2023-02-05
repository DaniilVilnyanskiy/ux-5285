<template>
  <div class="modal">
    <div :class="['modal__content', className]">
      <div class="modal__head">
        <slot name="head">
        </slot>
        <button class="btn" @click="close">
          <img src="/images/svg/close.svg" alt="Закрыть">
        </button>
      </div>


      <div class="modal__body">
        <slot name="body">
        </slot>
      </div>
      <div class="modal__footer">
        <slot name="footer">
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import { useStore } from 'vuex'
import { key } from '../../store';

export default {
  name: 'modal',
  components: {
    Icon
  },
  props: {
    className: {
      default: null,
      type: String
    }
  },
  setup() {
    const store = useStore(key)
    const modal = store.state.modal;
    return {
      modal
    }
  },
  methods: {
    close() {
      this.modal.isVisible = false;
    },
    request(e: Event) {
      e.preventDefault();
      console.log('test');
    }
  },
};
</script>

<style lang="scss">

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
  &__content {
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 45.7px 45.1px;
    border-radius: 50px;
    width: 70%;
    max-width: 1270px;
    @include xl {
      width: calc(100% - 42px);
      padding: 20px 15px;
      border-radius: 20px;
    }
  }
  &__success {
    .modal {
      &__body {
        padding: 146px 0 243px 0;
        @include xl {
          padding: 133px 0 174px 0;
        }
      }
    }
  }
  &__head {
    display: flex;
    justify-content: flex-end;
    @include xl {
      button {
        padding: 0;
        img {
          width: 20px;

        }
      }
    }
  }
  &__body {
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    @include xl {
      padding: 30px 0 52px 0;
    }
    .title {
      text-align: center;
    }
    .success-subtitle {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      text-align: center;
      letter-spacing: -0.05em;
      color: #3A3A3A;
      margin-bottom: 20px;
      @include xl {
        font-size: 14px;
        line-height: 19px;
      }
    }
    &_title {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #3A3A3A;
      @include xl {
        font-size: 17px;
        line-height: 24px;
        letter-spacing: -0.04em;
      }
    }
  }
}
</style>
