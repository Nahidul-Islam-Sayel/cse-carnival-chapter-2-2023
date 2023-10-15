import React from 'react';

const Support = () => {
    return (
        <div className="contract container mt-5 mb-20">
        <div className="row">
            <div className="col-md-6 contractimg">

            </div>
            <div className="col-md-6 contractform">
                <h3>Support Request</h3>
                <form class="contact-form row">
                    <div class="form-field col-lg-6">
                        <input id="name" class="input-text js-input" type="text" required />
                        <label class="label" for="name">Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="email" class="input-text js-input" type="email" required />
                        <label class="label" for="email">E-mail</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="company" class="input-text js-input" type="text" required />
                        <label class="label" for="company">Intitution Name</label>
                    </div>
                    <div class="form-field col-lg-6 ">
                        <input id="phone" class="input-text js-input" type="text" required />
                        <label class="label" for="phone">Contact Number</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input id="message" class="input-text js-input" type="text" required />
                        <label class="label" for="message">Message</label>
                    </div>
                    <div class="form-field col-lg-12">
                        <input class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Support;