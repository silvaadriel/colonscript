<template>
  <div id="app">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">:script</h1>
          <h2 class="subtitle">A language super-set of JavaScript</h2>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="editor">
            <editor default-content="hello Word" @change-content="changeContent"></editor>
          </div>
          <button
            ref="buttonRun"
            @click="runCode"
            class="button is-dark is-medium is-fullwidth is-uppercase"
          >run</button>
        </div>
        <div class="column is-half">
          <div>
            <pre class="console has-background-black"><code>{{consoleContent}}</code></pre>
          </div>
          <button
            @click="clearConsole"
            class="button is-dark is-medium is-outlined is-fullwidth is-uppercase"
          >clear</button>
        </div>
      </div>
    </div>
    <!-- <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>-->
  </div>
</template>

<script>
import editor from "./components/editor.vue";
import colonToJs from "./colonToJs";

const axios = require("axios");

export default {
  name: "app",
  components: {
    editor
  },
  data() {
    return {
      content: "",
      consoleContent: "",
      apiUrl: "https://api.jdoodle.com/execute"
    };
  },
  methods: {
    changeContent(value) {
      this.content = colonToJs(value);
    },

    runCode() {
      const codeStringified = JSON.stringify(this.content);
      this.postCode(codeStringified);
    },

    postCode(codeStringified) {
      this.$refs.buttonRun.classList.add("is-loading");
      console.log(codeStringified);
      axios
        .post(this.apiUrl, this.setInputParameters(codeStringified))
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

    setInputParameters(codeStringified) {
      return {
        script: codeStringified,
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
    }
  }
};
</script>

<style>
.editor,
.console {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  overflow: auto;
  color: #fff;
}

.button {
  margin: 10px 0;
}
</style>
