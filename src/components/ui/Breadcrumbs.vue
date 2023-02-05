<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Главная</a></li>
    <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Категория 1</a></li>
    <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Категория 2</a></li>
    <li class="breadcrumbs__item breadcrumbs__item_btn"><a class="breadcrumbs__link" href="./">С вложенностью</a>
      <div class="breadcrumbs__menu">
        <button
            @click="toggleActive"
            :class="activeClass"
        >
          <Icon name="arrow-down" />
        </button>
        <ul :class="['breadcrumbs__menu-content', `${activeClass}`]">
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Внутри 1</a></li>
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Внутри 2</a></li>
          <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="./">Внутри 3</a></li>
        </ul>
      </div>
    </li>

    <li class="breadcrumbs__item">
      <div class="breadcrumbs__link">Конец</div>
    </li>
  </ul>
</template>
<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  },
  data() {
    return {
      active: {
        type: Boolean,
        default: false
      },
    }
  },computed: {
    activeClass() {
      return !this.active ? 'active' : '';
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    }
  }
}
</script>
<style lang="scss">
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
  padding-left: 0;
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--black-primary);
    font-size: 0.87rem;
    line-height: 1.54;
    transition: color var(--transition);
    white-space: nowrap;

    &:not(:last-child) {
      &::before {
        content: '/';
        position: absolute;
        top: 50%;
        right: -13px;
        transform: translateY(-50%);
      }
    }

    &:last-child {
      color: var(--black-primary);
    }

    &_dots {
      gap: 24px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: var(--border-radius);

        &:hover {
          color: var(--black-primary);
          background-color: var(--black-primary);
        }
      }
    }

    &_btn {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--black-primary);
        width: 20px;
        height: 20px;
        border-radius: var(--border-radius);
        transition: border-color var(--transition);

        &:hover {
          border-color: var(--black-primary);
        }

        svg {
          width: 14px;
          height: 14px;
          fill: var(--black-primary);
          cursor: pointer;
          transition: var(--transition);
        }
        &.active {
          svg {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  &__menu {
    position: relative;

    &-content {
      display: none;
      position: absolute;
      top: 28px;
      border: 1px solid var(--outline);
      border-radius: var(--border-radius);
      &.active {
        display: block;
      }
    }
  }

  &__link,
  &__item_dots button {
    color: inherit;
    text-decoration: none;
    padding: 6px 0;
  }

  //@include sm {
  //  width: 100%;
  //  flex-wrap: nowrap;
  //  overflow-x: auto;
  //  gap: 8px;
  //
  //  &::-webkit-scrollbar {
  //    display: none;
  //  }
  //
  //  &__link {
  //    border: 1px solid var(--black-primary);
  //    padding: 6px 10px;
  //    border-radius: 20px;
  //  }
  //
  //  &__item {
  //    &:not(:last-child)::before { content: none; }
  //    gap: 0;
  //
  //    &_dots {
  //      display: none;
  //    }
  //
  //    &_btn {
  //      .breadcrumbs__link {
  //        border-radius: 20px 0 0 20px;
  //      }
  //
  //      button {
  //        padding: 9px 12px 9px 10px;
  //        width: initial;
  //        height: initial;
  //        border-radius: 0 20px 20px 0;
  //        margin-left: -1px;
  //      }
  //    }
  //  }
  //}
}

a.breadcrumbs__link:hover {
  color: var(--txt-gray-1);
  text-decoration: none;
}

.breadcrumbs__menu-content {
  padding: 8px 0;

  .breadcrumbs__item {
    min-width: 210px;
    padding: 0px 12px;
    &::before { content: none; }

    //@include sm {
    //  padding: 0;
    //
    //  &:not(:last-child) {
    //    box-shadow: var(--box-shadow);
    //  }
    //}
  }

  .breadcrumbs__link {
    width: 100%;

    //@include sm {
    //  padding: 17px 16px;
    //  border: none;
    //}
  }
}

</style>
