import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="insert your name here"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="*******"
      />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
