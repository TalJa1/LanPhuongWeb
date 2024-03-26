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

export default function CustomerShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"CustomerID"}</Title>
      <NumberField value={record?.customer_id ?? ""} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{"Address"}</Title>
      <TextField value={record?.address} />
      <Title level={5}>{"Phone"}</Title>
      <TextField value={record?.address} />
    </Show>
  );
}
