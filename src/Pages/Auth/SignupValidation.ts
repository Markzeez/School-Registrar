// SignupValidation.ts
export interface SignupValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image: File | null;
}

export interface SignupErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  image?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

export default function validate(
  values: SignupValues
): SignupErrors {
  const errors: SignupErrors = {};

  if (!values.image) {
    errors.image = 'Please upload a profile image';
  }

  if (values.firstname.trim() === '') {
    errors.firstname = 'First Name is required';
  }

  if (values.lastname.trim() === '') {
    errors.lastname = 'Last Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      'Password must be 8+ chars, include upper, lower & a number';
  }

  return errors;
}
