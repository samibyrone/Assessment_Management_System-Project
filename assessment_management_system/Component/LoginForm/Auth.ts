export const handleLogin = (email: string, password: string, role: string) => {
  console.log('Logging in with:', email, password, role);
};

export const handleGoogleAuth = (role: string) => {
  console.log('Authenticating with Google as:', role);
};
