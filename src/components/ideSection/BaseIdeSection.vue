<template>
  <section class="section">
    <section-title :title="ideSection.title"/>
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="editor">
            <editor
              :default-content="ideSection.editorDefaulContent"
              @change-content="changeContent"
            />
          </div>
          <div ref="modal" class="modal">
            <div @click="modalToggle" class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">JavaScript code.</p>
                <button @click="modalToggle" class="delete" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                <pre>{{ content }}</pre>
              </section>
            </div>
          </div>

          <button
            ref="buttonRun"
            @click="runCode"
            class="button is-danger is-medium is-uppercase"
          >run</button>

          <button
            @click="modalToggle"
            class="button is-medium is-outlined is-uppercase is-dark"
          >show JavaScript code</button>
        </div>
        <div class="column is-half">
          <console :content="consoleContent" header="node v10.1.0"/>

          <button
            @click="clearConsole"
            class="button is-dark is-medium is-outlined is-uppercase"
          >clear console</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Editor from "../Editor.vue";
import Console from "../Console.vue";
import SectionTitle from "../SectionTitle.vue";
import colonToJs from "../../colonToJs";

const axios = require("axios");

export default {
  name: "BaseIdeSection",
  components: {
    Editor,
    Console,
    SectionTitle
  },
  data() {
    return {
      content: "",
      consoleContent: "",
      isLoading: false
    };
  },

  props: {
    ideSection: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeContent(value) {
      this.content = colonToJs(value);
    },

    runCode() {
      this.postCode();
    },

    postCode() {
      this.$refs.buttonRun.classList.add("is-loading");
      axios
        .post(this.ideSection.apiUrl, this.setInputParameters())
        .then(response => {
          this.parseResponse(response);
        })
        .catch(error => {
          this.consoleContent = error;
        })
        .finally(() => {
          this.$refs.buttonRun.classList.remove("is-loading");
        });
    },

    setInputParameters() {
      return {
        script: this.content,
        language: "nodejs",
        versionIndex: "2",
        clientId: "37cbd4da60eea91d27ae1f823f38b3e1",
        clientSecret:
          "dbc27d41d380f052a56289d8e09e754b37647d1b84ae87e97da9d2a7f449ce2f"
      };
    },

    parseResponse(response) {
      this.consoleContent = response.data.output;
    },

    clearConsole() {
      this.consoleContent = "";
    },

    modalToggle() {
      this.$refs.modal.classList.toggle("is-active");
    }
  }
};
</script>

<style scoped>
.editor,
.console {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  overflow: auto;
  color: #fff;
}

.button {
  margin: 10px 10px 0 0;
}
</style>
