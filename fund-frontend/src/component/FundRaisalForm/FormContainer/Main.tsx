import React,{useState} from 'react'
import styled from 'styled-components'
import FormPart1 from './FormPart1'
import FormCantainer2 from './FormPart2/main';
import 'react-quill/dist/quill.snow.css'
import './x.css'
// import Quill from 'quill';
const Form1=styled.div`
  width:100%;

`
const Form2=styled.div`
 
`
const Form3=styled.div`
 
`
const Form4=styled.div`
 
`
function FundraisalForm() {
  const [FormState,SetFormState]=useState<number>(0);
  const back=(change:number)=>{
     SetFormState((prevState)=>prevState-change)
  }
  const nextPage=(change:number)=>{
    console.log(change)
    SetFormState((prevState)=>prevState+change)
 }

  return (
    <Form1>
{ FormState===0&&<FormPart1 LastFunc={back} NextFunc={nextPage}/>}
{ FormState===1&&<FormCantainer2/>}
    </Form1>
  )
}

export default FundraisalForm