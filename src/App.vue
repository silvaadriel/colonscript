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

    <base-learn-about title="Learn ColonScript." :lines="lines"/>

    <base-about
      :about="{ projectName: 'ColonScript', developerName: 'Adriel da Silva', socialMediaUrl: 'https://github.com/silvaadriel/' }"
    />
  </div>
</template>

<script>
import HeroHeader from "./components/HeroHeader.vue";
import BaseIdeSection from "./components/ideSection/BaseIdeSection.vue";
import BaseCodeExampleSection from "./components/codeExampleSection/BaseCodeExampleSection.vue";
import BaseLearnAbout from "./components/learnAbout/BaseLearnAbout.vue";
import BaseAbout from "./components/aboutFooter/BaseAbout.vue";

export default {
  name: "app",
  components: {
    HeroHeader,
    BaseIdeSection,
    BaseCodeExampleSection,
    BaseLearnAbout,
    BaseAbout
  },
  data() {
    return {
      DEFAULT_CONTENT: `//As always, hello world.\n!:"Hello world."`,
      API_URL:
        "https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute",
      COLON_EXAMPLE: `//Is the number even or odd?\n\nc:number = 23\n\n!:"Let's check if " + number + " is even or odd."\n\n\ni:evenOdd(number)\n\t!:"The number " + number + " is even."\ne:\n\t!:"The number " + number + " is odd."\ne;\n\n\nf:evenOdd(number)\n\tr:number % 2 === 0\nf;\n`,
      lines: [
        {
          columns: [
            {
              title: "Declaring a variable and a constant",
              columns: [
                {
                  content: `c:<constant_name> = <value> //JavaScript const\nv:<variable_name> = <value> //JavaScript let\n\n/**\n * Primitive Data\n * - string\n * - number\n * - boolean\n * - undefined\n */\n\n`
                }
              ]
            },
            {
              columnWidth: "is-three-fifths",
              title: "Functions",
              columns: [
                {
                  content: `//Function declaration\nf:<function_name>(<parameters>)\n\t//function content\n\tr:<return>\nf;\n\n//Function declaration (anonymous)\nf:(<parameters>)\n\t//function content\n\tr:<return>\nf;\n`
                },
                {
                  content: `//Colon function\n//(function expression)\nc:<constant_name> = (<params>) =:\n\t//function content\n\tr:<return>\n=;\n\n//Colon function (one line)\n//implicit return\nc:<constant_name> = (<param>) <: param\n`
                }
              ]
            }
          ]
        },
        {
          columns: [
            {
              columnWidth: "is-three-fifths",
              title: "Iterations",
              columns: [
                {
                  content: `//for loop\nfl:v:index; index < 10; index++\n\t//for loop content\nfl;\n\n//while loop\nv:controler = true\nwl:controler\n\t//while loop content\n\tcontroler = false\nwl;\n`
                },
                {
                  content: `//do...while\nv:controler = false\nd:\n\t//do...while content\n\tcontroler = true\nw:controler\n\n\n\n\n\n`
                }
              ]
            },
            {
              title: "Control flow",
              columns: [
                {
                  content: `//if\ni:<condition>\n\t//if content\ni;\n\n//if...else\ni:<condition>\n\t//if content\ne:\n\t//else content\ne;\n`
                },
                {
                  content: `//if...else if...else\ni:<condition>\n\t//if content\nei:<condition>\n\t//else if content\nei;\n\n//break\nbreak\n\n//continue\ncontinue`
                }
              ]
            }
          ]
        },
        {
          columns: [
            {
              title: "Others",
              columns: [
                {
                  content: `//Print on the screen\nc:hereText = "here"\n\n!:"Your text ", hereText\n//output: "Your text here"\n\n!:'Your text ', hereText\n//output: "Your text here"\n\n//Template String\n!:\`Your text \${hereText}\`\n//output: "Your text here"`
                },
                {
                  content: `//Arithmetic Operators\n+ //Addition\n- //Subtraction\n* //Multiplication\n/ //Division\n% //Modulus\n++ //Increment\n-- //Decrement\n\n\n\n`
                },
                {
                  content: `//Assignment Operators\nx = y //same as x = y\nx += y //same as x = x + y\nx -= y //same as x = x - y\nx *= y //same as x = x * y\nx /= y //same as x = x / y\nx %= y // same as x = x % y\n\n\n\n\n`
                },
                {
                  content: `//Comparison Operators\n== //equal to\n=== //equal value and equal type\n!= //not equal\n!== //not equal value or not equal type\n> //greater than\n< //less than\n>= //greater than or equal to\n<= //less than or equal to\n`
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
