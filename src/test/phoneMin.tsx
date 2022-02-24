import React from "react";
// import styled, {css} from "styled-components";
import "./css/phone.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

export default function PhoneMin() {
  return (

    <>
    <div className="wap">
    <Button className="but" variant="contained">ダイアログの表示</Button>
    <Link to="/">
      <Button className="but" variant="contained">表示件数の切り替え</Button>
    </Link>
      <dialog className="dia2" open>
      <h3 className="show">10件選択中</h3>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            columns={[{ field: 'PartNumber' }, { field: 'QO' }]}
            rows={[
             {
               id: 1,
               PartNumber: '@AMS3195H 0.062"Tx36"x36“',
               QO: 'XX123456',
              },
              {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },
               {
                id: 1,
                PartNumber: '@AMS3195H 0.062"Tx36"x36“',
                QO: 'XX123456',
               },

           ]}/>
        </div> 
        <div className="button">
            <div className="b">
                <Button variant="contained" color="error">
                    削除
                </Button>
            </div>
            <div className="bb">
                <Button variant="contained" color="success">
                    ダウンロード
                </Button>
            </div>
        </div>
      </dialog>
    </div>
  </>
  );
}
