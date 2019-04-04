<template>
  <div class="container has-text-centered">
    <h1 :class="['title', color]">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "has-text-dark"
    }
  }
};
</script>

<style scoped>
.title::after {
  content: "";
  display: block;
  font-size: 1.875rem;
  height: 3px;
  width: 100px;
  border-radius: 5px;
  background: #ff3860;
  margin: 10px auto;
}

div {
  margin-bottom: 40px;
}
</style>
