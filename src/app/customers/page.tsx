"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Input, Space, Table } from "antd";


export default function CustomerList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="customer_id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="address" title={"Address"} />
        <Table.Column dataIndex="phone" title={"Phone"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.customer_id}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.customer_id}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.customer_id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
