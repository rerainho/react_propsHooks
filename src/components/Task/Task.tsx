import { useEffect, useState } from "react";
import "./Task.css";


function Task() {

  // variáveis com a linha do tempo de acontecimentos
  const [finalizada, setFinalizada] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>("");

  const [incompleta, setIncompleta] = useState<boolean>(false);


  // Funções de causa e consequência 
  useEffect(() => {

    if (finalizada === true) {   
      setTarefa("Parabéns tarefa concluída");

    }

    else if (finalizada === false && incompleta === false) { setTarefa("Tarefa pendente") }

  }, [finalizada, incompleta])

  useEffect(() => {

    if (incompleta === true && finalizada === false) {

      setTarefa("Tarefa incompleta")
    }

    else if (incompleta === false && finalizada === true) {

      setTarefa("Tarefa concluída")

    }

    else if (incompleta === false  && finalizada === false) { 
      
      setTarefa("Tarefa pendente") 
    
    }

  }, [finalizada, incompleta])


  function finalizaTarefa() {

    setFinalizada(true)
    setIncompleta(false)

  }

  function tarefaIncompleta() {

    setIncompleta(true)
    setFinalizada(false)

  }

function tarefaPendente(){

  setIncompleta(false)
  setFinalizada(false)

}

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button onClick={finalizaTarefa}>Tarefa realizada com sucesso</button>
      <button onClick={tarefaIncompleta}>Tarefa incompleta</button>
      <button onClick={tarefaPendente}>Tarefa pendente</button>
    </div>
  )
}

export default Task