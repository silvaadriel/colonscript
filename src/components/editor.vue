<template>
  <div ref="editor"></div>
</template>

<script>
import "../ace/ace";
import "../ace/mode-colon";
import "../ace/theme-dracula";

export default {
  data() {
    return {
      aceEditor: Object,
      content: ""
    };
  },

  props: {
    defaultContent: {
      type: String,
      default: ""
    }
  },
  watch: {
    defaultContent(value) {
      if (this.content !== value) {
        this.aceEditor.setValue(value, 1);
      }
    }
  },

  mounted() {
    this.aceEditor = window.ace.edit(this.$refs.editor, {
      selectionStyle: "text"
    });
    this.aceEditor.setValue(this.content, 1);

    this.aceEditor.getSession().setMode("ace/mode/colon");
    this.aceEditor.setTheme("ace/theme/dracula");

    this.aceEditor.on("change", () => {
      this.content = this.aceEditor.getValue();
      this.$emit("change-content", this.aceEditor.getValue());
    });
  }
};
</script>

<style>
div {
  width: 100%;
  height: 100%;
}

.ace_gutter-layer {
  text-align: left;
}
</style>

