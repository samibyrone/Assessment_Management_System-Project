interface RouterType {
  push: (path: string) => void;
}

export const handleSignup = (username: string, email: string, password: string, role: string, router: RouterType) => {
  console.log('Signing in with:',username, email, password, role);
  if (username && email && password) {
    router.push('/marketplace');
  }
};

export const handleGoogleAuthSignup = (role: string, router: RouterType) => {
  console.log('Authenticating with Google as:', role);
  router.push('/marketplace');
};
