import { Paper } from "@mui/material";
import * as React from "react";
import ZButton from "src/base/coreServices/components/button/ZButton";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZIcon, { ZIcons } from "src/base/coreServices/components/icon/ZIcon";
import { DataGrid } from "@mui/x-data-grid";
import ZSwitch from "src/base/coreServices/components/switch/ZSwitch";
import NewDepartment from "./NewDepartment";
import { GRID_DEFAULT_LOCALE_TEXT } from "src/base/coreServices/components/grid/GridLocaleText";
import ZSimpleDropdown from "src/base/coreServices/components/dropdown/ZSimpleDropdown";

const Departments = () => {
  const groups = [
    { id: 1, title: "گروه شماره 1" },
    { id: 2, title: "گروه شماره 2" },
  ];
  const [allRows, setAllRows] = React.useState([
    { id: 1, title: "گوگل", departmentId: 1, active: true },
    { id: 2, title: "زیب شاپ", departmentId: 1, active: true },
    { id: 3, title: "یارپک", departmentId: 2, active: false },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [newDepartment, setNewDepartment] = React.useState(false);
  const [departmentGroupId, setDepartmentGroupId] = React.useState("");

  React.useEffect(() => {
    getData();
  }, [departmentGroupId]);

  const getData = () => {
    if (departmentGroupId) {
      setRows(allRows.filter((x) => x.departmentId === departmentGroupId));
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { field: "title", headerName: "عنوان دپارتمان", width: 130 },
    {
      field: "active",
      headerName: "فعال",
      width: 100,
      type: "boolean",
      renderCell: (params) => (
        <strong>
          <ZSwitch
            checked={params.row.active}
            onChange={() => changeDepartmentStatus(params.row.id)}
          ></ZSwitch>
        </strong>
      ),
    },
    {
      field: "tools",
      headerName: "گزینهءء ها",
      width: 100,
      renderCell: (params) => (
        <ZIconButton
          onChange={() => {
            console.log(params);
          }}
        >
          <ZIcon icon={ZIcons.moreVerticalIcon} />
        </ZIconButton>
      ),
    },
  ];

  const [rows, setRows] = React.useState([]);

  const changeDepartmentStatus = (id) => {
    debugger;
    let newRows = [...rows];
    let currentStatus = newRows[newRows.findIndex((x) => x.id === id)].active;
    newRows[newRows.findIndex((x) => x.id === id)].active = !currentStatus;
    setRows();
    setRows([...newRows]);
  };

  const newAppOnClose = (data) => {
    setNewDepartment(false);
    if (data && data.title) {
      setAllRows([
        ...allRows,
        {
          id: 4,
          departmentId: data.departmentId,
          title: data.title,
          active: true,
        },
      ]);
      if (data.departmentId !== departmentGroupId) {
        setDepartmentGroupId(data.departmentId);
      } else {
        getData();
      }
    }
  };

  return (
    <div>
      <Paper>
        <ZButton onClick={() => setNewDepartment(true)}>
          اضافهءء کردن دپارتمان جدید
          <ZIcon icon={ZIcons.add}></ZIcon>
        </ZButton>
      </Paper>
      <ZSpacer />
      <ZSimpleDropdown
        label="گروه دپارتمان"
        data={groups}
        value={departmentGroupId}
        onChange={(data, value) => {
          setDepartmentGroupId(value.props.value);
        }}
        textField="title"
        valueField="id"
      ></ZSimpleDropdown>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          localeText={GRID_DEFAULT_LOCALE_TEXT}
        />
      </div>

      {newDepartment && (
        <NewDepartment
          departmentGroupId={departmentGroupId}
          onClose={newAppOnClose}
        />
      )}
    </div>
  );
};

export default Departments;
