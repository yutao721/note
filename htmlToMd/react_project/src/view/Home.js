import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import MarkdownEditor from '@uiw/react-markdown-editor';
import req from '../utils/req';

const Home = () => {
  const [form] = Form.useForm();
  const [markdown, setMarkdown] = useState('')

  const onFinish = (values) => {
    console.log(values);
    req.post('/resolve/mark', values).then(r => {
      setMarkdown(r.data.markDown)
    }).catch(reason => {
      console.log(reason);
      alert('报错啦,打开console查看报错信息');
    });

  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          blogUrl: 'https://juejin.cn/post/6844903910977568776',
          imagePath: '/work/images/images/',
          imageUrl: 'https://gitee.com/yutao618/images/raw/master/images/',
          imageName: 'ThirdPartyImage'
        }}
        onFinish={onFinish}
      >

        <Form.Item label="文章地址" name="blogUrl" required tooltip="需要被解析的地址，目前只支持掘金">
          <Input placeholder="请输入文章地址"/>
        </Form.Item>

        <Form.Item
          label="图片前缀"
          name="imageName"
          tooltip={{
            title: '保存图片的前缀',
            icon: <InfoCircleOutlined/>
          }}
        >
          <Input placeholder="保存图片的前缀"/>
        </Form.Item>

        <Form.Item label="存图片到" name="imagePath" required tooltip="本地工作目录 例如：/work/images/images/">
          <Input placeholder="请输入存图片到哪里--[服务器存图片的目录]-可不填"/>
        </Form.Item>

        <Form.Item label="文中图片链接" name="imageUrl" required tooltip="生成的markDown需要替换的图床地址，可以是自己的服务器也可以是千牛云，阿里云">
          <Input placeholder="请输入解析后文章中图片的链接--[外网,本地服务器的ip或域名]-可不填"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">解析</Button>
          <Button>取消</Button>
        </Form.Item>
      </Form>

      <MarkdownEditor
        visible={true}
        style={{
          height: '500px',
          margin: '200px 0'
        }}
        value={markdown}
      />
    </>
  );
};
export default Home
