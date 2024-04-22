import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Cell,
  Row,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import "../app.scss";

const nodes = [
  {
    entrances: "Подъезд 1",
    apparts: "Квартира 2",
  },
];

interface Row {
  entrances: string[];
  apparts: string[];
}

interface TableProps {
  col1: string;
  col2: string;
  tableData: Row[];
}

const MainTable: React.FC<TableProps> = ({ col1, col2, tableData }) => {

  const [newTableData, setNewTableData] = useState<Row[]>([]);

  const handleModalSelect = (selectedItems: string[]) => {
    setNewTableData(selectedItems);
  };
  
  const theme = useTheme(getTheme());
  const data = { tableData };
  console.log(tableData);

  return (
    <>
      <Table data={data} theme={theme}>
        {(data) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Номер подъезда</HeaderCell>
                <HeaderCell>Номер Квартиры</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {data.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.entrances}</Cell>
                  <Cell>{item.apparts}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
};

export default MainTable;
