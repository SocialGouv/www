import React from "react";
const Newsletter = () => (
  <section className="section section-grey">
    <div className="container">
      <div className="form__container">
        <form action="" method="post" name="form" target="_blank" noValidate>
          <div className="form__group">
            <label htmlFor="form-email">
              Pour être informé des nouveautés, inscrivez-vous à notre
              newsletter :
            </label>
            <input type="email" value="" name="email" id="form-email" />
          </div>

          <button
            className="button"
            type="submit"
            name="subscribe"
            id="form-submit"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Newsletter;
