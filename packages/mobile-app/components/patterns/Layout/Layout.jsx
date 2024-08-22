import React from "react";
import { Grid, Row, Col, ScrollView } from "./Layout.styles";

const buildPairArray = (initialArray) => {
  return initialArray?.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
};

export const GridLayout = ({ children, width, ...rest }) => {
  const isArray = Array.isArray(children);
  if (!isArray && children) {
    return children;
  }

  const rows = buildPairArray(children);

  return (
    <Grid {...rest}>
      {rows?.map((row, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {row.map((col, colIndex) => (
            <Col key={`col-${colIndex}`} width={width}>
              {col}
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  );
};

export const HorizontalList = ({ children, width, ...rest }) => {
  return (
    <ScrollView {...rest}>
      {React.Children.map(children, (child) => (
        <Col width={width}>{child}</Col>
      ))}
    </ScrollView>
  );
};

export const Layout = ({ type, children, width, ...rest }) => {
  if (type === "horizontalList") {
    return (
      <HorizontalList width={width} {...rest}>
        {children}
      </HorizontalList>
    );
  }

  return (
    <GridLayout width={width} {...rest}>
      {children}
    </GridLayout>
  );
};

Layout.defaultProps = {
  type: "grid",
};
