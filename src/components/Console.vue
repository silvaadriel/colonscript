<template>
  <div class="console has-background-black">
    <pre class="has-background-black has-text-white">{{ header }}</pre>
    <pre class="has-background-black has-text-white">{{ content }}</pre>
  </div>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {};
  },

  props: {
    content: {
      type: String,
      default: ""
    },
    header: {
      type: String,
      default: "### CONSOLE ###"
    }
  }
};
</script>

<style>
.console {
  height: 100%;
  width: 100%;
}
</style>

