# EDGEPATH 365

STM32 × 嵌入式 Linux × 机器视觉的 365 天学习站，配套文档：

`../embedded-linux-vision-365/嵌入式Linux与机器视觉_365天零基础学习路线_C++优化版.docx`

## 打开

**公网 HTTPS（无需 VPN，iPad 推荐）：**

<https://chong-netizen.github.io/edgepath365/>

电脑本机预览：<http://127.0.0.1:8125/>

iPad / 手机（同一 Wi-Fi，可选）：<http://10.43.206.58:8125/>

> 公网地址由 GitHub Pages 提供，已实测在当前网络返回 `text/html` 并可注册 Service Worker。局域网 IP 会变化，以 `node server.mjs` 打印的 `LAN:` 为准。

重新启动本地服务：

```bash
node server.mjs
```

或双击 `start.bat`。默认端口 `8125`，可用 `PORT=8126 node server.mjs` 修改。服务默认绑定 `0.0.0.0`，同一局域网设备可以访问。

### 本地 iPad 打不开时

1. 确认 iPad 和电脑连的是同一个 Wi-Fi，且不是“访客网络”。
2. 校园网 / 公司网可能开启 **AP 隔离**，设备之间不能互访；改用上面的 GitHub Pages 公网地址。
3. Windows 防火墙需要允许 `node.exe` 的“专用/公用网络”入站；第一次启动时如果弹出提示，选择“允许访问”。
4. 电脑不能休眠；保持 `node server.mjs` 窗口运行。

## PWA：装到 iPad 主屏幕，离线打开

网站已经部署到 GitHub Pages，并带 `manifest.webmanifest`、Service Worker 和图标，是一个可安装的 **PWA**。

- 公网地址：<https://chong-netizen.github.io/edgepath365/>
- 安装：iPad Safari 打开 → 分享 → **添加到主屏幕**
- 安装后：首次在线加载会缓存全部 HTML/CSS/JS/图片；之后不联网也能打开
- 已实测：Service Worker 作用域 `/edgepath365/`，离线可进入 Capstone 实验室、加载拆解图、运行 7 段管线
- 更新：修改内容后把 `sw.js` 里的 `edgepath365-v3` 改成 `v3`，重新 push 到 GitHub

> PWA 不是原生 App：不能后台运行、不能访问全部系统能力；iOS 可能在长期不用后清理缓存。要“永远离线、绝不依赖缓存”，才需要原生 App，而原生 App 需要 Mac + Xcode 或签名分发。

## 页面

- **路线**：七阶段、52 周、Gate 与“单片机优先”的路线
- **课程**：每周 7 天任务，逐日打勾；上一课 / 下一课、键盘 `←` `→`
- **实验室**：8 个项目拆解，机器图热点、步骤、交付清单、管线模拟
- **Capstone 调参台**：分辨率 / FP16/INT8 / ONNX/NCNN/TensorRT / ROI，实时显示延迟、FPS、精度、内存示意
- **机器**：SBC、相机、边缘盒子、调试工作台 + 新的七模块拆解图
- **手册**：单片机优先策略、每日节奏、Gate 0 + 3 个正式 Gate、硬件与资源
- **日志**：进度、阶段完成度、周复盘笔记

## 进度

所有进度保存在浏览器 `localStorage`，键名 `edgepath365.progress.v3`，不需要账号或后端。

## 结构

```text
index.html
styles.css
src/app.js       # 路由、课程、实验室、模拟、进度
src/data.js      # 365 天课程数据（由 DOCX 数据导出）
src/labs.js      # 8 个项目的拆解与模拟参数
assets/          # 机器照片、爆炸图、favicon
server.mjs       # 零依赖静态服务器
start.bat
docs/            # 页面截图（开发预览）
```

## 说明

- 没有构建步骤、没有 npm 依赖、没有 CDN。
- 建议 Chrome / Edge；项目调参台是示意模型，真实指标需在目标板子上 benchmark。
- 机器图片用于学习与项目叙事；设备外观为视觉素材，不代表真实产品型号。


