export default function Login() {
  return (
    <>
      <div className="p-16 bg-zinc-500 rounded-lg shadow-2xl w-80 h-80">
        <form className="" method="get" action="">
          <label for="username">Username: </label>
          <br />
          <input
            className="rounded-sm  h-8 w-48"
            id="username"
            name="username"
            type="text"
            for="username"
            required
          ></input>
          <br /> <br />
          <label for="password">Password: </label>
          <br />
          <input
            className="rounded-sm  h-8 w-48"
            type="password"
            name="password"
            id="password"
            required
          ></input>
          <br /> <br />
          <input
            className="rounded-lg bg-yellow-400 p-2 hover:bg-yellow-500"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </>
  );
}
