<template>
  <div id="app">
    <hero-header
      :hero="{ decoratedTitle: ':', title: 'script', subtitle: '//A superset of JavaScript' }"
    />

    <base-ide-section
      :ide-section="{ title: 'Just write and run.', editorDefaulContent: this.DEFAULT_CONTENT, apiUrl: API_URL }"
    />

    <base-code-example-section
      :codeExampleSection="{ title: 'A simple example.', codeExample: COLON_EXAMPLE }"
    />

    <base-about
      :about="{ projectName: 'ColonScript', developerName: 'Adriel da Silva', socialMediaUrl: 'https://github.com/silvaadriel/' }"
    />
  </div>
</template>

<script>
import HeroHeader from "./components/HeroHeader.vue";
import BaseIdeSection from "./components/ideSection/BaseIdeSection.vue";
import BaseCodeExampleSection from "./components/codeExampleSection/BaseCodeExampleSection.vue";
import BaseAbout from "./components/aboutFooter/BaseAbout.vue";

export default {
  name: "app",
  components: {
    HeroHeader,
    BaseIdeSection,
    BaseCodeExampleSection,
    BaseAbout
  },
  data() {
    return {
      DEFAULT_CONTENT: `//As always, hello world.\n!:"Hello world."`,
      API_URL:
        "https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute",
      COLON_EXAMPLE: `//Is the number even or odd?\n\nc:number = 23\n\n!:"Let's check if " + number + " is even or odd."\n\n\ni:evenOdd(number)\n\t!:"The number " + number + " is even."\ne:\n\t!:"The number " + number + " is odd."\ne;\n\n\nf:evenOdd(number)\n\tr:number % 2 === 0\nf;\n`
    };
  }
};
</script>

<style>
</style>
