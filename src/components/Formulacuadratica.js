import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./formulaCuadratica.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Formulacuadratica() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [var_a, setA] = useState(null);
  const [var_b, setB] = useState(null);
  const [var_c, setC] = useState(null);
  const [result, setResult] = useState("");

  /*   const bruh =() => {
    if (var_a === 0){
      if (var_b === 0){
        if(var_c === 0 ){
          setResult("Su ecuación presenta infinitas soluciones..!");
        } else{
          setResult("Para ecuación NO existen soluciones..!"); 
        }
      } else{
        if(var_c === 0){
          setResult("Su ecuación presenta una única solución que es 0..!");
        } else {
          let res = -var_c / var_b
          setResult("La solucion de la ecuacion es: " + res.toFixed(2));
        }
      }
    }

    let discriminante = Math.pow(var_b, 2) - 4* var_a * var_c;
    if(discriminante === 0){
      if(var_b === 0){
        setResult("La solucion de la ecuacion es: " + 0);
      } else{
        let res = -var_b/2*var_a
        setResult("La solucion de la ecuacion es: " + res.toFixed(2));
      }
    } else{
      if(discriminante > 0){
        let x1 = (-var_b + Math.sqrt(discriminante))/2*var_a
        let x2 = (-var_b - Math.sqrt(discriminante))/2*var_a
            
        setResult('Su ecuación tiene 2 soluciones reales diferentes que son, x1 = '
           + x1.toFixed(2) + ' y x2 = ' + x2.toFixed(2));
      } else{
        let absDiscr = Math.abs(discriminante);
        let Re = -var_b/ 2* var_a;
        let im = Math.sqrt(absDiscr)/ 2 * var_a;

        let x1 = (Re.toFixed(2) + im.toFixed(2)) + "i";
        let x2 = (Re.toFixed(2) - im.toFixed(2)) + "i";

        setResult("Su ecuación tiene 2 soluciones complejas conjugadas que son, x1 ="
          + x1 + ' y x2 ' + x2);
      }
    }
  } */

  const nov = () => {
    console.log(var_a + var_b + var_c )
    if (var_a === 0 && var_b === 0 && var_c === 0) {
      console.log("Su ecuación presenta infinitas soluciones..!");
      return setResult("Su ecuación presenta infinitas soluciones..!");
    } else if (var_a === 0 && var_b === 0) {
      return setResult("Para ecuación NO existen soluciones..!");
    } else if (var_a === 0 && var_c === 0) {
      return setResult("Su ecuación presenta una única solución que es 0..!");
    } else if (var_a === 0) {
      let res = -var_c / var_b;
      return setResult("La solucion de la ecuacion es: " + res.toFixed(2));
    }

    /* let discriminante = Math.pow(var_b, 2) - 4 * var_a * var_c;
    if (discriminante === 0) {
      if (var_b === 0) {
        return setResult("La solucion de la ecuacion es: " + 0);
      } else {
        let res = (-var_b / 2) * var_a;
        return setResult("La solucion de la ecuacion es: " + res.toFixed(2));
      }
    } else {
      if (discriminante > 0) {
        let x1 = ((-var_b + Math.sqrt(discriminante)) / 2) * var_a;
        let x2 = ((-var_b - Math.sqrt(discriminante)) / 2) * var_a;

        return setResult(
          "Su ecuación tiene 2 soluciones reales diferentes que son, x1 = " +
            x1.toFixed(2) +
            " y x2 = " +
            x2.toFixed(2)
        );
      } else {
        let absDiscr = Math.abs(discriminante);
        let Re = (-var_b / 2) * var_a;
        let im = (Math.sqrt(absDiscr) / 2) * var_a;

        let x1 = Re.toFixed(2) + im.toFixed(2) + "i";
        let x2 = Re.toFixed(2) - im.toFixed(2) + "i";

        return setResult(
          "Su ecuación tiene 2 soluciones complejas conjugadas que son, x1 =" +
            x1 +
            " y x2 " +
            x2
        );
      }
    } */
  };

  return (
    <div>
      <Button onClick={handleOpen}>Expression Cuadratica</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            𝑎𝑥2 + 𝑏𝑥 + 𝑐 = 0
          </Typography>
          <div>
            <input
              placeholder="a"
              type="text"
              onChange={(e) => setA(e.target.value)}
            />
            𝑥2
            <input
              placeholder="b"
              type="text"
              onChange={(e) => setB(e.target.value)}
            />
            𝑥
            <input
              placeholder="c"
              type="text"
              onChange={(e) => setC(e.target.value)}
            />
          </div>
          <button onClick={nov}>Calcular</button>
          {result && (<p>{result}</p>)}
        </Box>
      </Modal>
    </div>
  );
}

export default Formulacuadratica;
