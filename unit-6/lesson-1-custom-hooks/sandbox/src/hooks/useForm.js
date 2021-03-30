import React from "react";

export default function useForm(initialData = {}) {
  const [form, setForm] = React.useState(initialData);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  // {
  //   form: form,
  //   handleChange: handleChange
  // }
  return { form, handleChange };
}
