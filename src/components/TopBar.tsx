import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"

interface ChildProps {
    clearTable: () => void;
    startModal: () => void;
  }

const TopBar: React.FC<ChildProps> = ({clearTable, startModal}) => {

    return (
        <div className='item-block-top'>
            <h2>Дом 1</h2>
                <div className="input-container">
                    <button className="clear-button" onClick={clearTable}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button
                        className="add-button"
                        onClick={startModal}
                    >
                        +
                    </button>{" "}
            </div>
        </div>
    )
}

export default TopBar