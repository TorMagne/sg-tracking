<template>
  <section class="mt-8">
    <div class="card bg-base-100 w-96 shadow-sm mt-4">
      <div class="card-body">
        <h2 class="card-title">Lag en bruker</h2>
        <form class="mb-2">
          <!-- e-post -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">E-post</legend>
            <input type="email" class="input" placeholder="e-post" />
          </fieldset>
          <!-- passord -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">Password</legend>
            <input type="password" class="input" placeholder="passord" />
          </fieldset>
          <!-- role -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">Velg rolle</legend>
            <select class="select">
              <option disabled selected>Velg rolle</option>
              <option>user</option>
              <option>visitor</option>
              <option>admin</option>
            </select>
          </fieldset>
        </form>
        <div class="card-actions">
          <button class="btn btn-primary">Lag bruker</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});
</script>
