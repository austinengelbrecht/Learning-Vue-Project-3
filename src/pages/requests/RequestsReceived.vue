<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>

  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>

      <base-spinner v-if="isLoading"></base-spinner>

      <ul v-else-if="hasRequests && !isLoading">
        <requestItem
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.email"
          :message="req.message"
        />
      </ul>

      <h3 v-else>You have no requests</h3>
    </base-card>
  </section>
</template>

<script>
import requestItem from '../../components/requests/RequestItem.vue';

export default {
  components: { requestItem },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters('requests/requests');
    },
    hasRequests() {
      return this.$store.getters('requests/hasRequests');
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;

      try {
        this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed';
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
