<template>
  <div class="banner">
    <div id="dummy"></div>
    <div class="banner__center">
      <div id="dummy-inner"></div>
      <div class="banner__heart">
        <img src="/images/contents/banner/heart.png" alt="Сердце">
      </div>
      <div class="banner__one banner__avatar">
        <img src="/images/contents/banner/banner1.png" alt="Человек">
      </div>
      <div class="banner__two banner__avatar">
        <img src="/images/contents/banner/banner2.png" alt="Человек">
      </div>
      <div class="banner__three banner__avatar">
        <img src="/images/contents/banner/banner3.png" alt="Человек">
      </div>
      <div class="banner__four banner__avatar">
        <img src="/images/contents/banner/banner4.png" alt="Человек">
      </div>
      <div class="banner__five banner__avatar">
        <img src="/images/contents/banner/banner5.png" alt="Человек">
      </div>
      <div class="banner__six banner__avatar">
        <img src="/images/contents/banner/banner6.png" alt="Человек">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.banner {
  height: 670px;
  width: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include md {
    width: 100%;
    height: auto;
    #dummy {
      margin-top: 109%;
    }
    #dummy-inner {
      margin-top: 100%;
    }
  }
  &__center {
    position: relative;
    top: 35px;
    @include md {
      width: 49%;
    }
  }
  &__heart {
    width: 357.75px;
    height: 357.75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;

    background: rgba(255, 255, 255, 0.8);
    border-radius: 100%;

    @include md {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      img {
        width: 60%;
      }
    }
  }
  &__avatar {
    position: absolute;
    border-radius: 100%;
    overflow: hidden;
    z-index: 1;
    img {
      @include md {
        width: 100%;
      }
    }
  }
  &__one {
    top: -53%;
    right: -24%;
    @include md {
      width: 78%;
      top: -56%;
      right: -24%;
    }
  }
  &__two {
    top: calc(50% - 119px);
    right: -178px;
    @include md {
      width: 52%;
      right: -49%;
      top: calc(50% - 36px);
    }
  }
  &__three {
    top: 70%;
    right: -93px;
    @include md {
      width: 51%;
      top: 80%;
      right: -21%;
    }
  }
  &__four {
    bottom: -34%;
    left: 0%;
    z-index: 3;
    @include md {
      width: 58%;
    }
  }
  &__five {
    bottom: 0%;
    left: -51%;
    @include md {
      width: 65%;
    }
  }
  &__six {
    top: -24%;
    left: -19%;
    @include md {
      width: 46%;
    }
  }
}

</style>
