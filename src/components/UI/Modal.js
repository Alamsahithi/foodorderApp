import classes from './Modal.module.css'
import { Fragment } from 'react'
import React from 'react'
//import { ReactDOM } from 'react-dom'
const Backdrop = (props)=>{
   return <div className={classes.Backdrop} onClick={props.onClose}/>
}
const ModalOverlay=(props)=>{
    return (
    <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
    )
}

//const portalElement = document.getElementById('overlays')

const Modal = (props )=>{
    return <Fragment>
    <Backdrop onClose={props.onClose}/>
    <ModalOverlay>{props.children}</ModalOverlay>

    </Fragment>
   
}
export default Modal