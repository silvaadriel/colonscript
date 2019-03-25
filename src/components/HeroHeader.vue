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
      <span class="arrow has-text-primary">⮟</span>
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
  font-size: 3.5rem;
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

