import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import { useParams } from "react-router-dom";

import Cards from "./Cards";

function AddCard() {
    const history = useHistory();
    const { deckId } = useParams();

    function submitHandler(card) {
      createCard(deckId, card).then(() => {
        history.push(`/decks/${deckId}`)
      })
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
            <h1>Create Card</h1>
            <Cards onCancel={cancel} onSubmit={submitHandler} />
        </div>
    )
}

export default AddCard;