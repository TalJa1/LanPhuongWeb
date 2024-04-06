"use client";

import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function ProductShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"Mã Số"}</Title>
      <NumberField value={record?.product_id ?? ""} />
      <Title level={5}>{"Tên"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"Giá"}</Title>
      <TextField value={record?.price} />
      <Title level={5}>{"Mô tả"}</Title>
      <TextField value={record?.description} />
      <Title level={5}>{"Số lượng còn lại"}</Title>
      <TextField value={record?.quantity} />
      <Title level={5}>{"Ảnh"}</Title>
      <img src={record?.image_path} alt="Product" style={{ maxWidth: 200 }} />
    </Show>
  );
}
