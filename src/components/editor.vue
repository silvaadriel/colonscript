<template>
  <div ref="editor"></div>
</template>

<script>
import "../ace/ace";
import "../ace/mode-colon";
import "../ace/theme-dracula";

export default {
  name: "Editor",
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
    },
    editorOptions: {
      type: Object,
      default: () => {
        return {
          readOnly: false,
          showGutter: true,
          wrap: true
        };
      }
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
    this.aceEditor = window.ace.edit(this.$refs.editor);
    this.aceEditor.setValue(this.defaultContent, 1);
    this.$emit("change-content", this.aceEditor.getValue());

    this.aceEditor.getSession().setMode("ace/mode/colon");
    this.aceEditor.setTheme("ace/theme/dracula");

    this.aceEditor.setOptions({
      readOnly: this.editorOptions.readOnly,
      showGutter: this.editorOptions.showGutter,
      wrap: this.editorOptions.wrap
    });

    this.aceEditor.on("change", () => {
      this.content = this.aceEditor.getValue();
      this.$emit("change-content", this.aceEditor.getValue());
    });
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}

.ace_editor {
  font-size: 1rem;
}

.ace_gutter-layer {
  text-align: left;
}
</style>

