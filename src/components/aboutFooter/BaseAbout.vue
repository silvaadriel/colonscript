<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>{{ about.projectName }}</strong> by
        <a :href="about.socialMediaUrl">{{ about.developerName }}</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseAbout",
  props: {
    about: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
