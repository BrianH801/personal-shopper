import React from 'react';

function About() {
  return (
    <div className='about__container'>
      <h1>About The Personal Shopper Protoype</h1>
      <div className='about__paragraph'>
        <p>
          The model for this project was described best by the volunteer senior
          who lives on Vancouver Island and shops for groceries at a local
          Grocery Store for people that cannot do shop for themselves. The way
          the current system works a volunteer comes into the store at 10:00am.
          The order has already been submitted by phone to an employee. The
          person that takes the order writes it on a clipboard. The volunteer
          takes the clipboard and shops the order. If volunteer shopper can not
          find an item they make a note of it and contact the client, sometimes
          the client thinks they are getting the flyer price for an item, and an
          item can sold out or on order. This can be a major cause of
          frustration for the client and the volunteer shopper. The order is run
          through the till by a cashier and is suspended. That means the till
          has the order entered into it and not closed yet. The client can then
          either ask for a different but similar item, cancel the order, or
          accept the order. There is a time limit set on how long the customer
          has to make changes to the suspended order. If the client accepts the
          order, the order is closed and the items are delivered to the client.
        </p>
      </div>
    </div>
  );
}

export default About;
