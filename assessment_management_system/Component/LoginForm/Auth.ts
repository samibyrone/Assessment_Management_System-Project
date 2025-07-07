interface RouterType {
  push: (path: string) => void;
}

export const handleLogin = (email: string, password: string, role: string, router: RouterType) => {
  console.log('Logging in with:', email, password, role);
  if (email && password) {
    router.push('/creatorDashboard');
  }
};

export const handleGoogleAuth = (role: string, router: RouterType) => {
  console.log('Authenticating with Google as:', role);
  router.push('/creatorDashboard');
};
