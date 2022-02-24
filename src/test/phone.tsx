import React, {useRef, useEffect, useCallback, useState} from "react";
// import styled, {css} from "styled-components";
import "./css/phone.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Dia from "./dia";
export default function Phone() {
  // const ref: React.MutableRefObject<HTMLElement | null> = useRef(null);

  // console.log("mount", ref.current);

  // useEffect(() => {
  // console.log("mounted", ref.current);

  // }, []);

  // const showModal = useCallback(() => {
  //   if (ref.current) {
  //     ref.current.showModal();
  //   }
  // }, []);

  // const closeModal = useCallback(() => {
  //   if (ref.current) {
  //     ref.current.close();
  //   }
  // }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("hi");
    
			isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (

    <>
    <div id="dialog" className="wap">
      <div className="div">
      <Button onClick={handleClick} className="but" variant="contained">ダイアログの表示</Button>
    <Link to="/phone">
      <Button className="but" variant="contained">表示件数の切り替え</Button>
    </Link>
      </div>
    {isOpen && <Dia />}
      <dialog className="dia" open>
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
}


// const phone: React.FC = () => {


//     return (
//         <>
//           <div className="wap">
//             <dialog open>
//               <p>hi</p>
//             </dialog>
//           </div>
//         </>
//     )
// };


// const WapDiv = styled.div `
//   width: 375px;
//   height: 100%;
//   background-color: #
  
    
// `;


