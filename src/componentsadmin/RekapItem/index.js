import React from "react";
import Table from "react-bootstrap/Table";

const TabelRekap = ({ title, description, price }) => {
  return (
    <div>
      <div className="row pt-3">
        <Table striped>
          <thead>
            <tr>
              <th>Product</th>
              <th>Harga</th>
              <th>Terjual</th>
              <th>Pendapatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{title}</strong>
                <br></br>
                {description}
              </td>
              <td>${price}</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TabelRekap;
