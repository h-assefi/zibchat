import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Checkbox, Typography } from "@mui/material";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const ZGrid = ({
  checkbox,
  children,
  headerFontSize,
  headerBold,
  headerAlign,
  maxHeight,
  onSelect,
  page,
  rowsPerPage,
  rtl,
  source,
  stickyHeader,
}) => {
  const [gridColumns, setGridColumns] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const toLocaleString = (value) => value.toLocaleString("en-US");
  React.useEffect(() => {
    let columns = [];
    let aggregates = [];
    //--------------- Set Grid Columns & Aggregates ----------------------
    if (children) {
      React.Children.toArray(children).map((child) => {
        if (child.type === ZGridColumns) {
          const tempGridColumns = React.Children.toArray(child.props.children);
          if (tempGridColumns) {
            columns = tempGridColumns.map((column, index) => {
              if (column.type === ZGridColumn) {
                return {
                  id: column.props.field,
                  label: column.props.headerText,
                  minWidth: column.props.width ?? 150,
                  align: column.props.align ?? "right",
                  format: column.props.format ?? toLocaleString,
                };
              }
              return null;
            });
            setGridColumns(columns);
          }
        }
        return null;
      });
    }
  }, []);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        sx={{ maxHeight: maxHeight ?? 440, direction: rtl ? "rtl" : "ltr" }}
      >
        <Table stickyHeader={stickyHeader}>
          <TableHead>
            <TableRow>
              {checkbox && (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    // indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    // onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
              )}
              {[...gridColumns].map((column) => (
                <TableCell
                  key={column.id}
                  align={headerAlign ?? "center"}
                  style={{ minWidth: column.minWidth }}
                >
                  <Typography
                    fontSize={headerFontSize ?? 15}
                    fontWeight={headerBold ?? "bold"}
                  >
                    {column.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {source
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onSelect={onSelect}
                  >
                    {gridColumns.map((column, index) => {
                      const value = row[column.id];
                      if (index === 0 && checkbox) {
                        return (
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.textAlign}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default ZGrid;

export const ZGridColumns = () => {
  return <></>;
};

export const ZGridColumn = ({ field, width, textAlign, headerText }) => {
  return <></>;
};
