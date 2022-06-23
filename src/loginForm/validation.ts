export const validateEmail = (email: string | undefined): boolean => {
  /* eslint-disable-next-line no-useless-escape */
  const emailTest =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (email && emailTest.test(email) && email.length >= 7) || false;
};

export const validatePassword = (password: string | undefined): boolean => {
  return (password && password.length >= 8) || false;
};
