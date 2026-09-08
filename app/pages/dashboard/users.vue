<template>
  <section class="mt-8">
    <div class="card bg-base-100 w-96 shadow-sm mt-4">
      <div class="card-body">
        <h2 class="card-title">Lag en bruker</h2>
        <form @submit.prevent="createUser">
          <!-- e-post -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">E-post</legend>
            <input type="email" class="input" placeholder="e-post" v-model="user.email" />
          </fieldset>
          <!-- passord -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">Password</legend>
            <input type="password" class="input" placeholder="passord" v-model="user.password" />
          </fieldset>
          <!-- role -->
          <fieldset class="fieldset mb-2">
            <legend class="fieldset-legend">Velg rolle</legend>
            <select class="select" v-model="user.role">
              <option disabled selected>Velg rolle</option>
              <option>user</option>
              <option>visitor</option>
              <option>admin</option>
            </select>
          </fieldset>

          <div class="card-actions">
            <button class="btn btn-primary" type="submit">Lag bruker</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const user = ref({
  farmId: 1,
  email: '',
  password: '',
  role: 'Velg rolle',
});

const createUser = async () => {
  try {
    await $fetch('/api/users', {
      method: 'POST',
      body: {
        farmId: user.value.farmId,
        email: user.value.email,
        password: user.value.password,
        role: user.value.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
