import React, { useState } from 'react'
import './styles.css'

import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

import database from '../../services/database.json'

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const user = database.users.find(user => user.email === email)

    if (!user) {
      return NotificationManager.error(
        'Email ou senha incorreto, tente novamente!',
        'Tente novamente',
        2500,
      )
    } else if (user && user.password !== password) {
      return NotificationManager.error(
        'Email ou senha incorreto, tente novamente!',
        'Tente novamente',
        2500,
      )
    }

    NotificationManager.success(
      `Bem vindo ${user.name}`,
      '',
      2500,
    )
    setTimeout(() => props.history.push('/'), 2600)
  }

  return (
    <div className="login-content">
      <div className="card col-6">
        <div className="card-header">
          <h5 style={{ textAlign: 'center' }}>Bullcode Front-end test</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <label htmlFor="">Seu email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={({ target }) => setEmail(target.value)} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <label htmlFor="">Sua senha</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={({ target }) => setPassword(target.value)} />
              </div>
            </div>
            <div className="d-flex justify-content-end row mt-3">
              <div className="d-flex justify-content-end col-4">
                <button type="submit" className="btn btn-success">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
