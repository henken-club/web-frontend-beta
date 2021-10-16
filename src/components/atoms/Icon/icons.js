import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const IconLoading = (props) => <FontAwesomeIcon fixedWidth icon={solid("circle-notch")} spin {...props} />;

export const IconUnknownUser = (props) => <FontAwesomeIcon fixedWidth icon={solid("question")} {...props} />;

export const IconNoSuggestion = (props) => <FontAwesomeIcon fixedWidth icon={solid("circle-question")} {...props} />;
