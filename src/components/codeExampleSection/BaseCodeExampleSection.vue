<template>
  <section class="section has-background-dark">
    <section-title :title="codeExampleSection.title" color="has-text-primary"/>
    <div class="container editor">
      <editor
        :default-content="codeExampleSection.codeExample"
        :editor-options="{ readOnly: true }"
      />
    </div>
  </section>
</template>

<script>
import Editor from "../Editor.vue";
import SectionTitle from "../SectionTitle.vue";

export default {
  name: "BaseCodeExampleSection",
  components: {
    Editor,
    SectionTitle
  },
  props: {
    codeExampleSection: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.editor {
  height: 400px;
  width: 100%;
}
</style>

