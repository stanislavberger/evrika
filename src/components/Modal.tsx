import '../app.scss'
import { useState } from 'react';
type SelectEntranceHandler = React.ChangeEventHandler<HTMLSelectElement>;
type SelectAppartHandler = React.ChangeEventHandler<HTMLSelectElement>;


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectEntrance: SelectEntranceHandler;
    col1: string;
    col2: string;
    addElement: { entrance: string[]; appart: string[] };
    entrArray: { value: string; label: string }[];
    appartArray: { value: string; label: string }[];
    addRow: () => void;
}

export const Modal: React.FC<ModalProps> = ({isOpen, onClose, selectEntrance, col1, col2, entrArray, appartArray, addElement, addRow }) => {
    
    const [selectedEntrances, setSelectedEntrances] = useState<string[]>(addElement.entrance || []);
    const [selectedApparts, setSelectedApparts] = useState<string[]>(addElement.appart || []);
    const [firstSelect, setFirstSelect] = useState<boolean>(false);


    const handleSelectChange: SelectEntranceHandler = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedEntrances(selectedOptions);
        selectEntrance(event); // Assuming selectEntrance handles selectedEntrances
        console.log(selectedOptions);
        setFirstSelect(true);
    };
    
    const handleAppartSelectChange: SelectAppartHandler = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedApparts(selectedOptions);
        // Call selectedApparts(event) if it's a function that needs to handle selectedApparts
        console.log(selectedOptions);
    };
    
    return (
        <>
        {isOpen && (
            <div className="modal">
            <div className="modal-block">
                <div className="modal-content" id='modal1'>
                    <div className="modal-top">
                        <div>{col1}</div>
                        <span
                            className="close"
                            onClick={() => onClose()}
                            >
                            &times;
                        </span>
                    </div>
                    
                    <select
                        className="select"
                        name="entr-select"
                        value={selectedEntrances}
                        size={entrArray.length + 1}
                        onChange={handleSelectChange}
                        multiple
                    >
                        {entrArray.map((entrance, index) => (
                            <option
                                key={index}
                                value={entrance.value}
                                className='option'
                            >
                                {entrance.label}
                            </option>
                            ))
                        }
                    </select>
                    </div>
                    
                    { firstSelect && (
                        <div className="modal-content" id='modal2'>
                            <div className="modal-top">
                                <div>{col2}</div>
                                <span
                                    className="close"
                                    onClick={() => onClose()}
                                    >
                                    &times;
                                </span>
                            </div>
                            
                            <select
                                className="select"
                                name="appart-select"
                                value={selectedApparts}
                                size={appartArray.length + 1}
                                onChange={handleAppartSelectChange}
                                multiple
                            >
                                {appartArray.map((appart, index) => (
                                    <option
                                        key={index}
                                        value={appart.value}
                                        className='option'
                                    >
                                        {appart.label}
                                    </option>
                                    ))
                                }
                            </select>
                            <div className='modal-btn'>
                                <button className='submit' onClick={() => addRow}>Добавить</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )}
        </>
    )
}