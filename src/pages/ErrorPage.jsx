import React, { useState, useEffect } from "react";

import { Container } from "@src/store/styled/styleComponents";

const ErrorPage = ({ code }) => {
  const [information, setInformation] = useState("");

  useEffect(() => {
    if (code === 404) {
      setInformation("Страницы нет");
    }
  }, [information]);

  return (
    <>
      <Container>
        <h2>{information}</h2>
      </Container>
    </>
  );
};

export { ErrorPage };
