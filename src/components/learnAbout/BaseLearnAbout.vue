<template>
  <section class="section">
    <section-title :title="title"/>

    <div class="container">
      <div class="columns" v-for="(column, index) in lines" :key="index">
        <div
          :class="`column ${column.columnWidth}`"
          v-for="(column, index) in column.columns"
          :key="index"
        >
          <div class="card has-background-dark">
            <h2 class="subtitle has-text-primary has-text-centered">{{ column.title }}</h2>
            <div class="columns" v-if="column.columns">
              <div class="column" v-for="(column, index) in column.columns" :key="index">
                <div :style="`height: ${columnHeight}px`">
                  <editor
                    :default-content="column.content"
                    :editor-options="{ readOnly: true, showGutter: false, wrap: true }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
import Editor from "../Editor.vue";

export default {
  name: "BaseLearnAbout",
  components: {
    SectionTitle,
    Editor
  },
  props: {
    title: {
      type: String,
      required: true
    },
    columnHeight: {
      type: String,
      default: "240"
    },
    lines: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
.card {
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
}
</style>
