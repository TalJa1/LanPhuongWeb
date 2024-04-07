"use client";

import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function ProductCreate() {
  const { formProps, saveButtonProps } = useForm({});

  // const { selectProps: categorySelectProps } = useSelect({
  //   resource: "categories",
  // });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Tên"}
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
          label={"Mô tả"}
          name={["description"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={3}/>
        </Form.Item>
        <Form.Item
          label={"Giá"}
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label={"Số lượng"}
          name="quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label={"Ảnh"}
          name={["image_path"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            defaultValue={
              "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg"
            }
          />
        </Form.Item>
      </Form>
    </Create>
  );
}
