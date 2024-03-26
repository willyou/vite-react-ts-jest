interface LoginFormProps {
  hidden: boolean;
  onSubmit: () => void;
}

export function LoginForm(props: LoginFormProps) {
  const { hidden, onSubmit } = props;

  return !hidden ? (
    <form>
      <div>
        <label aria-label="email">Email</label>
        <input />
      </div>

      <div>
        <label aria-label="password">Password</label>
        <input />
      </div>
      <div>
        <label aria-label="confirm password">Confirm password</label>
        <input />
      </div>
      <div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            onSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  ) : null;
}
