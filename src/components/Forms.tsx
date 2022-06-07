import { useState } from "react"
import { useForms } from "../hooks/useForms";

export const Form = () => {

  const {form, user, password, onChange} = useForms();

  return (
    <>
        <h3>Formulario</h3>
        <input 
        className="form-control" 
        type="text" 
        placeholder="Usuario" 
        value={form.user}
        onChange={(ev) => onChange(ev.target.value, 'user')}
        />

        <input 
        className="form-control mt-2 mb-2" 
        type="password" 
        placeholder="Contraseña" 
        value={form.password}
        onChange={(ev) => onChange(ev.target.value, 'password')}
        />

        <code>
          <pre>
            {JSON.stringify(form)}
          </pre>
        </code>

    </>
  )
}
