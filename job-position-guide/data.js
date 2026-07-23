// 岗位数据（19 岗，由 init_db.py 同步生成 + 旧 data.js 保留的 4 岗 24 道情景题）
// 同步方法：python sync_data.py
window.POSITIONS = [
  {
    "id": "pm",
    "name": "产品经理",
    "line": "互联网 · 应届友好",
    "jd": "负责互联网产品的规划与迭代，连接用户、研发、设计与业务，定义要做什么、为什么做、做到什么程度。",
    "fitFor": [
      "逻辑清晰、喜欢拆解复杂问题",
      "擅长跨团队沟通协调",
      "对用户需求敏感，能从数据与反馈中找洞察"
    ],
    "hardSkills": [
      "需求文档（PRD/BRD）",
      "原型工具（Axure/Figma）",
      "数据分析（SQL/Excel）",
      "项目管理（迭代/排期）"
    ],
    "softSkills": [
      "结构化思考",
      "沟通推动",
      "同理心",
      "决策与担责"
    ],
    "industryNotes": {
      "互联网 C 端": "节奏快、AB 实验文化，KPI 看 DAU/留存/转化。",
      "B 端/企业服务": "客户深度访谈、复杂业务流程，KPI 看续约率/ARR。",
      "金融科技": "强合规、业务理解深，KPI 看交易量/风控指标。"
    },
    "taboos": [
      "补需求分析：学写 PRD、画流程图（Axure / Figma 入门），别只会画原型",
      "补数据感：会用 SQL 取数、看埋点，决策靠数据不靠感觉",
      "补背书：考 NPDP（产品经理国际资格）或 PMP，简历更有说服力"
    ],
    "holland_code": "EI",
    "questions": [
      {
        "type": "日常",
        "scenario": "周一需求评审，研发说你 PRD 有 3 处逻辑漏洞，但今天要锁排期。",
        "options": [
          {
            "key": "A",
            "text": "当场拉研发把漏洞补齐再锁排期",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "先按原样锁排期，回头再补",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让研发自己理解意图先开发",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "跳过评审直接开发",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "老板随口说“做个类似竞品的功能”，没给细节。",
        "options": [
          {
            "key": "A",
            "text": "先问清目标用户和要解决的问题再动",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接抄竞品界面出原型",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等老板给详细文档再动",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "先排期开发再说",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你发现上线功能几乎没人用。",
        "options": [
          {
            "key": "A",
            "text": "拉数据+用户访谈，找“不用”的原因",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "再加新功能吸引人",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等自然增长",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "推给运营去推广",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "两个重要需求都要这周做，资源只够一个。",
        "options": [
          {
            "key": "A",
            "text": "用目标和 ROI 排优先级，砍一个",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "都做，加班硬扛",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让老板定",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随机选一个",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "写 PRD 时你最在意：",
        "options": [
          {
            "key": "A",
            "text": "把“为什么做、给谁用、怎么衡量”写清",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "界面长什么样",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "尽快交差",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "把研发要的字段列全",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "用户反馈“按钮不好点”，你：",
        "options": [
          {
            "key": "A",
            "text": "看埋点数据+抽样用户，判断是否普遍问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接让设计改大",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "忽略，是个案",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "发问卷问所有人",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "跨团队协作里你更享受：",
        "options": [
          {
            "key": "A",
            "text": "撮合不同角色达成共识",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己闷头把方案想透",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让别人去沟通",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "按流程走邮件",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "需求评审有人质疑你的方案，你：",
        "options": [
          {
            "key": "A",
            "text": "高兴，借质疑补漏洞",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "defensive，维护原方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让对方提方案",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "跳过他的意见",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你如何判断一个需求“做完了”：",
        "options": [
          {
            "key": "A",
            "text": "用户问题被解决、数据验证了",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "功能上线了",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "研发说做完了",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "文档写完了",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "周会同步进度，你偏好：",
        "options": [
          {
            "key": "A",
            "text": "说清“做了啥、为啥、下一步、卡点”",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "念任务列表",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "只说结果",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "能不说就不说",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "上线后核心指标跌 15%，老板群里 @你问原因，你还不知道。",
        "options": [
          {
            "key": "A",
            "text": "先认领，2 小时内拉数据给初步归因",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "甩锅灰度没做好",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没看到",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "说“在查”但没动作",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "先认领、不让群里空转；同步“正在查，2 小时内给初步归因”。随后拉数据/埋点定位可能原因（回滚？配置？上游？），有结论先同步、没结论也定时回报进展，绝不推诿。"
      },
      {
        "type": "压力",
        "scenario": "研发说排期被你压太紧要延期，你：",
        "options": [
          {
            "key": "A",
            "text": "一起重排优先级，保核心",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "坚持原排期施压",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "上报老板压研发",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "默默接受延期无沟通",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "和研发一起按“必须/应该/可以”重排优先级，保核心交付、砍或挪非核心；用目标对齐而非靠职权施压，并同步相关方新的预期。"
      },
      {
        "type": "压力",
        "scenario": "你负责的项目上线延期一周，被老板当众点名。",
        "options": [
          {
            "key": "A",
            "text": "会后主动复盘根因+改进",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "解释客观原因",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "C",
            "text": "怪配合方",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "情绪低落摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "当场不辩解，会后主动复盘根因（排期？需求？资源？风险？），给出可落地的改进（如风险前置、每日同步），把“被点名”转成“我在解决”。"
      },
      {
        "type": "压力",
        "scenario": "需求反复被改，你已经改了 5 版。",
        "options": [
          {
            "key": "A",
            "text": "拉齐“为什么改”，定变更规则",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "继续改不废话",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝再改",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩给老板裁决",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先拉齐“为什么改、改的标准是什么”，把模糊诉求转成明确验收标准；建立变更规则（限定改稿轮次/走评审），减少无谓返工。"
      },
      {
        "type": "压力",
        "scenario": "两个强势老板给你相反指令。",
        "options": [
          {
            "key": "A",
            "text": "把冲突摆上台，对齐唯一目标",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "谁官大听谁的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "两边敷衍",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖着不做",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不两面敷衍，把冲突摆上台：约两边对齐唯一目标与优先级，用业务目标而非“谁官大”取舍，并形成书面确认，避免反复横跳。"
      },
      {
        "type": "压力",
        "scenario": "半夜线上故障，你在睡觉。",
        "options": [
          {
            "key": "A",
            "text": "立即起来跟进定位+同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等天亮",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "让研发处理",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "假装没收到",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "被呼叫立即起来跟进，先确认影响面与现状，拉相关人定位，过程透明同步；事后补值班/告警机制，不装没收到。"
      },
      {
        "type": "压力",
        "scenario": "你提的方案被否决了 3 次。",
        "options": [
          {
            "key": "A",
            "text": "找否决原因，迭代到第 4 次",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "觉得自己怀才不遇",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "放弃这个方向",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "背后抱怨",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "找每次否决的具体原因（目标不对？数据不足？资源？），针对性迭代而非情绪化；带着“为什么这次能成”的证据再来第 4 次。"
      },
      {
        "type": "压力",
        "scenario": "大促前夜发现一个严重体验 bug。",
        "options": [
          {
            "key": "A",
            "text": "评估影响，拉研发定 hotfix 或降级方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "隐瞒等上线再看",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "直接叫停大促",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "甩给测试",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "先评估影响范围与发生概率，拉研发定 hotfix 或降级/兜底方案（必要时小流量或临时关入口），把风险控制在可接受范围，不隐瞒也不一刀切叫停。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想要：",
        "options": [
          {
            "key": "A",
            "text": "带 10 人产品团队",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "成为某领域专家（IC）",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转业务/创业",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "还没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更认同哪种成长：",
        "options": [
          {
            "key": "A",
            "text": "深度理解一个行业/领域",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "广度接触多类型产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转管理管人",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "无所谓",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "如果可以选，你倾向：",
        "options": [
          {
            "key": "A",
            "text": "做 0→1 从零搭建",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "做 1→100 规模放大",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "做稳定维护",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "不确定",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你对“向上管理”的态度：",
        "options": [
          {
            "key": "A",
            "text": "主动对齐老板目标，管理预期",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "做好事自然被看到",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "反感",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "躲着老板",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期看，你更看重：",
        "options": [
          {
            "key": "A",
            "text": "做出的产品真影响很多人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资和职级",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "工作生活平衡",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 4
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "遇到职业瓶颈，你：",
        "options": [
          {
            "key": "A",
            "text": "补短板或换赛道重新出发",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "原地熬",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "跳槽逃避",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "焦虑但不动",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "op",
    "name": "用户运营",
    "line": "互联网运营",
    "jd": "围绕用户拉新、活跃、留存、转化设计活动与内容，协调产品、市场、客服形成增长闭环。",
    "fitFor": [
      "对人敏感、喜欢和用户打交道",
      "数据与创意兼具",
      "执行力强、抗压"
    ],
    "hardSkills": [
      "活动策划与文案",
      "数据分析（漏斗/留存/ROI）",
      "社群与用户分层",
      "项目管理与跨部门协作"
    ],
    "softSkills": [
      "用户视角",
      "沟通协调",
      "抗压执行",
      "创意表达"
    ],
    "industryNotes": {
      "互联网 C 端": "节奏快、AB 实验密集，KPI 看 DAU/留存/转化。",
      "电商": "强促销节点、大促驱动，KPI 看 GMV/复购。",
      "教育/内容": "重社群与长周期，KPI 看续费/完课率。"
    },
    "taboos": [
      "补数据：Excel 透视表 + 基础 SQL，活动 ROI 自己能算",
      "补内容：会写文案、剪短视频，别只当传话筒",
      "补平台规则：熟读抖音 / 小红书 / 淘宝的流量机制与违规红线"
    ],
    "holland_code": "ES",
    "questions": [
      {
        "type": "日常",
        "scenario": "日活掉了 10%，你：",
        "options": [
          {
            "key": "A",
            "text": "拆维度找原因(渠道/功能)",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等明天",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "发券救",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "策划一个促活活动，你先：",
        "options": [
          {
            "key": "A",
            "text": "定目标人群+指标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "想创意点子",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "抄别的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "直接上线",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更享受：",
        "options": [
          {
            "key": "A",
            "text": "和用户聊天挖需求",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "做报表",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "写推文",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "社群冷了，你：",
        "options": [
          {
            "key": "A",
            "text": "找话题/价值点重新激活",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发广告",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "不管",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "解散",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "新上线功能，你最先看：",
        "options": [
          {
            "key": "A",
            "text": "核心转化/留存指标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "点击量",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "好看的数据",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "用户投诉某功能收费，你：",
        "options": [
          {
            "key": "A",
            "text": "看诉求合理性+分层处理",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "全免单息事",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "不理",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "让客服扛",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做活动复盘主要看：",
        "options": [
          {
            "key": "A",
            "text": "目标达成度+哪环掉了",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发了多少篇推文",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满不满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不参与复盘",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更擅长从哪挖需求：",
        "options": [
          {
            "key": "A",
            "text": "用户访谈+行为数据",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "同行抄",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "自己拍脑袋",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "老板说",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个渠道拉新成本高，你：",
        "options": [
          {
            "key": "A",
            "text": "拆转化漏斗找漏点优化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "停掉它",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "加预算冲量",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断运营动作好坏靠：",
        "options": [
          {
            "key": "A",
            "text": "数据+用户反馈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "别人也说好",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不重要",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "老板要这月拉新翻倍，资源没加，你：",
        "options": [
          {
            "key": "A",
            "text": "找高性价比渠道+试点",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬冲量买量",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不到",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "假装",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不硬冲量买量也不说死。找高性价比渠道与裂变/老带新试点，用小额预算测 ROI，把“翻倍”拆成可执行的杠杆动作向上同步预期。"
      },
      {
        "type": "压力",
        "scenario": "活动翻车被用户骂，你：",
        "options": [
          {
            "key": "A",
            "text": "诚恳回应+补救+复盘",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删评",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "诚恳公开回应、不删评不甩锅，先止血（补偿/说明）再复盘根因（规则？预期？沟通？），把负面转成信任修复机会。"
      },
      {
        "type": "压力",
        "scenario": "指标连续不达标，你：",
        "options": [
          {
            "key": "A",
            "text": "拆解找杠杆重排计划",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "焦虑摆烂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "怪大环境",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "等好运",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "拆指标找杠杆（哪个环节掉最多），重排计划先攻薄弱环节，用小实验验证打法，不焦虑怪大环境。"
      },
      {
        "type": "压力",
        "scenario": "大促当天系统崩了，你：",
        "options": [
          {
            "key": "A",
            "text": "同步用户+协调技术+给补偿",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "躲起来",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "骂技术",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等修",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "第一时间同步用户“已知问题+预计恢复”，协调技术抢修，准备补偿方案；全程透明，不躲不骂。"
      },
      {
        "type": "压力",
        "scenario": "你策划的活动数据远低预期，周会要你解释，你：",
        "options": [
          {
            "key": "A",
            "text": "带归因和数据主动复盘",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "推给外部因素",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说“下次会更好”",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "周会前就拉好数据，主动讲清“差在哪、为什么、下一步怎么改”，把汇报变成“我有方案”，不甩锅也不空喊口号。"
      },
      {
        "type": "压力",
        "scenario": "核心用户群里有人带节奏骂你们，你：",
        "options": [
          {
            "key": "A",
            "text": "私下了解诉求+公开透明回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "踢人禁言",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没看见",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先私下了解带头用户的真实诉求，再公开、透明、有温度地回应并给出动作，分化情绪、稳住大多数，不靠禁言或对骂。"
      },
      {
        "type": "压力",
        "scenario": "老板临时要一个从未做过的运营报告，今晚要给，你：",
        "options": [
          {
            "key": "A",
            "text": "先定要回答的问题+快速拉数搭框架",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆数据",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄网上模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确报告要回答的核心问题，再快速拉关键数据搭框架，重结论轻堆砌；向上同步范围与口径，不通宵硬堆也不交空壳。"
      },
      {
        "type": "压力",
        "scenario": "你负责的一个社群突然大量退群，你：",
        "options": [
          {
            "key": "A",
            "text": "查退群前事件+抽样回访找根因",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "发券挽留",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "不管",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "怪同行撬人",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "定位退群前的触发事件（内容？活动？竞品？），抽样回访挖根因，针对性修复并防止扩散，不靠无差别发券或甩锅。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带运营团队",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转增长/商业",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "对业务结果的影响",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "创意自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "数据驱动运营",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "感觉驱动",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "学数据/商业补齐",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更想往哪发展：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的增长负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯内容/社群专家",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "运营多年后你最怕的是：",
        "options": [
          {
            "key": "A",
            "text": "只会执行不懂业务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被年轻人卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班太多",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "sales",
    "name": "销售/商务",
    "line": "业绩导向",
    "jd": "负责客户开发、需求挖掘、方案匹配、商务谈判与签约，扛业绩指标。",
    "fitFor": [
      "喜欢和人打交道",
      "抗压、好胜、有韧性",
      "对钱与结果敏感"
    ],
    "hardSkills": [
      "客户开发与渠道",
      "需求挖掘与方案呈现",
      "商务谈判与合同",
      "CRM 与销售漏斗管理"
    ],
    "softSkills": [
      "沟通说服",
      "目标感",
      "抗压韧性",
      "客户视角"
    ],
    "industryNotes": {
      "B 端大客户": "周期长、决策链复杂，重方案与关系。",
      "C 端零售/电销": "节奏快、量大，重话术与转化。",
      "渠道/代理": "重招商与生态，重谈判与分成设计。"
    },
    "taboos": [
      "补方法论：学 SPIN 销售法、顾问式销售，别只靠嘴皮",
      "补行业知识：先吃透一个行业再谈单，外行一眼被看穿",
      "补工具：用 CRM 管理客户漏斗，沉淀每次跟进记录"
    ],
    "holland_code": "E",
    "questions": [
      {
        "type": "日常",
        "scenario": "见客户，你先：",
        "options": [
          {
            "key": "A",
            "text": "听他痛点再匹配方案",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "背产品介绍",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "报低价",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "套近乎",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更享受：",
        "options": [
          {
            "key": "A",
            "text": "谈判成交那一刻",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "维护老客情",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "写方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "出差",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "管客户你用：",
        "options": [
          {
            "key": "A",
            "text": "CRM 分层跟进",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "表格乱记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不跟",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户犹豫，你：",
        "options": [
          {
            "key": "A",
            "text": "挖顾虑针对性解决",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "降价逼单",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "软磨",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户说“再考虑考虑”，你：",
        "options": [
          {
            "key": "A",
            "text": "探顾虑+给下一步",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "反复催",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "降价",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你对客户背景的做法：",
        "options": [
          {
            "key": "A",
            "text": "提前研究行业/痛点再聊",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "见面现聊",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "套模板话术",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不准备",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个老客户很久没下单，你：",
        "options": [
          {
            "key": "A",
            "text": "回访了解变化+给新价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "继续群发广告",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃开发新客",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等他回来",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你记录客户信息靠：",
        "options": [
          {
            "key": "A",
            "text": "CRM 结构化跟进",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "微信备注",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "谈判陷入僵局，你：",
        "options": [
          {
            "key": "A",
            "text": "找双方利益交集换条件",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬顶价格",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让步到底",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "暂停改天",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一单能否成看：",
        "options": [
          {
            "key": "A",
            "text": "客户痛点是否被解决+决策链",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "关系铁不铁",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "价格够低",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "月底差 30% 业绩，你：",
        "options": [
          {
            "key": "A",
            "text": "盘点高意向客户集中攻坚",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "乱打电话碰运气",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "焦虑摆烂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "造假单",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "盘点高意向客户集中攻坚，分析卡点精准突破，而非乱打电话碰运气或造假；向上要资源/支持，把差距拆成可追的动作。"
      },
      {
        "type": "压力",
        "scenario": "被客户当面拒绝并质疑，你：",
        "options": [
          {
            "key": "A",
            "text": "感谢反馈，探真实顾虑",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "争辩",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "挂电话",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "沉默",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "不争辩不挂断。感谢反馈，顺势探真实顾虑（价格？信任？需求？），把“拒绝”变成了解客户的机会，留好后续触点。"
      },
      {
        "type": "压力",
        "scenario": "承诺的交付没做到，客户发火，你：",
        "options": [
          {
            "key": "A",
            "text": "认错+补救+给时间表",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "甩给交付",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "不回",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "辩解",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "先认错、不甩给交付，给出明确补救方案与时间节点，过程主动同步进展，用行动重建信任。"
      },
      {
        "type": "压力",
        "scenario": "连续 3 单丢了，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘丢单原因迭代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怀疑自己",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪市场",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "逐单复盘丢在哪（需求？报价？信任？竞品？），提炼可改动作，把失败变成下一单的经验，不自我怀疑也不怪市场。"
      },
      {
        "type": "压力",
        "scenario": "你马上要签单，客户突然说“听说你们竞品更便宜”，你：",
        "options": [
          {
            "key": "A",
            "text": "不贬竞品，讲差异与总价值",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "立刻降价",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂竞品",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "沉默",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "不陷入价格战也不贬低对手，用“你的真实目标是什么”拉回价值对话，讲清我方差异与总拥有成本，把比较变成需求对齐。"
      },
      {
        "type": "压力",
        "scenario": "你跟了 2 个月的单子被同事抢走业绩，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘协作漏洞+找规则改进",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "找老板吵",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "记恨同事",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先冷静复盘为何被“截胡”（跟进节奏？信息同步？归属规则？），推动明确协作与业绩归属规则，把情绪转为机制改进。"
      },
      {
        "type": "压力",
        "scenario": "客户临时毁约，你已投入大量时间，你：",
        "options": [
          {
            "key": "A",
            "text": "了解真实原因+留门未来合作",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "威胁起诉",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "骂客户",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "自认倒霉",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "了解毁约的真实原因（预算？决策变？竞品？），体面收尾并留好未来合作入口，不让一次失败变成关系断点。"
      },
      {
        "type": "压力",
        "scenario": "你业绩一直达标但同事都在涨薪你没涨，你：",
        "options": [
          {
            "key": "A",
            "text": "用数据谈价值+要明确标准",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "消极怠工",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "直接离职",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "抱怨",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用业绩数据与贡献主动和老板谈，问清涨薪标准与路径，把“不公平感”转为“我要达成的明确目标”，不消极也不裸辞。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带销售团队/区域",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转售前/方案",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "自己创业",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "业绩与回报",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "自由",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 4
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "长期信任 > 一锤子买卖",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "成交至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "关系至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "无所谓",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补行业/方案深度",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽换池",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂行业的顾问式销售/管理者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "顶级个人销冠",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "自己创业",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你觉得销售最核心的能力：",
        "options": [
          {
            "key": "A",
            "text": "懂客户业务+建立信任",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "话术熟练",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "能喝能聊",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "脸皮厚",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "hr",
    "name": "HR",
    "line": "职能支持",
    "jd": "负责招聘、培训、绩效、员工关系、文化落地，支撑组织运转与人才发展。",
    "fitFor": [
      "对人敏感、有同理心",
      "做事有条理、原则性强",
      "擅长沟通协调"
    ],
    "hardSkills": [
      "招聘全流程（JD/筛选/面试/谈薪）",
      "培训与员工关系",
      "绩效与薪酬基础",
      "劳动法与合规"
    ],
    "softSkills": [
      "同理心",
      "沟通协调",
      "原则与边界感",
      "组织视角"
    ],
    "industryNotes": {
      "互联网大厂": "体系成熟、流程规范，重 HRBP/COE 分工。",
      "创业公司": "全模块一肩挑，重独立解决与灵活度。",
      "传统行业": "强合规与流程，重员工关系与组织稳定。"
    },
    "taboos": [
      "补劳动法：用工风险、合同、社保、辞退流程必须懂",
      "补招聘：渠道运营 + 结构化面试技巧，别只收简历",
      "补证书：考人力资源管理师（企业 HR 方向）增加专业度"
    ],
    "holland_code": "SC",
    "questions": [
      {
        "type": "日常",
        "scenario": "业务急招人，你：",
        "options": [
          {
            "key": "A",
            "text": "对齐画像+渠道+节奏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "海投简历",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等猎头",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便推",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更享受：",
        "options": [
          {
            "key": "A",
            "text": "帮人找到合适位置",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "算工资",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "办活动",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "写制度",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "面试你重点看：",
        "options": [
          {
            "key": "A",
            "text": "能力+动机+团队匹配",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "学历",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "薪资要的低",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "员工来聊委屈，你：",
        "options": [
          {
            "key": "A",
            "text": "倾听+客观引导+必要时上报",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "站队骂管理层",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "C",
            "text": "敷衍",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "保密不传",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "收到一份简历，你先看：",
        "options": [
          {
            "key": "A",
            "text": "能力与岗位匹配度",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "学校名气",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "薪资期望低",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "长得好看",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "业务部门说“就要XX学校的人”，你：",
        "options": [
          {
            "key": "A",
            "text": "引导回能力标准+拓宽渠道",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "照招",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝招聘",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "让老板定",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要推一个新员工培训，你先：",
        "options": [
          {
            "key": "A",
            "text": "调研新人真实痛点+目标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "找现成PPT",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照搬别的公司",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等领导给",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做薪酬分析主要看：",
        "options": [
          {
            "key": "A",
            "text": "内外部公平性+激励性",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "老板给多少",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "同行最高",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "越少越好",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "员工想转岗，你：",
        "options": [
          {
            "key": "A",
            "text": "评估能力与组织需要帮匹配",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接批准",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "劝他别动",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个管理者合不合格看：",
        "options": [
          {
            "key": "A",
            "text": "团队成长+业务结果",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "听话",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "和你好",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "核心员工突然提离职，你：",
        "options": [
          {
            "key": "A",
            "text": "聊真实原因+留人/平稳过渡",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "批准走人",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "扣工资威胁",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先聊真实原因（发展？薪酬？管理？），能留则针对性留人，不能留则做好知识交接与平稳过渡，把“被动放人”变成“有序管理”。"
      },
      {
        "type": "压力",
        "scenario": "业务和候选人对薪资谈不拢，你：",
        "options": [
          {
            "key": "A",
            "text": "居中平衡期望与预算",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "全听业务",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "全听候选人",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "居中平衡：向上探预算弹性，向候选人讲清总包与成长空间，找双方都能接受的方案，不偏袒任一方也不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "劳动争议风险，你：",
        "options": [
          {
            "key": "A",
            "text": "查法规+合规处理",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "拖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "瞒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "吓唬员工",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先查劳动法规与制度依据，合规处理并留痕，必要时引入法务/管理层；不拖不瞒不吓唬，把风险关进流程里。"
      },
      {
        "type": "压力",
        "scenario": "月底入职高峰+系统故障，你：",
        "options": [
          {
            "key": "A",
            "text": "手动兜底保入职体验",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等修",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "推给 IT",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "用线下/手动流程兜底保入职体验（纸质表/人工引导），同步 IT 抢修并给候选人透明预期，不干等系统恢复。"
      },
      {
        "type": "压力",
        "scenario": "公司要裁员，让你执行但你觉得不公，你：",
        "options": [
          {
            "key": "A",
            "text": "按规则合规执行+做好沟通与缓冲",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "阳奉阴违",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接对抗",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩给老板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在合规前提下执行，确保标准透明、沟通有温度、给足缓冲与资源；对不公之处走正式渠道反馈，不阳奉阴违也不公开对抗。"
      },
      {
        "type": "压力",
        "scenario": "一名高绩效员工和主管严重冲突，双方都找你，你：",
        "options": [
          {
            "key": "A",
            "text": "中立了解+促双方面谈对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "站员工",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "站主管",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "保持中立，分别了解事实与诉求，搭建双方面谈对齐的场，聚焦“怎么把事做成”而非站队，守住 HR 的中立与信任。"
      },
      {
        "type": "压力",
        "scenario": "招聘旺季简历堆积，业务部门催得紧，你：",
        "options": [
          {
            "key": "A",
            "text": "拉优先级+透明同步进度与卡点",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "海推凑数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "躺平",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "全推给猎头",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按岗位优先级与紧急度排简历处理顺序，向业务透明同步“已筛/在聊/卡点”，用节奏管理替代海推凑数，守住质量。"
      },
      {
        "type": "压力",
        "scenario": "员工私下发你吐槽管理层，你：",
        "options": [
          {
            "key": "A",
            "text": "倾听边界内+必要时引导到正式渠道",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "一起骂管理层",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "转头告密",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装听不见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在保密与边界内倾听，不附和也不告密；对真问题引导其走正式反馈渠道或在合规范围内代为推动，守住信任与中立。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "成为 HRBP/专家",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转业务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转管理岗",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "帮组织与人成长",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "清闲",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "HR 要懂业务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "HR 只管流程",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "听老板的",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补业务/数据视角",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你希望往哪发展：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的 HRBP/组织发展专家",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯招聘专家",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转业务岗",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你觉得 HR 的价值在于：",
        "options": [
          {
            "key": "A",
            "text": "让对的人在对的位置上成长",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "把流程走完",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "帮老板管人",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "发工资",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "marketing",
    "name": "市场营销",
    "line": "增长 · 品牌",
    "jd": "负责市场调研、品牌定位、营销活动策划与执行，撬动用户增长与品牌声量。",
    "fitFor": [
      "对市场趋势敏感",
      "创意与数据兼具",
      "沟通协调与项目推动"
    ],
    "hardSkills": [
      "市场调研与用户洞察",
      "营销策划（线上/线下）",
      "内容/活动/媒介协同",
      "数据分析与 ROI 评估"
    ],
    "softSkills": [
      "创意表达",
      "用户视角",
      "项目推动",
      "跨部门协调"
    ],
    "industryNotes": {
      "互联网": "重增长黑客与数据驱动，CAC/ROAS 指标导向。",
      "快消/品牌": "重品牌长期建设与渠道管理，TVC/线下投放经验。",
      "B 端/工业品": "重行业展会与方案营销，决策链长，KPI 看 SQL/MQL。"
    },
    "taboos": [
      "补投放：SEM / 信息流账户实操，别只会写 PPT 方案",
      "补分析：Google Analytics / 巨量引擎后台看得懂、能出报告",
      "补证书：Google Analytics 认证、巨量引擎认证免费可考，直接写简历"
    ],
    "holland_code": "EA",
    "questions": [
      {
        "type": "日常",
        "scenario": "你接手一个新品上市，第一步你会：",
        "options": [
          {
            "key": "A",
            "text": "先做市场与用户调研，定清目标受众与核心卖点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接策划一场大活动先造势",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照搬竞品的做法",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板给具体方向再动",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做市场你更享受：",
        "options": [
          {
            "key": "A",
            "text": "想清楚增长打法并用数据验证",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写漂亮的方案 PPT",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "办线下活动凑热闹",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "刷曝光数据",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个获客渠道 CPA 涨了 50%，你：",
        "options": [
          {
            "key": "A",
            "text": "拆归因找原因再优化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接换渠道",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "加预算硬冲",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "老板说“做个刷屏的 campaign”，你：",
        "options": [
          {
            "key": "A",
            "text": "先问清目标和受众再动",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接拍脑门想创意",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄当下热点",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等灵感自己来",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个活动好坏主要看：",
        "options": [
          {
            "key": "A",
            "text": "目标达成度与 ROI",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "曝光量有多大",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满不满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "朋友圈好不好看",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "竞品突然做了个爆款话题，你：",
        "options": [
          {
            "key": "A",
            "text": "先分析它为什么火，再决定跟不跟",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "立刻模仿一个",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "贬低它",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "当没看见",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要推一条品牌内容，你先：",
        "options": [
          {
            "key": "A",
            "text": "定受众与想传递的心智",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "想一个抓眼球标题",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "找个 KOL 发",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等热点",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "市场预算有限，你：",
        "options": [
          {
            "key": "A",
            "text": "按预期 ROI 排优先级投放",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "各家渠道平均撒",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "全投最火的那个",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "干脆不花",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做用户洞察主要靠：",
        "options": [
          {
            "key": "A",
            "text": "调研 + 数据 + 用户访谈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己的感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看同行怎么做",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "老板说啥是啥",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一次投放效果很差，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘归因，下轮针对性改",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换个素材碰碰运气",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪平台流量差",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "直接放弃这个渠道",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "大促前 3 天，你准备的核心素材被老板毙了，你：",
        "options": [
          {
            "key": "A",
            "text": "快速拉备选素材并和老板对齐新方向",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬顶原方案不改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅设计没做好",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂等死",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不纠缠被毙的方案，快速拉备选并和老板对齐新方向，按节点倒排排期，把“素材没了”变成“已切换”。"
      },
      {
        "type": "压力",
        "scenario": "花了 50 万投放 ROI 只有 0.3，老板当面问你怎么交代，你：",
        "options": [
          {
            "key": "A",
            "text": "带归因和数据主动复盘",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪渠道质量差",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说“下次会更好”",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装作没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "汇报前先拉数据，讲清钱花在哪、为什么差、下轮怎么收，把汇报变成“我有方案”，不甩锅也不空喊口号。"
      },
      {
        "type": "压力",
        "scenario": "品牌突然陷入负面舆情并开始发酵，你：",
        "options": [
          {
            "key": "A",
            "text": "第一时间核实事实，统一口径透明回应并给后续",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "赶紧删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死不回应",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "和网友对骂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先核实事实，统一口径透明回应，给出处理动作与进度，不删帖不装死，把危机变成信任修复机会。"
      },
      {
        "type": "压力",
        "scenario": "业务临时要一份从没做过的行业白皮书，今晚就要，你：",
        "options": [
          {
            "key": "A",
            "text": "先定它要回答的核心问题，再快速拉数搭框架",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆数据凑页数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "直接抄网上的模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确报告要回答的核心问题，再快速拉关键数据搭框架，重结论轻堆砌，不通宵硬堆也不交空壳。"
      },
      {
        "type": "压力",
        "scenario": "你策划的活动被竞品抢先发了，你：",
        "options": [
          {
            "key": "A",
            "text": "找差异化切入点重做",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照原样发",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接放弃",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "骂竞品不要脸",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不硬碰，找差异化的切入与叙事角度，把“被抢先”变成“我更准更透”。"
      },
      {
        "type": "压力",
        "scenario": "谈好的 KOL 临时毁约且已付费，你：",
        "options": [
          {
            "key": "A",
            "text": "查合同协商替换或退款，并同步备选",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "自认倒霉",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "闹上门",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺平等退",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先看合同与沟通记录，协商替换或退款，同步备选 KOL，把损失降到最低，不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "品牌声量一直上不去，老板开始质疑你的能力，你：",
        "options": [
          {
            "key": "A",
            "text": "拆声量结构找薄弱点，给可执行打法",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "焦虑但没动作",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "怪预算太少",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "等好运",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "拆声量结构找薄弱渠道与内容问题，给可执行的渠道/内容打法，用节奏替代情绪。"
      },
      {
        "type": "压力",
        "scenario": "你和市场部同事为预算归属吵起来，你：",
        "options": [
          {
            "key": "A",
            "text": "拉整体 ROI 重新切分",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "坚持争自己的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅对方乱花",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "沉默不说话",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "不内耗，用整体 ROI 与目标重新切预算，把争论变成可执行的分配规则。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带市场团队或走 CMO 路线",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转去做产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "还没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "做营销你更看重：",
        "options": [
          {
            "key": "A",
            "text": "对业务增长的实际影响",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松不加班",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "创意自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更认同哪种营销观：",
        "options": [
          {
            "key": "A",
            "text": "数据驱动营销",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "靠感觉和灵感",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥就做啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意发挥",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "遇到职业瓶颈，你：",
        "options": [
          {
            "key": "A",
            "text": "补数据分析和商业判断",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽换环境",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "原地躺平",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑但不动",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期看你想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的增长或品牌负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯内容专家",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转去业务岗",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "做营销多年你最怕的是：",
        "options": [
          {
            "key": "A",
            "text": "只会花钱不懂业务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被年轻人卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班太多",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "brand",
    "name": "品牌策划",
    "line": "品牌 · 内容",
    "jd": "负责品牌定位、视觉语言、内容叙事与传播策略，让品牌在用户心中有独特印象。",
    "fitFor": [
      "对审美/叙事敏感",
      "喜欢琢磨人心",
      "能讲好一个故事"
    ],
    "hardSkills": [
      "品牌定位与策略",
      "内容/视觉/视频协同",
      "传播渠道与节奏",
      "提案与跨部门沟通"
    ],
    "softSkills": [
      "审美",
      "叙事能力",
      "共情",
      "创意思维"
    ],
    "industryNotes": {
      "新消费品牌": "重内容种草与小红书/抖音生态，KOL 投放密集。",
      "互联网产品": "重品牌一致性与官网/PR，重用户感知。",
      "传统/ToB 品牌": "重 VI 系统与年度 campaign，节奏稳。"
    },
    "taboos": [
      "补审美：能判断视觉好坏、把 brief 写清楚",
      "补内容：品牌故事 / slogan / campaign 主题会写",
      "补证书：英文好可冲 CIM 营销证书，是外企硬通货"
    ],
    "holland_code": "EA",
    "questions": [
      {
        "type": "日常",
        "scenario": "接手一个品牌升级项目，你先：",
        "options": [
          {
            "key": "A",
            "text": "调研品牌现状与用户认知，定定位",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接出新的 VI 视觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄对标品牌",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板定调",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做品牌你更享受：",
        "options": [
          {
            "key": "A",
            "text": "想清楚品牌人设与故事",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "做漂亮的视觉稿",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "追热点蹭流量",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "写周报",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "用户对你的品牌没印象，你：",
        "options": [
          {
            "key": "A",
            "text": "找差异化心智并持续强化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加大投放洗脑",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换个 logo 试试",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "老板要“立个人设”但说不清是谁，你：",
        "options": [
          {
            "key": "A",
            "text": "先对齐品牌内核与受众再设计",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接套网红人设",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄竞品",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等他灵感",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断品牌内容好坏看：",
        "options": [
          {
            "key": "A",
            "text": "是否传递了清晰一致的品牌心智",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "阅读量",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板喜欢",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "好不好看",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一次品牌 campaign 反响平淡，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘叙事与触达哪里弱",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换张图再发",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪平台",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做一条品牌视频，你先：",
        "options": [
          {
            "key": "A",
            "text": "定想让用户记住的一句话",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "找拍摄团队",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看竞品视频",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等热点",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "品牌和销量冲突时，你：",
        "options": [
          {
            "key": "A",
            "text": "短期让利但守住品牌调性",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "为销量彻底放弃调性",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "为调性不顾销量",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "甩给业务",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做品牌洞察靠：",
        "options": [
          {
            "key": "A",
            "text": "用户调研 + 社媒聆听",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己审美",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看同行",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "老板偏好",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "多个渠道调性不一致，你：",
        "options": [
          {
            "key": "A",
            "text": "建品牌规范统一调性",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "各渠道各做各的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "只保主阵地",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "品牌刚立的人设被网友嘲讽“假大空”，你：",
        "options": [
          {
            "key": "A",
            "text": "倾听真实反馈，调整叙事更落地",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬怼网友",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "删评",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不硬刚不删评，倾听真实反馈，把“假大空”的叙事调得更落地、更有证据，用行动重建信任。"
      },
      {
        "type": "压力",
        "scenario": "大客户点名要违背品牌调性的合作，你：",
        "options": [
          {
            "key": "A",
            "text": "找既满足需求又不破调性的方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "为钱直接破例",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接拒绝丢单",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩给老板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在商业与调性间找平衡点：用不破调性的方式满足客户核心需求，不轻易破例也不轻易丢单。"
      },
      {
        "type": "压力",
        "scenario": "新视觉刚发布被内部全员吐槽丑，你：",
        "options": [
          {
            "key": "A",
            "text": "看吐槽是否有共识问题再迭代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "立刻推翻重做",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "杠回去",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先判断吐槽是否指向共识性问题，有则针对性迭代，无则稳住方向，不情绪化推翻也不硬杠。"
      },
      {
        "type": "压力",
        "scenario": "你做的品牌片超预算且延期，老板问责任，你：",
        "options": [
          {
            "key": "A",
            "text": "主动复盘根因并给管控机制",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪供应商",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说下次注意",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "沉默",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "当场不辩解，会后背锅复盘根因（排期？brief？变更？），给出预算与进度管控机制。"
      },
      {
        "type": "压力",
        "scenario": "竞品抄袭了你的品牌 slogan，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响，用差异化内容拉开",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "发律师函吓唬",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "假装没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先评估实际影响，用更鲜明的差异化内容拉开距离，必要时走正式渠道，不靠对骂。"
      },
      {
        "type": "压力",
        "scenario": "老板临时要一份品牌年度规划，两天后汇报，你：",
        "options": [
          {
            "key": "A",
            "text": "先定品牌目标与节奏再搭框架",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆 PPT",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄咨询公司",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确品牌年度目标与节奏，再快速搭可落地的框架，重策略轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "一次联名翻车引发反感，你：",
        "options": [
          {
            "key": "A",
            "text": "诚恳说明并调整后续合作",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅合作方",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "诚恳说明情况，调整后续合作方向，把负面变成品牌态度的展示，不删帖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "团队和你对品牌方向分歧很大，你：",
        "options": [
          {
            "key": "A",
            "text": "用用户数据对齐判断",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "靠职级压",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "各做各的",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随大流",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用用户调研与数据说话对齐方向，不靠职权压也不各自为战。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做品牌负责人/主理人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转市场",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "品牌长期资产",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "清闲",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "创意自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "品牌要立人设更要兑现",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "品牌就是好看",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板定就行",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补商业与用户研究",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂生意的品牌战略人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯视觉设计师",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转业务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "品牌人最怕：",
        "options": [
          {
            "key": "A",
            "text": "只会做图不懂生意",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "game",
    "name": "游戏策划",
    "line": "游戏 · 创意",
    "jd": "负责游戏系统、数值、关卡或剧情设计，把核心玩法翻译成可落地的设计文档。",
    "fitFor": [
      "重度游戏玩家",
      "逻辑与创意兼具",
      "喜欢拆解机制"
    ],
    "hardSkills": [
      "游戏系统/数值/关卡设计",
      "文档与原型（Office/Axure）",
      "数据分析（玩家行为）",
      "项目管理"
    ],
    "softSkills": [
      "创意思维",
      "逻辑拆解",
      "玩家视角",
      "沟通表达"
    ],
    "industryNotes": {
      "大厂（腾讯/网易/米哈游）": "流程成熟、分工细（系统/数值/关卡/剧情），校招生培养体系完整。",
      "中型工作室": "一人多能，成长快但节奏紧。",
      "独立/海外": "重综合能力与英语，重玩法创新。"
    },
    "taboos": [
      "补文档：能写标准游戏设计文档（GDD），想法落得下来",
      "补数值：Excel 建模、理解数值平衡与成长曲线",
      "补玩家心理：读《游戏设计艺术》，多拆解爆款机制"
    ],
    "holland_code": "AE",
    "questions": [
      {
        "type": "日常",
        "scenario": "设计一个新系统，你先：",
        "options": [
          {
            "key": "A",
            "text": "定核心玩法目标与体验预期",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接画界面",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄热门游戏",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等主美给图",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做策划你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把一个机制想通透",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写文档",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "玩游戏",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "玩家反馈某关太难，你：",
        "options": [
          {
            "key": "A",
            "text": "看数据判断是普遍还是个例再调",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接调简单",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "不改",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "全关调",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个玩法好不好看：",
        "options": [
          {
            "key": "A",
            "text": "留存与付费等数据 + 体验",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己觉得好玩",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "同行也有",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "老板喜欢",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要加一个社交系统，你先：",
        "options": [
          {
            "key": "A",
            "text": "想清它解决什么体验问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "抄竞品社交",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "听程序说能做什么",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便加",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "数值崩了（某资源通胀），你：",
        "options": [
          {
            "key": "A",
            "text": "拉产出消耗模型定位",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "砍产出",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "不管",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "全重做",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "策划评审被程序质疑实现不了，你：",
        "options": [
          {
            "key": "A",
            "text": "一起找可行简化方案",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "坚持原设计",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "上报主美",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "删掉这个功能",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做竞品分析主要看：",
        "options": [
          {
            "key": "A",
            "text": "机制设计与数值结构",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "画面",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "流水",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便看看",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个功能上线后没人用，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘是否真的解决痛点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加引导强推",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等自然增长",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "推给运营",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "写策划文档你最在意：",
        "options": [
          {
            "key": "A",
            "text": "逻辑闭环与可验收标准",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "字数多",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "配图好看",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "尽快交差",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "版本上线前发现一个严重数值 bug，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响，定 hotfix 或临时关入口",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "隐瞒等上线看",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "直接回滚整个版本",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "甩给程序",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先评估影响面与概率，定 hotfix 或临时关入口/降级方案，把风险控制在可接受范围，不隐瞒也不一刀切。"
      },
      {
        "type": "压力",
        "scenario": "主美和主程对你的设计都反对，你：",
        "options": [
          {
            "key": "A",
            "text": "摆上目标对齐，找共赢解",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "谁官大听谁的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "两边敷衍",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖着不做",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "把冲突摆上目标桌，用“玩家体验与版本目标”对齐，找兼顾实现与体验的共赢解，不两面敷衍。"
      },
      {
        "type": "压力",
        "scenario": "你设计的关卡被玩家骂“反人类”，你：",
        "options": [
          {
            "key": "A",
            "text": "看录制与数据定位痛点再调",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "骂玩家不会玩",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "直接删关",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "拉玩家录制与数据定位具体卡点，针对性调整难度曲线，不骂玩家也不一刀切删。"
      },
      {
        "type": "压力",
        "scenario": "上线首日留存远低于预期，老板问原因，你：",
        "options": [
          {
            "key": "A",
            "text": "带数据归因主动复盘",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪买量质量",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说再观察",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "汇报前拉首日漏斗数据，讲清差在哪、为什么、下一步怎么改，变成“我有方案”。"
      },
      {
        "type": "压力",
        "scenario": "你跟了很久的玩法被砍，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘为何被砍，沉淀方法论",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "觉得怀才不遇",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "背后抱怨",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "找被砍的具体原因（目标？资源？数据？），把经验沉淀成方法论，不带情绪。"
      },
      {
        "type": "压力",
        "scenario": "程序说排期紧做不完你的设计，你：",
        "options": [
          {
            "key": "A",
            "text": "一起按优先级砍非核心",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "坚持全做施压",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "上报主程压",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "默默接受延期",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "和程序按“必须/应该/可以”重排，保核心体验、砍或挪非核心，用目标对齐而非职权施压。"
      },
      {
        "type": "压力",
        "scenario": "玩家在论坛带节奏说你游戏“骗氪”，你：",
        "options": [
          {
            "key": "A",
            "text": "透明说明数值与付费设计逻辑",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用清晰的逻辑说明付费与数值设计，回应合理质疑、收集真问题，不删帖不对骂。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前策划文档还差一半，你：",
        "options": [
          {
            "key": "A",
            "text": "拉清单按验收优先级补",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵硬写",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不完",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄旧文档",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按验收优先级拉清单补齐关键模块，先保逻辑闭环，不通宵堆字也不交空壳。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带策划团队/做主策",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转程序",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转发行",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "做出被玩家记住的玩法",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "体验优先于堆量",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "数值至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补技术理解与数据分析",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂体验与数据的设计负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "顶级系统策划",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转制作",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "策划最核心能力：",
        "options": [
          {
            "key": "A",
            "text": "把体验翻译成可落地设计",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "只会玩",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "能肝",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "脸皮厚",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ecom",
    "name": "电商运营",
    "line": "电商 · 转化",
    "jd": "负责电商店铺或品类的日常运营、活动策划、流量获取与转化提升，扛 GMV/ROI 指标。",
    "fitFor": [
      "对消费/数据敏感",
      "节奏快、抗压",
      "喜欢琢磨流量与转化"
    ],
    "hardSkills": [
      "平台规则（淘系/抖系/京东/小红书）",
      "活动策划与促销设计",
      "直播/短视频/投流",
      "数据分析与 ROI 优化"
    ],
    "softSkills": [
      "数据敏感",
      "执行力",
      "用户视角",
      "节奏感"
    ],
    "industryNotes": {
      "淘系/京东": "重店铺运营与搜索权重，活动节点多。",
      "抖系/快手": "重直播与短视频，投流与达播是核心。",
      "跨境（亚马逊/独立站）": "重选品与广告投放，英语+海外消费习惯。"
    },
    "taboos": [
      "补平台规则：淘宝 / 抖音小店规则、违规红线先背熟",
      "补投放：千川 / 巨量投放实操，会看 ROI 不烧钱",
      "补数据：GMV / 毛利 / 转化率自己能拉表分析"
    ],
    "holland_code": "ES",
    "questions": [
      {
        "type": "日常",
        "scenario": "接手一个店铺，你先：",
        "options": [
          {
            "key": "A",
            "text": "看数据定人群与货品结构",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接上活动",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄同行",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板安排",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做电商你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把流量和转化跑通",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写详情页",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "直播出镜",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "对账",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个品忽然跌出流量池，你：",
        "options": [
          {
            "key": "A",
            "text": "拆排名/转化/竞品找原因",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "猛刷单",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换个图",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "大促备货你靠：",
        "options": [
          {
            "key": "A",
            "text": "历史数据 + 节奏预测",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "拍脑袋",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说多少",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个品值不值得推看：",
        "options": [
          {
            "key": "A",
            "text": "毛利与转化效率",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "好看的图",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "同行在推",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "详情页转化低，你：",
        "options": [
          {
            "key": "A",
            "text": "看跳出与痛点优化卖点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换张主图",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "降价",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做一场直播，你先：",
        "options": [
          {
            "key": "A",
            "text": "定脚本与货品节奏目标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "找主播",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别家话术",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等热点",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "投流 ROI 变差，你：",
        "options": [
          {
            "key": "A",
            "text": "拆人群与素材优化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加预算",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换平台",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "停掉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "老客很久不下单，你：",
        "options": [
          {
            "key": "A",
            "text": "分层触达给新价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "群发广告",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃开发新客",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等回来",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做复盘主要看：",
        "options": [
          {
            "key": "A",
            "text": "GMV 结构 + 毛利 + 哪环掉了",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发了多少内容",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不参与",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "大促当天主推品被拍错价亏本卖，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻下架止损并透明说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见继续卖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅运营",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等结束再处理",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "第一时间下架止损，给用户透明说明与补救，把损失控制在最小，不隐瞒。"
      },
      {
        "type": "压力",
        "scenario": "库存算错导致超卖 2000 单，你：",
        "options": [
          {
            "key": "A",
            "text": "主动同步 + 补货/补偿方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅仓库",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等客诉",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "主动同步进展，出补货或补偿方案，透明沟通，不推诿不拖延。"
      },
      {
        "type": "压力",
        "scenario": "直播间突然被封，大促正在进行，你：",
        "options": [
          {
            "key": "A",
            "text": "切备用号并同步用户",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "躲起来",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "骂平台",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等解封",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "第一时间切备用号并同步用户“已知问题+预计恢复”，协调解封，全程透明。"
      },
      {
        "type": "压力",
        "scenario": "老板要这月 GMV 翻倍资源没加，你：",
        "options": [
          {
            "key": "A",
            "text": "找高性价比杠杆 + 试点",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬冲量亏本卖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不到",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "假装",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不硬亏本冲量，找高性价比杠杆（老客/爆品/达播）小额试点测 ROI，向上同步预期。"
      },
      {
        "type": "压力",
        "scenario": "一个品被大量差评说质量问题，你：",
        "options": [
          {
            "key": "A",
            "text": "查真实问题 + 改进 + 回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删评",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅工厂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "核实质量问题根因，推动改进并诚恳回应，把差评变成信任修复，不删评不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "大促前夜发现详情页虚假宣传风险，你：",
        "options": [
          {
            "key": "A",
            "text": "评估风险，改合规文案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "隐瞒等过审",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给法务",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估合规风险，主动改合规文案，宁可慢一步也不踩红线，不隐瞒。"
      },
      {
        "type": "压力",
        "scenario": "竞品同款比你便宜很多引发退单，你：",
        "options": [
          {
            "key": "A",
            "text": "讲差异与总价值不陷价格战",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "立刻跟价亏本",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂竞品",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "沉默",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "不陷价格战，讲清我方差异与总价值（服务/保障/品质），把比较拉回需求。"
      },
      {
        "type": "压力",
        "scenario": "达人和你谈的佣金临时翻倍否则不播，你：",
        "options": [
          {
            "key": "A",
            "text": "评估 ROI 重新谈或换人",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "全盘接受",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接取消",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "上报老板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用 ROI 重新谈判，找替代达人，把临时加价变成规则谈判，不被动全盘接受。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带电商团队/做店长",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转品牌",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转供应链",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "健康的 GMV 与毛利",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯 GMV",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "创意",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "数据 + 货品驱动",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "感觉驱动",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补数据与供应链",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂货品与流量的经营负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯投放专家",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转品牌",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "电商人最怕：",
        "options": [
          {
            "key": "A",
            "text": "只会冲量不懂毛利",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "logistics",
    "name": "物流专员",
    "line": "供应链 · 仓储",
    "jd": "负责仓储、运输、库存或配送的日常运营与协调，保障货物按时按质送达。",
    "fitFor": [
      "做事有条理、细心",
      "对流程与数字敏感",
      "抗压、能跑现场"
    ],
    "hardSkills": [
      "WMS/TMS 系统操作",
      "库存与盘点管理",
      "运输与承运商协调",
      "数据报表与异常处理"
    ],
    "softSkills": [
      "细致耐心",
      "流程意识",
      "沟通协调",
      "抗压执行"
    ],
    "industryNotes": {
      "电商/快递": "节奏快、量大，重系统与时效。",
      "制造业/3PL": "重成本与合规，重合同与运力调度。",
      "跨境/海外仓": "重清关与国际物流规则，英语加分。"
    },
    "taboos": [
      "补系统：WMS / TMS / ERP 至少会用一个，别只靠纸笔",
      "补供应链：库存周转、仓配逻辑搞懂",
      "补证书：物流师 / 供应链管理师（初级）入门可用"
    ],
    "holland_code": "CE",
    "questions": [
      {
        "type": "日常",
        "scenario": "一批货要发车，你先：",
        "options": [
          {
            "key": "A",
            "text": "核对单据与装载计划",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接让车走",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等司机来",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做物流你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把流程跑顺不出错",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "跑现场",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "对账",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "系统显示库存和实物对不上，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻盘点找差异",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "信系统",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "信记忆",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "承运商又迟到，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘时效并谈考核机制",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "骂一顿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换一家",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "忍着",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要优化一个仓库拣货，你先：",
        "options": [
          {
            "key": "A",
            "text": "看动线与数据找瓶颈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加人",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别仓",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等领导",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户投诉到货破损，你：",
        "options": [
          {
            "key": "A",
            "text": "查包装与运输环节定位",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "推给承运商",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "赔了事",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你管库存靠：",
        "options": [
          {
            "key": "A",
            "text": "系统 + 定期盘点复核",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "Excel 乱记",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "旺季爆仓，你：",
        "options": [
          {
            "key": "A",
            "text": "提前预案 + 分区调度",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬塞",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等过去",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断时效风险看：",
        "options": [
          {
            "key": "A",
            "text": "路由与节点异常",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "承运商说",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不重要",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个流程反复出错，你：",
        "options": [
          {
            "key": "A",
            "text": "找根因改 SOP",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加人盯着",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪执行",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "习惯就好",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "仓库半夜漏水货损，你：",
        "options": [
          {
            "key": "A",
            "text": "立即抢险 + 报损 + 转移",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等天亮",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给仓管",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没发生",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "立刻抢险止损、上报货损并转移完好货物，过程透明同步，不拖延不推诿。"
      },
      {
        "type": "压力",
        "scenario": "司机途中出事故货可能延误，你：",
        "options": [
          {
            "key": "A",
            "text": "协调备用运力保交付",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等处理结果",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅司机",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "第一时间协调备用运力保交付，同步客户预期，把事故影响降到最低。"
      },
      {
        "type": "压力",
        "scenario": "系统宕机无法出库，大单要发，你：",
        "options": [
          {
            "key": "A",
            "text": "线下兜底保出库并抢修",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等修",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "推给 IT",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "用线下/纸质流程兜底保出库，同步 IT 抢修并给客户透明预期，不干等。"
      },
      {
        "type": "压力",
        "scenario": "客户因延误要索赔，你：",
        "options": [
          {
            "key": "A",
            "text": "查责任链 + 协商方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "拒赔",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅承运商",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "查责任链定位责任方，给出合理协商方案，不粗暴拒赔也不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "盘点发现大额短少，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘流程找漏洞并上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞒着",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "怪仓管",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "调账平掉",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "不隐瞒不调账掩盖，复盘流程找漏洞（入库？出库？盗损？）并上报，建防漏机制。"
      },
      {
        "type": "压力",
        "scenario": "承运商突然不合作，你：",
        "options": [
          {
            "key": "A",
            "text": "启动备选运力保运转",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬谈",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "上报等指示",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "停摆",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先启动备选运力保业务运转，再谈替代与合作，不被动停摆。"
      },
      {
        "type": "压力",
        "scenario": "大促爆单分拣跟不上，你：",
        "options": [
          {
            "key": "A",
            "text": "拉优先级 + 加线 + 透明同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬扛",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅业务",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "按紧急度排优先级、加临时线，向相关方透明同步进度与卡点，不硬扛不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "你发现同事长期虚报运费，你：",
        "options": [
          {
            "key": "A",
            "text": "按流程上报并留证据",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "一起分",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没看见",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "私下说",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在合规与保密前提下按流程上报并留证据，不同流也不包庇。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做仓储/运输管理",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转采购",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转供应链规划",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "流程稳与成本优",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "现场自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "流程 + 数据驱动",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "经验驱动",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补系统与供应链知识",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的供应链负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯仓管",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "物流人最怕：",
        "options": [
          {
            "key": "A",
            "text": "只跑现场不懂系统",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "dpm",
    "name": "数据产品经理",
    "line": "产品 · 数据",
    "jd": "把业务问题转化为数据指标、报表与自助分析工具，连接业务团队与数据团队。",
    "fitFor": [
      "逻辑清晰、对数字敏感",
      "业务理解 + 技术沟通",
      "能用数据讲清问题"
    ],
    "hardSkills": [
      "指标体系与口径设计",
      "SQL/Excel 熟练",
      "BI 工具（Tableau/帆软/Superset）",
      "需求文档与跨团队推动"
    ],
    "softSkills": [
      "业务理解",
      "结构化表达",
      "推动协调",
      "数据敏感"
    ],
    "industryNotes": {
      "互联网": "重 AB 实验与用户增长指标体系。",
      "金融/零售": "重经营分析与 BI 大盘。",
      "B 端/SaaS": "重客户成功指标与自助分析平台。"
    },
    "taboos": [
      "补 SQL：能自己取数，不依赖数据分析师",
      "补可视化：Tableau / BI 做看板，结论讲得清楚",
      "补统计：基础概率与 A/B 实验结论能读懂"
    ],
    "holland_code": "EI",
    "questions": [
      {
        "type": "日常",
        "scenario": "业务说“要个看板”，你先：",
        "options": [
          {
            "key": "A",
            "text": "问清要回答的问题与口径",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接拉常用图表",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别的事业部",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等需求文档",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做数据产品你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把业务问题变成指标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写 SQL",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "做可视化",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "指标口径对不上，你：",
        "options": [
          {
            "key": "A",
            "text": "拉相关方对齐统一定义",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "各用各的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "听老板的",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "业务说数据“不准”，你：",
        "options": [
          {
            "key": "A",
            "text": "查采集与计算链路定位",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "重跑一遍",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "说系统就这样",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "甩给数仓",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你设计指标体系先：",
        "options": [
          {
            "key": "A",
            "text": "从业务目标拆北极星与子指标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆一堆图表",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄行业",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个报表没人看，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘是否真解决决策问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加美化",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "强推",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "业务要临时取数，你：",
        "options": [
          {
            "key": "A",
            "text": "判断是否能沉淀为产品能力",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "每次手工跑",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让业务自己学 SQL",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拒绝",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做数据解读靠：",
        "options": [
          {
            "key": "A",
            "text": "结合业务背景讲结论",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "只给数字",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄上次",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "埋点方案你来定，你先：",
        "options": [
          {
            "key": "A",
            "text": "对齐分析目标再设计事件",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "能埋都埋",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄竞品埋点",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "让前端定",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个数据产品好坏看：",
        "options": [
          {
            "key": "A",
            "text": "是否真驱动了决策",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "好看",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "功能多",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "老板满意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "大促实时大屏数据突然不更新，你：",
        "options": [
          {
            "key": "A",
            "text": "查链路并切备用口径同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给数仓",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等修",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "立刻查采集/计算链路定位，切备用口径或兜底口径并透明同步，不装没事不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "业务按你的报表做了决策却亏了，来找你，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘口径与解读是否误导",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "说数据没错",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅业务理解差",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先复盘口径与解读是否真有误导，有则修正并说明边界，把“背锅”变“一起把指标讲清”。"
      },
      {
        "type": "压力",
        "scenario": "老板要一个从没做过的经营分析，今晚要，你：",
        "options": [
          {
            "key": "A",
            "text": "先定核心问题再快速拉数",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆表",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确要回答的核心经营问题，再快速拉关键数据搭框架，重结论轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "两个部门对同一个指标数值争吵，你：",
        "options": [
          {
            "key": "A",
            "text": "拉口径与取数逻辑对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各给各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大的",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲开",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "把分歧摆上台，拉取数逻辑与口径对齐到唯一定义，用规则消弭争论。"
      },
      {
        "type": "压力",
        "scenario": "你推的数据工具没人用，老板质疑价值，你：",
        "options": [
          {
            "key": "A",
            "text": "找不用原因 + 给落地场景",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪业务不配合",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说再推广",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "找“不用”的真实原因（门槛？场景？信任？），给出具体落地场景与培训，把质疑变方案。"
      },
      {
        "type": "压力",
        "scenario": "上游数仓迁移导致历史数据对不上，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响 + 做映射与说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当没发生",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅数仓",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等修复",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "评估对业务的影响，做口径映射与版本说明，透明沟通，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "业务临时改口径但已发周报，你：",
        "options": [
          {
            "key": "A",
            "text": "发更正并说明影响",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "偷偷改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "不认",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "主动发更正说明并标注口径变化的影响范围，保持数据可信，不偷偷改。"
      },
      {
        "type": "压力",
        "scenario": "你发现核心指标计算有 bug 已影响决策月余，你：",
        "options": [
          {
            "key": "A",
            "text": "上报 + 修 + 评估历史影响",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "悄悄修",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "瞒着",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等别人发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即上报、修复并评估历史影响范围，给出修正建议，不悄悄掩盖。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带数据产品团队",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转数据分析",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转业务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "数据真驱动业务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "技术酷",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "业务理解 > 工具",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "工具至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补业务与算法理解",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的数据产品负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯取数",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转算法",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "数据产品人最怕：",
        "options": [
          {
            "key": "A",
            "text": "只做报表不懂业务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "被卷",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "加班",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想过",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "teacher",
    "name": "教师/培训师",
    "line": "教育 · 培训",
    "jd": "负责课程教学、学员辅导、教学设计与培训交付（K12/职业/企业内训皆可）。",
    "fitFor": [
      "喜欢与人沟通、表达欲强",
      "有耐心、喜欢教别人",
      "对某个学科/技能有积累"
    ],
    "hardSkills": [
      "学科或专业技能",
      "课堂/在线教学能力",
      "教学设计与课件制作",
      "学员评估与反馈"
    ],
    "softSkills": [
      "表达力",
      "耐心",
      "共情",
      "持续学习"
    ],
    "industryNotes": {
      "K12（双减后收缩）": "转向素质教育/职业教育/合规托管。",
      "职业/IT 培训": "重技能实战与就业结果，节奏快。",
      "企业内训": "重行业 know-how 与定制化交付。"
    },
    "taboos": [
      "补资格：考教师资格证（笔试 + 面试 + 普通话），这是上岗硬门槛",
      "补教学：会做课件、控场、设计练习与反馈",
      "补认证：TTT 培训师认证提升企业培训方向背书"
    ],
    "holland_code": "SA",
    "questions": [
      {
        "type": "日常",
        "scenario": "接手一个新班级，你先：",
        "options": [
          {
            "key": "A",
            "text": "了解学情与起点再设计",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接按大纲讲",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄往年课件",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等学生反应",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做教学你更享受：",
        "options": [
          {
            "key": "A",
            "text": "看到学员真的学会",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "把课件做漂亮",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "站在台上",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "放假",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "学生对内容没兴趣，你：",
        "options": [
          {
            "key": "A",
            "text": "调整讲法贴近学员",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "点名批评",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照本宣科",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一节课好坏看：",
        "options": [
          {
            "key": "A",
            "text": "学员是否真掌握",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "课堂热闹",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导听课满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "自己讲爽",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "学员基础差异大，你：",
        "options": [
          {
            "key": "A",
            "text": "分层任务兼顾",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "按中间讲",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "只抓尖子",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "放弃差的",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要设计一个新课程，你先：",
        "options": [
          {
            "key": "A",
            "text": "定学习目标与评估方式",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "找现成 PPT",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照搬别的机构",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便讲",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "学员问了个超纲问题，你：",
        "options": [
          {
            "key": "A",
            "text": "肯定并引导探究或课后答",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "说考试不考",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "糊弄",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做学员反馈靠：",
        "options": [
          {
            "key": "A",
            "text": "作业 + 提问 + 观察",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "期末考",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "感觉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个知识点反复讲不会，你：",
        "options": [
          {
            "key": "A",
            "text": "换角度/例子重新讲",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "再讲一遍",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪学生笨",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "因材施教",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "统一进度",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "刷题至上",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "课堂突发学员当众顶撞你，你：",
        "options": [
          {
            "key": "A",
            "text": "稳住节奏课后单独聊",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当场吵",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "赶出教室",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先稳住课堂节奏不激化，课后单独了解真实想法，把冲突变成沟通机会。"
      },
      {
        "type": "压力",
        "scenario": "考试成绩大面积崩盘，家长来问，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘教学并给改进方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪学生不学",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说题难",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "躲着",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先复盘教学与命题哪里出问题，给家长可落地的改进方案，不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "临时被通知顶替请假同事上陌生课，你：",
        "options": [
          {
            "key": "A",
            "text": "快速抓重点框架讲清",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "念教材",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "让学生自习",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拒上",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "快速抓核心框架与重点讲清，保证学员有收获，不念教材不甩手。"
      },
      {
        "type": "压力",
        "scenario": "你带的班升学/就业结果差，老板质疑，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘教学与学情给方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪生源差",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说尽力了",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用学情与教学数据复盘，给可改进方案，不怪生源也不空喊尽力。"
      },
      {
        "type": "压力",
        "scenario": "学员在群里公开差评你课水，你：",
        "options": [
          {
            "key": "A",
            "text": "诚恳了解并调整",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删评",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "诚恳了解具体哪里水，针对性调整内容，不删评不对骂。"
      },
      {
        "type": "压力",
        "scenario": "排课冲突两个班都要你，你：",
        "options": [
          {
            "key": "A",
            "text": "协调优先级与补课",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "随机选一个",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩给教务",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "都推",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "和相关方协调优先级，对另一班给明确补课安排，不随便甩。"
      },
      {
        "type": "压力",
        "scenario": "你发现教材有重大错误，你：",
        "options": [
          {
            "key": "A",
            "text": "更正并提醒学员",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给出版社",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "等修订",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即更正并提醒学员，标注正确内容，不掩盖错误。"
      },
      {
        "type": "压力",
        "scenario": "试讲被评委批“没有互动”，你：",
        "options": [
          {
            "key": "A",
            "text": "补互动设计再练",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "反驳",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "背后抱怨",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "把批评变成具体改进：补互动环节并演练，不反驳不情绪化。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做教研/师训负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转运营",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "学员真成长",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "教研大于表演",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "表演至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补学科与教学法",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂学员的教研型老师",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯讲课",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转管理",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "老师最核心：",
        "options": [
          {
            "key": "A",
            "text": "让学员学会",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "嗓门大",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "严",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "资历",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "counselor",
    "name": "心理咨询师",
    "line": "心理 · 服务",
    "jd": "为来访者提供心理咨询、心理评估与支持（学校/EAP/社区/互联网心理平台）。",
    "fitFor": [
      "高共情、愿意倾听",
      "情绪稳定、抗压",
      "对人性与行为感兴趣"
    ],
    "hardSkills": [
      "心理学专业知识",
      "咨询技术（CBT/精神动力等）",
      "心理评估量表",
      "伦理与边界"
    ],
    "softSkills": [
      "共情",
      "倾听",
      "边界感",
      "自我觉察"
    ],
    "industryNotes": {
      "学校": "重学生发展与危机干预，编制稳定。",
      "EAP/企业": "重员工帮助计划，保密要求高。",
      "互联网心理平台": "重线上化产品与规模化匹配（KnowYourself/简单心理等）。"
    },
    "taboos": [
      "补证书：中科院心理所咨询师培训合格证是入门门槛，先持证",
      "补技术：倾听 / 共情 / 提问的基础咨询技术持续练",
      "补伦理：保密原则与转介边界必须守，别越界给建议"
    ],
    "holland_code": "SI",
    "questions": [
      {
        "type": "日常",
        "scenario": "来访者第一次来，你先：",
        "options": [
          {
            "key": "A",
            "text": "建立关系 + 收集信息",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接给建议",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "下诊断",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "聊自己",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做咨询你更享受：",
        "options": [
          {
            "key": "A",
            "text": "陪来访者看清自己",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "用技术炫",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "被需要",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "清闲",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "来访者沉默不说话，你：",
        "options": [
          {
            "key": "A",
            "text": "接纳留白并温和探索",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "不停追问",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "尴尬陪笑",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "换人",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断干预是否有效看：",
        "options": [
          {
            "key": "A",
            "text": "来访者真实变化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "你说得顺",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "来访者夸你",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "时长",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "来访者带话题跑偏，你：",
        "options": [
          {
            "key": "A",
            "text": "温柔拉回目标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "跟着跑",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "打断",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做记录靠：",
        "options": [
          {
            "key": "A",
            "text": "结构化个案记录",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "随便写",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "来访者问你私人问题，你：",
        "options": [
          {
            "key": "A",
            "text": "温和边界化并回到话题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "照实回答",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "反问我为啥问",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做评估靠：",
        "options": [
          {
            "key": "A",
            "text": "量表 + 临床访谈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看外表",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "听别人说",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个技术你不会，你：",
        "options": [
          {
            "key": "A",
            "text": "转介或先督导学习",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬上",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "糊弄",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "拒接",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "以来访者为中心",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "技术为中心",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "权威为中心",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "来访者情绪崩溃在咨询中，你：",
        "options": [
          {
            "key": "A",
            "text": "稳定抱持并评估风险",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "慌乱无措",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "叫停赶人",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "保持稳定抱持，评估自伤/危机风险，必要时启动危机预案，不让来访者独自坠落。"
      },
      {
        "type": "压力",
        "scenario": "来访者透露有自伤计划，你：",
        "options": [
          {
            "key": "A",
            "text": "按伦理评估并启动保护",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "承诺保密不报",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "吓唬",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "突破保密边界按伦理与法律启动保护流程，联系必要支持，把安全放第一位。"
      },
      {
        "type": "压力",
        "scenario": "咨询没进展来访者想退出，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘联盟与目标再谈",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "道德绑架留下",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "随便",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "复盘咨访联盟与目标，坦诚讨论卡点，尊重来访者的退出权而非道德绑架。"
      },
      {
        "type": "压力",
        "scenario": "你对来访者产生反移情，你：",
        "options": [
          {
            "key": "A",
            "text": "自我觉察并寻求督导",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "带入私人情绪",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "忽略",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "迁怒",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "保持自我觉察，把反移情当线索，必要时寻求督导，不把私人情绪带入咨询。"
      },
      {
        "type": "压力",
        "scenario": "家长施压要你“治好”孩子，你：",
        "options": [
          {
            "key": "A",
            "text": "澄清边界与共同努力",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬承诺",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪家长",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装听",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "澄清咨询边界与各方角色，邀请家长共同配合，不硬承诺也不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "你发现同行转介来的个案信息有误，你：",
        "options": [
          {
            "key": "A",
            "text": "核实并和来访者重建",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "将错就错",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂同行",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先核实真实情况，和来访者重建准确信息，必要时与同行沟通，不将错就错。"
      },
      {
        "type": "压力",
        "scenario": "来访者送你贵重礼物，你：",
        "options": [
          {
            "key": "A",
            "text": "温和拒绝并探讨意义",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "收下",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "当场批评",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "不回复",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按边界温和拒绝，并探讨礼物背后的意义与关系动力，不越界。"
      },
      {
        "type": "压力",
        "scenario": "一次咨询你说错话造成伤害，你：",
        "options": [
          {
            "key": "A",
            "text": "真诚修复并反思",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅来访者敏感",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲着",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "真诚承认并修复关系，事后反思改进，不掩盖不甩锅。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "成为成熟咨询师/开工作室",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转测评",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转运营",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "帮人走出困境",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "伦理高于一切",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "效果至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "权威说了算",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "做个人体验与督导",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "稳定有边界的咨询师",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "网红心理",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转管理",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "咨询最核心：",
        "options": [
          {
            "key": "A",
            "text": "关系与边界",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "话术",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "cs",
    "name": "客服/客户成功",
    "line": "服务 · 客户",
    "jd": "为客户解答疑问、处理投诉、跟进回访，承接售前售后与续费（CSM 更偏续费与客户经营）。",
    "fitFor": [
      "耐心、表达清晰",
      "抗压、能处理负面情绪",
      "对人敏感、有服务意识"
    ],
    "hardSkills": [
      "客服系统（Zendesk/智齿/容联）",
      "FAQ 与话术库",
      "客户分层与跟进",
      "数据（满意度/响应时长）"
    ],
    "softSkills": [
      "耐心",
      "服务意识",
      "沟通表达",
      "抗压"
    ],
    "industryNotes": {
      "电商/外卖": "节奏快、量大，标准化话术为主。",
      "SaaS/企业服务": "重续费与 NPS，CSM 是核心。",
      "金融/运营商": "强合规与工单 SLA，重质检。"
    },
    "taboos": [
      "补产品：把自家 SaaS 功能用到能现场演示",
      "补方法：客户成功 / CSM 的续费留存打法",
      "补工具：CRM + 工单系统熟练，Excel 拉客户健康度"
    ],
    "holland_code": "SE",
    "questions": [
      {
        "type": "日常",
        "scenario": "客户来投诉，你先：",
        "options": [
          {
            "key": "A",
            "text": "倾听并确认问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接解释",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "推流程",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "嫌烦",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做客服你更享受：",
        "options": [
          {
            "key": "A",
            "text": "真正帮客户解决问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "冲满意度指标",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "闲聊",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "下班",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户情绪很激动，你：",
        "options": [
          {
            "key": "A",
            "text": "先共情再处理",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "比他更激动",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "C",
            "text": "冷处理",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "转别人",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个问题优先级看：",
        "options": [
          {
            "key": "A",
            "text": "影响面与严重程度",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "谁嗓门大",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板关注",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户问了个你不会的，你：",
        "options": [
          {
            "key": "A",
            "text": "查清楚再回并跟进",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "瞎编",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "说不知道",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "转别人",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要优化 FAQ，你先：",
        "options": [
          {
            "key": "A",
            "text": "看高频问题数据",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭感觉写",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄同行",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不优化",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户重复问同一问题，你：",
        "options": [
          {
            "key": "A",
            "text": "看是否没解决根因",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "复制粘贴",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "烦他",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不回",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "CSM 续费你靠：",
        "options": [
          {
            "key": "A",
            "text": "日常价值经营 + 健康度",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "到期硬催",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "降价留",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随缘",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做客户记录靠：",
        "options": [
          {
            "key": "A",
            "text": "结构化 CRM 跟进",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "微信备注",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "服务即经营",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "救火就行",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "走流程",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "客户在群里公开辱骂你，你：",
        "options": [
          {
            "key": "A",
            "text": "私聊了解 + 公开专业回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "踢人",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "先私聊了解真实诉求，再公开、专业、有温度地回应，分化情绪稳住大多数，不靠对骂或踢人。"
      },
      {
        "type": "压力",
        "scenario": "系统故障大量客诉涌来，你：",
        "options": [
          {
            "key": "A",
            "text": "模板同步进展 + 分类跟进",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "一个个回",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "不回",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩给技术",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用统一模板透明同步进展，按紧急度分类跟进，全程不装死不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "客户扬言要投诉到监管，你：",
        "options": [
          {
            "key": "A",
            "text": "升级处理 + 合规解决",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "吓唬",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "装没听见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按合规升级处理，给出解决方案与时间，不吓唬不拖延。"
      },
      {
        "type": "压力",
        "scenario": "你承诺的时效没做到客户发火，你：",
        "options": [
          {
            "key": "A",
            "text": "认错 + 补救 + 给时间",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "甩给后端",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "不回",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "辩解",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "先认错、不甩后端，给明确补救与时间节点，用行动重建信任。"
      },
      {
        "type": "压力",
        "scenario": "一个大客户要流失你接手，你：",
        "options": [
          {
            "key": "A",
            "text": "聊真实原因 + 价值重建",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬留降价",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪前任",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先聊真实流失原因，针对性重建价值或平稳过渡，不靠一味降价也不甩锅前任。"
      },
      {
        "type": "压力",
        "scenario": "恶意客户反复骚扰索赔，你：",
        "options": [
          {
            "key": "A",
            "text": "按规则与证据处理",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "妥协私了",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "依据规则与证据冷静处理，必要时升级，不破例妥协也不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "半夜客户紧急问题找你，你：",
        "options": [
          {
            "key": "A",
            "text": "起来定位并同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等天亮",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "转别人",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没收到",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "被呼叫立即起来定位影响并同步进展，必要时升级，不装没收到。"
      },
      {
        "type": "压力",
        "scenario": "续费季指标差很多，你：",
        "options": [
          {
            "key": "A",
            "text": "盘点高流失风险集中攻坚",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬催",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "焦虑摆烂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "造假",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "盘点高流失风险客户集中攻坚，分析卡点精准突破，向上要资源，不硬催不造假。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做 CSM/客户成功负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "客户真满意与留存",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "长期关系 > 一次救火",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "灭火就行",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "走流程",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补行业与数据",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的客户经营专家",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯接线",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "客服最核心：",
        "options": [
          {
            "key": "A",
            "text": "解决问题 + 共情",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "话术熟",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "能忍",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "脸皮厚",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "lawyer",
    "name": "律师",
    "line": "法律 · 专业",
    "jd": "为客户处理诉讼/非诉法律事务，撰写法律意见、出庭辩护或合同审查（应届多从助理/实习起步）。",
    "fitFor": [
      "逻辑严谨、表达精准",
      "对文字与细节敏感",
      "抗压、能啃硬骨头"
    ],
    "hardSkills": [
      "法律专业知识",
      "法律检索与案例分析",
      "文书写作",
      "沟通与谈判"
    ],
    "softSkills": [
      "严谨",
      "逻辑",
      "表达",
      "抗压"
    ],
    "industryNotes": {
      "红圈所/大所": "高强度培养体系，议价能力强但工作强度极大。",
      "精品所/外资所": "细分领域深耕，英语+国际法背景加分。",
      "公司法务（甲方）": "节奏相对友好，重业务理解与风控。"
    },
    "taboos": [
      "硬门槛：必须通过法律职业资格考试（法考）；非法本需走'老人老办法'或读法律硕士才能报名",
      "补检索：北大法宝 / 威科先行的法条与案例检索速度要快",
      "补文书：起诉状 / 合同 / 法律意见书的规范写作",
      "补实习：律所实习满 1 年才能申请执业证，这是转行最耗时的一步"
    ],
    "holland_code": "EI",
    "questions": [
      {
        "type": "日常",
        "scenario": "接一个案子，你先：",
        "options": [
          {
            "key": "A",
            "text": "梳理事实与法律关系",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接写诉状",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "问当事人要钱",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "凭经验定",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做律师你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把复杂问题理清并说服",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "出庭",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "写文书",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "应酬",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "事实不清证据不足，你：",
        "options": [
          {
            "key": "A",
            "text": "引导补充证据再判断",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬诉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "劝和解",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拒接",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个案子走向看：",
        "options": [
          {
            "key": "A",
            "text": "事实 + 证据 + 法条",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "关系",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "对方强弱",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做法律检索，你先：",
        "options": [
          {
            "key": "A",
            "text": "定争议焦点再检索",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "随便搜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄模板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "问同事",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户问“能不能赢”，你：",
        "options": [
          {
            "key": "A",
            "text": "客观分析风险与依据",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "打包票",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "含糊说能",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不答",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一份合同你重点看：",
        "options": [
          {
            "key": "A",
            "text": "权责与风险条款",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "字数",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "模板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "盖章",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "新法规出台，你：",
        "options": [
          {
            "key": "A",
            "text": "研读并评估对客户影响",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等别人总结",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "无所谓",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不学",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "庭审对方抛出意料外证据，你：",
        "options": [
          {
            "key": "A",
            "text": "冷静质证并调整",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "慌了",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抗议",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "愣住",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "专业与证据为王",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "关系为王",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "开庭前发现关键证据漏交，你：",
        "options": [
          {
            "key": "A",
            "text": "评估补交或申请延期",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬着头皮上",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪助理",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估能否补交或申请延期/调取，按程序补救，不硬扛也不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "当事人隐瞒重要事实导致被动，你：",
        "options": [
          {
            "key": "A",
            "text": "重新审视并调整策略",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "骂当事人",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "将错就错",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "退出",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "稳住局面，重新审视事实调整策略，与当事人澄清诚实义务，不将错就错。"
      },
      {
        "type": "压力",
        "scenario": "对方当庭突然和解施压，你：",
        "options": [
          {
            "key": "A",
            "text": "评估利弊给当事人建议",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "替当事人答应",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬刚",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "慌乱",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "基于利弊给当事人清晰建议，由当事人决策，不越权也不慌乱。"
      },
      {
        "type": "压力",
        "scenario": "你写的文书被领导打回重写三次，你：",
        "options": [
          {
            "key": "A",
            "text": "找标准迭代到第 N 次",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "抱怨",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "照搬旧文",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "弄清每次打回的标准，针对性迭代，带着“这次为什么能过”的证据再来。"
      },
      {
        "type": "压力",
        "scenario": "客户临时要一个从没做过的法律意见，今晚给，你：",
        "options": [
          {
            "key": "A",
            "text": "先定问题与依据快速出框架",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆字数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄网",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确要回答的法律问题，再快速检索出框架，重逻辑轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "对方当事人恶意拖延，你：",
        "options": [
          {
            "key": "A",
            "text": "用程序权利推进",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "干等",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "妥协",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用程序性权利（举证期限、催告等）依法推进，不被拖死也不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "你发现己方证据有瑕疵，你：",
        "options": [
          {
            "key": "A",
            "text": "评估风险并诚实准备",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估瑕疵对结果的影响，提前准备应对与补强，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "当事人情绪激动要你“必须赢”，你：",
        "options": [
          {
            "key": "A",
            "text": "管理预期讲清风险",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "打包票",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "附和",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "管理当事人预期，讲清法律依据与风险，用专业建立信任，不打包票。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "成为主办/合伙人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转法务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转合规",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "专业沉淀与口碑",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "专业与伦理为本",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "关系为本",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补细分领域深耕",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂行业的专业律师",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "万金油",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转甲方",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "律师最核心：",
        "options": [
          {
            "key": "A",
            "text": "逻辑 + 证据 + 表达",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "能说",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "关系硬",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "资历",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "founder",
    "name": "创业者/CEO",
    "line": "创业 · 综合",
    "jd": "负责公司战略、融资、团队与产品全栈决策（应届更常见于联合创始人或早期成员路径）。",
    "fitFor": [
      "高自驱、不怕不确定",
      "能扛压、能说服人",
      "对机会敏感、行动力强"
    ],
    "hardSkills": [
      "行业洞察与商业判断",
      "融资与路演",
      "团队搭建与文化",
      "产品/运营/财务基础"
    ],
    "softSkills": [
      "决断",
      "抗压",
      "愿景",
      "沟通"
    ],
    "industryNotes": {
      "互联网创业": "重增长与融资节奏，A 轮前全栈。",
      "实体/消费创业": "重供应链与现金流，活下来是关键。",
      "出海/科技创业": "重国际视野与技术深度。"
    },
    "taboos": [
      "补商业计划：会写 BP、算单位经济模型（UE），别只谈情怀",
      "补财务：看得懂三张表，融资前自己先理清账目",
      "补认知：去创业营 /  accelerator 泡一圈，少交学费"
    ],
    "holland_code": "E",
    "questions": [
      {
        "type": "日常",
        "scenario": "想到一个创业点子，你先：",
        "options": [
          {
            "key": "A",
            "text": "验证需求与可行性",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接注册公司",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "找人融资",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等灵感",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做创业你更享受：",
        "options": [
          {
            "key": "A",
            "text": "从 0 把事做成",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "当老板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "融资路演",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "自由",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "产品上线没人用，你：",
        "options": [
          {
            "key": "A",
            "text": "贴近用户找真需求",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加功能",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "花钱买量",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个方向值不值得做看：",
        "options": [
          {
            "key": "A",
            "text": "需求真实 + 模式成立",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "火热",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "别人在做",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "现金流紧张，你：",
        "options": [
          {
            "key": "A",
            "text": "砍非核心保命脉",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "盲目扩张",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等融资",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要搭团队，你先：",
        "options": [
          {
            "key": "A",
            "text": "定能力与价值观缺口",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "找熟人",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看谁便宜",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个决策两难，你：",
        "options": [
          {
            "key": "A",
            "text": "用目标与数据取舍",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "抛硬币",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "听合伙人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做复盘靠：",
        "options": [
          {
            "key": "A",
            "text": "指标 + 关键动作",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "别人说",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不复盘",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "竞品融资了你没融到，你：",
        "options": [
          {
            "key": "A",
            "text": "聚焦-unit 经济与节奏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "焦虑跟风",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "贬低竞品",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "先活下来再长大",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "唯快不破",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "唯融资",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "发不出工资了，你：",
        "options": [
          {
            "key": "A",
            "text": "透明沟通 + 砍支 + 找钱",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "隐瞒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅市场",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "跑路",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "向团队透明沟通，砍非核心支出，全力找钱（回款/融资/过桥），把危机摊开一起扛。"
      },
      {
        "type": "压力",
        "scenario": "最大客户突然毁约，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并找替代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬扛",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂客户",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估收入缺口与现金影响，找替代客户或转型，把单点依赖风险拆掉。"
      },
      {
        "type": "压力",
        "scenario": "核心合伙人要退出，你：",
        "options": [
          {
            "key": "A",
            "text": "平稳交接 + 补位",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "撕破脸",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "硬留",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "理性谈退出的股比与交接，做好补位不影响业务，不情绪化不硬留。"
      },
      {
        "type": "压力",
        "scenario": "产品出严重事故上热搜，你：",
        "options": [
          {
            "key": "A",
            "text": "公开担责 + 整改",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删稿",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "第一时间公开担责并给整改动作，用行动修复信任，不删稿不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "投资人逼你转型你不认同，你：",
        "options": [
          {
            "key": "A",
            "text": "用数据沟通并守住主线",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬刚",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "全听投资人",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖延",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用数据与逻辑沟通你的判断，守住业务主线，必要时坦诚分歧，不硬刚也不盲从。"
      },
      {
        "type": "压力",
        "scenario": "账上只够活一个月，你：",
        "options": [
          {
            "key": "A",
            "text": "极限聚焦变现",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "乱转型",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "等奇迹",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "极限聚焦能立刻变现的动作，砍一切非必要，把一个月拉长成生机。"
      },
      {
        "type": "压力",
        "scenario": "团队因焦虑开始动摇，你：",
        "options": [
          {
            "key": "A",
            "text": "讲清现状与打法稳军心",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "画大饼",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂团队",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲着",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "坦诚讲清真实现状与下一步打法，用具体动作稳军心，不空画饼。"
      },
      {
        "type": "压力",
        "scenario": "你押注的方向被验证错了，你：",
        "options": [
          {
            "key": "A",
            "text": "止损并快速转",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "死扛",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪运气",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "敢于认错止损，把资源转到验证过的方向，不沉没成本死扛。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "把公司做稳做健康",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "再融一轮",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "套现离场",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "把事做成",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "财富",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "自由",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "现金流是生命线",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "增长至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "融资至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补短板或换赛道",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽打工",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "能扛事的经营者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "网红创始人",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "投资人",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "创业最核心：",
        "options": [
          {
            "key": "A",
            "text": "判断 + 执行 + 韧性",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "能说",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "有关系",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "运气",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "finance",
    "name": "财务/会计",
    "line": "财务 · 专业",
    "jd": "负责账务处理、税务申报、报表编制或财务分析，支撑公司财务规范与决策。",
    "fitFor": [
      "对数字敏感、细心",
      "原则性强、守规矩",
      "做事有条理"
    ],
    "hardSkills": [
      "会计准则与税法",
      "用友/金蝶/SAP",
      "Excel 高阶（VLOOKUP/透视）",
      "报表与分析"
    ],
    "softSkills": [
      "细致",
      "原则",
      "数字敏感",
      "保密"
    ],
    "industryNotes": {
      "事务所（四大/八大）": "高强度培养，跳板价值大。",
      "企业财务": "模块分细（AP/AR/总账/税务/分析），稳。",
      "互联网/创业公司": "重 BP/预算/数据分析，跨界多。"
    },
    "taboos": [
      "硬门槛：上岗需初级会计职称，做账报税先持证",
      "补软件：Excel 财务模型 + 用友 / 金蝶至少会一个",
      "补进阶：CPA 注册会计师不限专业但极难，是含金量最高的加分项",
      "补税法：增值税 / 企业所得税实务要懂，别只背分录"
    ],
    "holland_code": "C",
    "questions": [
      {
        "type": "日常",
        "scenario": "拿到一笔业务报销，你先：",
        "options": [
          {
            "key": "A",
            "text": "核票据与合规",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接过",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看谁报销",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做财务你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把账做清做准",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "做分析",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "报税",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "对账",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "账目对不上差一笔，你：",
        "options": [
          {
            "key": "A",
            "text": "逐笔勾对找差异",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "调平了事",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "信系统",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一笔支出该不该批看：",
        "options": [
          {
            "key": "A",
            "text": "预算与合规",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "谁申请的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板点头",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "感觉",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "新会计准则出台，你：",
        "options": [
          {
            "key": "A",
            "text": "研读并调整处理",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等通知",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "无所谓",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不学",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "业务要一笔预算外付款，你：",
        "options": [
          {
            "key": "A",
            "text": "看预算与必要性",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接批",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "听老板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拒",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做经营分析，你先：",
        "options": [
          {
            "key": "A",
            "text": "定分析目标与口径",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆报表",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄上月",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "发现一笔错账，你：",
        "options": [
          {
            "key": "A",
            "text": "更正并查根因",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做报表靠：",
        "options": [
          {
            "key": "A",
            "text": "系统 + 复核",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "Excel 手算",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "不核",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "准则与合规为本",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "灵活处理",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "月底结账系统故障，你：",
        "options": [
          {
            "key": "A",
            "text": "线下兜底保结账并抢修",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等修",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "推给 IT",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "用线下/手工流程兜底保结账，同步 IT 抢修并给相关方透明预期，不干等。"
      },
      {
        "type": "压力",
        "scenario": "业务催付款但票据不合规，你：",
        "options": [
          {
            "key": "A",
            "text": "指出问题补全再付",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "先付后补",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接拒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "指出不合规点，辅导业务补全票据再付，守住合规不先付后补也不粗暴拒。"
      },
      {
        "type": "压力",
        "scenario": "税务稽查来了，你：",
        "options": [
          {
            "key": "A",
            "text": "配合并提供完整凭证",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "藏资料",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅前任",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "慌乱",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "配合稽查，提供完整合规凭证，有问题主动说明，不藏不甩。"
      },
      {
        "type": "压力",
        "scenario": "发现历史账务有重大错漏，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并更正上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "调平",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估影响范围，按准则更正并上报，不掩盖不调平了事。"
      },
      {
        "type": "压力",
        "scenario": "老板暗示“做高点利润”冲融资，你：",
        "options": [
          {
            "key": "A",
            "text": "说明合规边界并给合法方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照做",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒接",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "守住准则底线，说明合规边界，给合法的优化方案，不做假账。"
      },
      {
        "type": "压力",
        "scenario": "大促前业务临时要一笔预算外款，你：",
        "options": [
          {
            "key": "A",
            "text": "看 ROI 与预算再决",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "直接批",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听老板",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "拒",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "用 ROI 与预算盘评估必要性，给明确结论与节奏，不盲目批也不一刀切拒。"
      },
      {
        "type": "压力",
        "scenario": "你算错一笔税面临滞纳金，你：",
        "options": [
          {
            "key": "A",
            "text": "主动更正并补缴",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞒着",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅系统",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等查",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "主动更正并补缴，复盘流程防再犯，不隐瞒不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "两个部门费用归属吵，你：",
        "options": [
          {
            "key": "A",
            "text": "按规则分摊并讲清",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各记各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按分摊规则客观处理并讲清依据，用规则消弭争论，不偏袒。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做财务分析/财务 BP",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转审计",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转出纳",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "账准与合规",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "轻松",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "准则与数据说话",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "灵活",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补业务与税务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的财务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯记账",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "财务最核心：",
        "options": [
          {
            "key": "A",
            "text": "严谨 + 原则",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "算得快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "听话",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "资历",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "admin",
    "name": "行政/秘书",
    "line": "行政 · 后勤",
    "jd": "负责公司日常行政事务，如会议安排、办公采购、文件管理、后勤保障与对外接待。",
    "fitFor": [
      "做事细心、条理清晰",
      "服务意识强、性格稳",
      "多线程协调"
    ],
    "hardSkills": [
      "办公软件（Word/Excel/PPT）",
      "会议与差旅管理",
      "采购与供应商对接",
      "文档与档案管理"
    ],
    "softSkills": [
      "细致",
      "服务意识",
      "沟通",
      "应变"
    ],
    "industryNotes": {
      "互联网大厂": "行政体系成熟，分工细（前台/总务/差旅）。",
      "创业公司": "一人多能，成长快。",
      "传统/外资": "重礼仪与英文沟通。"
    },
    "taboos": [
      "补 Office：Word 排版、Excel 函数、PPT 美化到专业级",
      "补礼仪：商务接待、邮件、会议纪要规范到位",
      "补证书：行政管理师 / 秘书资格（初级即可）"
    ],
    "holland_code": "C",
    "questions": [
      {
        "type": "日常",
        "scenario": "老板要开个会，你先：",
        "options": [
          {
            "key": "A",
            "text": "定议程 + 通知 + 物料",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发个会议邀请",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等当天",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做行政你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把杂事理顺不出错",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "办活动",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "采购",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "闲着",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "办公用品总不够用，你：",
        "options": [
          {
            "key": "A",
            "text": "看消耗规律建补货点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "缺了再买",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪大家多用",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要订差旅，你先：",
        "options": [
          {
            "key": "A",
            "text": "看政策与性价比",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "挑最便宜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "挑最好",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个流程反复卡，你：",
        "options": [
          {
            "key": "A",
            "text": "找根因改 SOP",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加人盯",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪执行",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "习惯",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "重要文件你要归档，你：",
        "options": [
          {
            "key": "A",
            "text": "分类 + 版本管理",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆一起",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "存桌面",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不存",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "访客临时来访没预约，你：",
        "options": [
          {
            "key": "A",
            "text": "快速确认并妥善安排",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接拒",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "让等",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做采购比价靠：",
        "options": [
          {
            "key": "A",
            "text": "多家对比 + 记录",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "一家老合作",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "随便",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不比",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "会议室冲突两方都要，你：",
        "options": [
          {
            "key": "A",
            "text": "协调优先级与挪场",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "随机给",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "甩给老板",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "都拒",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "主动靠前服务",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "按流程等",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "推一步动一步",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "老板紧急出差机票没了，你：",
        "options": [
          {
            "key": "A",
            "text": "盯退改签 + 备选方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "说没票",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩给老板自己订",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "持续盯退改签与临近航班，给备选路线，把“没票”变成“已安排最优”，不两手一摊。"
      },
      {
        "type": "压力",
        "scenario": "重要会议设备坏了，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻备用设备 + 抢修",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等修",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "推给 IT",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "取消",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "立刻换备用设备或抢修，保障会议进行，全程透明同步，不干等。"
      },
      {
        "type": "压力",
        "scenario": "突袭检查/参观要来，你：",
        "options": [
          {
            "key": "A",
            "text": "快速清单化准备",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "慌乱",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "拉清单快速准备（环境/材料/动线），分人分块落实，不慌不乱。"
      },
      {
        "type": "压力",
        "scenario": "两份老板行程冲突，你：",
        "options": [
          {
            "key": "A",
            "text": "提示冲突并给建议",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各通知各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "等老板发现",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便排",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "提前提示冲突，给优先级建议与调整方案，不各通知各的埋雷。"
      },
      {
        "type": "压力",
        "scenario": "机密文件差点误发，你：",
        "options": [
          {
            "key": "A",
            "text": "拦截并复盘流程",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻拦截，复盘发送流程漏洞并加校验，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "活动当天供应商迟到，你：",
        "options": [
          {
            "key": "A",
            "text": "催 + 备选 + 透明同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "取消",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "持续催办并启动备选，向相关方透明同步，保障活动，不干等。"
      },
      {
        "type": "压力",
        "scenario": "老板临时要一份从没做过的汇报材料，你：",
        "options": [
          {
            "key": "A",
            "text": "先定要点快速收集",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确材料要点，快速收集信息搭框架，重准确轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "同事把急事甩给你还催，你：",
        "options": [
          {
            "key": "A",
            "text": "分清轻重先保关键",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "全接硬扛",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怼回去",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按轻重缓急排，先保关键事项，对越界甩锅温和立边界，不盲目全接。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做行政主管/总助",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转 HR",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转前台",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "把事办稳妥",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "清闲",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "主动 + 细致",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "按流程等",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "推一下动一下",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补管理与协调",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "靠谱的运营型行政",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯事务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "行政最核心：",
        "options": [
          {
            "key": "A",
            "text": "细心 + 主动",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "嘴甜",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "legal_asst",
    "name": "法务助理",
    "line": "法务 · 辅助",
    "jd": "协助法务/律师处理合同起草、审阅、归档、法律检索与合规支持。",
    "fitFor": [
      "对文字敏感、细致",
      "学习能力强",
      "有条理、原则性强"
    ],
    "hardSkills": [
      "法律检索与文书",
      "合同审阅要点",
      "档案与版本管理",
      "英语（外资所加分）"
    ],
    "softSkills": [
      "细致",
      "严谨",
      "学习力",
      "保密"
    ],
    "industryNotes": {
      "公司法务部": "重合同审核与合规支持，节奏稳定。",
      "律所": "成长快但强度大，议价能力看平台。",
      "互联网公司": "重数据合规与跨境业务。"
    },
    "taboos": [
      "补检索：法条与案例检索速度要快要准，这是日常",
      "补审查：合同风险点识别（主体 / 标的 / 违约 / 管辖）",
      "补加分：法考通过或法律硕士背景直接拉开差距",
      "补文书：立案材料 / 证据清单标准化不出错"
    ],
    "holland_code": "CS",
    "questions": [
      {
        "type": "日常",
        "scenario": "收到一份合同待审，你先：",
        "options": [
          {
            "key": "A",
            "text": "看主体与核心条款风险",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接改模板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看谁发的",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做法务助理你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把条款审细审准",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "检索",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "归档",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个条款拿不准，你：",
        "options": [
          {
            "key": "A",
            "text": "查依据或问带教",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭感觉改",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别处",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做法律检索先：",
        "options": [
          {
            "key": "A",
            "text": "定争议焦点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "随便搜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄模板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "问人",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "合同版本很多，你：",
        "options": [
          {
            "key": "A",
            "text": "建版本管理与对比",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆一起",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "存桌面",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要起草一份函，你先：",
        "options": [
          {
            "key": "A",
            "text": "定目的与法律依据",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "套模板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄网上",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便写",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "业务催合同，你：",
        "options": [
          {
            "key": "A",
            "text": "控风险同时给节奏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "秒过",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "硬卡",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "新法规出台，你：",
        "options": [
          {
            "key": "A",
            "text": "研读并提示影响",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等总结",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "无所谓",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不学",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一份证据你要归档，你：",
        "options": [
          {
            "key": "A",
            "text": "编号 + 索引",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆一起",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "存微信",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不存",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "细致 + 严谨",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "差不多就行",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "听老板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "开庭前助理漏交证据，你：",
        "options": [
          {
            "key": "A",
            "text": "评估补交或申请延期",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬上",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪自己笨",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估能否补交或申请延期/调取，按程序补救，不硬扛。"
      },
      {
        "type": "压力",
        "scenario": "老板要一份从没做过的法律意见今晚给，你：",
        "options": [
          {
            "key": "A",
            "text": "先定问题与依据快速出",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄网",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确要回答的法律问题，再快速检索出框架，重逻辑轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "业务催合同但风险点没查清，你：",
        "options": [
          {
            "key": "A",
            "text": "标风险点同步并给节奏",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "秒过",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬卡不放",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "把风险点标清同步业务与带教，给可推进的节奏，不秒过也不死卡。"
      },
      {
        "type": "压力",
        "scenario": "你发现合同条款有重大遗漏，你：",
        "options": [
          {
            "key": "A",
            "text": "立即提示并修正",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等签",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即提示相关方并修正，不掩盖不甩锅，把损失挡在签字前。"
      },
      {
        "type": "压力",
        "scenario": "对方突然要求改已定稿合同，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响再谈",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "直接改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估改动对整体权利义务的影响再谈，不盲目改也不一刀切拒。"
      },
      {
        "type": "压力",
        "scenario": "大量合同积压 deadline 临近，你：",
        "options": [
          {
            "key": "A",
            "text": "拉优先级 + 透明同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "海批凑数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "全推",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按紧急度与风险拉优先级，向带教透明同步卡点，保质量不海批。"
      },
      {
        "type": "压力",
        "scenario": "你检索到有利判例但带教不信，你：",
        "options": [
          {
            "key": "A",
            "text": "整理要点清晰呈现",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "附和",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怼",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "不提",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "把判例要点与适用性整理清楚呈现，用专业说服，不附和不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "机密案卷差点外传，你：",
        "options": [
          {
            "key": "A",
            "text": "拦截并复盘权限",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻拦截，复盘保管与权限漏洞并加固，不掩盖。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "转法务/律师",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "做合规",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转秘书",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "专业沉淀",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "轻松",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "严谨 + 学习",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "差不多",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "听老板",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补细分领域",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "靠谱的法律支持",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯助理",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "法务助理最核心：",
        "options": [
          {
            "key": "A",
            "text": "细 + 严谨",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "嘴快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "data_label",
    "name": "数据标注/审核",
    "line": "AI · 数据",
    "jd": "为 AI 模型标注/审核图像/文本/语音数据（自动驾驶/内容审核/AI 训练数据）。",
    "fitFor": [
      "做事细心、耐心",
      "能接受重复性工作",
      "对规则敏感"
    ],
    "hardSkills": [
      "标注工具使用",
      "规则理解与一致性",
      "数据质量自检",
      "Excel 基础"
    ],
    "softSkills": [
      "细致",
      "耐心",
      "规则敏感",
      "团队协作"
    ],
    "industryNotes": {
      "AI 公司（自动驾驶/NLP）": "技术驱动，标注规范严格。",
      "内容平台审核": "重合规与心理承受力，轮班制。",
      "众包平台": "灵活但收入不稳定。"
    },
    "taboos": [
      "补规范：吃透标注指引与质检标准，别凭感觉标",
      "补工具：Labelbox / CVAT 等标注平台熟练",
      "补细心：一致性 + 抽检通过率是核心 KPI",
      "补进阶：转 AI 训练师需懂基础数据集构建与清洗"
    ],
    "holland_code": "C",
    "questions": [
      {
        "type": "日常",
        "scenario": "接到一批新标注任务，你先：",
        "options": [
          {
            "key": "A",
            "text": "吃透规范与样例",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接标",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做标注你更享受：",
        "options": [
          {
            "key": "A",
            "text": "标得又快又一致",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "摸鱼",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "C",
            "text": "聊天",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "下班",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一条数据边界模糊，你：",
        "options": [
          {
            "key": "A",
            "text": "查规范或问 leader",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照上次",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断标注对不对看：",
        "options": [
          {
            "key": "A",
            "text": "是否符合规范",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己觉得",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "别人也这么标",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "质检返工多，你：",
        "options": [
          {
            "key": "A",
            "text": "找易错点改习惯",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "再快点",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪质检严",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "规范更新了，你：",
        "options": [
          {
            "key": "A",
            "text": "重学并调整",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "按旧的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "无所谓",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不学",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要审内容违规，你先：",
        "options": [
          {
            "key": "A",
            "text": "对齐审核标准",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭印象",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一批量很大，你：",
        "options": [
          {
            "key": "A",
            "text": "按节奏保质量",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "赶进度",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "随便标",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做自检靠：",
        "options": [
          {
            "key": "A",
            "text": "抽查明细 + 复盘",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "眼睛扫",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "靠感觉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不检",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "规范与一致性第一",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "速度第一",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "差不多",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "审核到极度不适内容，你：",
        "options": [
          {
            "key": "A",
            "text": "按流程处理 + 申请轮岗休息",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬扛不出声",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "传播出去",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按规范处理并主动申请轮岗/心理支持，保护自己也不把内容外传，不硬扛不扩散。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前量暴涨，你：",
        "options": [
          {
            "key": "A",
            "text": "保质量前提下拉节奏",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞎标赶工",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在保质量前提下合理安排节奏，必要时申请支援，不瞎标赶工。"
      },
      {
        "type": "压力",
        "scenario": "你标的和同事不一致被质疑，你：",
        "options": [
          {
            "key": "A",
            "text": "对照规范对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "吵",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "随便改",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "对照规范客观对齐，统一判定标准，不情绪化不随便改。"
      },
      {
        "type": "压力",
        "scenario": "发现历史标注大批量错，你：",
        "options": [
          {
            "key": "A",
            "text": "上报并复盘重标",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "当没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "上报问题并复盘根因，配合重标，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "有人让你把违规内容放过，你：",
        "options": [
          {
            "key": "A",
            "text": "按规范拒绝并上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "放行",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "假装没看",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "守住规范底线拒绝放行并上报，不破例不装没看见。"
      },
      {
        "type": "压力",
        "scenario": "规范描述不清你拿不准，你：",
        "options": [
          {
            "key": "A",
            "text": "问 leader 确认再标",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞎猜",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "照感觉",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "主动问 leader 确认口径再标，不瞎猜不跳过。"
      },
      {
        "type": "压力",
        "scenario": "连续加班状态差易出错，你：",
        "options": [
          {
            "key": "A",
            "text": "申请调整节奏保质量",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬撑",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "划水",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "主动申请调整节奏与休息，保住质量，不硬撑也不划水。"
      },
      {
        "type": "压力",
        "scenario": "你审到疑似风险信息，你：",
        "options": [
          {
            "key": "A",
            "text": "按升级流程上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当普通处理",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "外传讨论",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "忽略",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按升级流程上报处理，不降级也不外传讨论，守住合规。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "转标注质检/项目管理",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转数据相关",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转其他岗",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "稳定与成长",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "规范与质量",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "速度",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "随便",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补技能转岗",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂数据的质量负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯标注",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转产线",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "这岗最核心：",
        "options": [
          {
            "key": "A",
            "text": "细致 + 守规",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "手快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "能熬",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "copywriter",
    "name": "文案策划",
    "line": "内容 · 创意",
    "jd": "负责品牌与产品的文案、slogan、推文、短视频脚本与种草内容，把卖点翻译成打动人的表达。",
    "fitFor": [
      "对文字和表达敏感",
      "喜欢琢磨人心与情绪",
      "能把复杂信息讲简单"
    ],
    "hardSkills": [
      "文案与脚本写作",
      "品牌调性与语气",
      "选题与热点捕捉",
      "基础排版与审美"
    ],
    "softSkills": [
      "共情",
      "创意",
      "策略思维",
      "抗压改稿"
    ],
    "industryNotes": {
      "广告/营销公司": "重提案与比稿，节奏快、改稿多。",
      "品牌方/甲方": "重长期调性与一致性，跨部门协作多。",
      "自媒体/MCN": "重流量与转化，追热点能力强。"
    },
    "taboos": [
      "补训练：每天拆解 + 仿写 10 条优秀文案，建自己的素材库",
      "补 SEO：懂关键词布局，文案能被搜到才有用",
      "补作品集：把不同行业案例整理成集，比简历管用"
    ],
    "holland_code": "A",
    "questions": [
      {
        "type": "日常",
        "scenario": "接到一个新产品要写第一句 slogan，你：",
        "options": [
          {
            "key": "A",
            "text": "先挖产品卖点与目标用户痛点再动笔",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接套一个爆款句式",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄竞品话术",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板给方向",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做文案你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把一个卖点写到位、真能转化",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "辞藻华丽",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "凑字数交差",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随便写写",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客户说“再大气一点”，你：",
        "options": [
          {
            "key": "A",
            "text": "追问大气具体指什么再调整",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆更多形容词",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照字面改",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "敷衍",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一条文案好不好看：",
        "options": [
          {
            "key": "A",
            "text": "是否打中目标用户并促进行动",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己觉得美",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板喜欢",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "字数多",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一篇推文阅读很差，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘标题、人群与钩子哪里弱",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换张配图",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪平台没流量",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "要写一支短视频脚本，你先：",
        "options": [
          {
            "key": "A",
            "text": "定受众与核心情绪点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "先想画面",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄当下热门",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等灵感",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个卖点你写了 5 版客户都不满意，你：",
        "options": [
          {
            "key": "A",
            "text": "拉齐评判标准和用户证据再改",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "继续硬写",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝再改",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅策略",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做文案洞察靠：",
        "options": [
          {
            "key": "A",
            "text": "用户原话 + 数据反馈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己的语感",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看同行怎么写",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "老板偏好",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "多个渠道文案调性不一致，你：",
        "options": [
          {
            "key": "A",
            "text": "建文案规范统一语气",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "各渠道各写各的",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "只保主阵地",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "说人话、打动具体的人",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "文采至上",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥写啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "大促前三天你的主 slogan 被老板毙了，你：",
        "options": [
          {
            "key": "A",
            "text": "快速出 2-3 个备选并和老板对齐新方向",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬顶原方案不改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅设计没排版",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂等死",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "不纠缠被毙的方案，快速出备选并和老板对齐新方向，按节点倒排，把“被毙”变成“已切换”。"
      },
      {
        "type": "压力",
        "scenario": "客户投诉你的文案“虚假宣传”，你：",
        "options": [
          {
            "key": "A",
            "text": "立即核实宣传点是否可证并改合规",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅业务",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "立刻核实每个宣传点是否有依据，改合规表述，不删帖不甩锅，把危机变成信任修复。"
      },
      {
        "type": "压力",
        "scenario": "你写的海报文案被指“低俗擦边”，你：",
        "options": [
          {
            "key": "A",
            "text": "听真实反馈并调整表达",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怼网友管得宽",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "删评",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "倾听真实反馈，调整表达更得体，用行动重建品牌好感，不怼网友不删评。"
      },
      {
        "type": "压力",
        "scenario": "临时要一篇从没写过的行业长文，今晚就要，你：",
        "options": [
          {
            "key": "A",
            "text": "先定文章要回答的核心问题再快速写",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆字数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄网上的",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确文章要回答的核心问题，快速搭框架与论点，重观点轻堆砌，不通宵硬堆。"
      },
      {
        "type": "压力",
        "scenario": "竞品疑似抄了你的文案句式，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并用差异内容拉开",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "发律师函吓唬",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "假装没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先评估实际影响，用更鲜明、更独占的差异内容拉开距离，必要时走正式渠道，不靠对骂。"
      },
      {
        "type": "压力",
        "scenario": "老板要“刷屏爆款”但预算为零，你：",
        "options": [
          {
            "key": "A",
            "text": "找情绪或话题撬点小额测试",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬凑爆款句式",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不到",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "假装答应",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "不硬凑爆款，找可撬动的情绪/话题点小额测试，向上同步预期与风险，不空喊口号。"
      },
      {
        "type": "压力",
        "scenario": "中文文案翻译后意思跑偏引发误解，你：",
        "options": [
          {
            "key": "A",
            "text": "核对源文与译文并修正同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪翻译不行",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "拖着",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "立即核对源文与译文，修正偏差并同步相关方，把误解降到最低，不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "团队对文案方向分歧很大，你：",
        "options": [
          {
            "key": "A",
            "text": "用目标用户与数据对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "靠职级压",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "各写一版",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随大流",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用目标用户与转化数据说话对齐方向，不靠职权压也不各自为战。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做文案总监或创意负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转设计",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "作品真的有效",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "清闲",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "创意自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "策略先于文采",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "文采至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补策略与用户研究",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂生意的创意人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯写手",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "文案最核心：",
        "options": [
          {
            "key": "A",
            "text": "说对话、给对人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "辞藻华丽",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "资历老",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "运气",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "event",
    "name": "活动策划",
    "line": "活动 · 体验",
    "jd": "负责线下/线上活动的创意、流程、招商与落地执行，统筹供应商、场地与现场体验。",
    "fitFor": [
      "喜欢把想法变成现实",
      "多线程协调能力强",
      "对现场体验与细节敏感"
    ],
    "hardSkills": [
      "活动策划与流程设计",
      "供应商与场地统筹",
      "预算与招商",
      "现场执行与应急"
    ],
    "softSkills": [
      "项目推动",
      "沟通协调",
      "应变",
      "细节控"
    ],
    "industryNotes": {
      "会展/公关公司": "重比稿与执行，项目制、出差多。",
      "品牌/市场部": "重品牌体验与转化，内部协作多。",
      "文旅/演出": "重现场安全与节奏，强排期。"
    },
    "taboos": [
      "补 PMP：项目管理五大过程组，活动当项目管",
      "补供应商：场地 / 搭建 / 物料渠道与比价能力",
      "补预算：能把活动成本拆到每一项不超支"
    ],
    "holland_code": "EA",
    "questions": [
      {
        "type": "日常",
        "scenario": "接手一场活动，你先：",
        "options": [
          {
            "key": "A",
            "text": "定目标、人群与核心体验",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接订场地",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄去年方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板定",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做活动你更享受：",
        "options": [
          {
            "key": "A",
            "text": "看到现场体验真的成立",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写漂亮方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "办完打卡",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "出差玩",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "预算有限，你：",
        "options": [
          {
            "key": "A",
            "text": "按目标排优先级花钱",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "平均撒",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "全砸最贵的",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不花",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断活动好坏看：",
        "options": [
          {
            "key": "A",
            "text": "目标达成度与参与者反馈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "到场人数",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满不满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "朋友圈好不好看",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "供应商报价偏高，你：",
        "options": [
          {
            "key": "A",
            "text": "比价并谈性价比",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接换一家",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照单全收",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "流程里有个环节体验差，你：",
        "options": [
          {
            "key": "A",
            "text": "重排动线优化体验",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加人盯着",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪执行",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "习惯就好",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要拉一个活动流程表，你先：",
        "options": [
          {
            "key": "A",
            "text": "定关键节点与责任人",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写时间轴",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄模板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "活动数据你要看：",
        "options": [
          {
            "key": "A",
            "text": "转化与参与质量",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发了什么内容",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板关注",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不参与",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "竞品办了场刷屏活动，你：",
        "options": [
          {
            "key": "A",
            "text": "分析它为什么火再决定跟不跟",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "立刻模仿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "贬低它",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "当没看见",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "体验优先于形式",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "场面越大越好",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "活动前夜主舞台搭建出问题，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻协调备用方案保开场",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等天亮",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅搭建商",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没发生",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "立刻协调备用结构与时间，保住开场节点，同步相关方进展，不拖延不推诿。"
      },
      {
        "type": "压力",
        "scenario": "现场突发观众冲突，你：",
        "options": [
          {
            "key": "A",
            "text": "快速隔离并妥善处置",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "假装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "和对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "取消活动",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "第一时间隔离冲突双方、安排专人安抚，按预案处置并复盘，不激化不取消。"
      },
      {
        "type": "压力",
        "scenario": "赞助商临时撤资，你：",
        "options": [
          {
            "key": "A",
            "text": "评估缺口并找替代或缩规模",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬撑",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂赞助商",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估资金缺口，找替代赞助或砍非核心环节，把影响降到最低，不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "活动当天暴雨客流骤减，你：",
        "options": [
          {
            "key": "A",
            "text": "切线上/改动线保体验",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等雨停",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅天气",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "快速切线上直播或调整室内动线，保住核心体验，把“天气”变成“应变展示”。"
      },
      {
        "type": "压力",
        "scenario": "老板临时要加一个从没做过的环节，你：",
        "options": [
          {
            "key": "A",
            "text": "先定它服务什么目标再排",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬加进流程",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄别家",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确新增环节要服务的目标，再排进流程与资源，重价值轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "供应商迟到导致彩排来不及，你：",
        "options": [
          {
            "key": "A",
            "text": "催 + 备用 + 透明同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "取消",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "持续催办并启动备选，向相关方透明同步，保障活动，不干等。"
      },
      {
        "type": "压力",
        "scenario": "活动出现安全事故苗头，你：",
        "options": [
          {
            "key": "A",
            "text": "立即启动安全预案并上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "捂着",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅安保",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻启动安全预案、疏散与上报，把人放第一位，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "复盘时老板质疑活动没价值，你：",
        "options": [
          {
            "key": "A",
            "text": "用数据与反馈讲清价值与改进",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪天气/人流",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说尽力了",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用参与质量与转化数据复盘价值，给可改进方案，不甩锅不空喊尽力。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带活动团队/做项目负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转市场",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "体验真的成立",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "场面",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "落地高于创意",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "创意至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补预算与供应商管理",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂生意的活动负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯执行",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "活动人最核心：",
        "options": [
          {
            "key": "A",
            "text": "把事落地不出错",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "会写 PPT",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "pr",
    "name": "公关媒介",
    "line": "传播 · 媒介",
    "jd": "负责企业与媒体的关系维护、新闻发布、舆情监测与危机公关，维护品牌公众形象。",
    "fitFor": [
      "对人敏感、会来事",
      "表达与沟通强",
      "临场冷静、抗压"
    ],
    "hardSkills": [
      "媒体关系与媒介投放",
      "新闻稿与声明写作",
      "舆情监测与研判",
      "危机公关预案"
    ],
    "softSkills": [
      "沟通",
      "共情",
      "临场应变",
      "分寸感"
    ],
    "industryNotes": {
      "甲方品牌部": "重日常声量与危机兜底，内部汇报多。",
      "公关/广告公司": "重比稿与客户服务，节奏快。",
      "政府/机构": "重口径与合规，流程严。"
    },
    "taboos": [
      "补媒体：建媒体联系人清单，懂各媒体调性与选题偏好",
      "补危机：舆情监测 + 危机公关回应模板提前备好",
      "补证书：公关员 / 营销师资格（初级）",
      "补写作：新闻稿 / 通稿套路熟练，发得出去"
    ],
    "holland_code": "ES",
    "questions": [
      {
        "type": "日常",
        "scenario": "要和一家核心媒体建立关系，你：",
        "options": [
          {
            "key": "A",
            "text": "先研究它的调性与选题再触达",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接群发通稿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "托人硬推",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等媒体找来",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做公关你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把复杂信息讲清楚、被信任",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "出席活动",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "发通稿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "混圈子",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一篇稿子媒体不想发，你：",
        "options": [
          {
            "key": "A",
            "text": "看选题角度是否对路再调",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换家媒体硬发",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪媒体不懂",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一次传播好坏看：",
        "options": [
          {
            "key": "A",
            "text": "是否触达对的人并正向影响",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "发了多少家",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "曝光量",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要监测舆情，你先：",
        "options": [
          {
            "key": "A",
            "text": "定监测关键词与预警线",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "刷热搜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等出事",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "记者问了个尖锐问题，你：",
        "options": [
          {
            "key": "A",
            "text": "坦诚给可公开的信息",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "打太极",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝回答",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "怼回去",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个负面苗头出现，你：",
        "options": [
          {
            "key": "A",
            "text": "核实事实并准备口径",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等它发酵",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "删帖",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做媒体清单靠：",
        "options": [
          {
            "key": "A",
            "text": "按受众与调性分层维护",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "通讯录群发",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "随便找",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不维护",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "竞品做了个好传播，你：",
        "options": [
          {
            "key": "A",
            "text": "分析它为什么好再借鉴",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "照抄",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "贬低",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "当没看见",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "长期信任大于单次曝光",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "刷存在感就行",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "品牌突发负面舆情开始发酵，你：",
        "options": [
          {
            "key": "A",
            "text": "第一时间核实事实并统一口径回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "赶紧删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死不回应",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "和网友对骂",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "先核实事实，统一口径透明回应，给出处理动作与进度，不删帖不装死，把危机变信任修复。"
      },
      {
        "type": "压力",
        "scenario": "高管在公开场合说错话引发争议，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并出澄清或致歉",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没发生",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅个人",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "删视频",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "评估影响，协同出澄清/致歉口径，把错误变成态度展示，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "媒体要发一篇不利的报道，你：",
        "options": [
          {
            "key": "A",
            "text": "提供事实与另一方视角沟通",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "威胁媒体",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "塞红包",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲着",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用事实与可核实信息坦诚沟通，提供另一方视角，不威胁不收买。"
      },
      {
        "type": "压力",
        "scenario": "谣言刷屏你方产品有问题，你：",
        "options": [
          {
            "key": "A",
            "text": "发权威说明并附证据",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "对骂造谣者",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用权威渠道发澄清并附可证证据，理性回应，不删帖不对骂。"
      },
      {
        "type": "压力",
        "scenario": "危机中老板要你“别回应”，你：",
        "options": [
          {
            "key": "A",
            "text": "说明沉默的风险并给最低限度回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照做沉默",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "偷偷回应",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅老板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用专业说明沉默可能放大的风险，给最低限度、可把关的回应方案，不盲从也不越权。"
      },
      {
        "type": "压力",
        "scenario": "活动上媒体围堵追问，你：",
        "options": [
          {
            "key": "A",
            "text": "按口径有条理回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "夺路而逃",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "乱说",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩给同事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按既定口径沉着、有条理地回应，不逃不乱说，把场面稳住。"
      },
      {
        "type": "压力",
        "scenario": "合作 KOL 翻车牵连品牌，你：",
        "options": [
          {
            "key": "A",
            "text": "评估关联度并切割或说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装不认识",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "硬保",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "删合作帖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估关联度，该切割切割、该说明说明，用行动保护品牌，不装不认识。"
      },
      {
        "type": "压力",
        "scenario": "临时要一份危机声明一小时内发，你：",
        "options": [
          {
            "key": "A",
            "text": "先定事实边界与口径快速出",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵雕花",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确已核实的事实边界与对外口径，快速出简洁声明，重准确轻修辞。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做公关/品牌负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转市场",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转记者",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "长期的信任与声誉",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "真话与分寸",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "曝光至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补行业与法律边界",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的传播负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯发稿",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "公关最核心：",
        "options": [
          {
            "key": "A",
            "text": "信任与分寸",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "关系硬",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "能喝",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "资历",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "journalist",
    "name": "记者/采编",
    "line": "媒体 · 采编",
    "jd": "负责选题挖掘、采访、写作与编辑，产出新闻、深度或专题内容（纸媒/网媒/客户端均可）。",
    "fitFor": [
      "好奇、爱刨根问底",
      "文字功底好、逻辑清",
      "能扛压跑现场"
    ],
    "hardSkills": [
      "采访与提问",
      "新闻写作与编辑",
      "选题策划",
      "事实核查"
    ],
    "softSkills": [
      "好奇心",
      "沟通",
      " objectivity 客观",
      "抗压"
    ],
    "industryNotes": {
      "时政/财经媒体": "重专业与核查，门槛高、成长慢。",
      "都市/社会新闻": "重速度与现场，节奏快。",
      "新媒体/客户端": "重流量与多媒体，一人多能。"
    },
    "taboos": [
      "补采写：选题 + 采访 + 成稿的硬功夫每天练",
      "补设备：手机拍摄剪辑够用，先能产出",
      "补证件：进体制媒体需考新闻采编从业资格",
      "补速度：热点响应要快，截稿压力能扛"
    ],
    "holland_code": "AS",
    "questions": [
      {
        "type": "日常",
        "scenario": "刷到一个可疑爆料，你：",
        "options": [
          {
            "key": "A",
            "text": "先多方核实再决定是否跟",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "立刻转发",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "等别人发",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做记者你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把一个真相挖出来",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "出名",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "跑现场玩",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "发稿量",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "采访对象不愿说，你：",
        "options": [
          {
            "key": "A",
            "text": "用准备与信任慢慢引导",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "死缠烂打",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "编一点",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一条新闻值不值得做看：",
        "options": [
          {
            "key": "A",
            "text": "公共价值与事实厚度",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "能不能火",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导安排",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "稿子事实有处存疑，你：",
        "options": [
          {
            "key": "A",
            "text": "核实清楚或删掉再发",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "先发后改",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "信源说就行",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "忽略",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做一个选题，你先：",
        "options": [
          {
            "key": "A",
            "text": "定核心问题与信源",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "想标题",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄同行",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "编辑把你的稿子大改，你：",
        "options": [
          {
            "key": "A",
            "text": "看改得对不对并学习",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "觉得被冒犯",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "附和",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "闹情绪",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做资料靠：",
        "options": [
          {
            "key": "A",
            "text": "公开信源 + 交叉验证",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "百度一下",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "听别人说",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不查",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个热点你晚了一步，你：",
        "options": [
          {
            "key": "A",
            "text": "找差异角度做增量",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬蹭",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "抄别人",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "准确比快重要",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "快比准重要",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "重大事件现场你不在，只有二手信息，你：",
        "options": [
          {
            "key": "A",
            "text": "标注信源等级谨慎发",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当确定信息发布",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "抄别人",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "不报",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "标注信息来源与可信度，谨慎发布并持续更新，不把二手当定论，不抢发失真。"
      },
      {
        "type": "压力",
        "scenario": " interviewee 临时反悔不愿被引用，你：",
        "options": [
          {
            "key": "A",
            "text": "尊重意愿撤下相关表述",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照样发",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "威胁",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没采访过",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "尊重受访者意愿撤下相关引用，守住职业伦理，不偷偷发也不抵赖。"
      },
      {
        "type": "压力",
        "scenario": "稿子发前发现关键事实可能错了，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻核查并重写/撤稿",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "先发再说",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "信自己直觉",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即核查，错了就重写或撤下，把准确放第一位，不存侥幸。"
      },
      {
        "type": "压力",
        "scenario": "你写的报道被当事人强烈反驳，你：",
        "options": [
          {
            "key": "A",
            "text": "复核事实并给回应",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删稿",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "复核事实与证据，有错就改、无误则理性回应，不删稿不对骂。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前一小时还差核心采访，你：",
        "options": [
          {
            "key": "A",
            "text": "评估能否用已核实信息成稿",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "编一段补上",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬等",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "交白卷",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用已核实信息判断是否可成稿，不行就如实说明缺口，不编造不拖延。"
      },
      {
        "type": "压力",
        "scenario": "领导施压要你写倾向性稿，你：",
        "options": [
          {
            "key": "A",
            "text": "在事实范围内坚持客观",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照写",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝并说明",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "在可核实事实范围内坚持客观，向上说明独立与准确的价值，不违背准则。"
      },
      {
        "type": "压力",
        "scenario": "你发现同事稿子有硬伤已发，你：",
        "options": [
          {
            "key": "A",
            "text": "提醒更正并附核查",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "背后说",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "等被发现",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "善意提醒同事并附核查依据，推动更正，不掩盖不拆台。"
      },
      {
        "type": "压力",
        "scenario": "突发事故你冲到现场但被拦，你：",
        "options": [
          {
            "key": "A",
            "text": "找权威信源+外围核实",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "翻墙进去",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "编现场",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "不被情绪带偏，找官方/亲历者等权威信源并外围交叉核实，不造假不硬闯。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做深度/主笔",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转编辑",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转公关",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "写出有公共价值的东西",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "真实与公共价值",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "流量至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补领域知识与核查",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "有判断力的记者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯写手",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "记者最核心：",
        "options": [
          {
            "key": "A",
            "text": "求真与核查",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "笔快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "关系广",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "胆大",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "editor",
    "name": "图书编辑",
    "line": "出版 · 编辑",
    "jd": "负责图书的选题策划、审读、加工与校对，连接作者、设计与发行，把书做出来。",
    "fitFor": [
      "爱读书、语感好",
      "细致耐心",
      "对内容质量有洁癖"
    ],
    "hardSkills": [
      "文字加工与校对",
      "选题策划",
      "作者沟通",
      "编校规范"
    ],
    "softSkills": [
      "细致",
      "审美",
      "沟通",
      "耐心"
    ],
    "industryNotes": {
      "大众出版社": "重市场与销量，节奏快。",
      "教育/教材社": "重体系与合规，稳。",
      "学术/专业社": "重专业与严谨，慢。"
    },
    "taboos": [
      "补文字：错别字 / 语法 / 逻辑硬伤零容忍",
      "补排版：InDesign / 秀米至少会一个",
      "补证书：出版专业技术人员职业资格（初级）",
      "补耐心：长稿校对应对枯燥，是基本功"
    ],
    "holland_code": "AC",
    "questions": [
      {
        "type": "日常",
        "scenario": "拿到一部书稿，你先：",
        "options": [
          {
            "key": "A",
            "text": "通读把握结构与问题",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接改字句",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看作者名气",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做编辑你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把一本粗糙稿改顺改透",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "做封面",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "签下大咖",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "清闲",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "稿子逻辑混乱，你：",
        "options": [
          {
            "key": "A",
            "text": "和作者沟通重构框架",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己硬改",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "凑合发",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "退稿",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一本书值不值得做看：",
        "options": [
          {
            "key": "A",
            "text": "内容与读者价值的匹配",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "作者名气",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "能不能蹭热点",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "发现一处事实错误，你：",
        "options": [
          {
            "key": "A",
            "text": "核实并和作者确认改",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "当没看见",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "自己猜着改",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等校对",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "作者不认同你的删改，你：",
        "options": [
          {
            "key": "A",
            "text": "讲清质量与读者理由协商",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬改",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "妥协全留",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "吵",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做选题报告，你先：",
        "options": [
          {
            "key": "A",
            "text": "定读者与差异化价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "写目录",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄畅销书",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做校对靠：",
        "options": [
          {
            "key": "A",
            "text": "逐字核 + 对照原稿",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "眼睛扫",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "靠感觉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不校",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一本书市场反响差，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘定位与营销哪里弱",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "怪书名",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪作者",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "内容为王",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "营销为王",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "作者为王",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "书已下厂发现一处硬伤，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并紧急补救",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅校对",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等召回",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估影响面，能拦下就拦，已发出则准备勘误与说明，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "作者坚持保留一个明显错误观点，你：",
        "options": [
          {
            "key": "A",
            "text": "用规范与读者责任协商改",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照发",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬删",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用编校规范与对读者负责的角度协商，必要时加编者按或调整，不盲从也不硬删。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前稿子还缺三章，作者拖稿，你：",
        "options": [
          {
            "key": "A",
            "text": "催 + 评估能否分期/补写",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "自己代写",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅作者",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "持续跟进作者进度，评估能否分期或找替代，透明同步排期，不干等。"
      },
      {
        "type": "压力",
        "scenario": "你改的稿被作者公开说“乱改”，你：",
        "options": [
          {
            "key": "A",
            "text": "用批注与规范理性说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "删自己改动",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用修改批注与编校规范理性说明改动理由，把争议变成专业讨论，不骂不缩。"
      },
      {
        "type": "压力",
        "scenario": "一本重点书销量远低预期，老板质疑你，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘定位与渠道给方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "怪市场",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "说尽力了",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用读者与渠道数据复盘，给可改进方案，不甩锅不空喊尽力。"
      },
      {
        "type": "压力",
        "scenario": "审读中发现内容可能涉及侵权，你：",
        "options": [
          {
            "key": "A",
            "text": "评估风险并请作者授权或删改",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给法务",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "照发",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估侵权风险，推动取得授权或删改，守住合规，不掩盖。"
      },
      {
        "type": "压力",
        "scenario": "两个部门对封面争执不下，你：",
        "options": [
          {
            "key": "A",
            "text": "拉读者视角对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各做各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用目标读者与书定位对齐判断，不靠职级也不各自为战。"
      },
      {
        "type": "压力",
        "scenario": "你发现旧版书有知识性错误仍在卖，你：",
        "options": [
          {
            "key": "A",
            "text": "推动修订或加说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当没发生",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅仓库",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等新版",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "推动修订或加勘误说明，保护读者，不掩盖不甩锅。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做策划编辑/主编",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转作者",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转发行",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "做出真正的好书",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "质量与读者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "销量至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "作者至上",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补领域与市场营销",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "有眼光的编辑",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯校对",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "编辑最核心：",
        "options": [
          {
            "key": "A",
            "text": "把关与成全作者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "笔快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "translator",
    "name": "翻译/本地化",
    "line": "语言 · 本地化",
    "jd": "负责文档、产品、音视频的翻译与本地化，确保跨语言内容准确、地道、符合当地习惯。",
    "fitFor": [
      "语言功底好、双语敏感觉",
      "细致严谨",
      "对文化差异敏感"
    ],
    "hardSkills": [
      "双语翻译",
      "本地化（CAT 工具/TMS）",
      "术语与风格统一",
      "专业知识（法律/医疗/游戏等）"
    ],
    "softSkills": [
      "细致",
      "跨文化敏感度",
      "沟通",
      "责任心"
    ],
    "industryNotes": {
      "游戏/软件本地化": "重术语一致与玩家语感，项目制。",
      "影视/字幕": "重节奏与口语化，追档期。",
      "商务/法律翻译": "重准确与合规，容错低。"
    },
    "taboos": [
      "补 CAT：Trados / MemoQ 计算机辅助翻译工具",
      "补领域：锁定 1-2 个垂直领域（法律 / 医学 / 游戏）啃术语",
      "补证书：CATTI 二笔 / 三笔是硬通货",
      "补双语：保持大量原文输入，语感不退化"
    ],
    "holland_code": "AC",
    "questions": [
      {
        "type": "日常",
        "scenario": "接到一批翻译，你先：",
        "options": [
          {
            "key": "A",
            "text": "看术语表与风格指南",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接机翻",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "凭感觉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做翻译你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把意思翻得又准又顺",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "速度快",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "赚钱",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "摸鱼",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个词拿不准，你：",
        "options": [
          {
            "key": "A",
            "text": "查术语库/平行文本再定",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "机翻照搬",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "猜一个",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断翻译好不好看：",
        "options": [
          {
            "key": "A",
            "text": "是否准确且符合目标语习惯",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "字数对应",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "原文有歧义，你：",
        "options": [
          {
            "key": "A",
            "text": "向客户确认再译",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "自己猜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "照字面",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做术语靠：",
        "options": [
          {
            "key": "A",
            "text": "建库并持续维护",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "每次现查",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不统一",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "要本地化一个产品 UI，你先：",
        "options": [
          {
            "key": "A",
            "text": "看字符长度与语境",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "逐条直译",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄竞品",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "质检发现同事译文错，你：",
        "options": [
          {
            "key": "A",
            "text": "指出并修正",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "C",
            "text": "背后说",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D1": 4
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "文化差异梗你处理：",
        "options": [
          {
            "key": "A",
            "text": "本地化改写保效果",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬译",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "删掉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "信达雅先求准",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "快就行",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "客户说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": " deadline 前量暴涨且术语缺失，你：",
        "options": [
          {
            "key": "A",
            "text": "建最小术语集保交付",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞎翻赶工",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在保质量前提下快速建最小术语集，优先交付核心内容，必要时申请支援，不瞎翻。"
      },
      {
        "type": "压力",
        "scenario": "原文专业度极高你不懂，你：",
        "options": [
          {
            "key": "A",
            "text": "补领域知识或请专家审",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬译",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "跳过难句",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "编",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先补必要领域知识或请专家审校，把准确放第一位，不硬译不编造。"
      },
      {
        "type": "压力",
        "scenario": "客户说你翻错了但其实是原文错，你：",
        "options": [
          {
            "key": "A",
            "text": "核对并礼貌说明差异",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "认错改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怼客户",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "核对原文与译文，礼貌指出原文歧义并给建议译法，用专业化解，不盲认错。"
      },
      {
        "type": "压力",
        "scenario": "发布后发现一处严重误译，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻更正并复盘流程",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅工具",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即更正并复盘根因（术语？审校？），建防错机制，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "两个译法团队争执不下，你：",
        "options": [
          {
            "key": "A",
            "text": "依术语与风格指南仲裁",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各用各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "依术语库与风格指南客观仲裁，统一口径，不靠职级。"
      },
      {
        "type": "压力",
        "scenario": "紧急视频要同传但准备时间极短，你：",
        "options": [
          {
            "key": "A",
            "text": "抓核心术语与背景速记",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬上",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒接",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用极短时间抓核心术语与背景，做最小准备上场，事后补审，不裸奔。"
      },
      {
        "type": "压力",
        "scenario": "客户要求机翻风格但你追求质量，你：",
        "options": [
          {
            "key": "A",
            "text": "说明差异并给混合方案",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "全机翻交差",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬拒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "说明机翻与人工的质量差异，给“机翻+人工审”的混合方案，不盲目降质也不硬拒。"
      },
      {
        "type": "压力",
        "scenario": "你发现历史译文大批量不统一，你：",
        "options": [
          {
            "key": "A",
            "text": "上报并做术语对齐",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "当没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "上报问题并推动术语对齐与重译，不掩盖不甩锅。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做本地化经理/审校",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转作者",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转运营",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "准确与地道",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "自由",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "质量与一致",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "速度至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "客户说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补领域与工具",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂行业的语言专家",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯译员",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "翻译最核心：",
        "options": [
          {
            "key": "A",
            "text": "准且地道",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "手快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "语种多",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "bd",
    "name": "商务拓展 BD",
    "line": "商务 · 合作",
    "jd": "负责对外合作、渠道拓展与资源置换，撮合异业合作、联运与生态伙伴，扩大业务边界。",
    "fitFor": [
      "喜欢和人打交道、能聊",
      "对机会敏感",
      "双赢思维"
    ],
    "hardSkills": [
      "合作谈判",
      "渠道与生态拓展",
      "方案与资源盘点",
      "数据复盘"
    ],
    "softSkills": [
      "沟通说服",
      "关系经营",
      "双赢思维",
      "抗压"
    ],
    "industryNotes": {
      "互联网平台": "重生态与联运，KPI 看合作带来的量/收入。",
      "品牌方": "重异业联名与渠道，重创意。",
      "出海": "重海外伙伴与跨文化，英语加分。"
    },
    "taboos": [
      "补谈判：双赢谈判框架 + 合同条款基础",
      "补研究：行业地图与竞品快速摸底",
      "补合同：能看懂 TS / 框架协议的关键条款",
      "补人脉：主动经营圈子，BD 靠信息差"
    ],
    "holland_code": "E",
    "questions": [
      {
        "type": "日常",
        "scenario": "要拓展一个新合作方，你先：",
        "options": [
          {
            "key": "A",
            "text": "盘点双方可交换的价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接发合作邀请",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "托人硬推",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等对方找",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做 BD 你更享受：",
        "options": [
          {
            "key": "A",
            "text": "撮合一桩双赢合作",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "出差见人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "签单",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "混圈子",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "对方说“暂时不需要”，你：",
        "options": [
          {
            "key": "A",
            "text": "留触点并给轻量价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "死缠",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "怼回去",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个合作值不值得做看：",
        "options": [
          {
            "key": "A",
            "text": "双方价值与长期空间",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "面子大",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板安排",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "谈判卡在分成，你：",
        "options": [
          {
            "key": "A",
            "text": "找增量把蛋糕做大",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬压对方",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "各退一步凑合",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "谈崩",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个合作黄了，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘原因并维护关系",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "骂对方",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪行情",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做合作方案，你先：",
        "options": [
          {
            "key": "A",
            "text": "定双方诉求与共赢点",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "套模板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄竞品",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做伙伴管理靠：",
        "options": [
          {
            "key": "A",
            "text": "分层维护 + 定期同步",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "有事才找",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "微信备注",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不维护",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "竞品抢先签了你想谈的伙伴，你：",
        "options": [
          {
            "key": "A",
            "text": "找差异价值再谈其他",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬抢",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "贬低竞品",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "长期双赢",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "签下就行",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "关键伙伴临时毁约且已对外公布，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并找替代/说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬扛",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂伙伴",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻评估业务影响，找替代伙伴或调整对外口径，把单点依赖风险拆掉，不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "谈判到最后对方压价到你方亏本，你：",
        "options": [
          {
            "key": "A",
            "text": "用价值重谈或转向增量",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "亏本签",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "直接崩",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用整体价值重谈，或转向不亏本的增量合作，不盲目亏本签也不硬崩。"
      },
      {
        "type": "压力",
        "scenario": "你牵线的合作出了事故对方要你负责，你：",
        "options": [
          {
            "key": "A",
            "text": "先兜底再厘清责任",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "甩锅对方",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没参与",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躲",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先帮业务兜底止损，再厘清责任边界，用专业化解，不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "老板要一个从没做过的合作模式今晚出方案，你：",
        "options": [
          {
            "key": "A",
            "text": "先定双方共赢点快速搭",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确双方可交换的核心价值，快速搭可落地框架，重共赢轻堆砌。"
      },
      {
        "type": "压力",
        "scenario": "两个部门都想独占同一个合作资源，你：",
        "options": [
          {
            "key": "A",
            "text": "按价值最大化重新切分",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各拉各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用整体价值最大化重新切分资源，把内耗变成规则，不各自为战。"
      },
      {
        "type": "压力",
        "scenario": "合作方提出违规要求换资源，你：",
        "options": [
          {
            "key": "A",
            "text": "守住底线并给合规替代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照做",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒绝但无替代",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "守住合规底线，给不违规的替代方案，不破例也不生硬拒。"
      },
      {
        "type": "压力",
        "scenario": "你谈了很久的伙伴被竞品截胡，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘为何被截并补关系",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "骂竞品",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "放弃这个方向",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "复盘被截的真实原因（价值？节奏？关系？），针对性补强，不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "季度合作指标差很多，你：",
        "options": [
          {
            "key": "A",
            "text": "盘点高潜力伙伴集中攻坚",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬冲量",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "焦虑摆烂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "造假",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "盘点高潜力伙伴集中攻坚，分析卡点精准突破，向上要资源，不硬冲不造假。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "带 BD/生态团队",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转产品",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "撮合真正的双赢",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "价值交换思维",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "关系至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补行业与谈判",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂生意的合作负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯外交",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "BD 最核心：",
        "options": [
          {
            "key": "A",
            "text": "双赢与信任",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "能喝",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "脸皮厚",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系硬",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ngo",
    "name": "公益项目官员",
    "line": "公益 · 项目",
    "jd": "负责公益项目的设计、筹款、执行与评估，连接受助群体、 donor 与志愿者，把善意落地。",
    "fitFor": [
      "有社会情怀、愿意利他",
      "细心会协调",
      "能在资源有限下办事"
    ],
    "hardSkills": [
      "项目设计与管理",
      "筹款与资助方沟通",
      "需求评估与监测",
      "志愿者协调"
    ],
    "softSkills": [
      "共情",
      "沟通",
      "责任心",
      "抗压"
    ],
    "industryNotes": {
      "基金会": "重项目合规与成效汇报，资助方多。",
      "社工机构": "重一线服务与个案，贴近社区。",
      "国际 NGO": "重专业方法与英语，流程规范。"
    },
    "taboos": [
      "补 PM：公益项目设计 + 监测评估（M&E）",
      "补筹款：基金会 / 企业 CSR 资助申请写法",
      "补证书：PMP 或公益项目管理培训",
      "补合规：非营利组织财务与信息公开规范"
    ],
    "holland_code": "SE",
    "questions": [
      {
        "type": "日常",
        "scenario": "要设计一个新公益项目，你先：",
        "options": [
          {
            "key": "A",
            "text": "做真实需求评估",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接写方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别家项目",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等领导定",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做公益你更享受：",
        "options": [
          {
            "key": "A",
            "text": "看到受助者真的被帮到",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "办活动",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "写报告",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "出差",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "资助方问项目成效，你：",
        "options": [
          {
            "key": "A",
            "text": "用真实数据与故事说明",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "美化数字",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "说感觉好",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断项目好坏看：",
        "options": [
          {
            "key": "A",
            "text": "是否真解决需求且可持续",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "花了多少钱",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "热闹",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "受助者需求和你设想不一样，你：",
        "options": [
          {
            "key": "A",
            "text": "调整项目贴合真实需求",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "照原方案",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪他们不配合",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要写项目书，你先：",
        "options": [
          {
            "key": "A",
            "text": "定目标与可衡量指标",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "套模板",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄成功案例",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "志愿者消极，你：",
        "options": [
          {
            "key": "A",
            "text": "沟通动因并重新分工",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "骂一顿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做监测靠：",
        "options": [
          {
            "key": "A",
            "text": "定量+定性结合",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "看汇报",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不监测",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "资源有限，你：",
        "options": [
          {
            "key": "A",
            "text": "按优先级保核心受益",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "平均撒",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "先保自己",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "受助者本位",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "资助方本位",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "项目执行中受助者突发危机，你：",
        "options": [
          {
            "key": "A",
            "text": "立即介入并联动专业资源",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给社工",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等上报",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻介入稳定局面，联动医疗/警务/社工等专业资源，把人放第一位，不拖延。"
      },
      {
        "type": "压力",
        "scenario": "资助方突然削减预算，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并保核心交付",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬撑",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "砍受助者",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估对受助者的真实影响，保核心交付，透明沟通并找补，不牺牲服务对象。"
      },
      {
        "type": "压力",
        "scenario": "你发现合作方挪用款项，你：",
        "options": [
          {
            "key": "A",
            "text": "按合规上报并止损",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "一起分",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "私下说",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在合规与保密前提下上报并启动止损，不同流也不包庇，守住公信力。"
      },
      {
        "type": "压力",
        "scenario": "项目被质疑“作秀”，你：",
        "options": [
          {
            "key": "A",
            "text": "公开真实成效与过程",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用真实数据与过程公开回应，把质疑变成信任建设，不删帖不对骂。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前评估报告还差数据，你：",
        "options": [
          {
            "key": "A",
            "text": "补关键数据再交",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "编一份",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄去年",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "优先补齐可验证的关键数据再交，不编造不交空壳，重真实轻数量。"
      },
      {
        "type": "压力",
        "scenario": "志愿者与受助者发生冲突，你：",
        "options": [
          {
            "key": "A",
            "text": "分开了解并修复关系",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各打五十大板",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "偏袒一方",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "分开了解双方真实情况，公正处理并修复关系，不偏袒不回避。"
      },
      {
        "type": "压力",
        "scenario": "你谈的资助方要求违规挂名，你：",
        "options": [
          {
            "key": "A",
            "text": "守住伦理并给合规替代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照做",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬拒无替代",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "守住公益伦理底线，给不违规的替代呈现，不破例也不生硬拒。"
      },
      {
        "type": "压力",
        "scenario": "项目长期没明显成效 donor 想撤，你：",
        "options": [
          {
            "key": "A",
            "text": "用过程证据讲清价值与拐点",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "美化数据",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说尽力了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没事",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用过程证据讲清长期价值与即将到来的拐点，给调整方案，不造假不空喊。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做项目负责人/机构骨干",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转社工",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转筹款",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "真的帮到人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "专业利他",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "情怀至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补项目与评估方法",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂方法的公益人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯执行",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "公益最核心：",
        "options": [
          {
            "key": "A",
            "text": "真实与可持续",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "会哭穷",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "ip",
    "name": "版权/IP 运营",
    "line": "文娱 · 版权",
    "jd": "负责 IP 的授权、改编、衍生品与跨平台运营，让一个内容资产在多条线上持续产生价值。",
    "fitFor": [
      "喜欢内容也懂生意",
      "对趋势与人群敏感",
      "能谈能盘"
    ],
    "hardSkills": [
      "版权与授权管理",
      "IP 改编与衍生策划",
      "商务谈判",
      "数据复盘"
    ],
    "softSkills": [
      "审美",
      "沟通",
      "商业嗅觉",
      "协调"
    ],
    "industryNotes": {
      "影视/动漫公司": "重改编与联名，项目制。",
      "网文/漫画平台": "重 IP 孵化与 mult 开发。",
      "品牌联名": "重调性匹配与销量。"
    },
    "taboos": [
      "补知产：著作权 / 商标 / 专利基础法律",
      "补授权：IP 授权链路与分账模式",
      "补合同：授权协议关键条款能审",
      "补交易：版权买卖 / 衍生品合作流程"
    ],
    "holland_code": "AE",
    "questions": [
      {
        "type": "日常",
        "scenario": "拿到一个 IP 要运营，你先：",
        "options": [
          {
            "key": "A",
            "text": "理清受众与核心价值再规划",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接找商家授权",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄成功 IP",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等老板定",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做 IP 运营你更享受：",
        "options": [
          {
            "key": "A",
            "text": "看 IP 在多线长出来",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "谈授权",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "做周边",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "开会",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个品牌想联名但调性不符，你：",
        "options": [
          {
            "key": "A",
            "text": "评估是否伤 IP 再谈",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "为钱直接接",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "直接拒",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "甩给老板",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个 IP 值不值得投看：",
        "options": [
          {
            "key": "A",
            "text": "受众黏性与延展空间",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "当下热度",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板喜欢",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "授权方乱用你的 IP，你：",
        "options": [
          {
            "key": "A",
            "text": "按合同纠偏并保护",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅法务",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等出事",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做衍生开发，你先：",
        "options": [
          {
            "key": "A",
            "text": "想清服务哪类粉丝与场景",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接做周边",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别家",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个 IP 数据下滑，你：",
        "options": [
          {
            "key": "A",
            "text": "拆内容/受众/渠道找原因",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换张图",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪平台",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做授权管理靠：",
        "options": [
          {
            "key": "A",
            "text": "合同 + 台账 + 定期复盘",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "微信",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "粉丝反感一次商业化，你：",
        "options": [
          {
            "key": "A",
            "text": "听反馈并调整节奏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬上",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "删评",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "长期养 IP",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "快变现",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "热门 IP 被盗版泛滥，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并分级维权",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "全量诉讼拖垮",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估盗版对 IP 与收入的影响，分级维权（发函/平台投诉/重点诉讼），不无视也不滥诉。"
      },
      {
        "type": "压力",
        "scenario": "品牌方临时要改已定稿联名，你：",
        "options": [
          {
            "key": "A",
            "text": "评估对 IP 调性影响再谈",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "直接改",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "拒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "拖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估改动对 IP 调性与粉丝的影响再谈，不盲目改也不一刀切拒。"
      },
      {
        "type": "压力",
        "scenario": "你主推的 IP 改编翻车，你：",
        "options": [
          {
            "key": "A",
            "text": "诚恳说明并调整后续",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "删帖",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅制作方",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "诚恳说明情况，调整后续开发方向，把负面变成 IP 态度的展示，不删帖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "两个部门抢同一个 IP 开发权，你：",
        "options": [
          {
            "key": "A",
            "text": "按受众与节奏重新切",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各做各的",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "听官大",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用受众与开发节奏重新切分，避免内耗与撞车，不各自为战。"
      },
      {
        "type": "压力",
        "scenario": "授权 deadline 前合同还差关键条款，你：",
        "options": [
          {
            "key": "A",
            "text": "拉优先级定底线快速谈",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵磨",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄模板",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按优先级定谈判底线快速推进，保核心条款，重价值轻完美。"
      },
      {
        "type": "压力",
        "scenario": "粉丝强烈反对一次商业化，你：",
        "options": [
          {
            "key": "A",
            "text": "暂停并听真实诉求",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬上",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "骂粉丝",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "暂停动作、倾听真实诉求，用尊重换信任，不硬上不对骂。"
      },
      {
        "type": "压力",
        "scenario": "你发现历史授权台账混乱，你：",
        "options": [
          {
            "key": "A",
            "text": "梳理建账并补合同",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅前任",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "当没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "系统梳理授权台账并补齐合同与节点，建规范，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "老板要一个从没做过的 IP 玩法今晚出方案，你：",
        "options": [
          {
            "key": "A",
            "text": "先定服务哪类粉丝再搭",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄别家",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确要服务的粉丝与场景，快速搭可落地框架，重契合轻堆砌。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做 IP/版权负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转内容",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转商务",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "IP 长期健康",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "养 IP 大于赚快钱",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "变现至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补法律与商业",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂内容的 IP 操盘人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯授权",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "IP 运营最核心：",
        "options": [
          {
            "key": "A",
            "text": "守护与延展价值",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "会谈",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "资历",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "关系",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "screenwriter",
    "name": "编剧/内容创作",
    "line": "影视 · 创作",
    "jd": "负责影视、短剧、短视频或游戏的剧本与故事创作，把创意落地为可拍摄/可玩的脚本。",
    "fitFor": [
      "爱讲故事、有画面感",
      "对人与冲突敏感",
      "能耐受改稿"
    ],
    "hardSkills": [
      "剧本结构与叙事",
      "人物与对白",
      "分场与节奏",
      "类型题材积累"
    ],
    "softSkills": [
      "创意",
      "共情",
      "抗压改稿",
      "沟通"
    ],
    "industryNotes": {
      "影视/长剧": "重结构与台词，改稿多、门槛高。",
      "短剧/小程序剧": "重钩子与节奏，量产快。",
      "游戏/动画": "重世界观与分支，重协作。"
    },
    "taboos": [
      "补结构：三幕剧 / 英雄之旅等剧作模型",
      "补拉片：经典片逐场拆解，学节奏与转折",
      "补分镜：能把文字转成可视场面",
      "补作品：写完整短剧 / 短视频剧本当敲门砖"
    ],
    "holland_code": "A",
    "questions": [
      {
        "type": "日常",
        "scenario": "要写一个故事，你先：",
        "options": [
          {
            "key": "A",
            "text": "定核心冲突与人物弧光",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接写台词",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄热门剧情",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等灵感",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做编剧你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把一个人物写活",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "署名",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "改完交差",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "闲着",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "写到中段卡住了，你：",
        "options": [
          {
            "key": "A",
            "text": "回看目标重排结构",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "硬编",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "换题材",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一个本子好不好看：",
        "options": [
          {
            "key": "A",
            "text": "冲突是否成立、人物是否立住",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "字数多",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板喜欢",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "导演要改一场戏，你：",
        "options": [
          {
            "key": "A",
            "text": "看改动是否服务于戏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "死守原稿",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "全听",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "吵",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要写短视频脚本，你先：",
        "options": [
          {
            "key": "A",
            "text": "定前 3 秒钩子与情绪",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "想分镜",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄爆款",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "等灵感",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一个人物观众不喜欢，你：",
        "options": [
          {
            "key": "A",
            "text": "复盘动机是否可信",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "加戏硬捧",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "删掉",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做素材积累靠：",
        "options": [
          {
            "key": "A",
            "text": "观察生活+建素材库",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "刷剧",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不积累",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "平台数据差，你：",
        "options": [
          {
            "key": "A",
            "text": "看哪类钩子/情绪更行",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "换选题硬试",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪算法",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "放弃",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "结构服务于人",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "灵感至上",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "开拍前主角戏被砍大半，你：",
        "options": [
          {
            "key": "A",
            "text": "重排结构保主线成立",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬塞原戏",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅导演",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "快速重排结构，保住核心冲突与人物弧光，把“被砍”变成“更紧”。"
      },
      {
        "type": "压力",
        "scenario": "甲方要一个你完全不认同的结局，你：",
        "options": [
          {
            "key": "A",
            "text": "用人物逻辑沟通替代",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "照写",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬拒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "用人物与故事内在逻辑沟通更成立的结局，不盲从也不硬拒。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前还差三集，你：",
        "options": [
          {
            "key": "A",
            "text": "拉主线保关键集先交",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "水集数",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄别剧",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "按主线保关键集先行交付，重结构完整轻注水，不交空壳。"
      },
      {
        "type": "压力",
        "scenario": "你写的梗被指“抄袭”，你：",
        "options": [
          {
            "key": "A",
            "text": "核对并澄清或调整",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "对骂",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "删帖",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "核对相似处并澄清或调整，用专业与透明化解，不骂不删。"
      },
      {
        "type": "压力",
        "scenario": "拍摄中演员临时改词你不满，你：",
        "options": [
          {
            "key": "A",
            "text": "现场判断是否更成立",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当场吵",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "全否",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "现场快速判断改词是否更服务戏，成立就接纳、不成立再调，不情绪化。"
      },
      {
        "type": "压力",
        "scenario": "一部戏口碑两极，你：",
        "options": [
          {
            "key": "A",
            "text": "看核心批评是否真问题",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "骂差评",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装死",
            "score": {
              "D2": 7
            }
          },
          {
            "key": "D",
            "text": "怪市场",
            "score": {
              "D2": 4
            }
          }
        ],
        "reference": "甄别核心批评是否指向真问题，该改改，不被情绪带偏。"
      },
      {
        "type": "压力",
        "scenario": "合作方要白嫖你的创意，你：",
        "options": [
          {
            "key": "A",
            "text": "明确权属并签协议",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "免费给",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "硬拒无替代",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没听见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "明确创意权属并落协议，守住劳动成果，不白嫖也不生硬拒。"
      },
      {
        "type": "压力",
        "scenario": "剧本被改得面目全非你很难受，你：",
        "options": [
          {
            "key": "A",
            "text": "区分“协作”与“底线”沟通",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "公开抱怨",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "全盘接受",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "摆烂",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "区分哪些是可协作的改、哪些伤核心，针对性沟通底线，不情绪化也不全盘弃。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做编剧/故事总监",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转导演",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转运营",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "写出立住的人物",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "人物与冲突为王",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "灵感至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "老板说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补类型与结构",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "会讲故事的创作者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯枪手",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "编剧最核心：",
        "options": [
          {
            "key": "A",
            "text": "结构与人物",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "笔快",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "关系",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "运气",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "archivist",
    "name": "档案管理",
    "line": "档案 · 图书",
    "jd": "负责档案、文书或图书情报的收集、整理、编目、保管与利用，保障信息可追溯、可查用。",
    "fitFor": [
      "细致、有条理",
      "对秩序与规范敏感",
      "坐得住"
    ],
    "hardSkills": [
      "分类编目与元数据",
      "档案系统（ERP/档案软件）",
      "保管与修复基础",
      "检索与利用服务"
    ],
    "softSkills": [
      "细致",
      "规范意识",
      "耐心",
      "保密"
    ],
    "industryNotes": {
      "机关/事业单位": "重合规与保密，稳、编制友好。",
      "企业档案/知识管理": "重效率与合规，数字化多。",
      "图书馆/高校": "重服务与编目，节奏稳。"
    },
    "taboos": [
      "补法规：《档案法》与分类标准（DA/T）",
      "补数字化：档案扫描 / OCR / 管理系统",
      "补证书：档案专业人员岗位培训（上岗用）",
      "补细心：编号 / 密级 / 借阅流程零出错"
    ],
    "holland_code": "C",
    "questions": [
      {
        "type": "日常",
        "scenario": "一批新档案进来，你先：",
        "options": [
          {
            "key": "A",
            "text": "按规范分类编目",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆一起",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "存桌面",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不归",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做档案你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把杂乱变有序可查",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "清闲",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "对账",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "摸鱼",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "一份档案找不到，你：",
        "options": [
          {
            "key": "A",
            "text": "查台账与定位快速找回",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "信记忆",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "说丢了",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断归档好不好看：",
        "options": [
          {
            "key": "A",
            "text": "是否规范可检索",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "整齐就行",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导满意",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "分类标准有歧义，你：",
        "options": [
          {
            "key": "A",
            "text": "按制度确认再归",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "凭感觉",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别人",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "跳过",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要做检索系统，你先：",
        "options": [
          {
            "key": "A",
            "text": "定元数据与字段",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接录",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄模板",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "发现一份涉密档案权限不对，你：",
        "options": [
          {
            "key": "A",
            "text": "立即纠正并上报",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "装没看见",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "等查",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做台账靠：",
        "options": [
          {
            "key": "A",
            "text": "系统 + 定期核对",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "Excel 乱记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "脑子",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不记",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "档案数字化你先：",
        "options": [
          {
            "key": "A",
            "text": "定扫描与命名规范",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接扫",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "外包不管",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "规范与可追溯",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "差不多",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "库房漏水档案受损，你：",
        "options": [
          {
            "key": "A",
            "text": "立即抢险转移并上报",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等天亮",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没发生",
            "score": {
              "D2": 1
            }
          }
        ],
        "reference": "立刻抢险转移完好档案、上报受损，过程透明，不拖延不推诿。"
      },
      {
        "type": "压力",
        "scenario": "紧急调阅一份关键档案找不到，你：",
        "options": [
          {
            "key": "A",
            "text": "查多系统定位并同步",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "说丢了",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅前任",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "跨系统快速定位，同步进展与替代线索，把“找不到”变成“在找”。"
      },
      {
        "type": "压力",
        "scenario": "发现一批档案分类长期错误，你：",
        "options": [
          {
            "key": "A",
            "text": "系统重分类并建规则",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "掩盖",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "当没发生",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "系统重分类并固化规则，防再犯，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "涉密档案误发风险，你：",
        "options": [
          {
            "key": "A",
            "text": "拦截并复盘权限",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没事",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等发现",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻拦截，复盘保管与权限漏洞并加固，不掩盖。"
      },
      {
        "type": "压力",
        "scenario": " deadline 前数字化量暴涨，你：",
        "options": [
          {
            "key": "A",
            "text": "保质量排优先级",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "瞎扫赶工",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "甩锅",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在保质量前提下排优先级与节奏，必要时申请支援，不瞎扫。"
      },
      {
        "type": "压力",
        "scenario": "审计要抽查十年档案，你：",
        "options": [
          {
            "key": "A",
            "text": "按清单高效调出",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "慌乱",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没存",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "依台账与索引高效调出，配合审计，平时规范此时见真章。"
      },
      {
        "type": "压力",
        "scenario": "系统迁移档案丢失映射，你：",
        "options": [
          {
            "key": "A",
            "text": "评估影响并做映射说明",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "当没发生",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩锅IT",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等修",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "评估对查用的影响，做映射与版本说明，透明沟通，不掩盖。"
      },
      {
        "type": "压力",
        "scenario": "同事长期违规借阅，你：",
        "options": [
          {
            "key": "A",
            "text": "按流程提醒并留痕",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "一起违规",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "装没看见",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "D",
            "text": "私下说",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "在合规前提下按流程提醒并留痕，不同流也不包庇。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做档案/知识管理负责人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转图书",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转行政",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "有序与可追溯",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "稳定",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "轻松",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "规范与保密",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "差不多",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补数字化与系统",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂业务的信息管理者",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯保管",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "档案最核心：",
        "options": [
          {
            "key": "A",
            "text": "细与可追溯",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "资历",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "关系",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  },
  {
    "id": "guide",
    "name": "导游/旅行策划",
    "line": "文旅 · 服务",
    "jd": "负责带团讲解、行程执行与突发处置，或为客群定制旅行方案与体验设计。",
    "fitFor": [
      "喜欢和人打交道、外向",
      "临场应变强",
      "对目的地与文化有热情"
    ],
    "hardSkills": [
      "讲解与控团",
      "行程与预订统筹",
      "应急处理",
      "目的地知识"
    ],
    "softSkills": [
      "沟通",
      "应变",
      "服务心",
      "耐心"
    ],
    "industryNotes": {
      "旅行社/地接": "重带团与节奏，旺季忙。",
      "定制游/私享": "重方案与体验，客单价高。",
      "研学/康养": "重安全与内容，专业要求升。"
    },
    "taboos": [
      "补资格：考导游证（笔试 + 面试 + 语种），这是上岗门槛",
      "补知识：目的地历史 / 地理 / 美食烂熟于心",
      "补服务：突发事件处理 + 基础急救常识",
      "补策划：能把路线做成有情绪的体验，而不只是带路"
    ],
    "holland_code": "SE",
    "questions": [
      {
        "type": "日常",
        "scenario": "接一个团，你先：",
        "options": [
          {
            "key": "A",
            "text": "摸清人数、结构与特殊需求",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "直接按老路线走",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄别团",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "等出发",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "做导游你更享受：",
        "options": [
          {
            "key": "A",
            "text": "把目的地讲活、客人有收获",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "拿提成",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "C",
            "text": "出差玩",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "D",
            "text": "清闲",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客人问个冷门问题你不会，你：",
        "options": [
          {
            "key": "A",
            "text": "如实说并事后补答",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "瞎编",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "跳过",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "让问别人",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你判断一次行程好不好看：",
        "options": [
          {
            "key": "A",
            "text": "体验是否顺畅有价值",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "去了多少点",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "回扣",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "行程被天气打乱，你：",
        "options": [
          {
            "key": "A",
            "text": "快速改备用方案",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "等天晴",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪天气",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "取消",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "有客人体力不支掉队，你：",
        "options": [
          {
            "key": "A",
            "text": "安排照料并保整体节奏",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "丢下继续",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "全员等",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不管",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你要设计一条定制线，你先：",
        "options": [
          {
            "key": "A",
            "text": "定客群与核心体验",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "堆景点",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "抄热门",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "随便",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你做预订统筹靠：",
        "options": [
          {
            "key": "A",
            "text": "清单+确认+留底",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "脑子记",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "微信",
            "score": {
              "D1": 7
            }
          },
          {
            "key": "D",
            "text": "不确认",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "客人投诉住宿，你：",
        "options": [
          {
            "key": "A",
            "text": "现场协调换或补",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "推给平台",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "怪客人",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "不理",
            "score": {
              "D1": 7
            }
          }
        ]
      },
      {
        "type": "日常",
        "scenario": "你更认同：",
        "options": [
          {
            "key": "A",
            "text": "体验与安全并重",
            "score": {
              "D1": 10
            }
          },
          {
            "key": "B",
            "text": "多购物",
            "score": {
              "D1": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D1": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D1": 1
            }
          }
        ]
      },
      {
        "type": "压力",
        "scenario": "途中客人突发疾病，你：",
        "options": [
          {
            "key": "A",
            "text": "立即救助并送医同步家属",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等终点",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "甩给司机",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻救助、联系送医并同步家属与旅行社，把人放第一位，不拖延。"
      },
      {
        "type": "压力",
        "scenario": "景点临时关闭全团打乱，你：",
        "options": [
          {
            "key": "A",
            "text": "切备用景点保体验",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等开放",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪景区",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "取消",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "快速切备用景点或调整动线，保住核心体验，把“意外”变成“应变”。"
      },
      {
        "type": "压力",
        "scenario": "客人间起冲突你调解：",
        "options": [
          {
            "key": "A",
            "text": "分开降温并公正处理",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "各打五十大板",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "偏袒",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装没看见",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "分开降温、了解原委、公正处理，不偏袒不回避，保全团氛围。"
      },
      {
        "type": "压力",
        "scenario": "购物店强制消费引发不满，你：",
        "options": [
          {
            "key": "A",
            "text": "按合规协调并保护客人",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "硬推",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅旅行社",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装死",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "守住合规与客人权益，协调避免过度消费，不强制不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "签证/票务出错客人可能误机，你：",
        "options": [
          {
            "key": "A",
            "text": "立刻补救并同步改签",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等发现",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "甩锅票务",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "装不知",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立刻补救、协调改签并透明同步，把损失降到最低，不拖延。"
      },
      {
        "type": "压力",
        "scenario": "暴雨封路困在途中，你：",
        "options": [
          {
            "key": "A",
            "text": "安顿客人并联系救援",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "等雨停",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "怪天",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "躺",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先安顿客人食宿与安全，联系救援与旅行社，全程透明，不干等。"
      },
      {
        "type": "压力",
        "scenario": "有客人走失，你：",
        "options": [
          {
            "key": "A",
            "text": "按预案寻人并报警报备",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "装没丢",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "C",
            "text": "怪客人",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "等回来",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "立即按预案寻人、联系警方与家属报备，不掩盖不甩锅。"
      },
      {
        "type": "压力",
        "scenario": "临时要一份从没做过的主题路线今晚出，你：",
        "options": [
          {
            "key": "A",
            "text": "先定客群与体验快速搭",
            "score": {
              "D2": 10
            }
          },
          {
            "key": "B",
            "text": "通宵堆景点",
            "score": {
              "D2": 4
            }
          },
          {
            "key": "C",
            "text": "说做不了",
            "score": {
              "D2": 1
            }
          },
          {
            "key": "D",
            "text": "抄别家",
            "score": {
              "D2": 7
            }
          }
        ],
        "reference": "先明确客群与核心体验，快速搭可落地框架，重体验轻堆砌。"
      },
      {
        "type": "发展",
        "scenario": "3 年后你更想：",
        "options": [
          {
            "key": "A",
            "text": "做旅行策划/产品经理",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "转定制",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转销售",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你更看重：",
        "options": [
          {
            "key": "A",
            "text": "客人真满意与安全",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "薪资",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "轻松",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "名气",
            "score": {
              "D3": 7
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "你认同：",
        "options": [
          {
            "key": "A",
            "text": "服务与安全",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "回扣至上",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "C",
            "text": "领导说啥",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "随意",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "瓶颈时你：",
        "options": [
          {
            "key": "A",
            "text": "补目的地与产品知识",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "跳槽",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "躺",
            "score": {
              "D3": 1
            }
          },
          {
            "key": "D",
            "text": "焦虑",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "长期想成为：",
        "options": [
          {
            "key": "A",
            "text": "懂体验的旅行操盘人",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "纯带团",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "转职能",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "D",
            "text": "没想",
            "score": {
              "D3": 1
            }
          }
        ]
      },
      {
        "type": "发展",
        "scenario": "导游最核心：",
        "options": [
          {
            "key": "A",
            "text": "安全与服务",
            "score": {
              "D3": 10
            }
          },
          {
            "key": "B",
            "text": "能说",
            "score": {
              "D3": 7
            }
          },
          {
            "key": "C",
            "text": "关系",
            "score": {
              "D3": 4
            }
          },
          {
            "key": "D",
            "text": "资历",
            "score": {
              "D3": 1
            }
          }
        ]
      }
    ]
  }
];
