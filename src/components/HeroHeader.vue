<template>
  <section class="hero has-background-dark is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-0 is-family-monospace">
          <span class="has-text-danger">{{hero.decoratedTitle}}</span>
          <span class="has-text-primary">{{hero.title}}</span>
        </h1>
        <h2 class="subtitle">{{ hero.subtitle }}</h2>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <svg
        class="arrow has-text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroHeader",
  props: {
    hero: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
.arrow {
  fill: #44475a;
}

.title.is-size-0 {
  font-size: 10rem;
}

@media screen and (max-width: 700px) {
  .title.is-size-0 {
    font-size: 5rem;
  }

  .arrow {
    font-size: 2rem;
  }
}
</style>

