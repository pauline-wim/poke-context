import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true, maxLength: 15 })}
        />
        {errors.username && <span>Please enter a username</span>}
        <input
          type="password"
          {...register("password", { required: true, maxLength: 6 })}
        />
        {errors.password && <span>Please enter a password</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
