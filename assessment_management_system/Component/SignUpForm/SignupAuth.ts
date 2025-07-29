interface RouterType {
  push: (path: string) => void;
}

export const handleSignup = async (username: string, email: string, password: string, role: string, router: RouterType) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, role }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Signup successful:', data);
      alert('Registration successful! Please log in.');
      router.push('/creators-login');
    } else {
      console.error('Signup failed:', data.message);
      alert(data.message);
    }
  } catch (error) {
    console.error('Error during signup:', error);
    alert('An error occurred during signup.');
  }
};

export const handleGoogleAuthSignup = async (role: string, router: RouterType) => {
  console.log('Authenticating with Google as:', role);
  router.push('/marketplace');
};
