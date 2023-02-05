<template>
  <div id="body">
    <Header></Header>
    <div class="container" v-if="this.$route.href !== '/main'">
      <Breadcrumbs />
    </div>
    <router-view />
    <section>
      <Modal
          v-if="$store.state.modal.isVisible && $store.state.modal.id === 'registration'"
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
          v-if="$store.state.modal.isVisible && $store.state.modal.id === 'success-notification'"
      >
        <template v-slot:body>
          <h1 class="title">Thank You</h1>
          <div class="success-subtitle">To complete registration, please check your e-mail</div>
        </template>
      </Modal>
      <div v-if="$store.state.modal.isVisible" class="overlay"></div>
    </section>
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Breadcrumbs from './components/ui/Breadcrumbs.vue';
import Modal from "./components/ui/Modal.vue";
import Form from "./components/ui/Form.vue";
import { setCookie, getCookie, deleteCookie } from "./ts/utils";

export default {
  components: {
    Breadcrumbs ,Header, Modal, Form
  },
  methods: {

  },
  mounted() {
    // TODO: дописать код и удалить это
    if (this.$store.state.setToken) {
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
