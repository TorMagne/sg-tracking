<template>
  <section class="mt-8">
    <div class="card bg-base-100 w-96 shadow-sm mt-4">
      <div class="card-body">
        <h2 class="card-title">Lag en bruker</h2>
        <p>
          A card component has a figure, a body part, and inside body there are title and actions
          parts
        </p>
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
