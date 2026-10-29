export const LABS = {
  p1: {
    id: "p1",
    code: "P1",
    eyebrow: "MISSION 01 / USER SPACE",
    title: "C++ Linux 系统工具箱",
    phase: "P1",
    weeks: "第 6–8 周",
    image: "assets/board.jpg",
    imageAlt: "单板计算机与 GPIO、USB、以太网接口",
    intro: "用 C++17 写一个能安装、能测试、能读 /proc 的命令行工具。它不是玩具：它是你第一次把 C 的底层和 C++ 的工程化接在一起。",
    hotspots: [
      { x: 46, y: 48, label: "ARM64 SoC", detail: "所有系统调用的起点。先确认 CPU 架构、内存和散热，再谈性能。" },
      { x: 55, y: 31, label: "GPIO Header", detail: "第 10 周接串口/传感器会用到。先确认 3.3V 与地线，不要热插拔。" },
      { x: 73, y: 56, label: "USB / Ethernet", detail: "SSH 部署、抓包、远程调试入口。先把网络和串口搞通。" },
      { x: 23, y: 63, label: "Power Input", detail: "独立 5V 供电。欠压会导致“随机重启”，不要用笔记本 USB 口硬撑。" }
    ],
    deliverables: ["sysinfo：CPU / 内存 / 磁盘 / 进程 Top5", "textstat：行 / 词 / 字符 / 最长行", "CMake + CTest + ASan/UBSan", "README：3 条命令内跑通"],
    accept: "换一台 Linux 机器，按 README 三条命令内跑通；ASan/UBSan 无报错。",
    risk: "最容易死在“链接错误”和“资源生命周期”上：先写 CMake，再写代码；先跑 sanitizer，再谈功能。",
    steps: [
      { title: "CLI 骨架", detail: "定义 sysinfo / textstat 子命令、参数解析与退出码；先跑通 --help。", time: "2 h", output: "可执行 skeleton" },
      { title: "读 /proc", detail: "用 C 的 open/read/stat 读 CPU、内存、磁盘和进程；用 RAII 包装文件描述符。", time: "4 h", output: "sysinfo v0" },
      { title: "C++ 重构", detail: "用 std::string、vector、map 组织数据；把资源包装成类；加异常边界。", time: "4 h", output: "RAII 版本" },
      { title: "测试与构建", detail: "CMake 多目标、CTest、ASan/UBSan；故意制造越界并让测试抓住。", time: "3 h", output: "CI 脚本" },
      { title: "交付", detail: "README、安装脚本、JSON 输出；在一台干净机器上复现。", time: "2 h", output: "可安装包" }
    ],
    pipeline: ["argv", "CLI", "/proc", "Model", "JSON", "README"],
    metrics: [["语言", "C++17 + POSIX C"], ["构建", "CMake"], ["验收", "ASan 0 报错"]],
    simNote: "点击「运行拆解」看一个命令行请求如何穿过 C++ 封装与 Linux 系统调用。"
  },
  p2: {
    id: "p2",
    code: "P2",
    eyebrow: "MISSION 02 / UART",
    title: "串口传感器采集器",
    phase: "P1",
    weeks: "第 9–10 周",
    image: "assets/board.jpg",
    imageAlt: "单板计算机与串口、GPIO 接线",
    intro: "从 USB-TTL 或板端 UART 读传感器，做协议解析、CRC 校验、落盘与断线重连。它训练的是“设备永远会掉线”的现实感。",
    hotspots: [
      { x: 28, y: 52, label: "UART TX/RX", detail: "TX/RX 交叉、GND 共地；115200 8N1 先看到日志。" },
      { x: 48, y: 47, label: "Sensor", detail: "先确认供电与电平；3.3V 与 5V 不要混。" },
      { x: 68, y: 59, label: "USB-TTL", detail: "调试期用它看日志；产品里可以换成板载 UART。" }
    ],
    deliverables: ["串口初始化、超时与重连", "帧头/长度/CRC 解析", "CSV 记录与日志轮转", "systemd 服务"],
    accept: "拔插串口 10 次仍能自动恢复；数据无乱序。",
    risk: "不要只测“第一次能读”。真正的验收是拔线、换口、断电、满磁盘之后还能恢复。",
    steps: [
      { title: "打开串口", detail: "termios 配置波特率、8N1、非阻塞与超时；先回显。", time: "2 h", output: "串口回环" },
      { title: "解析协议", detail: "帧头、长度、payload、CRC；用状态机处理半包与粘包。", time: "4 h", output: "parser + 单测" },
      { title: "落盘", detail: "CSV 写入、fsync、按大小轮转；磁盘满时降级而不是崩溃。", time: "3 h", output: "日志文件" },
      { title: "服务化", detail: "systemd unit、重启策略、journalctl 排错。", time: "2 h", output: "开机自启" },
      { title: "故障注入", detail: "拔插 10 次、改波特率、注入坏 CRC；记录恢复时间。", time: "2 h", output: "稳定性报告" }
    ],
    pipeline: ["UART", "Frame", "CRC", "CSV", "systemd", "Recover"],
    metrics: [["接口", "UART / USB-TTL"], ["协议", "帧头 + CRC"], ["验收", "10 次拔插"]],
    simNote: "模拟一次“半包 + CRC 错 + 拔线重连”，看数据如何被丢弃、重试、恢复。"
  },
  p3: {
    id: "p3",
    code: "P3",
    eyebrow: "MISSION 03 / CAMERA",
    title: "交叉编译相机快照服务",
    phase: "P2",
    weeks: "第 15–16 周",
    image: "assets/camera.jpg",
    imageAlt: "MIPI 相机模块与排线",
    intro: "在 x86 交叉编译 ARM 程序，部署到 Pi，开机自动抓图并保留最近 100 张。第一次把“编译产物”变成“设备行为”。",
    hotspots: [
      { x: 50, y: 46, label: "Lens / Sensor", detail: "先确认视场、曝光和最小工作距离；不是所有模糊都是对焦问题。" },
      { x: 74, y: 28, label: "MIPI Ribbon", detail: "排线方向、卡扣、静电；插反可能直接损坏。" },
      { x: 26, y: 68, label: "Mounting", detail: "四个安装孔决定光轴；先用支架固定，再调参数。" }
    ],
    deliverables: ["CMake 交叉编译配置", "V4L2 mmap 抓帧并保存 JPEG", "systemd 开机自启", "磁盘配额与日志"],
    accept: "重启板子后自动运行；SD 卡拔出再插回不崩溃。",
    risk: "“能抓一张图”不等于“能长期抓图”。要处理曝光、磁盘满、相机掉线和重启。",
    steps: [
      { title: "工具链", detail: "确认 aarch64 工具链、sysroot、动态库；交叉编译 hello 并 scp 到板端。", time: "2 h", output: "hello 跑通" },
      { title: "V4L2 取流", detail: "查询格式、申请 buffer、mmap、入队/出队；先保存 RAW。", time: "5 h", output: "单帧抓取" },
      { title: "编码与落盘", detail: "JPEG 编码、文件命名、保留最近 100 张、磁盘配额。", time: "3 h", output: "快照服务" },
      { title: "开机自启", detail: "systemd unit、依赖相机设备、失败重启、日志轮转。", time: "2 h", output: "systemd 服务" },
      { title: "稳定性", detail: "重启 20 次、拔插 SD、模拟相机掉线；记录恢复时间。", time: "2 h", output: "部署手册" }
    ],
    pipeline: ["Camera", "V4L2", "mmap", "JPEG", "systemd", "Disk"],
    metrics: [["接口", "MIPI CSI / V4L2"], ["产物", "JPEG 快照"], ["验收", "20 次重启"]],
    simNote: "运行一次抓拍管线：如果相机掉线，服务应该如何退避、重连、记录？"
  },
  p4: {
    id: "p4",
    code: "P4",
    eyebrow: "MISSION 04 / KERNEL",
    title: "GPIO 字符驱动 + 设备树",
    phase: "P2",
    weeks: "第 17–19 周",
    image: "assets/board.jpg",
    imageAlt: "单板计算机 GPIO 与调试接口",
    intro: "为按键或 LED 写字符设备驱动，通过设备树描述硬件，提供阻塞读与中断。第一次真正进入内核空间。",
    hotspots: [
      { x: 55, y: 31, label: "GPIO Pins", detail: "确认引脚复用、上下拉与电平；不要直接驱动大电流负载。" },
      { x: 32, y: 48, label: "SoC / pinctrl", detail: "设备树里的 pinctrl 决定引脚功能；先看原理图。" },
      { x: 70, y: 56, label: "UART Debug", detail: "驱动崩溃时，串口日志比 SSH 可靠。" }
    ],
    deliverables: ["DTS overlay + compatible 匹配", "file_operations + 中断 + 消抖", "用户态测试与压测脚本", "oops 日志分析"],
    accept: "insmod 后 /dev 节点出现；按下按键 1000 次无丢失、无 oops。",
    risk: "内核里没有 STL、没有异常、不能随便睡眠。把“用户态习惯”带进驱动，会炸得很安静。",
    steps: [
      { title: "看原理图", detail: "确认 GPIO 编号、复用、上下拉、按键有效电平；画一张接线表。", time: "2 h", output: "接线表" },
      { title: "Hello Driver", detail: "模块加载/卸载、printk、主次设备号；先确认 dmesg 能看到。", time: "2 h", output: "hello.ko" },
      { title: "字符设备", detail: "file_operations、open/read/write/release；用用户态程序读写。", time: "4 h", output: "/dev 节点" },
      { title: "设备树 + 中断", detail: "DTS overlay、compatible、gpio_to_irq、消抖；处理中断上下文。", time: "5 h", output: "按键中断" },
      { title: "压测", detail: "1000 次按键、并发读写、卸载重载；记录 oops 与恢复。", time: "3 h", output: "稳定性报告" }
    ],
    pipeline: ["DTS", "probe", "IRQ", "read()", "User", "dmesg"],
    metrics: [["空间", "Kernel C"], ["接口", "GPIO / IRQ"], ["验收", "1000 次按键"]],
    simNote: "模拟一次按键中断：从设备树匹配、probe、中断到用户态 read()，每一步都可能失败。"
  },
  p5: {
    id: "p5",
    code: "P5",
    eyebrow: "MISSION 05 / IMAGE",
    title: "Buildroot 摄像头镜像",
    phase: "P3",
    weeks: "第 20–24 周",
    image: "assets/bench.jpg",
    imageAlt: "嵌入式视觉工作台与摄像头、单板计算机",
    intro: "构建一个可烧录的定制镜像：网络、SSH、摄像头工具、RTSP 推流、开机自启。你交付的不是代码，是一台“能复现的设备”。",
    hotspots: [
      { x: 20, y: 42, label: "Camera", detail: "确认 V4L2 格式与曝光；先抓一张图，再谈推流。" },
      { x: 48, y: 64, label: "SBC", detail: "镜像、rootfs、网络、SSH；先能启动，再加应用。" },
      { x: 56, y: 34, label: "Host / Laptop", detail: "Buildroot 在 x86 主机交叉编译；不要在板子上编译整个系统。" },
      { x: 86, y: 53, label: "Bench Tools", detail: "万用表、示波器、逻辑分析仪：先确认电源和地线。" }
    ],
    deliverables: ["defconfig + overlay + 自定义包", "GStreamer RTSP pipeline", "烧录脚本 + 部署文档", "只读 rootfs / A-B 升级思路"],
    accept: "从空白 SD 卡开始，30 分钟内复现出可拉流设备。",
    risk: "镜像能启动不等于能交付：网络、服务、日志、升级、回滚都要在第一次演示前验证。",
    steps: [
      { title: "最小镜像", detail: "Buildroot defconfig、工具链、BusyBox、SSH；先启动并联网。", time: "4 h", output: "最小 image" },
      { title: "加包与 overlay", detail: "加入 v4l2-utils、GStreamer、自定义 app；用 overlay 放配置和 service。", time: "5 h", output: "定制 rootfs" },
      { title: "RTSP", detail: "gst-launch 推流、VLC 拉流、调延迟；记录命令与参数。", time: "4 h", output: "RTSP 流" },
      { title: "烧录与复现", detail: "从空白 SD 卡开始，按文档 30 分钟复现；记录每一步时间。", time: "3 h", output: "烧录脚本" },
      { title: "可靠性", detail: "断网、重启、磁盘满、服务崩溃；加 watchdog 与日志。", time: "3 h", output: "部署手册" }
    ],
    pipeline: ["defconfig", "rootfs", "Camera", "RTSP", "Flash", "Boot"],
    metrics: [["构建", "Buildroot"], ["流", "RTSP / H.264"], ["验收", "30 分钟复现"]],
    simNote: "模拟从空白 SD 卡到可拉流设备的 6 个阶段；任何一步失败，后面都不算完成。"
  },
  p6: {
    id: "p6",
    code: "P6",
    eyebrow: "MISSION 06 / CLASSIC CV",
    title: "工业缺陷检测 v2",
    phase: "P4",
    weeks: "第 28–30 周",
    image: "assets/camera.jpg",
    imageAlt: "工业相机镜头与检测场景",
    intro: "用经典 CV 与轻量 ML 做缺陷检测：数据标注、阈值/轮廓、指标、可视化与失败案例。先把 baseline 做扎实。",
    hotspots: [
      { x: 50, y: 44, label: "Lens", detail: "视场、工作距离、畸变；缺陷检测首先是一道光学题。" },
      { x: 28, y: 66, label: "Lighting", detail: "打光比算法更早决定上限；先固定光源与角度。" },
      { x: 72, y: 64, label: "Part", detail: "缺陷尺度决定分辨率；不要用 640 输入找 2 像素的划痕。" }
    ],
    deliverables: ["100 张以上标注数据", "阈值 / 轮廓 / 分类器 pipeline", "IoU、误检率、漏检率", "失败案例报告"],
    accept: "在同一测试集上给出可复现指标；能解释每个参数的作用。",
    risk: "只追准确率不看数据泄漏；只调阈值不看误检成本。先定义“什么算缺陷”。",
    steps: [
      { title: "定义缺陷", detail: "和“客户”写清楚缺陷类型、可接受标准、拍摄条件；做一张标注规范。", time: "2 h", output: "标注规范" },
      { title: "采集与标注", detail: "固定光源/相机/距离，采 100 张；标注缺陷区域与难例。", time: "4 h", output: "dataset v1" },
      { title: "Baseline", detail: "灰度/滤波/阈值/形态学/轮廓；输出 IoU、误检、漏检。", time: "5 h", output: "CV baseline" },
      { title: "对照", detail: "换 3 组阈值/光照/分辨率，画 PR 曲线；找失败案例。", time: "3 h", output: "对比表" },
      { title: "报告", detail: "CLI + 可视化 + README；写清适用边界与失败案例。", time: "3 h", output: "检测报告" }
    ],
    pipeline: ["Light", "Camera", "Gray", "Threshold", "Contour", "Metric"],
    metrics: [["方法", "Classic CV"], ["指标", "IoU / 漏检"], ["验收", "可复现"]],
    simNote: "模拟光照变化与阈值调整：同一个缺陷，为什么有时被检出、有时消失？"
  },
  p7: {
    id: "p7",
    code: "P7",
    eyebrow: "MISSION 07 / CNN",
    title: "CNN 图像分类器",
    phase: "P4",
    weeks: "第 31–34 周",
    image: "assets/bench.jpg",
    imageAlt: "训练与评估视觉模型的工作台",
    intro: "从零训练一个 CNN，再用迁移学习提升；完成实验记录、模型卡和错误分析。不是“跑通 notebook”，而是能解释模型。",
    hotspots: [
      { x: 55, y: 36, label: "Training UI", detail: "看损失、验证曲线、学习率；不要只看最后一行 accuracy。" },
      { x: 49, y: 65, label: "Dataset", detail: "切分、泄漏、类别不平衡；错误分析从这里开始。" },
      { x: 82, y: 52, label: "Bench", detail: "训练在云端/主机，部署在板端；两条环境要分开记录。" }
    ],
    deliverables: ["数据切分与增强", "CNN / ResNet18 两组实验", "混淆矩阵、模型卡", "错误分析与推理脚本"],
    accept: "测试集准确率达到基线 +10%；能解释过拟合与数据泄漏。",
    risk: "不要用测试集调参；不要只看总体 accuracy。先看混淆矩阵，再看单张错误。",
    steps: [
      { title: "数据切分", detail: "train/val/test 分层抽样；固定随机种子；检查重复图与泄漏。", time: "2 h", output: "data card" },
      { title: "CNN baseline", detail: "小 CNN、交叉熵、Adam、早停；记录曲线与参数量。", time: "3 h", output: "baseline" },
      { title: "迁移学习", detail: "ResNet18 冻结/解冻、学习率、数据增强；做 3 组消融。", time: "4 h", output: "best model" },
      { title: "错误分析", detail: "混淆矩阵、Top-loss 样本、类别偏差；写改进假设。", time: "3 h", output: "error report" },
      { title: "模型卡", detail: "数据、指标、限制、失败案例、推理命令；导出 ONNX。", time: "2 h", output: "model card" }
    ],
    pipeline: ["Data", "Augment", "CNN", "Val", "Error", "ONNX"],
    metrics: [["框架", "PyTorch"], ["验收", "基线 +10%"], ["产物", "model card"]],
    simNote: "模拟一次训练：数据、增强、模型、验证、错误分析；每一步都可能让指标“看起来很好”。"
  },
  p8: {
    id: "p8",
    code: "P8",
    eyebrow: "CAPSTONE / EDGE VISION BOX",
    title: "Edge Vision Box",
    phase: "P6",
    weeks: "第 43–48 周",
    image: "assets/exploded.png",
    imageAlt: "Edge Vision Box 七模块拆解图",
    intro: "把摄像头、模型、C++ 推理、事件服务、Web 面板、日志与 OTA 串成一台可演示的边缘视觉设备。它是前面所有项目的合并。",
    hotspots: [
      { x: 52, y: 41, label: "Camera", detail: "MIPI/USB 采集；曝光、帧率、镜头视场决定上限。" },
      { x: 52, y: 69, label: "SBC", detail: "Linux、推理、服务；先确认内存、散热、存储。" },
      { x: 52, y: 56, label: "Thermal", detail: "被动散热；温度墙会让 FPS 在 10 分钟后掉一半。" },
      { x: 79, y: 68, label: "Storage", detail: "只读 rootfs + 日志分区；SD 卡坏是常态。" },
      { x: 20, y: 75, label: "Power", detail: "独立 5V；外设和板子不要抢一个弱电源。" },
      { x: 65, y: 70, label: "Network", detail: "SSH / MQTT / OTA；断网重连是必测项。" },
      { x: 31, y: 70, label: "Debug", detail: "UART 是最后一道防线；把启动日志留下来。" }
    ],
    deliverables: ["实时检测 ≥10 FPS", "事件上报 + 最小 Dashboard", "8 小时稳定性 + 故障注入", "部署手册 + 3 分钟视频"],
    accept: "陌生人按 README 30 分钟内部署；断网、重启、存储满后能恢复。",
    risk: "范围失控是最大风险。先做“一条能跑通的链路”，再加功能；不要一开始就做多模型、多路相机、云端训练。",
    steps: [
      { title: "需求与边界", detail: "写用户故事、验收指标、不做什么；画架构图和数据流。", time: "4 h", output: "design v1" },
      { title: "数据与模型", detail: "数据 v1、baseline、指标、错误分析；导出 ONNX。", time: "1 周", output: "model v1" },
      { title: "端侧推理", detail: "V4L2/GStreamer + 预处理 + ONNX/NCNN + 后处理；对齐 Python。", time: "1 周", output: "10 FPS" },
      { title: "服务化", detail: "事件格式、MQTT/HTTP、最小 Dashboard、日志。", time: "1 周", output: "端云闭环" },
      { title: "优化与稳定", detail: "量化/线程/ROI；8 小时稳定、故障注入、温控。", time: "1 周", output: "benchmark" },
      { title: "交付", detail: "README、部署脚本、3 分钟视频、作品集页。", time: "3 天", output: "v1.0" }
    ],
    pipeline: ["Camera", "V4L2", "Preprocess", "Inference", "Postprocess", "Event", "Dashboard"],
    metrics: [["目标", "≥10 FPS"], ["延迟", "<100 ms"], ["稳定", "8 h"]],
    simNote: "拖动输入分辨率、精度与 runtime，观察延迟、FPS 与精度如何互相拉扯。这是项目落地时最真实的取舍。",
    simulator: true
  }
};

export const MACHINES = [
  {
    id: "sbc",
    image: "assets/board.jpg",
    title: "单板计算机 / SBC",
    tag: "COMPUTE",
    spec: "ARM64 · Linux · GPIO · USB · Ethernet",
    body: "主力开发板。先跑通供电、串口、网络、存储，再谈驱动和推理。不要第一天就上顶配。",
    checks: ["独立 5V 供电", "UART 串口日志", "SSH 可登录", "散热与温度"]
  },
  {
    id: "camera",
    image: "assets/camera.jpg",
    title: "MIPI 相机模块",
    tag: "SENSE",
    spec: "CSI · 镜头 · 曝光 · 排线",
    body: "视觉系统的上限首先由光学决定。先固定工作距离和光源，再调算法。",
    checks: ["排线方向", "v4l2-ctl 列格式", "曝光/增益", "镜头清洁"]
  },
  {
    id: "edge",
    image: "assets/edge-box.jpg",
    title: "边缘视觉盒子",
    tag: "PRODUCT",
    spec: "Camera · SBC · Thermal · Network",
    body: "把开发板装进盒子后，问题会从“代码”变成“电源、散热、存储、网络、可维护性”。",
    checks: ["满载 30 分钟", "断电 20 次", "断网重连", "日志可读"]
  },
  {
    id: "bench",
    image: "assets/bench.jpg",
    title: "调试工作台",
    tag: "TOOLS",
    spec: "万用表 · 逻辑分析仪 · 串口 · 示波器",
    body: "万用表确认电压和地，逻辑分析仪看时序，串口看启动。不要只靠 printf。",
    checks: ["共地", "电压/极性", "串口 115200", "测试点可访问"]
  }
];
