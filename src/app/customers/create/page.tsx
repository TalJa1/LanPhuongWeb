"use client";

import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function CustomerCreate() {
  const { formProps, saveButtonProps } = useForm({});

  // const { selectProps: categorySelectProps } = useSelect({
  //   resource: "categories",
  // });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
          name={["phone"]}
          // initialValue={"draft"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" maxLength={12}/>
        </Form.Item>
      </Form>
    </Create>
  );
}
