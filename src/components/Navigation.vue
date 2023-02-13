<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item p-1">
          <!-- Add a router link to the homepage (don't use the a tag!) -->
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item p-1">
          <!-- Add a router link to the create product page (don't use the a tag!) -->
          <router-link to="/createproduct">Create Product</router-link>
        </li>
        <li class="nav-item p-1">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/products">Products</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>