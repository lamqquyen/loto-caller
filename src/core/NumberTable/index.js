import { useState, useEffect } from "react";
import styled from "styled-components";
import Number from "../../components/Number";
import { connect } from "react-redux";
import { call, reset } from "../../actions/number";
import propTypes from "prop-types";

const Wrapper = styled.div`
  flex: 3;
  width: 100%;
  text-align: center;
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 0 8px;
  height: 100%;
`;

const Row = styled.tr``;

const NumberTable = ({ number }) => {
  const renderNumber = () => {
    const rows = [];
    let row = [];
    let count = 1;
    for (const [key, value] of Object.entries(number.numbers)) {
      row.push(
        <Number
          key={key}
          number={key}
          currentNumber={number.currentNumber}
          isCalled={value.isCalled}
        />
      );

      if (count % 10 === 0) {
        rows.push(row);
        row = [];
      }

      count++;
    }

    return rows.map((row) => <Row>{row}</Row>);
  };

  return (
    <Wrapper>
      <Table>{renderNumber()}</Table>
    </Wrapper>
  );
};

NumberTable.propTypes = {
  number: propTypes.object.isRequired,
  call: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default connect(({ number }) => ({ number }), { call, reset })(
  NumberTable
);
