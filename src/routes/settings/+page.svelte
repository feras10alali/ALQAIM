<script>
    export let data;
    
    // Pre-fill form inputs with current user data.
    let firstName = data.user.firstName;
    let lastName = data.user.lastName;
    let email = data.user.email;
  </script>
  
  <h1>User Settings</h1>
  
  <section>
    <h2>Update Profile</h2>
    <form method="post" action="?/updateProfile">
      <label>
        First Name:
        <input type="text" name="firstName" bind:value={firstName} />
      </label>
      <br/>
      <label>
        Last Name:
        <input type="text" name="lastName" bind:value={lastName} />
      </label>
      <br/>
      <label>
        Email:
        <input type="email" name="email" bind:value={email} />
      </label>
      <br/>
      <button type="submit">Update Profile</button>
    </form>
  </section>
  
  <section style="margin-top: 2rem;">
    <h2>Change Password</h2>
    <form method="post" action="?/updatePassword">
      <label>
        New Password:
        <input type="password" name="password" required />
      </label>
      <br/>
      <label>
        Confirm New Password:
        <input type="password" name="passwordConfirm" required />
      </label>
      <br/>
      <button type="submit">Change Password</button>
    </form>
  </section>
  