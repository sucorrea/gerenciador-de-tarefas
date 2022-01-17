import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Adicione uma tarefa");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tarefa</label>
        <input
          value={text}
          type="text"
          placeholder="Adicione a tarefa"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Data & Hora</label>
        <input
          value={day}
          type="text"
          placeholder="Adicione a data e hora"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Definir Lembrete</label>
        <input
          value={reminder}
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Salvar Tarefa" />
    </form>
  );
};

export default AddTask;
