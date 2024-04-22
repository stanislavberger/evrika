import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import '../app.scss'
import { Row } from '../features/Types';

const nodes = [
    {
      id: '0',
      entrance_number: '1',
      appart_number: '2'
    },
  ];

interface TableProps {
    col1: string;
    col2: string;
    tableData: Row[];
}

const Table: React.FC<TableProps> = ({col1, col2, tableData}) => {
    const theme = useTheme(getTheme());
    console.log(tableData)

    const COLUMNS = [
        { label: `${col1}`, renderCell: (item: Row) => item.entrances },
        { label: `${col2}`, renderCell: (item: Row) => item.apparts },
      ];

    return <CompactTable columns={COLUMNS} data={tableData} theme={theme} />;
}

export default Table;