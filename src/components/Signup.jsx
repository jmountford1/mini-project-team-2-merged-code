export default function SignUp() {
  return (
    <>
      <div className="p-16 bg-zinc-500 rounded-lg h-4/6 shadow-2xl w-80 ">
        <form method="post" action="">
          <label for="email"> Email: </label>
          <input
            className="rounded-sm  h-8 w-48 "
            for="email"
            name="email"
            type="text"
            required
          />
          <br />
          <br />

          <label for="username"> Username </label>
          <input
            className="rounded-sm  h-8 w-48 "
            for="username"
            name="username"
            type="text"
            required
          />
          <br />
          <br />

          <label for="password"> Password </label>
          <input
            className="rounded-sm  h-8 w-48 "
            for="password"
            name="password"
            type="text"
            required
          />
          <br />
          <br />

          <input
            className="rounded-lg bg-yellow-400 p-2 hover:bg-yellow-500"
            type="submit"
            value="Register"
            required
          />
        </form>
      </div>
    </>
  );
}
