import { Paper } from "@mui/material";
import * as React from "react";
import ZButton from "src/base/coreServices/components/button/ZButton";
import ZIconButton from "src/base/coreServices/components/button/ZIconButton";
import ZSpacer from "src/base/coreServices/components/container/ZSpacer";
import ZIcon, {
  ZIconColor,
  ZIcons,
} from "src/base/coreServices/components/icon/ZIcon";
import { DataGrid } from "@mui/x-data-grid";
import ZSwitch from "src/base/coreServices/components/switch/ZSwitch";
import NewDepartmentGroup from "./NewDepartmentGroup";
import { GRID_DEFAULT_LOCALE_TEXT } from "src/base/coreServices/components/grid/GridLocaleText";
import ZMenu from "src/base/coreServices/components/menu/ZMenu";
import { showConfirm } from "src/base/coreServices/components/alert/ZConfirm";

const DepartmentGroup = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [newDepGroup, setNewDepGroup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentItem, setCurrentItem] = React.useState(null);

  const handleOpenMenu = (event, data) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(data);
    console.log(data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onItemClick = (event, id) => {
    setAnchorEl(null);
    console.log(currentItem);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "title", headerName: "عنوان گروه دپارتمان", width: 170 },
    {
      field: "active",
      headerName: "فعال",
      width: 100,
      type: "boolean",
      renderCell: (params) => (
        <strong>
          <ZSwitch
            checked={params.row.active}
            onChange={() => changeDepartmentGroupStatus(params.row.id)}
          ></ZSwitch>
        </strong>
      ),
    },
    {
      field: "tools",
      headerName: "گزینهءء ها",
      width: 100,
      renderCell: (params) => (
        <>
          <ZIconButton onClick={(event) => handleOpenMenu(event, params.row)}>
            <ZIcon icon={ZIcons.moreVerticalIcon} />
          </ZIconButton>
        </>
      ),
    },
  ];

  const [rows, setRows] = React.useState([
    { id: 1, title: "حسابداری و مالی", active: true },
    { id: 2, title: "پشتیبانی فنی", active: true },
    { id: 3, title: "فروش", active: false },
  ]);

  const changeDepartmentGroupStatus = (id) => {
    let newRows = [...rows];
    let currentStatus = newRows[newRows.findIndex((x) => x.id === id)].active;
    console.log(currentStatus);
    if (currentStatus === true) {
      showConfirm(
        "آیا اطمینان دارید؟",
        "باغیر فعال کردن گروه دپارتمان کلیه اشخاص و فعالیت ها غیرفعال خواد شد",
        null,
        "غیرفعال میکنم",
        "انصراف"
      ).then((result) => {
        if (result.isConfirmed) {
          newRows[newRows.findIndex((x) => x.id === id)].active =
            !currentStatus;
          setRows([...newRows]);
        }
      });
    } else {
      newRows[newRows.findIndex((x) => x.id === id)].active = !currentStatus;
      setRows([...newRows]);
    }
  };

  const newGroupOnClose = (data) => {
    setNewDepGroup(false);
    if (data && data.title) {
      setRows([...rows, { id: 4, title: data.title, active: true }]);
    }
  };

  return (
    <div>
      <Paper>
        <ZButton onClick={() => setNewDepGroup(true)}>
          اضافهءء کردن گروه دپارتمان جدید
          <ZIcon icon={ZIcons.add}></ZIcon>
        </ZButton>
      </Paper>
      <ZSpacer />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          localeText={GRID_DEFAULT_LOCALE_TEXT}
        />
      </div>
      <ZMenu
        options={[
          {
            id: "delete",
            icon: (
              <ZIcon icon={ZIcons.deleteOutline} color={ZIconColor.error} />
            ),
            text: "حذف",
          },
        ]}
        anchorEl={anchorEl}
        onClose={handleClose}
        onItemClick={onItemClick}
      />

      {newDepGroup && <NewDepartmentGroup onClose={newGroupOnClose} />}
    </div>
  );
};

export default DepartmentGroup;
