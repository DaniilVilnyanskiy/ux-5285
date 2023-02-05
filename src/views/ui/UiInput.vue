<template>
  <div class="">
    <h5 class="mb-4">Ui Inputs Radio</h5>
    <div class="list-group">
      <div v-for="i in Array(3)" class="list-group-item">
        <InputRadio />
      </div>
    </div>
    <h5 class="mb-4 mt-4">Ui Inputs Checkboxes</h5>
    <div class="list-group">
      <Checkbox class="list-group-item"/>
      <Checkbox class="list-group-item" checked="true" />
      <Checkbox class="list-group-item" disabled="true" />
      <Checkbox class="list-group-item"
          reverse="true"
          placeholder="Checkbox reverse"
      />
      <Checkbox class="list-group-item"
                toggle="true"
      />
      <Checkbox class="list-group-item"
                toggle="true"
                checked="true"
      />
      <Checkbox class="list-group-item"
                toggle="true"
                checked="true"
                disabled="true"
      />
      <Checkbox class="list-group-item"
                toggle="true"
                disabled="true"
      />
    </div>
    <h5 class="mb-5 mt-4">Ui Inputs</h5>
    <Input type="search" placeholder="Иван" title="Имя"/>
    <Input type="search" placeholder="Иванов" title="Фамилия"/>
  </div>
</template>

<script>
import Input from '~@/components/ui/Input.vue';
import Checkbox from '~@/components/ui/Checkbox/Checkbox.vue';
import InputRadio from '~@/components/ui/Checkbox/InputRadio.vue'

export default {
  components: {
    Input, Checkbox, InputRadio
  }
}
</script>

<style lang="scss">

</style>
