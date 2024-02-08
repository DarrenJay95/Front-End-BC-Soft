import { useState } from "react";

interface LoginFormState {
    username: string;
    password: string;
  }

  const initialFormState: LoginFormState = {
    username: '',
    password: '',
  };

export function useLoginLogic () {
    const [formState, setFormState] = useState<LoginFormState>(initialFormState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
  
      setFormState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Submit form with:', formState);
      setFormState(initialFormState);
    };
  
    return {
        formState, handleInputChange, handleSubmit
    }
}

