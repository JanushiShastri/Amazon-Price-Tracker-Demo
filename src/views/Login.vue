<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required/>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
                <button type="submit">Login</button>
        </form>

    </div>
</template>

<script>
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
    export default{
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
           async handleLogin(){
               
            try{const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log('Logged in as ', userCredential.user);

                //fetch user daya from firestore

                const docRef = doc(db, "users", userCredential.user.uid);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()){
                    console.log("User data", docSnap.data());

                }
                else{
                    console.log("user does not exisit");
                
                }
                this.$router.push('/');
            } catch(error){
                console.error('Error logging in', error.message);
            }
        }
        }
    };

</script>
<style scoped>
.login {
  max-width: 400px;
  margin: auto;
}
</style>