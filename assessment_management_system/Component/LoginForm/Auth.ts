interface RouterType {
  push: (path: string) => void;
}

export const handleLogin = async (email: string, password: string, role: string, router: RouterType) => {
  try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Redirect based on role
        if (role === 'Creator') {
          router.push('/creatorDashboard');
        } else if (role === 'Talent') {
          router.push('/talentDashboard'); // Assuming this route exists
        } else if (role === 'admin') {
          router.push('/adminDashboard'); // Assuming this route exists
        } else {
          router.push('/marketplace'); // Default or fallback route
        }
      } else {
        console.error('Login failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  export const handleGoogleAuth = async (role: string, router: RouterType) => {
    console.log('Authenticating with Google as:', role);
    // Similar role-based redirection for Google Auth
    if (role === 'Creator') {
      router.push('/creatorDashboard');
    } else if (role === 'Talent') {
      router.push('/talentDashboard'); // Assuming this route exists
    } else if (role === 'admin') {
      router.push('/adminDashboard'); // Assuming this route exists
    } else {
      router.push('/marketplace'); // Default or fallback route
    }
  };
