import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const IconLoading = (props) => <FontAwesomeIcon fixedWidth icon={solid("circle-notch")} spin {...props} />;

export const IconUnknownUser = (props) => <FontAwesomeIcon fixedWidth icon={solid("question")} {...props} />;

export const IconNoSuggestion = (props) => <FontAwesomeIcon fixedWidth icon={solid("circle-question")} {...props} />;

export const IconNoImage = (props) => <FontAwesomeIcon fixedWidth icon={solid("image")} {...props} />;

export const IconCreateHenken = (props) => <FontAwesomeIcon fixedWidth icon={solid("face-kiss-beam")} {...props} />;

export const IconNotification = (props) => <FontAwesomeIcon fixedWidth icon={solid("bell")} {...props} />;

export const IconHenkenUserFrom = (props) => <FontAwesomeIcon fixedWidth icon={solid("face-kiss-beam")} {...props} />;
export const IconHenkenUserTo = (props) => <FontAwesomeIcon fixedWidth icon={solid("face-grin-tears")} {...props} />;

export const IconLogin = (props) => <FontAwesomeIcon fixedWidth icon={solid("right-to-bracket")} {...props} />;
export const IconRegisterUser = (props) => <FontAwesomeIcon fixedWidth icon={solid("signature")} {...props} />;
