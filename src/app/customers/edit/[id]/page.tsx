"use client";

import { Edit, useForm, useSelect } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Form, Input, Select } from "antd";

export default function CustomerEdit() {
  const { formProps, saveButtonProps } = useForm({});
  const { queryResult } = useShow({});
  const { data } = queryResult;

  const record = data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Address"}
          name="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label={"Phone"}
          name={"phone"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" maxLength={12} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
