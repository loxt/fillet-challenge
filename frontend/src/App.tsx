import React, { FormEvent, useState } from 'react';
import styles from './styles.module.css';
import { gql, useMutation } from '@apollo/client';
import api from './config/api';

const USER_MUTATION = gql`
  mutation User(
    $firstName: String!
    $lastName: String!
    $phone: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      createUserInput: {
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      firstName
      lastName
      email
    }
  }
`;

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [createUser, { loading, error }] = useMutation(USER_MUTATION, {
    client: api,
  });

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      (firstName ||
        lastName ||
        phone ||
        email ||
        password ||
        confirmPassword) != null
    ) {
      try {
        const res = await createUser({
          variables: {
            firstName,
            lastName,
            phone,
            email,
            password,
            confirmPassword,
          },
        });

        if (error) return alert(error.name);
        if (loading) return;

        alert(`E-mail ${res.data.createUser.email} criado!`);
        window.location.reload();
      } catch (e) {
        alert(e.message);
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <aside className={styles.aside} />
        <div className={styles.content}>
          <h1>Sign up</h1>

          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.formGroup}>
              <input
                type='text'
                placeholder='First name'
                className={styles.formInput}
                id='firstname'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            <button type='submit'>Create account</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
