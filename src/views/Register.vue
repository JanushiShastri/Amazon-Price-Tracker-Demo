<template>
    <div class="register">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth, db } from '../firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { doc, setDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          console.log('Registered as:', userCredential.user);
  
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            email: this.email, 
            password: this.password
          });
  
          // Redirect to another page or update UI
          this.$router.push('/'); // Example of redirecting to home page after registration
        } catch (error) {
          console.error('Error registering:', error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    max-width: 400px;
    margin: auto;
  }
  </style>
  