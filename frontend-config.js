import { DamlLfValue } from '@da/ui-core';

export const version = {
  schema: 'navigator-config',
  major: 2,
  minor: 0,
};

export const customViews = (userId, party, role) => ({
  edr_pending: {
    type: "table-view",
    title: "Pending EDRs",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "EdrPending:EdrPending",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.alreadySigned",
        title: "Already Signed",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).alreadySigned
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      }
    ]
  },
  edr: {
    type: "table-view",
    title: "EDRs",
    source: {
      type: "contracts",
      filter: [
        {
          field: "argument.owner",
          value: party,
        },
        {
          field: "template.id",
          value: "Edr:Edr",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.auditors",
        title: "Auditors",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).auditors
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.custodian",
        title: "Custodian",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).custodian
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.owner",
        title: "Owner",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).owner
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.reporter",
        title: "Reporter",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).reporter
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      }
    ]
  },
  edr_record: {
    type: "table-view",
    title: "EDR Records",
    source: {
      type: "contracts",
      filter: [
        {
          field: "template.id",
          value: "Edr:EdrRecord",
        }
      ],
      search: "",
      sort: [
        {
          field: "id",
          direction: "ASCENDING"
        }
      ]
    },
    columns: [
      {
        key: "id",
        title: "Contract ID",
        createCell: ({rowData}) => ({
          type: "text",
          value: rowData.id
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.edr.reporter",
        title: "Reporter",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).edr.reporter
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      {
        key: "argument.edr.custodian",
        title: "Custodian",
        createCell: ({rowData}) => ({
          type: "text",
          value: DamlLfValue.toJSON(rowData.argument).edr.custodian
        }),
        sortable: true,
        width: 80,
        weight: 0,
        alignment: "left"
      },
      // {
      //   key: "argument.record.r_checkpoints.c_index",
      //   title: "Latest Index",
      //   createCell: ({rowData}) => ({
      //     type: "text",
      //     value: DamlLfValue.toJSON(rowData.argument).record.r_checkpoints[0].c_index
      //   }),
      //   sortable: true,
      //   width: 80,
      //   weight: 0,
      //   alignment: "left"
      // }
    ]
  },
})
