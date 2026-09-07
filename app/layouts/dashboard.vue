<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <!-- Mobile navbar, hidden on large screens -->
      <div class="navbar bg-base-100 shadow-sm lg:hidden">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">SG Tracking</a>
        </div>
        <div class="flex-none">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <LucideMenu />
          </label>
        </div>
      </div>

      <!-- Page content -->
      <main class="container mx-auto px-4">
        <slot />
      </main>
    </div>

    <nav class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li><NuxtLink to="/dashboard">Overview</NuxtLink></li>
        <li><NuxtLink to="/dashboard/hours">Hours</NuxtLink></li>
        <li><NuxtLink to="/dashboard/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/dashboard/users">Users</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
