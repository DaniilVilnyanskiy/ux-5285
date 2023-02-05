
<template>
  <form :action="action" method="put" novalidate>
    <div>
      <label :class="errors.email && 'label-error'" for="">
        <input
            placeholder="Example@mail.com"
            id="email"
            v-model="email"
            type="email"
            name="email"
        >
        <Icon name="err"  v-if="errors.email" />
      </label>
      <span class="form-error" v-if="errors.email">{{errors.email}}</span>
    </div>
    <div>
      <label :class="errors.password && 'label-error'" for="">
        <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="Password"
        >
        <Icon name="err" v-if="errors.password" />
      </label>
      <span class="form-error" v-if="errors.password">{{errors.password}}</span>
    </div>
    <button class="btn btn_custom" type="submit" @click="checkForm">submit</button>
  </form>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { key } from '../../store';
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  data(): {
    errors: {
      email: string,
      password: string,
    },
    email: string,
    password: string,
    action: string
  } {
    return {
      errors: {
        email: '',
        password: '',
      },
      email: '',
      password: '',
      action: 'https://api.dating.com/identity',
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
    checkForm: function (e: Event) {
      e.preventDefault();

      (this as any).errors = {
        email: '',
        password: '',
      }
      if (!this.email) {
        this.errors.email = 'Укажите электронную почту.';
      } else if (!this.validEmail(this.email)) {
        this.errors.email = 'Укажите корректный адрес электронной почты.';
      }
      if (!this.password) {
        this.errors.password = 'Введите пароль';
      } else if (this.password?.length < 8) {
        this.errors.password = 'Пароль должен быть более 8 символов.';
      }

      if (!this.errors.email && !this.errors.password) {
        const body = {
          email: this.email,
          password: this.password
        }
        // TODO: это тоже переписать, когда сервер будет отвечать
        let isRegistration = false; // меняется на true если регистрация успешна

        // для теста - если true - то при отправке формы происходит авторизация
        // иначе - регистрация и показ модалки success
        let isAutorization = false;

        this.request(body, 'authorization')
            .then((res) => {
              console.log('response: ', res);
              // При первом запросе проверка на авторизацию
              // TODO: дописать правильную проверку

              if (isAutorization) {
                document.location.href = `https://www.dating.com/people/#token=${res.token}`;
              } else {
                if (isRegistration) return;
                this.request(body, 'registration');
                this.modal.id = 'success-notification';
                this.modal.isVisible = true;
                isRegistration = true;

                // setTimeout(()=> {
                //   this.modal.id = null;
                //   this.modal.isVisible = false;
                // }, 2000)
              }
            })
            .catch((err) => console.log(err));
      }
    },
    request: function (formData: {email: string, password: string,}, type: string): Promise<any> {
      if (type === 'authorization') {
        const encode = btoa(`${formData.email}:${formData.password}`);
        if (!encode) return Promise.reject(new Error('Encoding failed'));
        return fetch(this.action, {
          method: 'GET',
          headers: {
            Authorization: `Basic ${encode}`
          },
        });
      }
      if (type === 'registration') {
        return fetch(this.action, {
          method: 'PUT',
          body: JSON.stringify(formData)
        });
      }
      return Promise.reject(new Error('Invalid request type'));
    },
    validEmail: function (email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style lang="scss">

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 105px;
  > div {
    width: 100%;
    &:first-child {
      margin-bottom: 62px;
      @include xl {
        margin-bottom: 47px;
      }
    }
  }
  .form-error {
    color: #F22533;
    text-align: center;
    display: block;
    margin-top: 12.5px;
  }
  input {
    width: 100%;
    text-align: center;
    border: none;
    outline: none;
    padding-bottom: 5px;
    background-color: white !important;
    border-radius: 5px 5px 0 0;
    &:-webkit-autofill {
      background-color: white !important;
    }
  }
  label {
    width: 100%;
    color: #B3B3B3;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    position: relative;
    @include xl {
      font-size: 14px;
      line-height: 22px;
    }
    &.label-error {
      .icon-err {
        fill: #FF0000;
        position: absolute;
        right: 0;
        top: 4px;
      }
      &:after {
        border-bottom: 1px solid rgba(255, 0, 0, 0.5);
      }
    }
    &:after {
      content: '';
      display: block;
      border-bottom: 1px solid rgba(58, 58, 58, 0.5);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
    }
  }
  button {
    width: 70%;
    margin-top: 46px;
    @include xl {
      margin-top: 30px;
    }
  }
}
</style>