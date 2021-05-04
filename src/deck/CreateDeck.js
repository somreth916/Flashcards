import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import Deck from "./Deck";

function CreateDeck() {
  const history = useHistory();
  function submitHandler(val) {
    createDeck(val).then((deck) =>
      history.push(`/decks/${deck.id}`)
    );
  }
  function cancel() {
    history.goBack();
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <Deck onCancel={cancel} onSubmit={submitHandler} />
    </div>
  );
}
export default CreateDeck;