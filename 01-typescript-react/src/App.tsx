import React from 'react'
import { Formularios } from './components/Formularios';
/* import { Login } from './components/Login'; */
/* import { Usuarios } from './components/Usuarios'; */
/* import { Contador } from './components/Contador';
import { ContadorHook } from './components/ContadorHook';
import { Funciones } from './typescript/Funciones';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos'; */

const App = () => {
  return (
    <>
    <h1 className="mt-2">Introduccion a TS-React</h1>
    <hr />
    {/* <TiposBasicos />
    <hr />
    <ObjetosLiterales />
    <hr />
    <Funciones />
    <hr />
    <Contador />
    <hr />
    <ContadorHook /> */}
    {/* <Login /> */}
   {/*  <Usuarios /> */}
   <Formularios />
    </>

  )
}

export default App;