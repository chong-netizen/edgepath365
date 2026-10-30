export const DATA = {
  "phases": [
    {
      "code": "P0",
      "title": "单片机与工程环境",
      "days": "D01–D28",
      "weeks": "W01–W04",
      "color": "#2DD4BF",
      "summary": "先吃透一款 STM32：工具链、GPIO、时钟、UART、中断、定时器、ADC、I2C/SPI、DMA、状态机与 FreeRTOS；同时建立 Git、调试、文档和 BOM 习惯。",
      "gate": "Gate 0（D28）：能独立 bring-up 一块 STM32 最小系统，点灯、按键、串口、定时器、ADC/I2C、RTOS 三任务全部跑通。"
    },
    {
      "code": "P1",
      "title": "C/C++ 与 Linux 基础",
      "days": "D29–D70",
      "weeks": "W05–W10",
      "color": "#5EEAD4",
      "summary": "C 指针/内存 → C++/RAII/STL/CMake → C/C++ 混合与调试 → Linux 系统编程 → 硬件接口，最后过 Gate 1。",
      "gate": "Gate 1（D70）：C/C++ 工具、GDB/Valgrind、串口传感器、进程/线程、硬件接口逐项通过。"
    },
    {
      "code": "P2",
      "title": "嵌入式 Linux 核心",
      "days": "D71–D133",
      "weeks": "W11–W19",
      "color": "#22C1A8",
      "summary": "ARM、启动链、内核、rootfs、字符驱动、设备树。",
      "gate": "里程碑（D133）：启动链、字符驱动、DT overlay、oops 阅读。"
    },
    {
      "code": "P3",
      "title": "系统集成与媒体",
      "days": "D134–D168",
      "weeks": "W20–W24",
      "color": "#14B8A6",
      "summary": "Buildroot/Yocto、V4L2、GStreamer、网络与 OTA。",
      "gate": "Gate 2（D168）：30 分钟复现设备、RTSP、远程部署、A/B 回滚。"
    },
    {
      "code": "P4",
      "title": "机器学习与视觉",
      "days": "D169–D238",
      "weeks": "W25–W34",
      "color": "#F5B45C",
      "summary": "数学、NumPy、OpenCV、PyTorch、CNN、数据集与指标。",
      "gate": "里程碑（D238）：IoU/mAP、CNN 训练、错误分析、经典 CV 基线。"
    },
    {
      "code": "P5",
      "title": "边缘部署与优化",
      "days": "D239–D294",
      "weeks": "W35–W42",
      "color": "#F59E0B",
      "summary": "ONNX、量化、C++ 推理、实时相机管线、性能与稳定性。",
      "gate": "Gate 3（D294）：端到端 demo、延迟/内存表、8 小时稳定、部署手册。"
    },
    {
      "code": "P6",
      "title": "综合项目与求职",
      "days": "D295–D365",
      "weeks": "W43–W52",
      "color": "#FB923C",
      "summary": "Capstone、测试、文档、作品集、面试与年度复盘。",
      "gate": "最终里程碑（D365）：30 分钟部署、故障恢复、3 个关键取舍。"
    }
  ],
  "weeks": [
    {
      "n": 1,
      "phase": "P0",
      "title": "单片机起步 I：工具链、GPIO 与时钟",
      "days": [
        {
          "d": 1,
          "weekday": "周一",
          "task": "概念日｜选定 STM32F103C8T6（或 STM32G431）最小系统板，安装 STM32CubeIDE、ST-Link 驱动和 Git；新建工程，配置时钟树与 GPIO，点亮第一个 LED",
          "output": "点灯工程 + 工具链截图 + Git 仓库",
          "rest": false,
          "gate": null
        },
        {
          "d": 2,
          "weekday": "周二",
          "task": "概念日｜GPIO 输入/输出、推挽/开漏、上下拉、按键去抖；同时补 C 的变量、类型、位运算、结构体在寄存器操作中的写法；做 5 个最小验证",
          "output": "5 条验证记录 + 寄存器笔记",
          "rest": false,
          "gate": null
        },
        {
          "d": 3,
          "weekday": "周三",
          "task": "实验日｜按键控制 LED、流水灯、串口 printf 重定向；从空工程独立完成，不抄完整工程",
          "output": "可运行代码 + 接线图",
          "rest": false,
          "gate": null
        },
        {
          "d": 4,
          "weekday": "周四",
          "task": "调试日｜制造并定位 2 个真实问题：SWD 连不上、时钟配错、BOOT0 模式不对、复位异常；写根因和修复步骤",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 5,
          "weekday": "周五",
          "task": "自测日｜口述 GPIO 模式、时钟树、推挽 vs 开漏、按键去抖；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评",
          "rest": false,
          "gate": null
        },
        {
          "d": 6,
          "weekday": "周六",
          "task": "项目日｜按键 + LED + 串口状态机：短按切换模式、长按复位、串口返回当前状态；4 小时，提交 Git + README",
          "output": "commit + README + 状态机图",
          "rest": false,
          "gate": null
        },
        {
          "d": 7,
          "weekday": "周日",
          "task": "复盘日｜整理 CubeIDE 工程模板、接线规范和 BOM；固定每天学习时段；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT + BOM v1",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 2,
      "phase": "P0",
      "title": "单片机起步 II：UART、中断与定时器",
      "days": [
        {
          "d": 8,
          "weekday": "周一",
          "task": "概念日｜UART 帧格式、波特率、环形缓冲区；NVIC 中断优先级与现场保护；画 1 页中断/串口概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 9,
          "weekday": "周二",
          "task": "概念日｜定时器时基、PWM、输入捕获、编码器接口、独立看门狗；做 5 个最小验证，记下寄存器/ HAL 配置",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 10,
          "weekday": "周三",
          "task": "实验日｜写一个串口命令行：LED on/off/status；用中断收发，加环形缓冲；再做 PWM 呼吸灯",
          "output": "可运行代码 + 串口交互截图",
          "rest": false,
          "gate": null
        },
        {
          "d": 11,
          "weekday": "周四",
          "task": "调试日｜制造并定位 2 个问题：串口乱码/丢包、中断卡死、优先级配置错误；写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 12,
          "weekday": "周五",
          "task": "自测日｜画 UART 时序图；解释中断现场、优先级、临界区；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评",
          "rest": false,
          "gate": null
        },
        {
          "d": 13,
          "weekday": "周六",
          "task": "项目日｜串口控制舵机/电机 + 状态回传；加入超时和错误码；4 小时，提交 Git + README",
          "output": "commit + 演示视频",
          "rest": false,
          "gate": null
        },
        {
          "d": 14,
          "weekday": "周日",
          "task": "复盘日｜用逻辑分析仪抓 UART 和 PWM；整理中断/定时器模板；1-3-7 复习 + 周报",
          "output": "波形截图 + 周报",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 3,
      "phase": "P0",
      "title": "单片机起步 III：ADC、I2C/SPI 与 DMA",
      "days": [
        {
          "d": 15,
          "weekday": "周一",
          "task": "概念日｜ADC 分辨率、参考电压、采样时间、滤波；I2C 时序、地址、ACK/NACK；画 1 页总线概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 16,
          "weekday": "周二",
          "task": "概念日｜SPI 模式、片选、DMA 搬运；读一份传感器数据手册，标出寄存器/时序；做 5 个最小验证",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 17,
          "weekday": "周三",
          "task": "实验日｜I2C 扫描总线，读取 BME280/MPU6050（选一），串口输出；再用 SPI 驱动 OLED 或 Flash",
          "output": "可运行代码 + 读数截图",
          "rest": false,
          "gate": null
        },
        {
          "d": 18,
          "weekday": "周四",
          "task": "调试日｜制造并定位 2 个问题：I2C 无应答/上拉/地址错、SPI 模式错、DMA 覆盖；写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 19,
          "weekday": "周五",
          "task": "自测日｜口述 ADC 误差来源、I2C vs SPI、DMA 的作用；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评",
          "rest": false,
          "gate": null
        },
        {
          "d": 20,
          "weekday": "周六",
          "task": "项目日｜多传感器采集 + OLED 显示 + 串口 CSV；4 小时，提交 Git + README + 数据样例",
          "output": "commit + CSV 样例",
          "rest": false,
          "gate": null
        },
        {
          "d": 21,
          "weekday": "周日",
          "task": "复盘日｜用 Python/pyserial 画一次串口数据；整理传感器驱动模板；1-3-7 复习 + 周报",
          "output": "曲线图 + 周报",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 4,
      "phase": "P0",
      "title": "单片机起步 IV：状态机、RTOS 与 Gate 0",
      "days": [
        {
          "d": 22,
          "weekday": "周一",
          "task": "概念日｜状态机、事件驱动、非阻塞编程；看门狗、复位原因、错误处理；画 1 页状态图",
          "output": "1 页状态图",
          "rest": false,
          "gate": null
        },
        {
          "d": 23,
          "weekday": "周二",
          "task": "概念日｜FreeRTOS 任务、队列、信号量、优先级、栈；低功耗模式与唤醒；做 5 个最小验证",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 24,
          "weekday": "周三",
          "task": "实验日｜把多传感器项目改成 3 个 RTOS 任务：采集、显示、通信；用队列传数据",
          "output": "可运行代码 + 任务表",
          "rest": false,
          "gate": null
        },
        {
          "d": 25,
          "weekday": "周四",
          "task": "调试日｜制造并定位 2 个问题：栈溢出、优先级反转、死锁、看门狗复位；写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 26,
          "weekday": "周五",
          "task": "自测日｜口述 RTOS 调度、队列 vs 信号量、临界区、低功耗；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评",
          "rest": false,
          "gate": null
        },
        {
          "d": 27,
          "weekday": "周六",
          "task": "项目日｜最小节点 v1：采集 + OLED + 串口 + 看门狗，连续运行 2 小时；提交 Git + README + 接线图",
          "output": "commit + 2h 运行记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 28,
          "weekday": "周日",
          "task": "Gate｜Gate 0：从空工程独立完成点灯、按键、串口、定时器、ADC/I2C、RTOS 三任务；整理 BOM、接线图、踩坑清单；未过项列入 buffer",
          "output": "Gate 0 检查表 + 项目仓库",
          "rest": false,
          "gate": "Gate 0：能独立 bring-up 一块 STM32 最小系统，并解释每个外设的配置。"
        }
      ]
    },
    {
      "n": 5,
      "phase": "P1",
      "title": "C 核心：指针、内存与结构体",
      "days": [
        {
          "d": 29,
          "weekday": "周一",
          "task": "概念日｜先用 30 分钟回顾 C 的编译、类型、控制流；再学指针与地址、指针运算、数组退化、const、函数指针；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 30,
          "weekday": "周二",
          "task": "概念日｜字符串、结构体、枚举、位运算、内存布局；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 31,
          "weekday": "周三",
          "task": "实验日｜指针 15 题：交换、遍历、二维数组、回调；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 32,
          "weekday": "周四",
          "task": "调试日｜实现动态字符串库：append/free/边界检查；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 33,
          "weekday": "周五",
          "task": "自测日｜口述野指针、悬空指针、内存泄漏、ABI；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 34,
          "weekday": "周六",
          "task": "项目日｜文本统计工具：行/词/字符/最长行 + Valgrind；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 35,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 6,
      "phase": "P1",
      "title": "C++ I：引用、类与 RAII",
      "days": [
        {
          "d": 36,
          "weekday": "周一",
          "task": "概念日｜C++ 编译、引用、const、命名空间、函数重载；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 37,
          "weekday": "周二",
          "task": "概念日｜类、构造/析构、RAII、拷贝与移动、异常边界；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 38,
          "weekday": "周三",
          "task": "实验日｜把文本统计工具重构成 C++ 类：Resource 包装；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 39,
          "weekday": "周四",
          "task": "调试日｜写一个文件日志器：RAII 自动关闭 + 错误处理；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 40,
          "weekday": "周五",
          "task": "自测日｜口述 RAII 解决什么问题；拷贝 vs 移动；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 41,
          "weekday": "周六",
          "task": "项目日｜C++ CLI 文本工具 v1：类设计 + 单元测试；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 42,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 7,
      "phase": "P1",
      "title": "C++ II：STL、智能指针与 CMake",
      "days": [
        {
          "d": 43,
          "weekday": "周一",
          "task": "概念日｜vector/string/map、迭代器、算法、lambda；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 44,
          "weekday": "周二",
          "task": "概念日｜unique_ptr/shared_ptr、移动语义、CMake、测试；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 45,
          "weekday": "周三",
          "task": "实验日｜用 STL 重写环形缓冲区与生产者消费者；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 46,
          "weekday": "周四",
          "task": "调试日｜CMake 多目标构建 + CTest + sanitizer；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 47,
          "weekday": "周五",
          "task": "自测日｜STL 复杂度；shared_ptr 循环引用怎么破；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 48,
          "weekday": "周六",
          "task": "项目日｜C++ 系统信息工具：STL + CMake + 测试；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 49,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 8,
      "phase": "P1",
      "title": "C++ 工程：C/C++ 混合与调试",
      "days": [
        {
          "d": 50,
          "weekday": "周一",
          "task": "概念日｜头文件、链接、extern \"C\"、ABI、静态/动态库；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 51,
          "weekday": "周二",
          "task": "概念日｜GDB、Valgrind、ASan/UBSan、日志、错误码；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 52,
          "weekday": "周三",
          "task": "实验日｜写一个 C 库，用 C++ 调用；再反向导出 C 接口；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 53,
          "weekday": "周四",
          "task": "调试日｜制造 5 个越界/悬空/竞态 bug，用工具定位；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 54,
          "weekday": "周五",
          "task": "自测日｜C++ 为什么需要 extern C；name mangling 是什么；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 55,
          "weekday": "周六",
          "task": "项目日｜C/C++ 混合的传感器协议解析器 + 压测；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 56,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 9,
      "phase": "P1",
      "title": "Linux 系统编程（C）",
      "days": [
        {
          "d": 57,
          "weekday": "周一",
          "task": "概念日｜进程、fork/exec/wait、文件描述符、open/read/write；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 58,
          "weekday": "周二",
          "task": "概念日｜pthread、互斥锁、条件变量、信号、守护进程；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 59,
          "weekday": "周三",
          "task": "实验日｜进程树 + 文件复制 + 目录递归统计；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 60,
          "weekday": "周四",
          "task": "调试日｜环形缓冲区 + 生产者消费者，压测 1 万条；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 61,
          "weekday": "周五",
          "task": "自测日｜进程 vs 线程；死锁四条件；阻塞 IO；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 62,
          "weekday": "周六",
          "task": "项目日｜C 多线程日志采集器：队列、落盘、轮转；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 63,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 10,
      "phase": "P1",
      "title": "硬件接口 + 数据结构 + Gate 1",
      "days": [
        {
          "d": 64,
          "weekday": "周一",
          "task": "概念日｜电压/电流/上拉/去抖；UART/I2C/SPI 协议与波形；合上资料画 1 页概念图",
          "output": "1 页概念图",
          "rest": false,
          "gate": null
        },
        {
          "d": 65,
          "weekday": "周二",
          "task": "概念日｜GPIO/PWM/ADC；链表、哈希、排序、复杂度；做 5 个最小验证，记下命令/代码",
          "output": "5 条验证记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 66,
          "weekday": "周三",
          "task": "实验日｜万用表测电压；USB-TTL 看串口日志；从空目录独立完成，不抄完整答案",
          "output": "可运行代码/实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 67,
          "weekday": "周四",
          "task": "调试日｜逻辑分析仪抓 UART/I2C；实现线程安全环形队列；制造 2 个错误并修复，写根因",
          "output": "错误日志 + 根因",
          "rest": false,
          "gate": null
        },
        {
          "d": 68,
          "weekday": "周五",
          "task": "自测日｜画 UART/I2C/SPI 时序对比表；复杂度分析；闭卷 20 分钟 + 口述 5 分钟",
          "output": "错题 + 自评分",
          "rest": false,
          "gate": null
        },
        {
          "d": 69,
          "weekday": "周六",
          "task": "项目日｜串口温度传感器 + CSV 记录 + 环形缓冲；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 70,
          "weekday": "周日",
          "task": "Gate｜Gate 1：C/C++、Linux、硬件与调试逐项打勾；未过项列入 buffer；逐项打勾，未过项列入 buffer",
          "output": "Gate 清单 + 补救计划",
          "rest": false,
          "gate": "Gate 1：C/C++、Linux、硬件与调试逐项打勾；未过项列入 buffer"
        }
      ]
    },
    {
      "n": 11,
      "phase": "P2",
      "title": "ARM 架构与交叉编译",
      "days": [
        {
          "d": 71,
          "weekday": "周一",
          "task": "源码日｜ARMv8 寄存器、异常等级、内存映射、ABI；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 72,
          "weekday": "周二",
          "task": "板端日｜交叉编译工具链、sysroot、动态库、ELF；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 73,
          "weekday": "周三",
          "task": "实验日｜交叉编译 hello，用 file/readelf/ldd 分析；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 74,
          "weekday": "周四",
          "task": "调试日｜用 scp 部署到 Pi，配置 SSH 免密；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 75,
          "weekday": "周五",
          "task": "排错日｜为什么不能在 x86 直接运行 ARM 二进制；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 76,
          "weekday": "周六",
          "task": "项目日｜交叉编译 + systemd 服务 + 日志；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 77,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 12,
      "phase": "P2",
      "title": "启动流程与 U-Boot",
      "days": [
        {
          "d": 78,
          "weekday": "周一",
          "task": "源码日｜ROM→SPL→U-Boot→Kernel→rootfs 启动链；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 79,
          "weekday": "周二",
          "task": "板端日｜U-Boot 命令、环境变量、bootargs、串口控制台；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 80,
          "weekday": "周三",
          "task": "实验日｜串口抓完整启动日志，标注每个阶段；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 81,
          "weekday": "周四",
          "task": "调试日｜修改 bootargs 与打印级别，观察差异；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 82,
          "weekday": "周五",
          "task": "排错日｜画启动链；解释 kernel panic 排查顺序；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 83,
          "weekday": "周六",
          "task": "项目日｜启动日志注释报告 + 串口登录脚本；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 84,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 13,
      "phase": "P2",
      "title": "Linux 内核基础",
      "days": [
        {
          "d": 85,
          "weekday": "周一",
          "task": "源码日｜源码结构、Kconfig、Makefile、配置裁剪；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 86,
          "weekday": "周二",
          "task": "板端日｜编译内核、设备树、模块加载与卸载；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 87,
          "weekday": "周三",
          "task": "实验日｜在 QEMU 或 Pi 上编译并启动自定义内核；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 88,
          "weekday": "周四",
          "task": "调试日｜写 hello module，insmod/rmmod，看 dmesg；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 89,
          "weekday": "周五",
          "task": "排错日｜内核空间与用户空间；模块签名；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 90,
          "weekday": "周六",
          "task": "项目日｜自定义内核 + 模块 + 启动脚本；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 91,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 14,
      "phase": "P2",
      "title": "根文件系统",
      "days": [
        {
          "d": 92,
          "weekday": "周一",
          "task": "源码日｜FHS、/proc /sys /dev、init、BusyBox；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 93,
          "weekday": "周二",
          "task": "板端日｜systemd、动态库、用户与权限、只读 rootfs；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 94,
          "weekday": "周三",
          "task": "实验日｜用 BusyBox 手工构建最小 rootfs；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 95,
          "weekday": "周四",
          "task": "调试日｜在 QEMU 启动最小系统，修复 init 或库缺失；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 96,
          "weekday": "周五",
          "task": "排错日｜rootfs 启动失败的 5 种原因；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 97,
          "weekday": "周六",
          "task": "项目日｜最小可启动系统 + 启动说明；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 98,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 15,
      "phase": "P2",
      "title": "系统服务与部署",
      "days": [
        {
          "d": 99,
          "weekday": "周一",
          "task": "源码日｜systemd unit、依赖、日志、定时器；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 100,
          "weekday": "周二",
          "task": "板端日｜交叉编译部署、动态库 RPATH、版本管理；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 101,
          "weekday": "周三",
          "task": "实验日｜写一个开机自启的相机快照服务；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 102,
          "weekday": "周四",
          "task": "调试日｜模拟服务崩溃，用 journalctl 定位并修复；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 103,
          "weekday": "周五",
          "task": "排错日｜systemd 排错 10 问；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 104,
          "weekday": "周六",
          "task": "项目日｜开机自启相机服务 + 日志轮转；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 105,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 16,
      "phase": "P2",
      "title": "字符设备驱动 I",
      "days": [
        {
          "d": 106,
          "weekday": "周一",
          "task": "源码日｜模块、字符设备、file_operations、主次设备号；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 107,
          "weekday": "周二",
          "task": "板端日｜copy_to_user/from_user、ioctl、并发保护；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 108,
          "weekday": "周三",
          "task": "实验日｜hello 字符设备驱动 + 用户态测试；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 109,
          "weekday": "周四",
          "task": "调试日｜虚拟 FIFO 设备：读写、阻塞、非阻塞；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 110,
          "weekday": "周五",
          "task": "排错日｜驱动加载失败排查顺序；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 111,
          "weekday": "周六",
          "task": "项目日｜字符设备驱动 + 测试程序 + Makefile；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 112,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 17,
      "phase": "P2",
      "title": "设备树与 GPIO",
      "days": [
        {
          "d": 113,
          "weekday": "周一",
          "task": "源码日｜DTS 语法、节点、compatible、pinctrl；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 114,
          "weekday": "周二",
          "task": "板端日｜GPIO 子系统、中断、LED/按键；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 115,
          "weekday": "周三",
          "task": "实验日｜写 DT overlay，点亮 LED、读按键；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 116,
          "weekday": "周四",
          "task": "调试日｜按键中断驱动，消抖与中断上下文；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 117,
          "weekday": "周五",
          "task": "排错日｜设备树匹配流程；probe 何时调用；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 118,
          "weekday": "周六",
          "task": "项目日｜GPIO 按键中断驱动 + 事件上报；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 119,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 18,
      "phase": "P2",
      "title": "I2C/SPI 驱动",
      "days": [
        {
          "d": 120,
          "weekday": "周一",
          "task": "源码日｜I2C 协议、i2c-tools、i2c 子系统；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 121,
          "weekday": "周二",
          "task": "板端日｜SPI 模式与时序、spidev、IIO 子系统；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 122,
          "weekday": "周三",
          "task": "实验日｜i2cdetect/i2cget 读传感器寄存器；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 123,
          "weekday": "周四",
          "task": "调试日｜写 I2C 传感器驱动，暴露 sysfs/IIO；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 124,
          "weekday": "周五",
          "task": "排错日｜I2C 与 SPI 的优缺点、典型速率；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 125,
          "weekday": "周六",
          "task": "项目日｜I2C 温湿度传感器驱动 + 采样程序；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 126,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 19,
      "phase": "P2",
      "title": "驱动调试与稳定性",
      "days": [
        {
          "d": 127,
          "weekday": "周一",
          "task": "源码日｜printk、dynamic debug、ftrace、perf；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 128,
          "weekday": "周二",
          "task": "板端日｜内存分配、锁、竞态、中断上下文；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 129,
          "weekday": "周三",
          "task": "实验日｜用 ftrace 追一次延迟，找热点；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 130,
          "weekday": "周四",
          "task": "调试日｜制造竞态并用锁修复，压测 1 小时；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 131,
          "weekday": "周五",
          "task": "排错日｜oops/panic 日志阅读；debugfs 用途；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 132,
          "weekday": "周六",
          "task": "项目日｜驱动稳定性报告：压测、日志、修复；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 133,
          "weekday": "周日",
          "task": "复盘日｜Phase 2 里程碑自检：启动、内核、驱动、DT 清单；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 20,
      "phase": "P3",
      "title": "Buildroot",
      "days": [
        {
          "d": 134,
          "weekday": "周一",
          "task": "源码日｜Buildroot 结构、menuconfig、包、overlay；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 135,
          "weekday": "周二",
          "task": "板端日｜rootfs 裁剪、启动脚本、镜像烧录；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 136,
          "weekday": "周三",
          "task": "实验日｜构建最小 image，启动并配置网络；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 137,
          "weekday": "周四",
          "task": "调试日｜添加自定义包 + 开机服务；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 138,
          "weekday": "周五",
          "task": "排错日｜Buildroot 与 Yocto 如何选择；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 139,
          "weekday": "周六",
          "task": "项目日｜带 SSH 与摄像头工具的 Buildroot 镜像；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 140,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 21,
      "phase": "P3",
      "title": "Yocto",
      "days": [
        {
          "d": 141,
          "weekday": "周一",
          "task": "源码日｜Layer、Recipe、BitBake、任务链；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 142,
          "weekday": "周二",
          "task": "板端日｜SDK、devtool、镜像定制；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 143,
          "weekday": "周三",
          "task": "实验日｜构建 core-image-minimal，跑 QEMU；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 144,
          "weekday": "周四",
          "task": "调试日｜写自定义 layer + app recipe；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 145,
          "weekday": "周五",
          "task": "排错日｜Yocto 常见变量与目录结构；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 146,
          "weekday": "周六",
          "task": "项目日｜自定义 layer + 应用 recipe + 文档；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 147,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 22,
      "phase": "P3",
      "title": "V4L2 摄像头",
      "days": [
        {
          "d": 148,
          "weekday": "周一",
          "task": "源码日｜V4L2 框架、ioctl、格式、缓冲区；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 149,
          "weekday": "周二",
          "task": "板端日｜YUYV/MJPEG、DMA、帧率、曝光；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 150,
          "weekday": "周三",
          "task": "实验日｜v4l2-ctl 列格式、抓 10 帧保存；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 151,
          "weekday": "周四",
          "task": "调试日｜C 程序 mmap 取流，保存 JPEG/RAW；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 152,
          "weekday": "周五",
          "task": "排错日｜采集卡顿：带宽、格式、缓冲怎么查；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 153,
          "weekday": "周六",
          "task": "项目日｜摄像头采集器：参数、日志、异常恢复；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 154,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 23,
      "phase": "P3",
      "title": "GStreamer 与流媒体",
      "days": [
        {
          "d": 155,
          "weekday": "周一",
          "task": "源码日｜Pipeline、Element、Pad、Caps；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 156,
          "weekday": "周二",
          "task": "板端日｜H.264、RTSP、硬件编码、延迟；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 157,
          "weekday": "周三",
          "task": "实验日｜gst-launch 测试摄像头预览与录像；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 158,
          "weekday": "周四",
          "task": "调试日｜搭建 RTSP 推流，VLC 拉流；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 159,
          "weekday": "周五",
          "task": "排错日｜pipeline 延迟定位 5 步；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 160,
          "weekday": "周六",
          "task": "项目日｜RTSP 摄像头 + 低延迟参数；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 161,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 24,
      "phase": "P3",
      "title": "网络、远程与 OTA",
      "days": [
        {
          "d": 162,
          "weekday": "周一",
          "task": "源码日｜TCP/UDP、SSH、防火墙、时间同步；读文档/源码，画数据流或时序图",
          "output": "1 页图 + 3 个问题",
          "rest": false,
          "gate": null
        },
        {
          "d": 163,
          "weekday": "周二",
          "task": "板端日｜OTA 分区、回滚、签名、RAUC 思路；上板验证，保存串口/dmesg 日志",
          "output": "板端日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 164,
          "weekday": "周三",
          "task": "实验日｜设备联网、静态 IP、远程命令；上板跑通，记录版本与接线",
          "output": "可复现实验记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 165,
          "weekday": "周四",
          "task": "调试日｜A/B 分区模拟 + 简单 OTA 脚本；复现→缩小范围→看 dmesg/ftrace",
          "output": "根因 + 修复",
          "rest": false,
          "gate": null
        },
        {
          "d": 166,
          "weekday": "周五",
          "task": "排错日｜设备离线排查清单；不查答案，先写排查顺序",
          "output": "排查清单 + 答案",
          "rest": false,
          "gate": null
        },
        {
          "d": 167,
          "weekday": "周六",
          "task": "项目日｜远程监控 demo + 升级脚本；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 168,
          "weekday": "周日",
          "task": "Gate｜Gate 2：Buildroot/Yocto、V4L2、RTSP、远程部署全部演示；逐项打勾，未过项列入 buffer",
          "output": "Gate 清单 + 补救计划",
          "rest": false,
          "gate": "Gate 2：Buildroot/Yocto、V4L2、RTSP、远程部署全部演示"
        }
      ]
    },
    {
      "n": 25,
      "phase": "P4",
      "title": "线性代数",
      "days": [
        {
          "d": 169,
          "weekday": "周一",
          "task": "理论日｜向量、矩阵、乘法、秩、特征值；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 170,
          "weekday": "周二",
          "task": "代码日｜范数、正交、SVD、PCA 直觉；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 171,
          "weekday": "周三",
          "task": "Notebook｜NumPy 实现矩阵运算与图像变换；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 172,
          "weekday": "周四",
          "task": "复现日｜用 PCA 压缩一张图，比较误差；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 173,
          "weekday": "周五",
          "task": "自测日｜手推 2×2 特征值；解释卷积矩阵；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 174,
          "weekday": "周六",
          "task": "项目日｜线性代数 Notebook：图像旋转与压缩；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 175,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 26,
      "phase": "P4",
      "title": "概率统计与微积分",
      "days": [
        {
          "d": 176,
          "weekday": "周一",
          "task": "理论日｜随机变量、分布、期望、方差、贝叶斯；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 177,
          "weekday": "周二",
          "task": "代码日｜导数、链式法则、梯度、凸性；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 178,
          "weekday": "周三",
          "task": "Notebook｜用直方图/QQ 图分析数据集；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 179,
          "weekday": "周四",
          "task": "复现日｜手写梯度下降拟合直线；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 180,
          "weekday": "周五",
          "task": "自测日｜解释准确率、召回率、ROC-AUC；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 181,
          "weekday": "周六",
          "task": "项目日｜统计实验 Notebook + 结论；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 182,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 27,
      "phase": "P4",
      "title": "NumPy/Pandas/Matplotlib",
      "days": [
        {
          "d": 183,
          "weekday": "周一",
          "task": "理论日｜ndarray、广播、索引、向量化；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 184,
          "weekday": "周二",
          "task": "代码日｜Pandas 清洗、分组、可视化；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 185,
          "weekday": "周三",
          "task": "Notebook｜清洗一个真实 CSV，处理缺失与异常；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 186,
          "weekday": "周四",
          "task": "复现日｜画 6 张图：分布、相关、趋势；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 187,
          "weekday": "周五",
          "task": "自测日｜广播规则；向量化为何快；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 188,
          "weekday": "周六",
          "task": "项目日｜数据探索报告 + 可复现 Notebook；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 189,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 28,
      "phase": "P4",
      "title": "经典 CV I：图像与滤波",
      "days": [
        {
          "d": 190,
          "weekday": "周一",
          "task": "理论日｜像素、颜色空间、直方图、卷积、滤波；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 191,
          "weekday": "周二",
          "task": "代码日｜阈值、形态学、边缘、轮廓；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 192,
          "weekday": "周三",
          "task": "Notebook｜OpenCV 实现灰度、模糊、边缘、形态学；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 193,
          "weekday": "周四",
          "task": "复现日｜缺陷检测 pipeline：阈值 + 轮廓 + 面积；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 194,
          "weekday": "周五",
          "task": "自测日｜卷积核、边缘算子、形态学作用；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 195,
          "weekday": "周六",
          "task": "项目日｜零件缺陷检测 v1：参数面板 + 结果图；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 196,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 29,
      "phase": "P4",
      "title": "经典 CV II：特征与相机",
      "days": [
        {
          "d": 197,
          "weekday": "周一",
          "task": "理论日｜SIFT/ORB、匹配、单应、相机模型；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 198,
          "weekday": "周二",
          "task": "代码日｜标定、畸变、双目与深度直觉；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 199,
          "weekday": "周三",
          "task": "Notebook｜ORB 匹配两张图，画匹配点；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 200,
          "weekday": "周四",
          "task": "复现日｜棋盘格标定，输出内参与畸变；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 201,
          "weekday": "周五",
          "task": "自测日｜为什么需要标定；对极几何直觉；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 202,
          "weekday": "周六",
          "task": "项目日｜特征匹配 + 标定报告；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 203,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 30,
      "phase": "P4",
      "title": "经典 CV 项目",
      "days": [
        {
          "d": 204,
          "weekday": "周一",
          "task": "理论日｜检测指标、IoU、mAP、数据标注；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 205,
          "weekday": "周二",
          "task": "代码日｜传统方法与深度学习的选择；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 206,
          "weekday": "周三",
          "task": "Notebook｜标注 100 张图，训练一个传统分类器；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 207,
          "weekday": "周四",
          "task": "复现日｜把上周缺陷检测做成 CLI + 报告；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 208,
          "weekday": "周五",
          "task": "自测日｜IoU 手算；误检与漏检分析；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 209,
          "weekday": "周六",
          "task": "项目日｜工业缺陷检测 v2：数据、指标、可视化；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 210,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 31,
      "phase": "P4",
      "title": "机器学习基础",
      "days": [
        {
          "d": 211,
          "weekday": "周一",
          "task": "理论日｜监督/无监督、训练/验证/测试、过拟合；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 212,
          "weekday": "周二",
          "task": "代码日｜线性回归、逻辑回归、决策树、KNN；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 213,
          "weekday": "周三",
          "task": "Notebook｜sklearn 完成 3 个数据集基线；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 214,
          "weekday": "周四",
          "task": "复现日｜交叉验证 + 网格搜索 + 学习曲线；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 215,
          "weekday": "周五",
          "task": "自测日｜偏差与方差；为什么要分层抽样；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 216,
          "weekday": "周六",
          "task": "项目日｜ML 基线报告：3 个模型对比；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 217,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 32,
      "phase": "P4",
      "title": "深度学习基础",
      "days": [
        {
          "d": 218,
          "weekday": "周一",
          "task": "理论日｜张量、全连接、激活、损失、反向传播；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 219,
          "weekday": "周二",
          "task": "代码日｜优化器、学习率、正则、BatchNorm；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 220,
          "weekday": "周三",
          "task": "Notebook｜NumPy 手写两层 MLP 前向与反向；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 221,
          "weekday": "周四",
          "task": "复现日｜PyTorch 训练 MLP，对比手写梯度；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 222,
          "weekday": "周五",
          "task": "自测日｜手推链式法则；解释 BatchNorm；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 223,
          "weekday": "周六",
          "task": "项目日｜MLP 分类器 + 训练曲线；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 224,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 33,
      "phase": "P4",
      "title": "PyTorch 与 CNN",
      "days": [
        {
          "d": 225,
          "weekday": "周一",
          "task": "理论日｜Conv/Pool/感受野、CNN 结构；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 226,
          "weekday": "周二",
          "task": "代码日｜Dataset/DataLoader、迁移学习、保存加载；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 227,
          "weekday": "周三",
          "task": "Notebook｜在 CIFAR-10 上训练小 CNN；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 228,
          "weekday": "周四",
          "task": "复现日｜ResNet18 迁移学习，目标 >90%；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 229,
          "weekday": "周五",
          "task": "自测日｜卷积输出尺寸计算；参数量；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 230,
          "weekday": "周六",
          "task": "项目日｜图像分类器 v1：训练/验证/混淆矩阵；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 231,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 34,
      "phase": "P4",
      "title": "训练工程",
      "days": [
        {
          "d": 232,
          "weekday": "周一",
          "task": "理论日｜数据增强、类别不平衡、早停；读教材/课程，手推 1 个公式",
          "output": "公式卡 + 1 页图",
          "rest": false,
          "gate": null
        },
        {
          "d": 233,
          "weekday": "周二",
          "task": "代码日｜超参搜索、混合精度、实验记录；用 NumPy/PyTorch 实现最小例子",
          "output": "可运行 Notebook",
          "rest": false,
          "gate": null
        },
        {
          "d": 234,
          "weekday": "周三",
          "task": "Notebook｜做 5 组消融：增强、BN、学习率、尺寸；数据→训练→可视化，保存曲线",
          "output": "Notebook + 图",
          "rest": false,
          "gate": null
        },
        {
          "d": 235,
          "weekday": "周四",
          "task": "复现日｜用 TensorBoard 记录并选出最佳模型；改 3 个条件做对照实验",
          "output": "对照表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 236,
          "weekday": "周五",
          "task": "自测日｜过拟合与欠拟合的判断和处理；闭卷推导 + 指标口述",
          "output": "错题 + 指标卡",
          "rest": false,
          "gate": null
        },
        {
          "d": 237,
          "weekday": "周六",
          "task": "项目日｜分类器 v2：实验表 + 模型卡；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 238,
          "weekday": "周日",
          "task": "复盘日｜Phase 4 里程碑自检：数学、CV、训练指标、模型卡；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 35,
      "phase": "P5",
      "title": "ONNX 与模型转换",
      "days": [
        {
          "d": 239,
          "weekday": "周一",
          "task": "文档日｜ONNX 图、opset、动态轴、Netron；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 240,
          "weekday": "周二",
          "task": "基准日｜PyTorch→ONNX、输入输出对齐；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 241,
          "weekday": "周三",
          "task": "实现日｜导出 ONNX，Netron 检查每一层；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 242,
          "weekday": "周四",
          "task": "优化日｜ONNX Runtime 跑通，和 PyTorch 对齐误差；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 243,
          "weekday": "周五",
          "task": "对比日｜转换失败常见原因；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 244,
          "weekday": "周六",
          "task": "项目日｜模型转换脚本 + 对齐报告；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 245,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 36,
      "phase": "P5",
      "title": "量化与压缩",
      "days": [
        {
          "d": 246,
          "weekday": "周一",
          "task": "文档日｜FP32/FP16/INT8、校准、精度损失；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 247,
          "weekday": "周二",
          "task": "基准日｜剪枝、蒸馏、通道裁剪直觉；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 248,
          "weekday": "周三",
          "task": "实现日｜PTQ 量化，比较精度/延迟/体积；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 249,
          "weekday": "周四",
          "task": "优化日｜QAT 或混合精度，修复精度下降；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 250,
          "weekday": "周五",
          "task": "对比日｜量化公式；为什么需要校准集；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 251,
          "weekday": "周六",
          "task": "项目日｜量化对比表 + 选择建议；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 252,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 37,
      "phase": "P5",
      "title": "推理运行时",
      "days": [
        {
          "d": 253,
          "weekday": "周一",
          "task": "文档日｜ONNX Runtime / NCNN / TFLite / TensorRT；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 254,
          "weekday": "周二",
          "task": "基准日｜线程、内存池、算子融合、图优化；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 255,
          "weekday": "周三",
          "task": "实现日｜同一模型跑 3 个 runtime，记录延迟；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 256,
          "weekday": "周四",
          "task": "优化日｜NCNN 交叉编译到 Pi，跑通；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 257,
          "weekday": "周五",
          "task": "对比日｜runtime 选型的 5 个维度；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 258,
          "weekday": "周六",
          "task": "项目日｜多 runtime benchmark；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 259,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 38,
      "phase": "P5",
      "title": "C++ 推理与预处理",
      "days": [
        {
          "d": 260,
          "weekday": "周一",
          "task": "文档日｜C++ RAII、vector、OpenCV Mat、接口设计；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 261,
          "weekday": "周二",
          "task": "基准日｜letterbox、归一化、颜色转换、后处理；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 262,
          "weekday": "周三",
          "task": "实现日｜写 C++ 推理程序：读图→推理→画框；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 263,
          "weekday": "周四",
          "task": "优化日｜与 Python 结果逐像素对齐；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 264,
          "weekday": "周五",
          "task": "对比日｜预处理误差来源；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 265,
          "weekday": "周六",
          "task": "项目日｜C++ 图像推理 CLI；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 266,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 39,
      "phase": "P5",
      "title": "实时摄像头管线",
      "days": [
        {
          "d": 267,
          "weekday": "周一",
          "task": "文档日｜V4L2/GStreamer + 推理线程 + 队列；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 268,
          "weekday": "周二",
          "task": "基准日｜零拷贝、双缓冲、背压、帧丢弃；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 269,
          "weekday": "周三",
          "task": "实现日｜摄像头实时推理，目标 15 FPS；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 270,
          "weekday": "周四",
          "task": "优化日｜加入跟踪或计数，输出事件；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 271,
          "weekday": "周五",
          "task": "对比日｜延迟与吞吐；如何测端到端；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 272,
          "weekday": "周六",
          "task": "项目日｜实时视觉 demo：摄像头 + 框 + FPS；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 273,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 40,
      "phase": "P5",
      "title": "性能分析",
      "days": [
        {
          "d": 274,
          "weekday": "周一",
          "task": "文档日｜延迟分解：采集、预处理、推理、后处理；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 275,
          "weekday": "周二",
          "task": "基准日｜CPU/GPU/NPU、温度、频率、内存带宽；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 276,
          "weekday": "周三",
          "task": "实现日｜用 perf/top/tegrastats 采样；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 277,
          "weekday": "周四",
          "task": "优化日｜优化 1 个瓶颈，做 A/B 对比；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 278,
          "weekday": "周五",
          "task": "对比日｜Amdahl 定律；木桶效应；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 279,
          "weekday": "周六",
          "task": "项目日｜性能报告：基线、优化、结论；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 280,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 41,
      "phase": "P5",
      "title": "多线程与内存",
      "days": [
        {
          "d": 281,
          "weekday": "周一",
          "task": "文档日｜线程池、无锁队列、条件变量；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 282,
          "weekday": "周二",
          "task": "基准日｜内存对齐、零拷贝、缓存友好；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 283,
          "weekday": "周三",
          "task": "实现日｜生产者消费者推理管线，压测；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 284,
          "weekday": "周四",
          "task": "优化日｜把拷贝次数从 3 降到 1；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 285,
          "weekday": "周五",
          "task": "对比日｜竞态、死锁、伪共享；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 286,
          "weekday": "周六",
          "task": "项目日｜高吞吐推理管线；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 287,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 42,
      "phase": "P5",
      "title": "稳定性与产品化",
      "days": [
        {
          "d": 288,
          "weekday": "周一",
          "task": "文档日｜看门狗、温控、日志、崩溃重启；读官方文档，画数据流/算子表",
          "output": "数据流图",
          "rest": false,
          "gate": null
        },
        {
          "d": 289,
          "weekday": "周二",
          "task": "基准日｜systemd 服务、配置、OTA、远程诊断；跑 baseline，记录延迟/内存/精度",
          "output": "benchmark 表",
          "rest": false,
          "gate": null
        },
        {
          "d": 290,
          "weekday": "周三",
          "task": "实现日｜连续 8 小时稳定性测试；最小推理程序，先跑通再优化",
          "output": "可运行代码",
          "rest": false,
          "gate": null
        },
        {
          "d": 291,
          "weekday": "周四",
          "task": "优化日｜注入故障：断网、过热、存储满；profile 后只改 1 个瓶颈，做 A/B",
          "output": "A/B 对比",
          "rest": false,
          "gate": null
        },
        {
          "d": 292,
          "weekday": "周五",
          "task": "对比日｜设备现场排错清单；精度/延迟/内存做成表",
          "output": "选型表 + 结论",
          "rest": false,
          "gate": null
        },
        {
          "d": 293,
          "weekday": "周六",
          "task": "项目日｜稳定性报告 + 部署手册；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 294,
          "weekday": "周日",
          "task": "Gate｜Gate 3：端到端 demo、延迟/内存表、8 小时稳定性、部署手册；逐项打勾，未过项列入 buffer",
          "output": "Gate 清单 + 补救计划",
          "rest": false,
          "gate": "Gate 3：端到端 demo、延迟/内存表、8 小时稳定性、部署手册"
        }
      ]
    },
    {
      "n": 43,
      "phase": "P6",
      "title": "Capstone 需求与架构",
      "days": [
        {
          "d": 295,
          "weekday": "周一",
          "task": "设计日｜选题、用户故事、验收指标、范围控制；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 296,
          "weekday": "周二",
          "task": "实现日｜架构：采集→推理→事件→面板→部署；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 297,
          "weekday": "周三",
          "task": "集成日｜画架构图、接口、数据流；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 298,
          "weekday": "周四",
          "task": "测试日｜列风险清单与 4 周计划；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 299,
          "weekday": "周五",
          "task": "评审日｜项目评审：范围是否可控；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 300,
          "weekday": "周六",
          "task": "项目日｜Capstone 设计文档 v1；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 301,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 44,
      "phase": "P6",
      "title": "数据与模型 baseline",
      "days": [
        {
          "d": 302,
          "weekday": "周一",
          "task": "设计日｜数据集、标注规范、训练/验证/测试切分；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 303,
          "weekday": "周二",
          "task": "实现日｜baseline 模型、指标、错误分析；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 304,
          "weekday": "周三",
          "task": "集成日｜完成数据 v1 + 训练 baseline；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 305,
          "weekday": "周四",
          "task": "测试日｜混淆矩阵/误检案例，定改进点；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 306,
          "weekday": "周五",
          "task": "评审日｜数据泄漏检查；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 307,
          "weekday": "周六",
          "task": "项目日｜模型 v1 + 数据卡；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 308,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 45,
      "phase": "P6",
      "title": "端侧采集与推理",
      "days": [
        {
          "d": 309,
          "weekday": "周一",
          "task": "设计日｜板端摄像头、格式、分辨率、帧率；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 310,
          "weekday": "周二",
          "task": "实现日｜模型部署、预处理对齐、C++ 封装；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 311,
          "weekday": "周三",
          "task": "集成日｜端到端跑通 10 FPS；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 312,
          "weekday": "周四",
          "task": "测试日｜记录延迟、内存、温度；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 313,
          "weekday": "周五",
          "task": "评审日｜端侧误差排查；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 314,
          "weekday": "周六",
          "task": "项目日｜端侧推理 v1 + 日志；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 315,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 46,
      "phase": "P6",
      "title": "服务化与可视化",
      "days": [
        {
          "d": 316,
          "weekday": "周一",
          "task": "设计日｜HTTP/MQTT、事件格式、API；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 317,
          "weekday": "周二",
          "task": "实现日｜Web 面板、日志、告警；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 318,
          "weekday": "周三",
          "task": "集成日｜设备上报检测事件；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 319,
          "weekday": "周四",
          "task": "测试日｜做一个最小 dashboard；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 320,
          "weekday": "周五",
          "task": "评审日｜断网重连与消息丢失；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 321,
          "weekday": "周六",
          "task": "项目日｜端云闭环 demo；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 322,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 47,
      "phase": "P6",
      "title": "优化与稳定性",
      "days": [
        {
          "d": 323,
          "weekday": "周一",
          "task": "设计日｜量化、线程、分辨率、ROI；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 324,
          "weekday": "周二",
          "task": "实现日｜温控、看门狗、重启、资源限制；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 325,
          "weekday": "周三",
          "task": "集成日｜把 FPS 提升 30% 或延迟降 30%；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 326,
          "weekday": "周四",
          "task": "测试日｜8 小时稳定性 + 故障注入；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 327,
          "weekday": "周五",
          "task": "评审日｜优化是否影响精度；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 328,
          "weekday": "周六",
          "task": "项目日｜性能与稳定性报告；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 329,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 48,
      "phase": "P6",
      "title": "测试、文档、演示",
      "days": [
        {
          "d": 330,
          "weekday": "周一",
          "task": "设计日｜测试矩阵：功能、边界、异常、性能；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 331,
          "weekday": "周二",
          "task": "实现日｜README、接线图、部署脚本、演示视频；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 332,
          "weekday": "周三",
          "task": "集成日｜从零按文档复现一遍；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 333,
          "weekday": "周四",
          "task": "测试日｜录 3 分钟演示，写项目主页；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 334,
          "weekday": "周五",
          "task": "评审日｜别人能否在 30 分钟内跑起来；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 335,
          "weekday": "周六",
          "task": "项目日｜Capstone v1.0 + 发布页；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 336,
          "weekday": "周日",
          "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
          "output": "恢复精力",
          "rest": true,
          "gate": null
        }
      ]
    },
    {
      "n": 49,
      "phase": "P6",
      "title": "作品集与简历",
      "days": [
        {
          "d": 337,
          "weekday": "周一",
          "task": "设计日｜项目叙事：问题、方案、指标、反思；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 338,
          "weekday": "周二",
          "task": "实现日｜简历一页法、STAR、量化结果；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 339,
          "weekday": "周三",
          "task": "集成日｜重写 3 个项目 README；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 340,
          "weekday": "周四",
          "task": "测试日｜做作品集首页 + PDF；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 341,
          "weekday": "周五",
          "task": "评审日｜每个项目 90 秒口述；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 342,
          "weekday": "周六",
          "task": "项目日｜作品集 v1 + 简历 v1；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 343,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 50,
      "phase": "P6",
      "title": "面试基础",
      "days": [
        {
          "d": 344,
          "weekday": "周一",
          "task": "设计日｜C/内存/进程/线程/Linux 启动；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 345,
          "weekday": "周二",
          "task": "实现日｜驱动/设备树/I2C/SPI/性能；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 346,
          "weekday": "周三",
          "task": "集成日｜50 道八股 + 手写代码；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 347,
          "weekday": "周四",
          "task": "测试日｜10 道系统设计题；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 348,
          "weekday": "周五",
          "task": "评审日｜模拟技术面 45 分钟；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 349,
          "weekday": "周六",
          "task": "项目日｜错题本 + 答案卡；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 350,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 51,
      "phase": "P6",
      "title": "项目深挖与模拟面试",
      "days": [
        {
          "d": 351,
          "weekday": "周一",
          "task": "设计日｜项目难点、取舍、指标、失败；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 352,
          "weekday": "周二",
          "task": "实现日｜ML/CV：BN、量化、mAP、部署；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 353,
          "weekday": "周三",
          "task": "集成日｜3 轮模拟面试，录音复盘；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 354,
          "weekday": "周四",
          "task": "测试日｜补 2 个最弱知识点；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 355,
          "weekday": "周五",
          "task": "评审日｜白板画架构 + 数据流；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 356,
          "weekday": "周六",
          "task": "项目日｜面试复盘报告；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 357,
          "weekday": "周日",
          "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        }
      ]
    },
    {
      "n": 52,
      "phase": "P6",
      "title": "年度复盘与发布",
      "days": [
        {
          "d": 358,
          "weekday": "周一",
          "task": "设计日｜整理 365 天产出、数据、作品；画架构/接口/数据流",
          "output": "设计图 + 风险清单",
          "rest": false,
          "gate": null
        },
        {
          "d": 359,
          "weekday": "周二",
          "task": "实现日｜下一阶段：求职、深造或开源；写最小可运行版本",
          "output": "可运行增量",
          "rest": false,
          "gate": null
        },
        {
          "d": 360,
          "weekday": "周三",
          "task": "集成日｜发布最终 capstone + 作品集；端到端跑通，记录阻塞点",
          "output": "集成日志",
          "rest": false,
          "gate": null
        },
        {
          "d": 361,
          "weekday": "周四",
          "task": "测试日｜更新简历、GitHub、主页；边界/异常/性能，记录失败",
          "output": "测试记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 362,
          "weekday": "周五",
          "task": "评审日｜年度自评：能力、证据、缺口；自评 + 找 1 个外部反馈",
          "output": "评审记录",
          "rest": false,
          "gate": null
        },
        {
          "d": 363,
          "weekday": "周六",
          "task": "项目日｜年度总结 + 下一阶段 90 天计划；4 小时，提交 Git + README",
          "output": "commit + README",
          "rest": false,
          "gate": null
        },
        {
          "d": 364,
          "weekday": "周日",
          "task": "复盘日｜年度复盘：保留有效习惯，删除低效动作；1-3-7 复习 + 周报 + 下周计划",
          "output": "周报 KPT",
          "rest": false,
          "gate": null
        },
        {
          "d": 365,
          "weekday": "周一",
          "task": "毕业 Gate｜整理最终作品集：README、架构图、BOM、测试报告、3 分钟演示视频；做一次 30 分钟部署演练，记录失败点和下一版计划",
          "output": "作品集 + 部署手册 + 演示视频",
          "rest": false,
          "gate": "最终 Gate（D365）：陌生人按 README 30 分钟内复现，断网/重启/存储满后可恢复。"
        }
      ]
    }
  ],
  "days": [
    {
      "d": 1,
      "weekday": "周一",
      "task": "概念日｜选定 STM32F103C8T6（或 STM32G431）最小系统板，安装 STM32CubeIDE、ST-Link 驱动和 Git；新建工程，配置时钟树与 GPIO，点亮第一个 LED",
      "output": "点灯工程 + 工具链截图 + Git 仓库",
      "rest": false,
      "gate": null
    },
    {
      "d": 2,
      "weekday": "周二",
      "task": "概念日｜GPIO 输入/输出、推挽/开漏、上下拉、按键去抖；同时补 C 的变量、类型、位运算、结构体在寄存器操作中的写法；做 5 个最小验证",
      "output": "5 条验证记录 + 寄存器笔记",
      "rest": false,
      "gate": null
    },
    {
      "d": 3,
      "weekday": "周三",
      "task": "实验日｜按键控制 LED、流水灯、串口 printf 重定向；从空工程独立完成，不抄完整工程",
      "output": "可运行代码 + 接线图",
      "rest": false,
      "gate": null
    },
    {
      "d": 4,
      "weekday": "周四",
      "task": "调试日｜制造并定位 2 个真实问题：SWD 连不上、时钟配错、BOOT0 模式不对、复位异常；写根因和修复步骤",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 5,
      "weekday": "周五",
      "task": "自测日｜口述 GPIO 模式、时钟树、推挽 vs 开漏、按键去抖；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评",
      "rest": false,
      "gate": null
    },
    {
      "d": 6,
      "weekday": "周六",
      "task": "项目日｜按键 + LED + 串口状态机：短按切换模式、长按复位、串口返回当前状态；4 小时，提交 Git + README",
      "output": "commit + README + 状态机图",
      "rest": false,
      "gate": null
    },
    {
      "d": 7,
      "weekday": "周日",
      "task": "复盘日｜整理 CubeIDE 工程模板、接线规范和 BOM；固定每天学习时段；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT + BOM v1",
      "rest": false,
      "gate": null
    },
    {
      "d": 8,
      "weekday": "周一",
      "task": "概念日｜UART 帧格式、波特率、环形缓冲区；NVIC 中断优先级与现场保护；画 1 页中断/串口概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 9,
      "weekday": "周二",
      "task": "概念日｜定时器时基、PWM、输入捕获、编码器接口、独立看门狗；做 5 个最小验证，记下寄存器/ HAL 配置",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 10,
      "weekday": "周三",
      "task": "实验日｜写一个串口命令行：LED on/off/status；用中断收发，加环形缓冲；再做 PWM 呼吸灯",
      "output": "可运行代码 + 串口交互截图",
      "rest": false,
      "gate": null
    },
    {
      "d": 11,
      "weekday": "周四",
      "task": "调试日｜制造并定位 2 个问题：串口乱码/丢包、中断卡死、优先级配置错误；写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 12,
      "weekday": "周五",
      "task": "自测日｜画 UART 时序图；解释中断现场、优先级、临界区；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评",
      "rest": false,
      "gate": null
    },
    {
      "d": 13,
      "weekday": "周六",
      "task": "项目日｜串口控制舵机/电机 + 状态回传；加入超时和错误码；4 小时，提交 Git + README",
      "output": "commit + 演示视频",
      "rest": false,
      "gate": null
    },
    {
      "d": 14,
      "weekday": "周日",
      "task": "复盘日｜用逻辑分析仪抓 UART 和 PWM；整理中断/定时器模板；1-3-7 复习 + 周报",
      "output": "波形截图 + 周报",
      "rest": false,
      "gate": null
    },
    {
      "d": 15,
      "weekday": "周一",
      "task": "概念日｜ADC 分辨率、参考电压、采样时间、滤波；I2C 时序、地址、ACK/NACK；画 1 页总线概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 16,
      "weekday": "周二",
      "task": "概念日｜SPI 模式、片选、DMA 搬运；读一份传感器数据手册，标出寄存器/时序；做 5 个最小验证",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 17,
      "weekday": "周三",
      "task": "实验日｜I2C 扫描总线，读取 BME280/MPU6050（选一），串口输出；再用 SPI 驱动 OLED 或 Flash",
      "output": "可运行代码 + 读数截图",
      "rest": false,
      "gate": null
    },
    {
      "d": 18,
      "weekday": "周四",
      "task": "调试日｜制造并定位 2 个问题：I2C 无应答/上拉/地址错、SPI 模式错、DMA 覆盖；写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 19,
      "weekday": "周五",
      "task": "自测日｜口述 ADC 误差来源、I2C vs SPI、DMA 的作用；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评",
      "rest": false,
      "gate": null
    },
    {
      "d": 20,
      "weekday": "周六",
      "task": "项目日｜多传感器采集 + OLED 显示 + 串口 CSV；4 小时，提交 Git + README + 数据样例",
      "output": "commit + CSV 样例",
      "rest": false,
      "gate": null
    },
    {
      "d": 21,
      "weekday": "周日",
      "task": "复盘日｜用 Python/pyserial 画一次串口数据；整理传感器驱动模板；1-3-7 复习 + 周报",
      "output": "曲线图 + 周报",
      "rest": false,
      "gate": null
    },
    {
      "d": 22,
      "weekday": "周一",
      "task": "概念日｜状态机、事件驱动、非阻塞编程；看门狗、复位原因、错误处理；画 1 页状态图",
      "output": "1 页状态图",
      "rest": false,
      "gate": null
    },
    {
      "d": 23,
      "weekday": "周二",
      "task": "概念日｜FreeRTOS 任务、队列、信号量、优先级、栈；低功耗模式与唤醒；做 5 个最小验证",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 24,
      "weekday": "周三",
      "task": "实验日｜把多传感器项目改成 3 个 RTOS 任务：采集、显示、通信；用队列传数据",
      "output": "可运行代码 + 任务表",
      "rest": false,
      "gate": null
    },
    {
      "d": 25,
      "weekday": "周四",
      "task": "调试日｜制造并定位 2 个问题：栈溢出、优先级反转、死锁、看门狗复位；写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 26,
      "weekday": "周五",
      "task": "自测日｜口述 RTOS 调度、队列 vs 信号量、临界区、低功耗；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评",
      "rest": false,
      "gate": null
    },
    {
      "d": 27,
      "weekday": "周六",
      "task": "项目日｜最小节点 v1：采集 + OLED + 串口 + 看门狗，连续运行 2 小时；提交 Git + README + 接线图",
      "output": "commit + 2h 运行记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 28,
      "weekday": "周日",
      "task": "Gate｜Gate 0：从空工程独立完成点灯、按键、串口、定时器、ADC/I2C、RTOS 三任务；整理 BOM、接线图、踩坑清单；未过项列入 buffer",
      "output": "Gate 0 检查表 + 项目仓库",
      "rest": false,
      "gate": "Gate 0：能独立 bring-up 一块 STM32 最小系统，并解释每个外设的配置。"
    },
    {
      "d": 29,
      "weekday": "周一",
      "task": "概念日｜先用 30 分钟回顾 C 的编译、类型、控制流；再学指针与地址、指针运算、数组退化、const、函数指针；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 30,
      "weekday": "周二",
      "task": "概念日｜字符串、结构体、枚举、位运算、内存布局；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 31,
      "weekday": "周三",
      "task": "实验日｜指针 15 题：交换、遍历、二维数组、回调；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 32,
      "weekday": "周四",
      "task": "调试日｜实现动态字符串库：append/free/边界检查；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 33,
      "weekday": "周五",
      "task": "自测日｜口述野指针、悬空指针、内存泄漏、ABI；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 34,
      "weekday": "周六",
      "task": "项目日｜文本统计工具：行/词/字符/最长行 + Valgrind；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 35,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 36,
      "weekday": "周一",
      "task": "概念日｜C++ 编译、引用、const、命名空间、函数重载；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 37,
      "weekday": "周二",
      "task": "概念日｜类、构造/析构、RAII、拷贝与移动、异常边界；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 38,
      "weekday": "周三",
      "task": "实验日｜把文本统计工具重构成 C++ 类：Resource 包装；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 39,
      "weekday": "周四",
      "task": "调试日｜写一个文件日志器：RAII 自动关闭 + 错误处理；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 40,
      "weekday": "周五",
      "task": "自测日｜口述 RAII 解决什么问题；拷贝 vs 移动；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 41,
      "weekday": "周六",
      "task": "项目日｜C++ CLI 文本工具 v1：类设计 + 单元测试；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 42,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 43,
      "weekday": "周一",
      "task": "概念日｜vector/string/map、迭代器、算法、lambda；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 44,
      "weekday": "周二",
      "task": "概念日｜unique_ptr/shared_ptr、移动语义、CMake、测试；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 45,
      "weekday": "周三",
      "task": "实验日｜用 STL 重写环形缓冲区与生产者消费者；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 46,
      "weekday": "周四",
      "task": "调试日｜CMake 多目标构建 + CTest + sanitizer；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 47,
      "weekday": "周五",
      "task": "自测日｜STL 复杂度；shared_ptr 循环引用怎么破；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 48,
      "weekday": "周六",
      "task": "项目日｜C++ 系统信息工具：STL + CMake + 测试；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 49,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 50,
      "weekday": "周一",
      "task": "概念日｜头文件、链接、extern \"C\"、ABI、静态/动态库；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 51,
      "weekday": "周二",
      "task": "概念日｜GDB、Valgrind、ASan/UBSan、日志、错误码；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 52,
      "weekday": "周三",
      "task": "实验日｜写一个 C 库，用 C++ 调用；再反向导出 C 接口；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 53,
      "weekday": "周四",
      "task": "调试日｜制造 5 个越界/悬空/竞态 bug，用工具定位；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 54,
      "weekday": "周五",
      "task": "自测日｜C++ 为什么需要 extern C；name mangling 是什么；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 55,
      "weekday": "周六",
      "task": "项目日｜C/C++ 混合的传感器协议解析器 + 压测；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 56,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 57,
      "weekday": "周一",
      "task": "概念日｜进程、fork/exec/wait、文件描述符、open/read/write；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 58,
      "weekday": "周二",
      "task": "概念日｜pthread、互斥锁、条件变量、信号、守护进程；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 59,
      "weekday": "周三",
      "task": "实验日｜进程树 + 文件复制 + 目录递归统计；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 60,
      "weekday": "周四",
      "task": "调试日｜环形缓冲区 + 生产者消费者，压测 1 万条；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 61,
      "weekday": "周五",
      "task": "自测日｜进程 vs 线程；死锁四条件；阻塞 IO；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 62,
      "weekday": "周六",
      "task": "项目日｜C 多线程日志采集器：队列、落盘、轮转；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 63,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 64,
      "weekday": "周一",
      "task": "概念日｜电压/电流/上拉/去抖；UART/I2C/SPI 协议与波形；合上资料画 1 页概念图",
      "output": "1 页概念图",
      "rest": false,
      "gate": null
    },
    {
      "d": 65,
      "weekday": "周二",
      "task": "概念日｜GPIO/PWM/ADC；链表、哈希、排序、复杂度；做 5 个最小验证，记下命令/代码",
      "output": "5 条验证记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 66,
      "weekday": "周三",
      "task": "实验日｜万用表测电压；USB-TTL 看串口日志；从空目录独立完成，不抄完整答案",
      "output": "可运行代码/实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 67,
      "weekday": "周四",
      "task": "调试日｜逻辑分析仪抓 UART/I2C；实现线程安全环形队列；制造 2 个错误并修复，写根因",
      "output": "错误日志 + 根因",
      "rest": false,
      "gate": null
    },
    {
      "d": 68,
      "weekday": "周五",
      "task": "自测日｜画 UART/I2C/SPI 时序对比表；复杂度分析；闭卷 20 分钟 + 口述 5 分钟",
      "output": "错题 + 自评分",
      "rest": false,
      "gate": null
    },
    {
      "d": 69,
      "weekday": "周六",
      "task": "项目日｜串口温度传感器 + CSV 记录 + 环形缓冲；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 70,
      "weekday": "周日",
      "task": "Gate｜Gate 1：C/C++、Linux、硬件与调试逐项打勾；未过项列入 buffer；逐项打勾，未过项列入 buffer",
      "output": "Gate 清单 + 补救计划",
      "rest": false,
      "gate": "Gate 1：C/C++、Linux、硬件与调试逐项打勾；未过项列入 buffer"
    },
    {
      "d": 71,
      "weekday": "周一",
      "task": "源码日｜ARMv8 寄存器、异常等级、内存映射、ABI；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 72,
      "weekday": "周二",
      "task": "板端日｜交叉编译工具链、sysroot、动态库、ELF；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 73,
      "weekday": "周三",
      "task": "实验日｜交叉编译 hello，用 file/readelf/ldd 分析；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 74,
      "weekday": "周四",
      "task": "调试日｜用 scp 部署到 Pi，配置 SSH 免密；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 75,
      "weekday": "周五",
      "task": "排错日｜为什么不能在 x86 直接运行 ARM 二进制；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 76,
      "weekday": "周六",
      "task": "项目日｜交叉编译 + systemd 服务 + 日志；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 77,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 78,
      "weekday": "周一",
      "task": "源码日｜ROM→SPL→U-Boot→Kernel→rootfs 启动链；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 79,
      "weekday": "周二",
      "task": "板端日｜U-Boot 命令、环境变量、bootargs、串口控制台；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 80,
      "weekday": "周三",
      "task": "实验日｜串口抓完整启动日志，标注每个阶段；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 81,
      "weekday": "周四",
      "task": "调试日｜修改 bootargs 与打印级别，观察差异；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 82,
      "weekday": "周五",
      "task": "排错日｜画启动链；解释 kernel panic 排查顺序；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 83,
      "weekday": "周六",
      "task": "项目日｜启动日志注释报告 + 串口登录脚本；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 84,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 85,
      "weekday": "周一",
      "task": "源码日｜源码结构、Kconfig、Makefile、配置裁剪；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 86,
      "weekday": "周二",
      "task": "板端日｜编译内核、设备树、模块加载与卸载；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 87,
      "weekday": "周三",
      "task": "实验日｜在 QEMU 或 Pi 上编译并启动自定义内核；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 88,
      "weekday": "周四",
      "task": "调试日｜写 hello module，insmod/rmmod，看 dmesg；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 89,
      "weekday": "周五",
      "task": "排错日｜内核空间与用户空间；模块签名；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 90,
      "weekday": "周六",
      "task": "项目日｜自定义内核 + 模块 + 启动脚本；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 91,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 92,
      "weekday": "周一",
      "task": "源码日｜FHS、/proc /sys /dev、init、BusyBox；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 93,
      "weekday": "周二",
      "task": "板端日｜systemd、动态库、用户与权限、只读 rootfs；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 94,
      "weekday": "周三",
      "task": "实验日｜用 BusyBox 手工构建最小 rootfs；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 95,
      "weekday": "周四",
      "task": "调试日｜在 QEMU 启动最小系统，修复 init 或库缺失；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 96,
      "weekday": "周五",
      "task": "排错日｜rootfs 启动失败的 5 种原因；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 97,
      "weekday": "周六",
      "task": "项目日｜最小可启动系统 + 启动说明；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 98,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 99,
      "weekday": "周一",
      "task": "源码日｜systemd unit、依赖、日志、定时器；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 100,
      "weekday": "周二",
      "task": "板端日｜交叉编译部署、动态库 RPATH、版本管理；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 101,
      "weekday": "周三",
      "task": "实验日｜写一个开机自启的相机快照服务；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 102,
      "weekday": "周四",
      "task": "调试日｜模拟服务崩溃，用 journalctl 定位并修复；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 103,
      "weekday": "周五",
      "task": "排错日｜systemd 排错 10 问；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 104,
      "weekday": "周六",
      "task": "项目日｜开机自启相机服务 + 日志轮转；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 105,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 106,
      "weekday": "周一",
      "task": "源码日｜模块、字符设备、file_operations、主次设备号；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 107,
      "weekday": "周二",
      "task": "板端日｜copy_to_user/from_user、ioctl、并发保护；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 108,
      "weekday": "周三",
      "task": "实验日｜hello 字符设备驱动 + 用户态测试；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 109,
      "weekday": "周四",
      "task": "调试日｜虚拟 FIFO 设备：读写、阻塞、非阻塞；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 110,
      "weekday": "周五",
      "task": "排错日｜驱动加载失败排查顺序；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 111,
      "weekday": "周六",
      "task": "项目日｜字符设备驱动 + 测试程序 + Makefile；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 112,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 113,
      "weekday": "周一",
      "task": "源码日｜DTS 语法、节点、compatible、pinctrl；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 114,
      "weekday": "周二",
      "task": "板端日｜GPIO 子系统、中断、LED/按键；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 115,
      "weekday": "周三",
      "task": "实验日｜写 DT overlay，点亮 LED、读按键；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 116,
      "weekday": "周四",
      "task": "调试日｜按键中断驱动，消抖与中断上下文；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 117,
      "weekday": "周五",
      "task": "排错日｜设备树匹配流程；probe 何时调用；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 118,
      "weekday": "周六",
      "task": "项目日｜GPIO 按键中断驱动 + 事件上报；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 119,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 120,
      "weekday": "周一",
      "task": "源码日｜I2C 协议、i2c-tools、i2c 子系统；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 121,
      "weekday": "周二",
      "task": "板端日｜SPI 模式与时序、spidev、IIO 子系统；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 122,
      "weekday": "周三",
      "task": "实验日｜i2cdetect/i2cget 读传感器寄存器；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 123,
      "weekday": "周四",
      "task": "调试日｜写 I2C 传感器驱动，暴露 sysfs/IIO；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 124,
      "weekday": "周五",
      "task": "排错日｜I2C 与 SPI 的优缺点、典型速率；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 125,
      "weekday": "周六",
      "task": "项目日｜I2C 温湿度传感器驱动 + 采样程序；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 126,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 127,
      "weekday": "周一",
      "task": "源码日｜printk、dynamic debug、ftrace、perf；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 128,
      "weekday": "周二",
      "task": "板端日｜内存分配、锁、竞态、中断上下文；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 129,
      "weekday": "周三",
      "task": "实验日｜用 ftrace 追一次延迟，找热点；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 130,
      "weekday": "周四",
      "task": "调试日｜制造竞态并用锁修复，压测 1 小时；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 131,
      "weekday": "周五",
      "task": "排错日｜oops/panic 日志阅读；debugfs 用途；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 132,
      "weekday": "周六",
      "task": "项目日｜驱动稳定性报告：压测、日志、修复；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 133,
      "weekday": "周日",
      "task": "复盘日｜Phase 2 里程碑自检：启动、内核、驱动、DT 清单；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 134,
      "weekday": "周一",
      "task": "源码日｜Buildroot 结构、menuconfig、包、overlay；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 135,
      "weekday": "周二",
      "task": "板端日｜rootfs 裁剪、启动脚本、镜像烧录；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 136,
      "weekday": "周三",
      "task": "实验日｜构建最小 image，启动并配置网络；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 137,
      "weekday": "周四",
      "task": "调试日｜添加自定义包 + 开机服务；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 138,
      "weekday": "周五",
      "task": "排错日｜Buildroot 与 Yocto 如何选择；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 139,
      "weekday": "周六",
      "task": "项目日｜带 SSH 与摄像头工具的 Buildroot 镜像；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 140,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 141,
      "weekday": "周一",
      "task": "源码日｜Layer、Recipe、BitBake、任务链；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 142,
      "weekday": "周二",
      "task": "板端日｜SDK、devtool、镜像定制；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 143,
      "weekday": "周三",
      "task": "实验日｜构建 core-image-minimal，跑 QEMU；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 144,
      "weekday": "周四",
      "task": "调试日｜写自定义 layer + app recipe；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 145,
      "weekday": "周五",
      "task": "排错日｜Yocto 常见变量与目录结构；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 146,
      "weekday": "周六",
      "task": "项目日｜自定义 layer + 应用 recipe + 文档；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 147,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 148,
      "weekday": "周一",
      "task": "源码日｜V4L2 框架、ioctl、格式、缓冲区；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 149,
      "weekday": "周二",
      "task": "板端日｜YUYV/MJPEG、DMA、帧率、曝光；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 150,
      "weekday": "周三",
      "task": "实验日｜v4l2-ctl 列格式、抓 10 帧保存；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 151,
      "weekday": "周四",
      "task": "调试日｜C 程序 mmap 取流，保存 JPEG/RAW；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 152,
      "weekday": "周五",
      "task": "排错日｜采集卡顿：带宽、格式、缓冲怎么查；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 153,
      "weekday": "周六",
      "task": "项目日｜摄像头采集器：参数、日志、异常恢复；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 154,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 155,
      "weekday": "周一",
      "task": "源码日｜Pipeline、Element、Pad、Caps；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 156,
      "weekday": "周二",
      "task": "板端日｜H.264、RTSP、硬件编码、延迟；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 157,
      "weekday": "周三",
      "task": "实验日｜gst-launch 测试摄像头预览与录像；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 158,
      "weekday": "周四",
      "task": "调试日｜搭建 RTSP 推流，VLC 拉流；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 159,
      "weekday": "周五",
      "task": "排错日｜pipeline 延迟定位 5 步；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 160,
      "weekday": "周六",
      "task": "项目日｜RTSP 摄像头 + 低延迟参数；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 161,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 162,
      "weekday": "周一",
      "task": "源码日｜TCP/UDP、SSH、防火墙、时间同步；读文档/源码，画数据流或时序图",
      "output": "1 页图 + 3 个问题",
      "rest": false,
      "gate": null
    },
    {
      "d": 163,
      "weekday": "周二",
      "task": "板端日｜OTA 分区、回滚、签名、RAUC 思路；上板验证，保存串口/dmesg 日志",
      "output": "板端日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 164,
      "weekday": "周三",
      "task": "实验日｜设备联网、静态 IP、远程命令；上板跑通，记录版本与接线",
      "output": "可复现实验记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 165,
      "weekday": "周四",
      "task": "调试日｜A/B 分区模拟 + 简单 OTA 脚本；复现→缩小范围→看 dmesg/ftrace",
      "output": "根因 + 修复",
      "rest": false,
      "gate": null
    },
    {
      "d": 166,
      "weekday": "周五",
      "task": "排错日｜设备离线排查清单；不查答案，先写排查顺序",
      "output": "排查清单 + 答案",
      "rest": false,
      "gate": null
    },
    {
      "d": 167,
      "weekday": "周六",
      "task": "项目日｜远程监控 demo + 升级脚本；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 168,
      "weekday": "周日",
      "task": "Gate｜Gate 2：Buildroot/Yocto、V4L2、RTSP、远程部署全部演示；逐项打勾，未过项列入 buffer",
      "output": "Gate 清单 + 补救计划",
      "rest": false,
      "gate": "Gate 2：Buildroot/Yocto、V4L2、RTSP、远程部署全部演示"
    },
    {
      "d": 169,
      "weekday": "周一",
      "task": "理论日｜向量、矩阵、乘法、秩、特征值；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 170,
      "weekday": "周二",
      "task": "代码日｜范数、正交、SVD、PCA 直觉；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 171,
      "weekday": "周三",
      "task": "Notebook｜NumPy 实现矩阵运算与图像变换；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 172,
      "weekday": "周四",
      "task": "复现日｜用 PCA 压缩一张图，比较误差；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 173,
      "weekday": "周五",
      "task": "自测日｜手推 2×2 特征值；解释卷积矩阵；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 174,
      "weekday": "周六",
      "task": "项目日｜线性代数 Notebook：图像旋转与压缩；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 175,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 176,
      "weekday": "周一",
      "task": "理论日｜随机变量、分布、期望、方差、贝叶斯；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 177,
      "weekday": "周二",
      "task": "代码日｜导数、链式法则、梯度、凸性；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 178,
      "weekday": "周三",
      "task": "Notebook｜用直方图/QQ 图分析数据集；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 179,
      "weekday": "周四",
      "task": "复现日｜手写梯度下降拟合直线；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 180,
      "weekday": "周五",
      "task": "自测日｜解释准确率、召回率、ROC-AUC；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 181,
      "weekday": "周六",
      "task": "项目日｜统计实验 Notebook + 结论；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 182,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 183,
      "weekday": "周一",
      "task": "理论日｜ndarray、广播、索引、向量化；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 184,
      "weekday": "周二",
      "task": "代码日｜Pandas 清洗、分组、可视化；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 185,
      "weekday": "周三",
      "task": "Notebook｜清洗一个真实 CSV，处理缺失与异常；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 186,
      "weekday": "周四",
      "task": "复现日｜画 6 张图：分布、相关、趋势；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 187,
      "weekday": "周五",
      "task": "自测日｜广播规则；向量化为何快；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 188,
      "weekday": "周六",
      "task": "项目日｜数据探索报告 + 可复现 Notebook；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 189,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 190,
      "weekday": "周一",
      "task": "理论日｜像素、颜色空间、直方图、卷积、滤波；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 191,
      "weekday": "周二",
      "task": "代码日｜阈值、形态学、边缘、轮廓；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 192,
      "weekday": "周三",
      "task": "Notebook｜OpenCV 实现灰度、模糊、边缘、形态学；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 193,
      "weekday": "周四",
      "task": "复现日｜缺陷检测 pipeline：阈值 + 轮廓 + 面积；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 194,
      "weekday": "周五",
      "task": "自测日｜卷积核、边缘算子、形态学作用；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 195,
      "weekday": "周六",
      "task": "项目日｜零件缺陷检测 v1：参数面板 + 结果图；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 196,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 197,
      "weekday": "周一",
      "task": "理论日｜SIFT/ORB、匹配、单应、相机模型；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 198,
      "weekday": "周二",
      "task": "代码日｜标定、畸变、双目与深度直觉；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 199,
      "weekday": "周三",
      "task": "Notebook｜ORB 匹配两张图，画匹配点；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 200,
      "weekday": "周四",
      "task": "复现日｜棋盘格标定，输出内参与畸变；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 201,
      "weekday": "周五",
      "task": "自测日｜为什么需要标定；对极几何直觉；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 202,
      "weekday": "周六",
      "task": "项目日｜特征匹配 + 标定报告；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 203,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 204,
      "weekday": "周一",
      "task": "理论日｜检测指标、IoU、mAP、数据标注；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 205,
      "weekday": "周二",
      "task": "代码日｜传统方法与深度学习的选择；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 206,
      "weekday": "周三",
      "task": "Notebook｜标注 100 张图，训练一个传统分类器；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 207,
      "weekday": "周四",
      "task": "复现日｜把上周缺陷检测做成 CLI + 报告；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 208,
      "weekday": "周五",
      "task": "自测日｜IoU 手算；误检与漏检分析；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 209,
      "weekday": "周六",
      "task": "项目日｜工业缺陷检测 v2：数据、指标、可视化；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 210,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 211,
      "weekday": "周一",
      "task": "理论日｜监督/无监督、训练/验证/测试、过拟合；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 212,
      "weekday": "周二",
      "task": "代码日｜线性回归、逻辑回归、决策树、KNN；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 213,
      "weekday": "周三",
      "task": "Notebook｜sklearn 完成 3 个数据集基线；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 214,
      "weekday": "周四",
      "task": "复现日｜交叉验证 + 网格搜索 + 学习曲线；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 215,
      "weekday": "周五",
      "task": "自测日｜偏差与方差；为什么要分层抽样；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 216,
      "weekday": "周六",
      "task": "项目日｜ML 基线报告：3 个模型对比；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 217,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 218,
      "weekday": "周一",
      "task": "理论日｜张量、全连接、激活、损失、反向传播；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 219,
      "weekday": "周二",
      "task": "代码日｜优化器、学习率、正则、BatchNorm；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 220,
      "weekday": "周三",
      "task": "Notebook｜NumPy 手写两层 MLP 前向与反向；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 221,
      "weekday": "周四",
      "task": "复现日｜PyTorch 训练 MLP，对比手写梯度；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 222,
      "weekday": "周五",
      "task": "自测日｜手推链式法则；解释 BatchNorm；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 223,
      "weekday": "周六",
      "task": "项目日｜MLP 分类器 + 训练曲线；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 224,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 225,
      "weekday": "周一",
      "task": "理论日｜Conv/Pool/感受野、CNN 结构；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 226,
      "weekday": "周二",
      "task": "代码日｜Dataset/DataLoader、迁移学习、保存加载；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 227,
      "weekday": "周三",
      "task": "Notebook｜在 CIFAR-10 上训练小 CNN；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 228,
      "weekday": "周四",
      "task": "复现日｜ResNet18 迁移学习，目标 >90%；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 229,
      "weekday": "周五",
      "task": "自测日｜卷积输出尺寸计算；参数量；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 230,
      "weekday": "周六",
      "task": "项目日｜图像分类器 v1：训练/验证/混淆矩阵；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 231,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 232,
      "weekday": "周一",
      "task": "理论日｜数据增强、类别不平衡、早停；读教材/课程，手推 1 个公式",
      "output": "公式卡 + 1 页图",
      "rest": false,
      "gate": null
    },
    {
      "d": 233,
      "weekday": "周二",
      "task": "代码日｜超参搜索、混合精度、实验记录；用 NumPy/PyTorch 实现最小例子",
      "output": "可运行 Notebook",
      "rest": false,
      "gate": null
    },
    {
      "d": 234,
      "weekday": "周三",
      "task": "Notebook｜做 5 组消融：增强、BN、学习率、尺寸；数据→训练→可视化，保存曲线",
      "output": "Notebook + 图",
      "rest": false,
      "gate": null
    },
    {
      "d": 235,
      "weekday": "周四",
      "task": "复现日｜用 TensorBoard 记录并选出最佳模型；改 3 个条件做对照实验",
      "output": "对照表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 236,
      "weekday": "周五",
      "task": "自测日｜过拟合与欠拟合的判断和处理；闭卷推导 + 指标口述",
      "output": "错题 + 指标卡",
      "rest": false,
      "gate": null
    },
    {
      "d": 237,
      "weekday": "周六",
      "task": "项目日｜分类器 v2：实验表 + 模型卡；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 238,
      "weekday": "周日",
      "task": "复盘日｜Phase 4 里程碑自检：数学、CV、训练指标、模型卡；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 239,
      "weekday": "周一",
      "task": "文档日｜ONNX 图、opset、动态轴、Netron；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 240,
      "weekday": "周二",
      "task": "基准日｜PyTorch→ONNX、输入输出对齐；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 241,
      "weekday": "周三",
      "task": "实现日｜导出 ONNX，Netron 检查每一层；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 242,
      "weekday": "周四",
      "task": "优化日｜ONNX Runtime 跑通，和 PyTorch 对齐误差；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 243,
      "weekday": "周五",
      "task": "对比日｜转换失败常见原因；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 244,
      "weekday": "周六",
      "task": "项目日｜模型转换脚本 + 对齐报告；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 245,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 246,
      "weekday": "周一",
      "task": "文档日｜FP32/FP16/INT8、校准、精度损失；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 247,
      "weekday": "周二",
      "task": "基准日｜剪枝、蒸馏、通道裁剪直觉；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 248,
      "weekday": "周三",
      "task": "实现日｜PTQ 量化，比较精度/延迟/体积；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 249,
      "weekday": "周四",
      "task": "优化日｜QAT 或混合精度，修复精度下降；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 250,
      "weekday": "周五",
      "task": "对比日｜量化公式；为什么需要校准集；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 251,
      "weekday": "周六",
      "task": "项目日｜量化对比表 + 选择建议；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 252,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 253,
      "weekday": "周一",
      "task": "文档日｜ONNX Runtime / NCNN / TFLite / TensorRT；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 254,
      "weekday": "周二",
      "task": "基准日｜线程、内存池、算子融合、图优化；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 255,
      "weekday": "周三",
      "task": "实现日｜同一模型跑 3 个 runtime，记录延迟；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 256,
      "weekday": "周四",
      "task": "优化日｜NCNN 交叉编译到 Pi，跑通；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 257,
      "weekday": "周五",
      "task": "对比日｜runtime 选型的 5 个维度；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 258,
      "weekday": "周六",
      "task": "项目日｜多 runtime benchmark；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 259,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 260,
      "weekday": "周一",
      "task": "文档日｜C++ RAII、vector、OpenCV Mat、接口设计；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 261,
      "weekday": "周二",
      "task": "基准日｜letterbox、归一化、颜色转换、后处理；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 262,
      "weekday": "周三",
      "task": "实现日｜写 C++ 推理程序：读图→推理→画框；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 263,
      "weekday": "周四",
      "task": "优化日｜与 Python 结果逐像素对齐；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 264,
      "weekday": "周五",
      "task": "对比日｜预处理误差来源；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 265,
      "weekday": "周六",
      "task": "项目日｜C++ 图像推理 CLI；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 266,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 267,
      "weekday": "周一",
      "task": "文档日｜V4L2/GStreamer + 推理线程 + 队列；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 268,
      "weekday": "周二",
      "task": "基准日｜零拷贝、双缓冲、背压、帧丢弃；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 269,
      "weekday": "周三",
      "task": "实现日｜摄像头实时推理，目标 15 FPS；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 270,
      "weekday": "周四",
      "task": "优化日｜加入跟踪或计数，输出事件；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 271,
      "weekday": "周五",
      "task": "对比日｜延迟与吞吐；如何测端到端；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 272,
      "weekday": "周六",
      "task": "项目日｜实时视觉 demo：摄像头 + 框 + FPS；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 273,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 274,
      "weekday": "周一",
      "task": "文档日｜延迟分解：采集、预处理、推理、后处理；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 275,
      "weekday": "周二",
      "task": "基准日｜CPU/GPU/NPU、温度、频率、内存带宽；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 276,
      "weekday": "周三",
      "task": "实现日｜用 perf/top/tegrastats 采样；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 277,
      "weekday": "周四",
      "task": "优化日｜优化 1 个瓶颈，做 A/B 对比；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 278,
      "weekday": "周五",
      "task": "对比日｜Amdahl 定律；木桶效应；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 279,
      "weekday": "周六",
      "task": "项目日｜性能报告：基线、优化、结论；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 280,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 281,
      "weekday": "周一",
      "task": "文档日｜线程池、无锁队列、条件变量；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 282,
      "weekday": "周二",
      "task": "基准日｜内存对齐、零拷贝、缓存友好；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 283,
      "weekday": "周三",
      "task": "实现日｜生产者消费者推理管线，压测；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 284,
      "weekday": "周四",
      "task": "优化日｜把拷贝次数从 3 降到 1；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 285,
      "weekday": "周五",
      "task": "对比日｜竞态、死锁、伪共享；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 286,
      "weekday": "周六",
      "task": "项目日｜高吞吐推理管线；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 287,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 288,
      "weekday": "周一",
      "task": "文档日｜看门狗、温控、日志、崩溃重启；读官方文档，画数据流/算子表",
      "output": "数据流图",
      "rest": false,
      "gate": null
    },
    {
      "d": 289,
      "weekday": "周二",
      "task": "基准日｜systemd 服务、配置、OTA、远程诊断；跑 baseline，记录延迟/内存/精度",
      "output": "benchmark 表",
      "rest": false,
      "gate": null
    },
    {
      "d": 290,
      "weekday": "周三",
      "task": "实现日｜连续 8 小时稳定性测试；最小推理程序，先跑通再优化",
      "output": "可运行代码",
      "rest": false,
      "gate": null
    },
    {
      "d": 291,
      "weekday": "周四",
      "task": "优化日｜注入故障：断网、过热、存储满；profile 后只改 1 个瓶颈，做 A/B",
      "output": "A/B 对比",
      "rest": false,
      "gate": null
    },
    {
      "d": 292,
      "weekday": "周五",
      "task": "对比日｜设备现场排错清单；精度/延迟/内存做成表",
      "output": "选型表 + 结论",
      "rest": false,
      "gate": null
    },
    {
      "d": 293,
      "weekday": "周六",
      "task": "项目日｜稳定性报告 + 部署手册；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 294,
      "weekday": "周日",
      "task": "Gate｜Gate 3：端到端 demo、延迟/内存表、8 小时稳定性、部署手册；逐项打勾，未过项列入 buffer",
      "output": "Gate 清单 + 补救计划",
      "rest": false,
      "gate": "Gate 3：端到端 demo、延迟/内存表、8 小时稳定性、部署手册"
    },
    {
      "d": 295,
      "weekday": "周一",
      "task": "设计日｜选题、用户故事、验收指标、范围控制；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 296,
      "weekday": "周二",
      "task": "实现日｜架构：采集→推理→事件→面板→部署；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 297,
      "weekday": "周三",
      "task": "集成日｜画架构图、接口、数据流；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 298,
      "weekday": "周四",
      "task": "测试日｜列风险清单与 4 周计划；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 299,
      "weekday": "周五",
      "task": "评审日｜项目评审：范围是否可控；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 300,
      "weekday": "周六",
      "task": "项目日｜Capstone 设计文档 v1；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 301,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 302,
      "weekday": "周一",
      "task": "设计日｜数据集、标注规范、训练/验证/测试切分；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 303,
      "weekday": "周二",
      "task": "实现日｜baseline 模型、指标、错误分析；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 304,
      "weekday": "周三",
      "task": "集成日｜完成数据 v1 + 训练 baseline；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 305,
      "weekday": "周四",
      "task": "测试日｜混淆矩阵/误检案例，定改进点；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 306,
      "weekday": "周五",
      "task": "评审日｜数据泄漏检查；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 307,
      "weekday": "周六",
      "task": "项目日｜模型 v1 + 数据卡；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 308,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 309,
      "weekday": "周一",
      "task": "设计日｜板端摄像头、格式、分辨率、帧率；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 310,
      "weekday": "周二",
      "task": "实现日｜模型部署、预处理对齐、C++ 封装；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 311,
      "weekday": "周三",
      "task": "集成日｜端到端跑通 10 FPS；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 312,
      "weekday": "周四",
      "task": "测试日｜记录延迟、内存、温度；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 313,
      "weekday": "周五",
      "task": "评审日｜端侧误差排查；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 314,
      "weekday": "周六",
      "task": "项目日｜端侧推理 v1 + 日志；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 315,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 316,
      "weekday": "周一",
      "task": "设计日｜HTTP/MQTT、事件格式、API；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 317,
      "weekday": "周二",
      "task": "实现日｜Web 面板、日志、告警；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 318,
      "weekday": "周三",
      "task": "集成日｜设备上报检测事件；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 319,
      "weekday": "周四",
      "task": "测试日｜做一个最小 dashboard；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 320,
      "weekday": "周五",
      "task": "评审日｜断网重连与消息丢失；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 321,
      "weekday": "周六",
      "task": "项目日｜端云闭环 demo；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 322,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 323,
      "weekday": "周一",
      "task": "设计日｜量化、线程、分辨率、ROI；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 324,
      "weekday": "周二",
      "task": "实现日｜温控、看门狗、重启、资源限制；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 325,
      "weekday": "周三",
      "task": "集成日｜把 FPS 提升 30% 或延迟降 30%；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 326,
      "weekday": "周四",
      "task": "测试日｜8 小时稳定性 + 故障注入；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 327,
      "weekday": "周五",
      "task": "评审日｜优化是否影响精度；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 328,
      "weekday": "周六",
      "task": "项目日｜性能与稳定性报告；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 329,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 330,
      "weekday": "周一",
      "task": "设计日｜测试矩阵：功能、边界、异常、性能；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 331,
      "weekday": "周二",
      "task": "实现日｜README、接线图、部署脚本、演示视频；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 332,
      "weekday": "周三",
      "task": "集成日｜从零按文档复现一遍；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 333,
      "weekday": "周四",
      "task": "测试日｜录 3 分钟演示，写项目主页；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 334,
      "weekday": "周五",
      "task": "评审日｜别人能否在 30 分钟内跑起来；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 335,
      "weekday": "周六",
      "task": "项目日｜Capstone v1.0 + 发布页；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 336,
      "weekday": "周日",
      "task": "休息日｜不学新内容。散步、拉伸、整理桌面；最多 30 分钟浏览笔记。",
      "output": "恢复精力",
      "rest": true,
      "gate": null
    },
    {
      "d": 337,
      "weekday": "周一",
      "task": "设计日｜项目叙事：问题、方案、指标、反思；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 338,
      "weekday": "周二",
      "task": "实现日｜简历一页法、STAR、量化结果；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 339,
      "weekday": "周三",
      "task": "集成日｜重写 3 个项目 README；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 340,
      "weekday": "周四",
      "task": "测试日｜做作品集首页 + PDF；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 341,
      "weekday": "周五",
      "task": "评审日｜每个项目 90 秒口述；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 342,
      "weekday": "周六",
      "task": "项目日｜作品集 v1 + 简历 v1；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 343,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 344,
      "weekday": "周一",
      "task": "设计日｜C/内存/进程/线程/Linux 启动；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 345,
      "weekday": "周二",
      "task": "实现日｜驱动/设备树/I2C/SPI/性能；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 346,
      "weekday": "周三",
      "task": "集成日｜50 道八股 + 手写代码；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 347,
      "weekday": "周四",
      "task": "测试日｜10 道系统设计题；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 348,
      "weekday": "周五",
      "task": "评审日｜模拟技术面 45 分钟；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 349,
      "weekday": "周六",
      "task": "项目日｜错题本 + 答案卡；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 350,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 351,
      "weekday": "周一",
      "task": "设计日｜项目难点、取舍、指标、失败；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 352,
      "weekday": "周二",
      "task": "实现日｜ML/CV：BN、量化、mAP、部署；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 353,
      "weekday": "周三",
      "task": "集成日｜3 轮模拟面试，录音复盘；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 354,
      "weekday": "周四",
      "task": "测试日｜补 2 个最弱知识点；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 355,
      "weekday": "周五",
      "task": "评审日｜白板画架构 + 数据流；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 356,
      "weekday": "周六",
      "task": "项目日｜面试复盘报告；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 357,
      "weekday": "周日",
      "task": "复盘日｜回顾本周错题与产出，补上未完成实验；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 358,
      "weekday": "周一",
      "task": "设计日｜整理 365 天产出、数据、作品；画架构/接口/数据流",
      "output": "设计图 + 风险清单",
      "rest": false,
      "gate": null
    },
    {
      "d": 359,
      "weekday": "周二",
      "task": "实现日｜下一阶段：求职、深造或开源；写最小可运行版本",
      "output": "可运行增量",
      "rest": false,
      "gate": null
    },
    {
      "d": 360,
      "weekday": "周三",
      "task": "集成日｜发布最终 capstone + 作品集；端到端跑通，记录阻塞点",
      "output": "集成日志",
      "rest": false,
      "gate": null
    },
    {
      "d": 361,
      "weekday": "周四",
      "task": "测试日｜更新简历、GitHub、主页；边界/异常/性能，记录失败",
      "output": "测试记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 362,
      "weekday": "周五",
      "task": "评审日｜年度自评：能力、证据、缺口；自评 + 找 1 个外部反馈",
      "output": "评审记录",
      "rest": false,
      "gate": null
    },
    {
      "d": 363,
      "weekday": "周六",
      "task": "项目日｜年度总结 + 下一阶段 90 天计划；4 小时，提交 Git + README",
      "output": "commit + README",
      "rest": false,
      "gate": null
    },
    {
      "d": 364,
      "weekday": "周日",
      "task": "复盘日｜年度复盘：保留有效习惯，删除低效动作；1-3-7 复习 + 周报 + 下周计划",
      "output": "周报 KPT",
      "rest": false,
      "gate": null
    },
    {
      "d": 365,
      "weekday": "周一",
      "task": "毕业 Gate｜整理最终作品集：README、架构图、BOM、测试报告、3 分钟演示视频；做一次 30 分钟部署演练，记录失败点和下一版计划",
      "output": "作品集 + 部署手册 + 演示视频",
      "rest": false,
      "gate": "最终 Gate（D365）：陌生人按 README 30 分钟内复现，断网/重启/存储满后可恢复。"
    }
  ],
  "projects": [
    {
      "code": "P1",
      "id": "p1",
      "title": "C++ Linux 系统工具箱",
      "when": "第 6–8 周",
      "goal": "用 C++17 写一个可安装的命令行工具：RAII 管理资源、STL 组织数据、CMake 构建、CTest 测试，同时直接调用 POSIX C API。",
      "deliver": [
        "sysinfo 子命令：CPU、内存、磁盘、进程 Top5",
        "文本统计子命令：行/词/字符/最长行",
        "CMake + CTest + sanitizer + README"
      ],
      "accept": "换一台 Linux 机器，按 README 三条命令内跑通；ASan/UBSan 无报错。",
      "stretch": "加入 JSON 输出、日志轮转与 C 库绑定。"
    },
    {
      "code": "P2",
      "id": "p2",
      "title": "串口传感器采集器",
      "when": "第 9–10 周",
      "goal": "从 USB-TTL 或板端 UART 读取传感器数据，做解析、校验、落盘与断线重连。",
      "deliver": [
        "串口初始化与超时处理",
        "协议解析 + CRC 校验",
        "CSV 记录 + 断线重连 + systemd 服务"
      ],
      "accept": "拔插串口 10 次仍能自动恢复；数据无乱序。",
      "stretch": "加入简单的 curses 实时面板。"
    },
    {
      "code": "P3",
      "id": "p3",
      "title": "交叉编译相机快照服务",
      "when": "第 15–16 周",
      "goal": "在 x86 交叉编译 ARM 程序，部署到 Pi，开机自动抓图并保留最近 100 张。",
      "deliver": [
        "CMake 交叉编译配置",
        "V4L2 抓帧保存 JPEG",
        "systemd unit + 日志 + 磁盘配额"
      ],
      "accept": "重启板子后自动运行；SD 卡拔出再插回不崩溃。",
      "stretch": "加入 GPIO 触发拍照。"
    },
    {
      "code": "P4",
      "id": "p4",
      "title": "GPIO 字符驱动 + 设备树",
      "when": "第 17–19 周",
      "goal": "为按键或 LED 写一个字符设备驱动，通过设备树描述硬件，提供阻塞读与中断。",
      "deliver": [
        "DTS overlay + compatible 匹配",
        "file_operations + 中断 + 消抖",
        "用户态测试程序 + 压测脚本"
      ],
      "accept": "insmod 后 /dev 节点出现；按下按键 1000 次无丢失、无 oops。",
      "stretch": "加入 poll/epoll 支持与 sysfs 属性。"
    },
    {
      "code": "P5",
      "id": "p5",
      "title": "Buildroot 摄像头镜像",
      "when": "第 20–24 周",
      "goal": "构建一个可烧录的定制镜像：网络、SSH、摄像头工具、RTSP 推流、开机自启。",
      "deliver": [
        "defconfig + overlay + 自定义包",
        "GStreamer RTSP pipeline",
        "烧录脚本 + 部署文档"
      ],
      "accept": "从空白 SD 卡开始，30 分钟内复现出可拉流设备。",
      "stretch": "加入只读 rootfs 与 A/B 升级。"
    },
    {
      "code": "P6",
      "id": "p6",
      "title": "工业缺陷检测 v2",
      "when": "第 28–30 周",
      "goal": "用经典 CV 与轻量 ML 做缺陷检测，包含数据标注、指标、可视化与失败案例分析。",
      "deliver": [
        "100 张以上标注数据",
        "阈值/轮廓/分类器 pipeline",
        "IoU、误检率、漏检率、报告"
      ],
      "accept": "在同一测试集上给出可复现指标；能解释每个参数的作用。",
      "stretch": "加入相机标定与尺寸测量。"
    },
    {
      "code": "P7",
      "id": "p7",
      "title": "CNN 图像分类器",
      "when": "第 31–34 周",
      "goal": "从零训练一个 CNN，并用迁移学习提升；完成实验记录、模型卡和错误分析。",
      "deliver": [
        "数据切分与增强",
        "CNN/ResNet18 两组实验",
        "混淆矩阵、模型卡、推理脚本"
      ],
      "accept": "测试集准确率达到基线 +10%；能解释过拟合与数据泄漏。",
      "stretch": "加入 Grad-CAM 可视化。"
    },
    {
      "code": "P8",
      "id": "p8",
      "title": "Capstone：Edge Vision Box",
      "when": "第 43–48 周",
      "goal": "把摄像头、模型、C++ 推理、事件服务、Web 面板、日志与 OTA 串成一台可演示的边缘视觉设备。",
      "deliver": [
        "实时检测 10 FPS 以上",
        "事件上报 + 最小 Dashboard",
        "8 小时稳定性 + 故障注入",
        "部署手册 + 3 分钟视频"
      ],
      "accept": "陌生人按 README 30 分钟内部署；断网、重启、存储满后能恢复。",
      "stretch": "INT8 量化 + 多模型切换 + 远程配置。"
    }
  ]
};
