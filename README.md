## 定制化开发

基于提升 *开发体验* 和 *用户体验* 的目标，我们经历了组件化、工程化、智能化等一系列方案探究，旨在创建一套 *高性能、易拓展、易升级、易开发、安全可靠* 的专业化定制开发解决方案。

### 工程化

项目工程集成了eslint代码规范、jest单元测试、prettier代码美化、husky代码提交钩子等。还提供自定义congfigs配置，便于适应各种场景需求。

主要使用nodejs + webpack。提供开发环境热更新、生产环境打包，proxy代理，代码分割、压缩、树摇、按需加载等配置。也提供了monorepo管理，多个项目自由切换。

### 登录注册

提供了用户注册、登录、找回密码、第三方（GitHub）登录。

![login](./login.png)

![signup](./signup.png)

![oauth](./oauth.png)

### 框架自定义

提供了一套模版示例，可根据需求设计不同框架。

![layout](./1.png)

![layout](./3.png)

### 自定义主题

框架提供了几套主题模版可供参考使用，也提供了自定义设计主题，通过颜色、大小、布局的设计来满足各个需求。可自由切换横纵菜单栏，或者同时使用两种菜单。

![layout](./7.png)

![layout](./8.png)

### 路由管理

提供了一套简单的json格式路由配置，易于开发和维护。可直接放后台存储，便于权限控制。如果在前端写路由，后台只需提供权限key即可做权限控制。

![layout](./2.png)

![layout](./4.png)

### 多语言处理（i18n）

提供了i18n配置，通过不同语言key值去加载对应的语言包。语言包可放服务端，也可将配置文件存在本地。


### 业务组件设计

根据所在领域的产品或项目，可自行提取通用组件，便于维护和快速开发。

#### form表单

![layout](./5.png)

#### table表格

#### tree

![layout](./6.png)

#### charts图表

图表展示可根据需求自行设计，数据可在表格或不同charts类型间自由转换。

![chart](./c1.png)

![chart](./c2.png)

![chart](./c3.png)

![chart](./c4.png)

### 页面设计器

#### 工程化配置设计

![dir](./dir.png)

在配置文件configs里面进行配置，如：basepath配置、代理配置等。

#### layout自定义设计

根据设计图自行设计即可。

#### 路由及权限设计

在router文件里配置路由或存放到数据库配置。

#### 页面设计

- 用户管理
- 项目管理
- 路由设计
- 页面设计

我们根据登录的用户，可新建项目，然后可在项目上新建路由，根据路由，我们可以设计对应的页面。

一般页面包含布局、组件、事件、接口等。

![page](./page.png)

### 通用工具

#### utils库

包含基础utils和业务utils。

[utils](https://github.com/ihuxy/doc/blob/master/utils/utils.md)

#### hooks库

包含基础hooks和业务hooks。

[use](https://github.com/ihuxy/doc/tree/master/use)

#### components库

包含基础components和业务components。

[components](https://github.com/ahyiru/phoenix-boilerplate)

*************************************************************

我们专注于web开发，致力于服务界面开发者和使用者，提供易开发、易拓展、易升级的web开发解决方案。

*专业定制、快速开发、安全可靠。* 欢迎关注我们。

![wx](./wx.png)













