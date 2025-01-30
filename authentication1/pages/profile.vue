<template>
  <div>
    <div class="register-container">
      <div class="register-box">
        <h1>Profile</h1>
        <div v-if="user" class="user-info">
          <p>Name: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        this.$router.push('/login');
        return;
      }

      const response = await this.$http.$get('/profile', {
        headers: {
          Authorization: token,
        },
      });

      this.user = response.user;
    } catch (error) {
      this.$router.push('/login');
    }
  },
};
</script>


<style scoped>

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.register-box {
  background-color: rgb(209, 187, 211);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center; /* Centrer le texte */
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.user-info p {
  font-size: 1.2rem;
  color: #444;
  margin: 10px 0;
}
</style>
