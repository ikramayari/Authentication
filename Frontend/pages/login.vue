<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="title">Login</h1>
      <form @submit.prevent="login" class="login-form">
        <div class="input-group">
          <input v-model="email" type="email" placeholder="Email" class="input-field" required />
        </div>
        <div class="input-group">
          <input v-model="password" type="password" placeholder="Password" class="input-field" required />
        </div>
        <button type="submit" class="submit-button">Login</button>
      </form>
      <div class="register-link">
        <p>Don't have an account? <router-link to="/register" class="link">Register here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$http.$post('/login', {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem('token', response.token);
        this.$router.push('/profile');
      } catch (error) {
        alert('Invalid credentials');
        console.error(error);  
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.login-box {
  background-color:rgb(209, 187, 211);
  padding: 40px;
  border-radius: 45px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
}

.title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: rgb(170, 78, 171);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.submit-button:hover {
  background-color: rgb(170, 78, 171);
}

.register-link {
  text-align: center;
  margin-top: 15px;
}

.link {
  color: rgb(170, 78, 171);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
