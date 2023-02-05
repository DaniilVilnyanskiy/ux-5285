<template>
  <div class="main-page">
    <Banner />
    <div class="main-page__col">
      <div class="main-page__list">
        <h1 class="title">How to Participate</h1>
        <ol>
          <li>
            <div>
              <span>Subscribe to our News</span>
            </div>
          </li>
          <li>
            <div>
              <button class="btn btn_100 btn_custom" @click="showModal('registration')">Sign Up</button>
            </div>
          </li>
          <li>
            <div>
              <span>Check your email inbox </span>
            </div>
          </li>
          <li>
            <div>
              <span>Wait till September 22</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Banner from '~@/components/Banner.vue';
import Modal from "../components/ui/Modal.vue";

'~@/ts/utils.ts';

export default {
  components: {
    Banner, Modal
  },
  data () {
    return {

    };
  },
  methods: {
    showModal(id) {
      this.$store.state.modal.isVisible = true;
      this.$store.state.modal.id = id;
      console.log(this.$store.state);
    },
  }
}

</script>
<style lang="scss">

.title {
  font-size: 77px;
  line-height: 110.02%;
  letter-spacing: -0.05em;
  margin-bottom: 50px;
  font-weight: 800;
  background: linear-gradient(145.08deg, #E61726 12.35%, #D4208C 83.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @include md {
    font-size: 35px;
  }
}
.main-page {
  padding: 203px 90px 186px 90px;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  @include xl {
    grid-template-columns: 1fr;
  }
  @include md {
    padding: 25px 15px 25px 15px;
  }
  &__col {

  }

  &__list {
    width: 476px;
    margin-left: auto;
    margin-right: auto;
    @include xl {
      margin: 20px 0 0 0;
    }
    @include md {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
    ol {
      list-style: none;
      counter-reset: myCounter;
      padding: 0;
      li {
        position: relative;
        display: flex;
        align-items: baseline;
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        &:before {
          counter-increment: myCounter;
          content: counter(myCounter);
          font-weight: 800;
          font-size: 55px;
          line-height: 75px;
          letter-spacing: -0.05em;
          @include xl {
            font-size: 33.0228px;
            line-height: 45px;
          }
        }
        > * {
          display: flex;
          width: 100%;
          align-items: flex-end;
          &:before {
            content: '';
            display: inline-block;
            position: relative;
            width: 11px;
            height: 11px;
            border-radius: 46%;
            background: linear-gradient(145.08deg, #E61726 12.35%, #D4208C 83.63%);
            margin-right: 10px;
            margin-left: 3px;
            @include xl {
              width: 6px;
              height: 6px;
            }
          }
          > * {
            position: relative;
            top: 17px;
            @include xl {
              top: 7px;
            }
          }
          > button {
            top: 21px;
            @include xl {
              top: 10px;
            }
          }
        }
        font-weight: 600;
        font-size: 38px;
        line-height: 198.18%;
        letter-spacing: -0.05em;
        color: #3A3A3A;
        @include xl {
          font-size: 18.82px;
        }
        button {
          display: inline-block;
        }
      }
    }
    ol li:before {
      font-weight: 800;
      background: linear-gradient(145.08deg, #E61726 12.35%, #D4208C 83.63%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

}
</style>
