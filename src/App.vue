<template>
  <div id="body">
    <Header></Header>
    <div class="container" v-if="$route.path !== '/main'">
      <Breadcrumbs />
    </div>
    <router-view />
    <section>
      <Modal
          v-if="modal.isVisible && modal.id === 'registration'"
      >
        <template v-slot:body>
          <div class="modal__body_title">
            To register, enter the mail to which our news is sent and set your password
          </div>
          <Form />
        </template>
      </Modal>
      <Modal
          className="modal__success"
          id="success-notification"
          v-if="modal.isVisible && modal.id === 'success-notification'"
      >
        <template v-slot:body>
          <h1 class="title">Thank You</h1>
          <div class="success-subtitle">To complete registration, please check your e-mail</div>
        </template>
      </Modal>
      <div v-if="modal.isVisible" class="overlay"></div>
    </section>
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Breadcrumbs from './components/ui/Breadcrumbs.vue';
import Modal from "./components/ui/Modal.vue";
import Form from "./components/ui/Form.vue";
import { setCookie, getCookie, deleteCookie } from "./ts/utils";
import { useStore } from 'vuex'
import { key } from './store'

export default {
  components: {
    Breadcrumbs ,Header, Modal, Form
  },
  data() {
    return {
      modal: ''
    }
  },
  setup () {
    const store = useStore(key)
    const modal = store.state.modal;
    const setToken = store.state.setToken;
    return {
      modal, setToken
    }
  },
  methods: {

  },
  mounted() {
    // TODO: дописать код и удалить это
    if (this.setToken) {
      setCookie('token', 'test value token');
    } else {
      deleteCookie('token');
    }

    if (getCookie('token')) {
      document.location.href = `https://www.dating.com/people/#token=${getCookie('token')}`;
    }
  }

}
</script>
<style lang="scss">
  @import "styles/global.scss";

</style>
