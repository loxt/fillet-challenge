import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <aside className={styles.aside} />
        <div className={styles.content}>
          <h1>Sign up</h1>

          <div className={styles.form}>
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
            <input type='text' placeholder='Phone' />
            <input type='email' placeholder='E-mail' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirme Password' />
          </div>

          <button type='button'>Create account</button>
        </div>
      </main>
    </div>
  );
}

export default App;
