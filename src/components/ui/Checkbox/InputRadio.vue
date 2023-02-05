<template>
  <label class="radio">
    <input type="radio" name="name" value="Имя 1">
    <span>Radio btn</span>
  </label>
</template>
<style lang="scss">
  .radio {
    input {
      width: 0;
      height: 0;
      &:checked {
        + span {
          &:before {
            border-color: #2149AF;
          }
          &:after {
            opacity: 1;
          }
        }
      }
      & {
        + span {
          position: relative;
          padding-left: 26px;
          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border: 1px solid var(--outline);
            border-radius: 100%;
            background: #fff;
            transition: border-color 0.2s ease-in-out;
          }
          &:after {
            opacity: 0;
          }
          &:after {
            content: '';
            width: 14px;
            height: 14px;
            background: var(--primary);
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            left: 3px;
            border-radius: 100%;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
</style>
