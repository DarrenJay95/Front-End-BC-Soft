import React, { FunctionComponent, useReducer } from "react";
import { useLoginLogic } from './LoginLogic';



const initialFormState: LoginFormState = {
  username: "",
  password: "",
};
interface Action {
  type: "create" | "update" | "read" | "delete";
  payload: Pokemon | null;
}

const reducer = (state: Pokemon[], action: Action): LoginFormState => {
  switch (action.type) {
    case "create":
      return state.concat(action.pokemon);
    case "update":
      return state.map((p) =>
        p.id === action.payload.pokemon.id
          ? {
              ...p,
              ...action.payload.pokemon,
            }
          : p
      );
    case "read":
      return state;
    case "delete":
      return state.filter((p) => p.id !== action.payload.pokemon.id);
  }
};
const Login: FunctionComponent = () => {
  // const [formState, setFormState] = useState<LoginFormState>(initialFormState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: name as "username" | "password",
      payload: {
        [name]: value,
      },
    });
    // setFormState(prevState => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit form with:", formState);
    dispatch({
      type: "delete",
      payload: { pokemon },
    });
  };

  const {formState, handleInputChange, handleSubmit} = useLoginLogic () 
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
