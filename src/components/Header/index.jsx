import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../Button";

const Header = ({ title, onClick, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "#0b2e11"}
          text={showAdd ? "Fechar" : "Adicionar"}
          onClick={onClick}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Gerenciador de Tarefas",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
