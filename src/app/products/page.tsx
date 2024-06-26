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

export default function ProductList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="product_id" title={"ID"} />
        <Table.Column dataIndex="name" title={"Name"} />
        <Table.Column dataIndex="price" title={"Price"} />
        <Table.Column dataIndex="quantity" title={"Quantity"} />
        <Table.Column
          title={"Image"}
          dataIndex="image_path"
          render={(imagePath) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagePath} alt="Product" style={{ maxWidth: 100 }} />
          )}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.product_id}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.product_id}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.product_id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
