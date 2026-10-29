export const DEVICE_MODULES = [
  {
    id: "camera", num: "01", title: "摄像模组", short: "4MP MIPI",
    spec: "4MP · 1/2.8\" · 2.8mm 定焦 · 低照度",
    role: "把光变成数字图像。曝光、白平衡、帧率都在这里决定。",
    io: "MIPI CSI-2 · I2C 控制 · 3.3V",
    failure: "花屏、掉帧、曝光抖动、排线接触不良",
    test: "v4l2-ctl 抓 100 帧；曝光/增益扫描；排线插拔 10 次",
    x: 44, y: 21, tone: "mint"
  },
  {
    id: "sbc", num: "02", title: "ARM64 单板计算机", short: "Linux + NPU",
    spec: "4× Cortex-A76 · 8GB RAM · 13 TOPS NPU（概念）",
    role: "运行 Linux、预处理、推理、事件服务和远程管理。",
    io: "MIPI CSI · USB · GbE · GPIO · UART",
    failure: "内存不足、过热降频、存储损坏、电源欠压",
    test: "冷启动 30 秒内 SSH；满载 30 分钟看频率与温度",
    x: 42, y: 42, tone: "mint"
  },
  {
    id: "thermal", num: "03", title: "铝制散热器", short: "PASSIVE",
    spec: "无风扇 · 导热垫 · 铝鳍片",
    role: "把 SoC 的热量带走，避免温度墙导致 FPS 断崖式下降。",
    io: "导热垫 · 结构压合 · 环境风道",
    failure: "温度墙、风扇故障（若有）、积灰、降频",
    test: "满载 30 分钟记录温度/频率/FPS；红外测温",
    x: 48, y: 56, tone: "mint"
  },
  {
    id: "carrier", num: "04", title: "载板与电源", short: "POWER + IO",
    spec: "5V DC → PMIC → 3.3V / 1.8V · 保护",
    role: "把外部电源变成板子能用的电压，并把相机、网口、USB 接起来。",
    io: "5V DC · PMIC · USB · GbE · UART",
    failure: "欠压重启、外设掉线、浪涌、极性接反",
    test: "满载测电压纹波；拔插外设；模拟欠压",
    x: 43, y: 66, tone: "amber"
  },
  {
    id: "storage", num: "05", title: "microSD / 存储", short: "ROOTFS + MODEL",
    spec: "64GB 高耐久 · 只读 rootfs · 日志分区",
    role: "保存系统、模型、事件截图和日志；也是现场最容易坏的部件。",
    io: "SDIO · ext4 / read-only squashfs",
    failure: "卡损坏、只读、空间满、日志写爆",
    test: "断电 20 次；拔卡再插；写满后告警",
    x: 28, y: 61, tone: "amber"
  },
  {
    id: "network", num: "06", title: "千兆网口 / USB-C", short: "NETWORK + DEBUG",
    spec: "1× GbE · 1× USB-C · Wi-Fi（可选）",
    role: "RTSP 拉流、SSH、MQTT 上报、OTA 升级和本地调试。",
    io: "RJ45 · USB 2.0/3.0 · Wi-Fi",
    failure: "断网不重连、IP 冲突、USB 供电不足",
    test: "拔网 10 次自动恢复；弱网/断网事件补传",
    x: 43, y: 77, tone: "amber"
  },
  {
    id: "debug", num: "07", title: "UART 调试口", short: "LAST RESORT",
    spec: "3.3V TTL · 115200 8N1 · GND 共地",
    role: "当 SSH 和网络都挂了，串口是最后一道可观测入口。",
    io: "UART TX/RX/GND · 3.3V",
    failure: "TX/RX 接反、没共地、波特率错、日志丢失",
    test: "从串口看完整启动；定位一次 panic",
    x: 39, y: 86, tone: "amber"
  }
];

export const CAPABILITIES = [
  { code: "A", title: "检测", en: "DETECT", body: "在画面里找出目标：人、安全帽、车辆、包裹、缺陷。", out: "bbox + class + confidence" },
  { code: "B", title: "分类", en: "CLASSIFY", body: "判断目标属于哪一类，或产品是 OK 还是 NG。", out: "label + score" },
  { code: "C", title: "计数 / 跟踪", en: "COUNT", body: "给目标分配 ID，统计数量、停留时间、越线。", out: "track ID + count + dwell" },
  { code: "D", title: "规则 / 事件", en: "DECIDE", body: "把检测结果和区域、时间、连续帧规则组合成业务事件。", out: "event JSON + snapshot" }
];

export const SIGNAL_STAGES = [
  { n: "01", t: "采集", s: "Camera → MIPI CSI", d: "曝光、白平衡、帧率", tone: "mint" },
  { n: "02", t: "媒体管线", s: "V4L2 / GStreamer", d: "格式转换、缓冲、零拷贝", tone: "mint" },
  { n: "03", t: "预处理", s: "resize / letterbox", d: "归一化、颜色空间、ROI", tone: "mint" },
  { n: "04", t: "推理", s: "ONNX / NCNN / TensorRT", d: "检测 / 分类 / 分割", tone: "amber" },
  { n: "05", t: "后处理", s: "NMS / threshold", d: "坐标还原、跟踪、规则", tone: "amber" },
  { n: "06", t: "事件", s: "MQTT / HTTP / 本地", d: "JSON、抓拍、告警、日志", tone: "amber" }
];

export const SCENES = {
  factory: {
    id: "factory", label: "工厂缺陷", tag: "FACTORY / QA", image: "assets/device/factory.jpg", effect: "assets/device/effect-factory.jpg",
    title: "表面缺陷检测",
    sub: "金属件划痕 / 缺件 / 尺寸异常",
    what: "相机固定在产线上方，零件经过视场时触发一次检测。模型输出缺陷框和类别，规则判断 OK / NG。",
    boxes: [
      { x: 27, y: 63, w: 16, h: 25, label: "NG · 92%", tone: "red" },
      { x: 10, y: 66, w: 15, h: 23, label: "OK · 99%", tone: "green" },
      { x: 56, y: 62, w: 17, h: 25, label: "OK · 98%", tone: "green" }
    ],
    metrics: [["PASS", "47"], ["NG", "1"], ["LATENCY", "67 ms"], ["THROUGHPUT", "18.2 FPS"]],
    detections: [
      { name: "scratch", meta: "0.8 mm · 92%", status: "NG" },
      { name: "part #A17", meta: "99% · OK", status: "OK" },
      { name: "part #A18", meta: "98% · OK", status: "OK" }
    ],
    event: { event: "defect_detected", type: "scratch", severity: "high", confidence: 0.92, action: "reject + snapshot" },
    result: "NG 1 / PASS 47 · 已抓拍并通知产线"
  },
  safety: {
    id: "safety", label: "工地安全", tag: "SITE / PPE", image: "assets/device/safety.jpg", effect: "assets/device/effect-safety.jpg",
    title: "PPE 合规监测",
    sub: "安全帽 / 反光衣 / 人员计数",
    what: "相机看施工区域，检测到人后分别判断头部和躯干是否佩戴防护装备。全员合规时输出统计，不合规时升级为告警。",
    boxes: [
      { x: 32, y: 36, w: 19, h: 62, label: "PERSON 01", tone: "green" },
      { x: 52, y: 20, w: 19, h: 78, label: "PERSON 02", tone: "green" },
      { x: 78, y: 39, w: 16, h: 59, label: "PERSON 03", tone: "green" }
    ],
    metrics: [["HELMET", "3 / 3"], ["VEST", "3 / 3"], ["VIOLATION", "0"], ["LATENCY", "52 ms"]],
    detections: [
      { name: "person #01", meta: "helmet ✓ · vest ✓", status: "OK" },
      { name: "person #02", meta: "helmet ✓ · vest ✓", status: "OK" },
      { name: "person #03", meta: "helmet ✓ · vest ✓", status: "OK" }
    ],
    event: { event: "ppe_compliance", workers: 3, violations: 0, zone: "SITE B", action: "log_only" },
    result: "3/3 合规 · 0 违规 · 持续监测"
  },
  warehouse: {
    id: "warehouse", label: "仓库入侵", tag: "WAREHOUSE / ZONE", image: "assets/device/warehouse.jpg", effect: "assets/device/effect-warehouse.jpg",
    title: "危险区域入侵",
    sub: "人进入黄色禁区 / 停留超时",
    what: "先检测人，再判断脚点是否落在多边形禁区内；连续 3 帧命中才生成事件，避免路过误报。",
    boxes: [
      { x: 44, y: 35, w: 12, h: 57, label: "INTRUSION · 96%", tone: "red" }
    ],
    zone: [[29, 66], [77, 66], [71, 97], [25, 97]],
    metrics: [["ZONE", "A-03"], ["DWELL", "3.2 s"], ["CONFIDENCE", "96%"], ["THROUGHPUT", "22.4 FPS"]],
    detections: [
      { name: "person #07", meta: "zone A-03 · 3.2s", status: "ALERT" },
      { name: "rule", meta: "3 consecutive frames", status: "PASS" }
    ],
    event: { event: "zone_intrusion", zone: "A-03", track_id: 7, dwell_s: 3.2, confidence: 0.96, action: "alarm + snapshot" },
    result: "ALERT · ZONE A-03 · 已抓拍并通知值班"
  },
  logistics: {
    id: "logistics", label: "物流计数", tag: "LOGISTICS / COUNT", image: "assets/device/logistics.jpg", effect: "assets/device/effect-logistics.jpg",
    title: "包裹流量计数",
    sub: "传送带包裹检测 / 计数 / 漏检",
    what: "对传送带上的包裹做检测和跟踪，跨线一次只计一次；同时统计流量、漏检和拥堵。",
    boxes: [
      { x: 24, y: 22, w: 16, h: 25, label: "PARCEL 01", tone: "green" },
      { x: 70, y: 37, w: 18, h: 28, label: "PARCEL 02", tone: "green" },
      { x: 42, y: 51, w: 20, h: 30, label: "PARCEL 03", tone: "green" },
      { x: 13, y: 66, w: 20, h: 31, label: "PARCEL 04", tone: "green" }
    ],
    metrics: [["COUNT", "12"], ["RATE", "18.4 FPS"], ["LATENCY", "54 ms"], ["MISSED", "0"]],
    detections: [
      { name: "parcel #01", meta: "track 12s · counted", status: "OK" },
      { name: "parcel #02", meta: "track 8s · counted", status: "OK" },
      { name: "parcel #03", meta: "track 5s · counted", status: "OK" }
    ],
    event: { event: "parcel_count", window: "1 min", count: 12, rate_per_min: 12, missed: 0, action: "dashboard" },
    result: "12 件/分钟 · 0 漏检 · 流量正常"
  }
};

