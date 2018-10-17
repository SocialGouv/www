import React from "react";
const Form = () => (
  <section id="form">
    <div className="container">
      <form action="" method="post" name="form" target="_blank" noValidate>
        <h1>Form</h1>
        <div className="form__group">
          <label htmlFor="email">
            Pour être informé des nouveautés, inscrivez-vous à notre newsletter
            :
          </label>
          <input type="email" value="" name="email" id="email" />
        </div>

        <div className="form__group">
          <label htmlFor="search">Tapez un mot-clef :</label>
          <div className="search__group">
            <input
              type="text"
              className=""
              value=""
              name="search"
              id="search"
            />
            <button className="overlay-button" aria-label="Recherche">
              <svg className="icon icon-search">
                <use xlinkHref="#icon-search" />
              </svg>
            </button>
          </div>
        </div>

        <div className="form__group">
          <fieldset>
            <legend>Radio</legend>
            <input type="radio" name="radio" id="radio-pup" value="1" />
            <label htmlFor="radio-pup" className="label-inline">
              Chiots
            </label>
            <input type="radio" name="radio" id="radio-kitten" value="0" />
            <label htmlFor="radio-kitten" className="label-inline">
              Chatons
            </label>
          </fieldset>
        </div>

        <div className="form__group">
          <fieldset>
            <legend>Checkbox</legend>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-fraises"
              value="fraise"
            />
            <label htmlFor="checkbox-fraises" className="label-inline">
              Fraises
            </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-bananes"
              value="bananes"
            />
            <label htmlFor="checkbox-bananes" className="label-inline">
              Bananes
            </label>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-ananas"
              value="fraise"
            />
            <label htmlFor="checkbox-ananas" className="label-inline">
              Ananas
            </label>
          </fieldset>
        </div>

        <div className="form__group">
          <label htmlFor="select">Select</label>
          <select id="select">
            <option>Choisissez...</option>
            <option>Frites</option>
            <option>Salade</option>
          </select>
        </div>

        <button className="button" type="submit" name="subscribe" id="submit">
          Valider
        </button>
      </form>
    </div>
  </section>
);

export default Form;
