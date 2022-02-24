import React, {useRef, useEffect, useCallback, useState} from "react";
// import styled, {css} from "styled-components";
import "./css/phone.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


export default function dia() {
  

  return (
  <>
    <div className="wap">
      <dialog className="dia">
      <h3 className="show">10件選択中</h3>
        <div style={{ height: 500, width: '100%' }}>
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
};