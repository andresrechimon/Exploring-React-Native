import { useState } from "react";

export const useForms = () => {
    const [form, setForm] = useState({
        user: 'test@test.com',
        password: '123456'
      })
    
      const onChange = (value:string, field:string) => {
        setForm({
          ...form,
          [field]: value
        });
      }

      return{
          ...form,
          form,
          onChange
      }
}
