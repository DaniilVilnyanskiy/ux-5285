<template>
  <div class="">
    <h5 class="mb-4">Ui Buttons</h5>
    <div class="d-flex flex-wrap gap-2">
      <Button
          label=".btn.btn_primary"
          color="primary"
          @click-button="check"
      />
      <Button label=".btn.btn_secondary" color="secondary"/>
      <Button label=".btn.btn_outline" color="outline"/>
    </div>
  </div>
</template>
<script>
import Button from '~@/components/ui/Button.vue'
export default {
  components: {
    Button,
  },
  methods: {
    check(event) {
      console.log(event);
    }
  }
}
</script>
