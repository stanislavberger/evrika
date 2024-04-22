import React from 'react'
import '../app.scss'
import { useState } from 'react'
import TopBar from './TopBar';
import { Modal } from './Modal';
import { Row, SelectedData } from '../features/Types';
import MainTable from './MainTable';


/* const entrances: {value: string; label: string}[] = [
  { value: "Подъезд 1", label: "Подъезд 1" },
  { value: "Подъезд 2", label: "Подъезд 2" },
  { value: "Подъезд 3", label: "Подъезд 3" },
  { value: "Подъезд 4", label: "Подъезд 4" },
  { value: "Подъезд 5", label: "Подъезд 5" },
  { value: "Подъезд 6", label: "Подъезд 6" },
];
*/


const entrances: {value: string; label: string}[] =[];
const apparts: {value: string; label: string}[] = [];

for (let i = 1; i <= 6; i++) {
  entrances.push({
    value: `Подъезд ${i}`,
    label: `Подъезд ${i}`
  })
}

for (let i = 1; i <= 6; i++) {
  apparts.push({
    value: `Квартира ${i}`,
    label: `Квартира ${i}`
  })
}

const entranceDef: string = 'Номер подъезда';
const appartDef: string = 'Номер квартиры';

export const Item: React.FC = () => {

    const [tableData, setTableData] = useState<Row[]>([]);
    const [newRow, setNewRow] = useState<Row>({entrances: [], apparts: []});
    const [selectedEntrance, setSelectedEntrance] = useState<string>('');
    const [selectedAppart, setSelectedAppart] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    //open Modal
    const startModal = () => {
      setShowModal(true);
    }
    //close Modal
    const closeModal = () => {
      setShowModal(false);
    }

    //Select Entrance
    const handleEntrances = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedEntrance(e.target.value);
      setNewRow((prevState) => ({
        ...prevState,
        entrances: [e.target.value],
        apparts: [],
      }))
    }

    //Add a new Row
    const addRow = (selectedData: Row[]) => {
      setTableData(selectedData);
      /*setNewRow({
        entrances: [],
        apparts: [],
      });
      setSelectedEntrance('');
      setSelectedAppart('');*/
      setShowModal(false);
    }

    //Reset Table
    const clearTable = () => {
      setTableData([]);
    }

  return (
    <div className='item-block'>
      <TopBar clearTable={clearTable} startModal={startModal} />
      <MainTable col1={entranceDef} col2={appartDef} tableData={tableData} />
      <Modal col1={entranceDef} col2={appartDef} isOpen={showModal} onClose={closeModal} selectEntrance={handleEntrances} entrArray={entrances} appartArray={apparts} addRow={addRow} addElement={newRow}/>
    </div>
  )
}
