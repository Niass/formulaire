import React, { Component } from 'react';
import './FormEmployee.css';

const url = 'https://post-a-form.herokuapp.com/api/movies/';

export class FormEmployee extends Component {
  state = {
    title: '',
    comment: '',
    poster: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitForm = e => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          alert(`Ton film préféré ${res.title} a été enregistré!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un employé");
      });
  };

  render() {
    return (
      <div className="FormEmployee">
        <h1>Film préféré</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Nom</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">URL</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">Avis</label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              ></textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormEmployee;
