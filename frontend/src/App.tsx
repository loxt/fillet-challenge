import React, { useEffect } from 'react';
import styles from './styles.module.css';
import api from './config/api';
import { gql } from '@apollo/client';

function App() {
  useEffect(() => {
    api
      .query({
        query: gql`
          query User {
            users {
              firstName
            }
          }
        `,
      })
      .then((result) => console.log(result.data.users));
  }, []);

  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <aside className={styles.aside} />
        <div className={styles.content}>
          <h1>Sign up</h1>

          <div className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type='text'
                placeholder='First name'
                className={styles.formInput}
                id='firstname'
                required
              />
              <label htmlFor='firstname' className={styles.formLabel}>
                First name
              </label>
            </div>
            <div className={styles.formGroup}>
              <input
                type='text'
                placeholder='Last name'
                className={styles.formInput}
                id='lastname'
                required
              />
              <label htmlFor='lastname' className={styles.formLabel}>
                Last name
              </label>
            </div>

            <div className={styles.formGroup}>
              <input
                type='text'
                placeholder='Phone'
                className={styles.formInput}
                id='phone'
                required
              />
              <label htmlFor='phone' className={styles.formLabel}>
                Phone
              </label>
            </div>

            <div className={styles.formGroup}>
              <input
                type='email'
                placeholder='E-mail'
                className={styles.formInput}
                id='email'
                required
              />
              <label htmlFor='email' className={styles.formLabel}>
                E-mail
              </label>
            </div>

            <div className={styles.formGroup}>
              <input
                type='password'
                placeholder='Password'
                className={styles.formInput}
                id='password'
                required
              />
              <label
                htmlFor='password'
                style={{
                  color: 'green',
                }}
                className={styles.formLabel}>
                Good password!
              </label>
            </div>

            <div className={styles.formGroup}>
              <input
                type='password'
                placeholder='Confirm Password'
                className={styles.formInput}
                id='confirmpassword'
                required
              />
              <label
                htmlFor='confirmpassword'
                style={{
                  color: 'green',
                }}
                className={styles.formLabel}>
                It's ok!
              </label>
            </div>
          </div>

          <button type='button'>Create account</button>
        </div>
      </main>
    </div>
  );
}

export default App;
