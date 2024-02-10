import React,{useState} from 'react'
import styled from 'styled-components'
import FormPart1 from './FormPart1'
import ReactQuill from 'react-quill'
import { Quill } from 'react-quill';
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

  return (
    <Form1>
<FormCantainer2/>

    </Form1>
  )
}

export default FundraisalForm