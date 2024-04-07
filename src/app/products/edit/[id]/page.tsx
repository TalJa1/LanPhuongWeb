/* eslint-disable @next/next/no-img-element */
"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Form, Input, Select, Upload, message } from "antd";
import { useState } from "react";

export default function CustomerEdit() {
  const { formProps, saveButtonProps } = useForm({});
  const { queryResult } = useShow({});
  const { data } = queryResult;

  const record = data?.data;

  const [imageUrl, setImageUrl] = useState(null); // State to store uploaded image URL

  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      // Update imageUrl state with the URL of the uploaded image
      setImageUrl(info.file.response.url);
    }
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label={"Giá"}
          name="price"
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
          name={"description"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label={"Số lượng còn lại"}
          name="quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Ảnh"}
          name="image_path"
          rules={[
            {
              required: true,
              message: "Please upload an image",
            },
          ]}
        >
          <img
            src={record?.image_path}
            alt="Product"
            style={{ maxWidth: 200 }}
          />
          <Upload
            name="image"
            listType="picture"
            beforeUpload={(file) => {
              const isImage = file.type.startsWith("image/");
              if (!isImage) {
                message.error("You can only upload image files!");
                return false;
              }
              // Add any additional validation logic here, if needed
              return true;
            }}
          >
            <div
              style={{
                marginLeft: "20%",
              }}
            >
              <UploadOutlined /> Bấm vào để đổi ảnh
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Edit>
  );
}
