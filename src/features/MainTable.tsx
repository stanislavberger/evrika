const BASELINE_THEME = {
    Table: `
        width: 100%;
    `,
    Header: '',
    Body: '',
    BaseRow: `
      font-size: 16px;
    `,
    HeaderRow: `
      color: ${COLORS.FONT_PRIMARY};
      boder-radius: 15px 15px 0 0;
    `,
    Row: `
      color: #000;
      border-color: #000;
      boder: 1px solid;
  
      &.disabled {
        color: ${COLORS.FONT_DISABLED};
      }
  
      &:hover {
        color: ${COLORS.FONT_PRIMARY};
      }
  
      &:not(:last-of-type) > .td {
        border-bottom: 1px solid ${COLORS.BORDER};
      }
    `,
    BaseCell: `
      padding: 16px, 32px, 16px, 32px;
      border: 0px, 1px, 1px, 0px;
      color: #000;
    `,
    HeaderCell: `
      font-weight: bold;
      border-bottom: 1px solid ${COLORS.BORDER};
  
      .resizer-handle {
        background-color: ${COLORS.BORDER};
      }
  
      svg,
      path {
        fill: currentColor;
      }
    `,
    Cell: `
      &:focus {
        outline: dotted;
        outline-width: 1px;
        outline-offset: -1px;
      }
    `,
  };