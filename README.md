# new h5

## 支持

基于 parcel 搭建，支持跨域、prefixer、scss、axios、环境区分

## 开发

开发默认端口为 1234，访问路径http://localhost:1234/demo/index.html

开发目录未 src，开发时须严格按照以下形式编写

> src
>
> > project name
> >
> > > index.html

> > > css

> > > js

> > > images

## 开发入口位于

parcel.dev.js，可根据需求配置，如修改跨域代理

## 环境

env.development、env.test、 env.production 分别对应开发、测试、生产环境，变量形为 NAME='吃了葡萄不吐葡萄皮' -> process.env.NAME='吃了葡萄不吐葡萄皮'
