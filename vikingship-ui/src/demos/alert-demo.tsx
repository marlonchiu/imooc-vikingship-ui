import React from "react";
import Alert, { AlertType } from "../components/Alert/alert"


function AlertDemo() {
  return (
    <>
      <hr />
      <Alert title="提示标题欧亲" type={AlertType.Primary}>this is a long description!</Alert>
      <hr/>
      <Alert type={AlertType.Primary}>this is a long description!</Alert>
      <hr/>
      <Alert title="提示标题欧亲" type={AlertType.Success}>this is a long description!</Alert>
      <hr/>
      <Alert type={AlertType.Success}>this is a long description!</Alert>
      <hr/>
      <Alert title="提示标题欧亲" type={AlertType.Danger}>this is a long description!</Alert>
      <hr/>
      <Alert type={AlertType.Danger}>this is a long description!</Alert>
      <hr/>
      <Alert title="提示标题欧亲" type={AlertType.Warning}>this is a long description!</Alert>
      <hr/>
      <Alert type={AlertType.Warning}>this is a long description!</Alert>
    </>
  )
}

export default AlertDemo
