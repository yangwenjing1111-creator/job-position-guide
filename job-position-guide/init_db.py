#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
岗位扫盲网站 · 数据库初始化脚本（纯标准库）

职责：
  1) 创建 SQLite 数据库（positions.db）
  2) 建 3 张表：positions / holland_questions / submissions
  3) 导入 6 岗基础信息 + holland_code 标注
  4) 导入 60 道 Holland 职业兴趣测试题（6 维 × 10）

使用：
  python init_db.py              # 创建/重建库
  python init_db.py --append     # 追加（不清空）
  python init_db.py --show       # 查看统计

数据库文件默认位于脚本同目录的 positions.db，可在 DB_PATH 环境变量覆盖。
"""
import json
import os
import sqlite3
import sys

# Windows GBK 环境：让 print 支持中文/Unicode
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

HERE = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.environ.get("DB_PATH") or os.path.join(HERE, "positions.db")


# ============ 19 岗基础信息（删技术型 + 加跨专业友好岗） ============
# 原则：应届生"非技术 / 可跨专业"岗位
# - 删：前端/后端/算法/数据/测试/运维/UI/机械/电气 等技术型
# - 留：销售/HR/产品/用户运营 + 跨专业可进的非技术岗
POSITIONS = [
  {
    "id": "pm",
    "name": "产品经理",
    "line": "互联网 · 应届友好",
    "jd": "负责互联网产品的规划与迭代，连接用户、研发、设计与业务，定义要做什么、为什么做、做到什么程度。",
    "fit_for": [
      "逻辑清晰、喜欢拆解复杂问题",
      "擅长跨团队沟通协调",
      "对用户需求敏感，能从数据与反馈中找洞察"
    ],
    "hard_skills": [
      "需求文档（PRD/BRD）",
      "原型工具（Axure/Figma）",
      "数据分析（SQL/Excel）",
      "项目管理（迭代/排期）"
    ],
    "soft_skills": [
      "结构化思考",
      "沟通推动",
      "同理心",
      "决策与担责"
    ],
    "industry_notes": {
      "互联网 C 端": "节奏快、AB 实验文化，KPI 看 DAU/留存/转化。",
      "B 端/企业服务": "客户深度访谈、复杂业务流程，KPI 看续约率/ARR。",
      "金融科技": "强合规、业务理解深，KPI 看交易量/风控指标。"
    },
    "taboos": [
      "补需求分析：学写 PRD、画流程图（Axure / Figma 入门），别只会画原型",
      "补数据感：会用 SQL 取数、看埋点，决策靠数据不靠感觉",
      "补背书：考 NPDP（产品经理国际资格）或 PMP，简历更有说服力"
    ],
    "holland_code": "EI"
  },
  {
    "id": "op",
    "name": "用户运营",
    "line": "互联网运营",
    "jd": "围绕用户拉新、活跃、留存、转化设计活动与内容，协调产品、市场、客服形成增长闭环。",
    "fit_for": [
      "对人敏感、喜欢和用户打交道",
      "数据与创意兼具",
      "执行力强、抗压"
    ],
    "hard_skills": [
      "活动策划与文案",
      "数据分析（漏斗/留存/ROI）",
      "社群与用户分层",
      "项目管理与跨部门协作"
    ],
    "soft_skills": [
      "用户视角",
      "沟通协调",
      "抗压执行",
      "创意表达"
    ],
    "industry_notes": {
      "互联网 C 端": "节奏快、AB 实验密集，KPI 看 DAU/留存/转化。",
      "电商": "强促销节点、大促驱动，KPI 看 GMV/复购。",
      "教育/内容": "重社群与长周期，KPI 看续费/完课率。"
    },
    "taboos": [
      "补数据：Excel 透视表 + 基础 SQL，活动 ROI 自己能算",
      "补内容：会写文案、剪短视频，别只当传话筒",
      "补平台规则：熟读抖音 / 小红书 / 淘宝的流量机制与违规红线"
    ],
    "holland_code": "ES"
  },
  {
    "id": "sales",
    "name": "销售/商务",
    "line": "业绩导向",
    "jd": "负责客户开发、需求挖掘、方案匹配、商务谈判与签约，扛业绩指标。",
    "fit_for": [
      "喜欢和人打交道",
      "抗压、好胜、有韧性",
      "对钱与结果敏感"
    ],
    "hard_skills": [
      "客户开发与渠道",
      "需求挖掘与方案呈现",
      "商务谈判与合同",
      "CRM 与销售漏斗管理"
    ],
    "soft_skills": [
      "沟通说服",
      "目标感",
      "抗压韧性",
      "客户视角"
    ],
    "industry_notes": {
      "B 端大客户": "周期长、决策链复杂，重方案与关系。",
      "C 端零售/电销": "节奏快、量大，重话术与转化。",
      "渠道/代理": "重招商与生态，重谈判与分成设计。"
    },
    "taboos": [
      "补方法论：学 SPIN 销售法、顾问式销售，别只靠嘴皮",
      "补行业知识：先吃透一个行业再谈单，外行一眼被看穿",
      "补工具：用 CRM 管理客户漏斗，沉淀每次跟进记录"
    ],
    "holland_code": "E"
  },
  {
    "id": "hr",
    "name": "HR",
    "line": "职能支持",
    "jd": "负责招聘、培训、绩效、员工关系、文化落地，支撑组织运转与人才发展。",
    "fit_for": [
      "对人敏感、有同理心",
      "做事有条理、原则性强",
      "擅长沟通协调"
    ],
    "hard_skills": [
      "招聘全流程（JD/筛选/面试/谈薪）",
      "培训与员工关系",
      "绩效与薪酬基础",
      "劳动法与合规"
    ],
    "soft_skills": [
      "同理心",
      "沟通协调",
      "原则与边界感",
      "组织视角"
    ],
    "industry_notes": {
      "互联网大厂": "体系成熟、流程规范，重 HRBP/COE 分工。",
      "创业公司": "全模块一肩挑，重独立解决与灵活度。",
      "传统行业": "强合规与流程，重员工关系与组织稳定。"
    },
    "taboos": [
      "补劳动法：用工风险、合同、社保、辞退流程必须懂",
      "补招聘：渠道运营 + 结构化面试技巧，别只收简历",
      "补证书：考人力资源管理师（企业 HR 方向）增加专业度"
    ],
    "holland_code": "SC"
  },
  {
    "id": "marketing",
    "name": "市场营销",
    "line": "增长 · 品牌",
    "jd": "负责市场调研、品牌定位、营销活动策划与执行，撬动用户增长与品牌声量。",
    "fit_for": [
      "对市场趋势敏感",
      "创意与数据兼具",
      "沟通协调与项目推动"
    ],
    "hard_skills": [
      "市场调研与用户洞察",
      "营销策划（线上/线下）",
      "内容/活动/媒介协同",
      "数据分析与 ROI 评估"
    ],
    "soft_skills": [
      "创意表达",
      "用户视角",
      "项目推动",
      "跨部门协调"
    ],
    "industry_notes": {
      "互联网": "重增长黑客与数据驱动，CAC/ROAS 指标导向。",
      "快消/品牌": "重品牌长期建设与渠道管理，TVC/线下投放经验。",
      "B 端/工业品": "重行业展会与方案营销，决策链长，KPI 看 SQL/MQL。"
    },
    "taboos": [
      "补投放：SEM / 信息流账户实操，别只会写 PPT 方案",
      "补分析：Google Analytics / 巨量引擎后台看得懂、能出报告",
      "补证书：Google Analytics 认证、巨量引擎认证免费可考，直接写简历"
    ],
    "holland_code": "EA"
  },
  {
    "id": "brand",
    "name": "品牌策划",
    "line": "品牌 · 内容",
    "jd": "负责品牌定位、视觉语言、内容叙事与传播策略，让品牌在用户心中有独特印象。",
    "fit_for": [
      "对审美/叙事敏感",
      "喜欢琢磨人心",
      "能讲好一个故事"
    ],
    "hard_skills": [
      "品牌定位与策略",
      "内容/视觉/视频协同",
      "传播渠道与节奏",
      "提案与跨部门沟通"
    ],
    "soft_skills": [
      "审美",
      "叙事能力",
      "共情",
      "创意思维"
    ],
    "industry_notes": {
      "新消费品牌": "重内容种草与小红书/抖音生态，KOL 投放密集。",
      "互联网产品": "重品牌一致性与官网/PR，重用户感知。",
      "传统/ToB 品牌": "重 VI 系统与年度 campaign，节奏稳。"
    },
    "taboos": [
      "补审美：能判断视觉好坏、把 brief 写清楚",
      "补内容：品牌故事 / slogan / campaign 主题会写",
      "补证书：英文好可冲 CIM 营销证书，是外企硬通货"
    ],
    "holland_code": "EA"
  },
  {
    "id": "game",
    "name": "游戏策划",
    "line": "游戏 · 创意",
    "jd": "负责游戏系统、数值、关卡或剧情设计，把核心玩法翻译成可落地的设计文档。",
    "fit_for": [
      "重度游戏玩家",
      "逻辑与创意兼具",
      "喜欢拆解机制"
    ],
    "hard_skills": [
      "游戏系统/数值/关卡设计",
      "文档与原型（Office/Axure）",
      "数据分析（玩家行为）",
      "项目管理"
    ],
    "soft_skills": [
      "创意思维",
      "逻辑拆解",
      "玩家视角",
      "沟通表达"
    ],
    "industry_notes": {
      "大厂（腾讯/网易/米哈游）": "流程成熟、分工细（系统/数值/关卡/剧情），校招生培养体系完整。",
      "中型工作室": "一人多能，成长快但节奏紧。",
      "独立/海外": "重综合能力与英语，重玩法创新。"
    },
    "taboos": [
      "补文档：能写标准游戏设计文档（GDD），想法落得下来",
      "补数值：Excel 建模、理解数值平衡与成长曲线",
      "补玩家心理：读《游戏设计艺术》，多拆解爆款机制"
    ],
    "holland_code": "AE"
  },
  {
    "id": "ecom",
    "name": "电商运营",
    "line": "电商 · 转化",
    "jd": "负责电商店铺或品类的日常运营、活动策划、流量获取与转化提升，扛 GMV/ROI 指标。",
    "fit_for": [
      "对消费/数据敏感",
      "节奏快、抗压",
      "喜欢琢磨流量与转化"
    ],
    "hard_skills": [
      "平台规则（淘系/抖系/京东/小红书）",
      "活动策划与促销设计",
      "直播/短视频/投流",
      "数据分析与 ROI 优化"
    ],
    "soft_skills": [
      "数据敏感",
      "执行力",
      "用户视角",
      "节奏感"
    ],
    "industry_notes": {
      "淘系/京东": "重店铺运营与搜索权重，活动节点多。",
      "抖系/快手": "重直播与短视频，投流与达播是核心。",
      "跨境（亚马逊/独立站）": "重选品与广告投放，英语+海外消费习惯。"
    },
    "taboos": [
      "补平台规则：淘宝 / 抖音小店规则、违规红线先背熟",
      "补投放：千川 / 巨量投放实操，会看 ROI 不烧钱",
      "补数据：GMV / 毛利 / 转化率自己能拉表分析"
    ],
    "holland_code": "ES"
  },
  {
    "id": "logistics",
    "name": "物流专员",
    "line": "供应链 · 仓储",
    "jd": "负责仓储、运输、库存或配送的日常运营与协调，保障货物按时按质送达。",
    "fit_for": [
      "做事有条理、细心",
      "对流程与数字敏感",
      "抗压、能跑现场"
    ],
    "hard_skills": [
      "WMS/TMS 系统操作",
      "库存与盘点管理",
      "运输与承运商协调",
      "数据报表与异常处理"
    ],
    "soft_skills": [
      "细致耐心",
      "流程意识",
      "沟通协调",
      "抗压执行"
    ],
    "industry_notes": {
      "电商/快递": "节奏快、量大，重系统与时效。",
      "制造业/3PL": "重成本与合规，重合同与运力调度。",
      "跨境/海外仓": "重清关与国际物流规则，英语加分。"
    },
    "taboos": [
      "补系统：WMS / TMS / ERP 至少会用一个，别只靠纸笔",
      "补供应链：库存周转、仓配逻辑搞懂",
      "补证书：物流师 / 供应链管理师（初级）入门可用"
    ],
    "holland_code": "CE"
  },
  {
    "id": "dpm",
    "name": "数据产品经理",
    "line": "产品 · 数据",
    "jd": "把业务问题转化为数据指标、报表与自助分析工具，连接业务团队与数据团队。",
    "fit_for": [
      "逻辑清晰、对数字敏感",
      "业务理解 + 技术沟通",
      "能用数据讲清问题"
    ],
    "hard_skills": [
      "指标体系与口径设计",
      "SQL/Excel 熟练",
      "BI 工具（Tableau/帆软/Superset）",
      "需求文档与跨团队推动"
    ],
    "soft_skills": [
      "业务理解",
      "结构化表达",
      "推动协调",
      "数据敏感"
    ],
    "industry_notes": {
      "互联网": "重 AB 实验与用户增长指标体系。",
      "金融/零售": "重经营分析与 BI 大盘。",
      "B 端/SaaS": "重客户成功指标与自助分析平台。"
    },
    "taboos": [
      "补 SQL：能自己取数，不依赖数据分析师",
      "补可视化：Tableau / BI 做看板，结论讲得清楚",
      "补统计：基础概率与 A/B 实验结论能读懂"
    ],
    "holland_code": "EI"
  },
  {
    "id": "teacher",
    "name": "教师/培训师",
    "line": "教育 · 培训",
    "jd": "负责课程教学、学员辅导、教学设计与培训交付（K12/职业/企业内训皆可）。",
    "fit_for": [
      "喜欢与人沟通、表达欲强",
      "有耐心、喜欢教别人",
      "对某个学科/技能有积累"
    ],
    "hard_skills": [
      "学科或专业技能",
      "课堂/在线教学能力",
      "教学设计与课件制作",
      "学员评估与反馈"
    ],
    "soft_skills": [
      "表达力",
      "耐心",
      "共情",
      "持续学习"
    ],
    "industry_notes": {
      "K12（双减后收缩）": "转向素质教育/职业教育/合规托管。",
      "职业/IT 培训": "重技能实战与就业结果，节奏快。",
      "企业内训": "重行业 know-how 与定制化交付。"
    },
    "taboos": [
      "补资格：考教师资格证（笔试 + 面试 + 普通话），这是上岗硬门槛",
      "补教学：会做课件、控场、设计练习与反馈",
      "补认证：TTT 培训师认证提升企业培训方向背书"
    ],
    "holland_code": "SA"
  },
  {
    "id": "counselor",
    "name": "心理咨询师",
    "line": "心理 · 服务",
    "jd": "为来访者提供心理咨询、心理评估与支持（学校/EAP/社区/互联网心理平台）。",
    "fit_for": [
      "高共情、愿意倾听",
      "情绪稳定、抗压",
      "对人性与行为感兴趣"
    ],
    "hard_skills": [
      "心理学专业知识",
      "咨询技术（CBT/精神动力等）",
      "心理评估量表",
      "伦理与边界"
    ],
    "soft_skills": [
      "共情",
      "倾听",
      "边界感",
      "自我觉察"
    ],
    "industry_notes": {
      "学校": "重学生发展与危机干预，编制稳定。",
      "EAP/企业": "重员工帮助计划，保密要求高。",
      "互联网心理平台": "重线上化产品与规模化匹配（KnowYourself/简单心理等）。"
    },
    "taboos": [
      "补证书：中科院心理所咨询师培训合格证是入门门槛，先持证",
      "补技术：倾听 / 共情 / 提问的基础咨询技术持续练",
      "补伦理：保密原则与转介边界必须守，别越界给建议"
    ],
    "holland_code": "SI"
  },
  {
    "id": "cs",
    "name": "客服/客户成功",
    "line": "服务 · 客户",
    "jd": "为客户解答疑问、处理投诉、跟进回访，承接售前售后与续费（CSM 更偏续费与客户经营）。",
    "fit_for": [
      "耐心、表达清晰",
      "抗压、能处理负面情绪",
      "对人敏感、有服务意识"
    ],
    "hard_skills": [
      "客服系统（Zendesk/智齿/容联）",
      "FAQ 与话术库",
      "客户分层与跟进",
      "数据（满意度/响应时长）"
    ],
    "soft_skills": [
      "耐心",
      "服务意识",
      "沟通表达",
      "抗压"
    ],
    "industry_notes": {
      "电商/外卖": "节奏快、量大，标准化话术为主。",
      "SaaS/企业服务": "重续费与 NPS，CSM 是核心。",
      "金融/运营商": "强合规与工单 SLA，重质检。"
    },
    "taboos": [
      "补产品：把自家 SaaS 功能用到能现场演示",
      "补方法：客户成功 / CSM 的续费留存打法",
      "补工具：CRM + 工单系统熟练，Excel 拉客户健康度"
    ],
    "holland_code": "SE"
  },
  {
    "id": "lawyer",
    "name": "律师",
    "line": "法律 · 专业",
    "jd": "为客户处理诉讼/非诉法律事务，撰写法律意见、出庭辩护或合同审查（应届多从助理/实习起步）。",
    "fit_for": [
      "逻辑严谨、表达精准",
      "对文字与细节敏感",
      "抗压、能啃硬骨头"
    ],
    "hard_skills": [
      "法律专业知识",
      "法律检索与案例分析",
      "文书写作",
      "沟通与谈判"
    ],
    "soft_skills": [
      "严谨",
      "逻辑",
      "表达",
      "抗压"
    ],
    "industry_notes": {
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
    "holland_code": "EI"
  },
  {
    "id": "founder",
    "name": "创业者/CEO",
    "line": "创业 · 综合",
    "jd": "负责公司战略、融资、团队与产品全栈决策（应届更常见于联合创始人或早期成员路径）。",
    "fit_for": [
      "高自驱、不怕不确定",
      "能扛压、能说服人",
      "对机会敏感、行动力强"
    ],
    "hard_skills": [
      "行业洞察与商业判断",
      "融资与路演",
      "团队搭建与文化",
      "产品/运营/财务基础"
    ],
    "soft_skills": [
      "决断",
      "抗压",
      "愿景",
      "沟通"
    ],
    "industry_notes": {
      "互联网创业": "重增长与融资节奏，A 轮前全栈。",
      "实体/消费创业": "重供应链与现金流，活下来是关键。",
      "出海/科技创业": "重国际视野与技术深度。"
    },
    "taboos": [
      "补商业计划：会写 BP、算单位经济模型（UE），别只谈情怀",
      "补财务：看得懂三张表，融资前自己先理清账目",
      "补认知：去创业营 /  accelerator 泡一圈，少交学费"
    ],
    "holland_code": "E"
  },
  {
    "id": "finance",
    "name": "财务/会计",
    "line": "财务 · 专业",
    "jd": "负责账务处理、税务申报、报表编制或财务分析，支撑公司财务规范与决策。",
    "fit_for": [
      "对数字敏感、细心",
      "原则性强、守规矩",
      "做事有条理"
    ],
    "hard_skills": [
      "会计准则与税法",
      "用友/金蝶/SAP",
      "Excel 高阶（VLOOKUP/透视）",
      "报表与分析"
    ],
    "soft_skills": [
      "细致",
      "原则",
      "数字敏感",
      "保密"
    ],
    "industry_notes": {
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
    "holland_code": "C"
  },
  {
    "id": "admin",
    "name": "行政/秘书",
    "line": "行政 · 后勤",
    "jd": "负责公司日常行政事务，如会议安排、办公采购、文件管理、后勤保障与对外接待。",
    "fit_for": [
      "做事细心、条理清晰",
      "服务意识强、性格稳",
      "多线程协调"
    ],
    "hard_skills": [
      "办公软件（Word/Excel/PPT）",
      "会议与差旅管理",
      "采购与供应商对接",
      "文档与档案管理"
    ],
    "soft_skills": [
      "细致",
      "服务意识",
      "沟通",
      "应变"
    ],
    "industry_notes": {
      "互联网大厂": "行政体系成熟，分工细（前台/总务/差旅）。",
      "创业公司": "一人多能，成长快。",
      "传统/外资": "重礼仪与英文沟通。"
    },
    "taboos": [
      "补 Office：Word 排版、Excel 函数、PPT 美化到专业级",
      "补礼仪：商务接待、邮件、会议纪要规范到位",
      "补证书：行政管理师 / 秘书资格（初级即可）"
    ],
    "holland_code": "C"
  },
  {
    "id": "legal_asst",
    "name": "法务助理",
    "line": "法务 · 辅助",
    "jd": "协助法务/律师处理合同起草、审阅、归档、法律检索与合规支持。",
    "fit_for": [
      "对文字敏感、细致",
      "学习能力强",
      "有条理、原则性强"
    ],
    "hard_skills": [
      "法律检索与文书",
      "合同审阅要点",
      "档案与版本管理",
      "英语（外资所加分）"
    ],
    "soft_skills": [
      "细致",
      "严谨",
      "学习力",
      "保密"
    ],
    "industry_notes": {
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
    "holland_code": "CS"
  },
  {
    "id": "data_label",
    "name": "数据标注/审核",
    "line": "AI · 数据",
    "jd": "为 AI 模型标注/审核图像/文本/语音数据（自动驾驶/内容审核/AI 训练数据）。",
    "fit_for": [
      "做事细心、耐心",
      "能接受重复性工作",
      "对规则敏感"
    ],
    "hard_skills": [
      "标注工具使用",
      "规则理解与一致性",
      "数据质量自检",
      "Excel 基础"
    ],
    "soft_skills": [
      "细致",
      "耐心",
      "规则敏感",
      "团队协作"
    ],
    "industry_notes": {
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
    "holland_code": "C"
  },
  {
    "id": "copywriter",
    "name": "文案策划",
    "line": "内容 · 创意",
    "jd": "负责品牌与产品的文案、slogan、推文、短视频脚本与种草内容，把卖点翻译成打动人的表达。",
    "fit_for": [
      "对文字和表达敏感",
      "喜欢琢磨人心与情绪",
      "能把复杂信息讲简单"
    ],
    "hard_skills": [
      "文案与脚本写作",
      "品牌调性与语气",
      "选题与热点捕捉",
      "基础排版与审美"
    ],
    "soft_skills": [
      "共情",
      "创意",
      "策略思维",
      "抗压改稿"
    ],
    "industry_notes": {
      "广告/营销公司": "重提案与比稿，节奏快、改稿多。",
      "品牌方/甲方": "重长期调性与一致性，跨部门协作多。",
      "自媒体/MCN": "重流量与转化，追热点能力强。"
    },
    "taboos": [
      "补训练：每天拆解 + 仿写 10 条优秀文案，建自己的素材库",
      "补 SEO：懂关键词布局，文案能被搜到才有用",
      "补作品集：把不同行业案例整理成集，比简历管用"
    ],
    "holland_code": "A"
  },
  {
    "id": "event",
    "name": "活动策划",
    "line": "活动 · 体验",
    "jd": "负责线下/线上活动的创意、流程、招商与落地执行，统筹供应商、场地与现场体验。",
    "fit_for": [
      "喜欢把想法变成现实",
      "多线程协调能力强",
      "对现场体验与细节敏感"
    ],
    "hard_skills": [
      "活动策划与流程设计",
      "供应商与场地统筹",
      "预算与招商",
      "现场执行与应急"
    ],
    "soft_skills": [
      "项目推动",
      "沟通协调",
      "应变",
      "细节控"
    ],
    "industry_notes": {
      "会展/公关公司": "重比稿与执行，项目制、出差多。",
      "品牌/市场部": "重品牌体验与转化，内部协作多。",
      "文旅/演出": "重现场安全与节奏，强排期。"
    },
    "taboos": [
      "补 PMP：项目管理五大过程组，活动当项目管",
      "补供应商：场地 / 搭建 / 物料渠道与比价能力",
      "补预算：能把活动成本拆到每一项不超支"
    ],
    "holland_code": "EA"
  },
  {
    "id": "pr",
    "name": "公关媒介",
    "line": "传播 · 媒介",
    "jd": "负责企业与媒体的关系维护、新闻发布、舆情监测与危机公关，维护品牌公众形象。",
    "fit_for": [
      "对人敏感、会来事",
      "表达与沟通强",
      "临场冷静、抗压"
    ],
    "hard_skills": [
      "媒体关系与媒介投放",
      "新闻稿与声明写作",
      "舆情监测与研判",
      "危机公关预案"
    ],
    "soft_skills": [
      "沟通",
      "共情",
      "临场应变",
      "分寸感"
    ],
    "industry_notes": {
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
    "holland_code": "ES"
  },
  {
    "id": "journalist",
    "name": "记者/采编",
    "line": "媒体 · 采编",
    "jd": "负责选题挖掘、采访、写作与编辑，产出新闻、深度或专题内容（纸媒/网媒/客户端均可）。",
    "fit_for": [
      "好奇、爱刨根问底",
      "文字功底好、逻辑清",
      "能扛压跑现场"
    ],
    "hard_skills": [
      "采访与提问",
      "新闻写作与编辑",
      "选题策划",
      "事实核查"
    ],
    "soft_skills": [
      "好奇心",
      "沟通",
      " objectivity 客观",
      "抗压"
    ],
    "industry_notes": {
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
    "holland_code": "AS"
  },
  {
    "id": "editor",
    "name": "图书编辑",
    "line": "出版 · 编辑",
    "jd": "负责图书的选题策划、审读、加工与校对，连接作者、设计与发行，把书做出来。",
    "fit_for": [
      "爱读书、语感好",
      "细致耐心",
      "对内容质量有洁癖"
    ],
    "hard_skills": [
      "文字加工与校对",
      "选题策划",
      "作者沟通",
      "编校规范"
    ],
    "soft_skills": [
      "细致",
      "审美",
      "沟通",
      "耐心"
    ],
    "industry_notes": {
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
    "holland_code": "AC"
  },
  {
    "id": "translator",
    "name": "翻译/本地化",
    "line": "语言 · 本地化",
    "jd": "负责文档、产品、音视频的翻译与本地化，确保跨语言内容准确、地道、符合当地习惯。",
    "fit_for": [
      "语言功底好、双语敏感觉",
      "细致严谨",
      "对文化差异敏感"
    ],
    "hard_skills": [
      "双语翻译",
      "本地化（CAT 工具/TMS）",
      "术语与风格统一",
      "专业知识（法律/医疗/游戏等）"
    ],
    "soft_skills": [
      "细致",
      "跨文化敏感度",
      "沟通",
      "责任心"
    ],
    "industry_notes": {
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
    "holland_code": "AC"
  },
  {
    "id": "bd",
    "name": "商务拓展 BD",
    "line": "商务 · 合作",
    "jd": "负责对外合作、渠道拓展与资源置换，撮合异业合作、联运与生态伙伴，扩大业务边界。",
    "fit_for": [
      "喜欢和人打交道、能聊",
      "对机会敏感",
      "双赢思维"
    ],
    "hard_skills": [
      "合作谈判",
      "渠道与生态拓展",
      "方案与资源盘点",
      "数据复盘"
    ],
    "soft_skills": [
      "沟通说服",
      "关系经营",
      "双赢思维",
      "抗压"
    ],
    "industry_notes": {
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
    "holland_code": "E"
  },
  {
    "id": "ngo",
    "name": "公益项目官员",
    "line": "公益 · 项目",
    "jd": "负责公益项目的设计、筹款、执行与评估，连接受助群体、 donor 与志愿者，把善意落地。",
    "fit_for": [
      "有社会情怀、愿意利他",
      "细心会协调",
      "能在资源有限下办事"
    ],
    "hard_skills": [
      "项目设计与管理",
      "筹款与资助方沟通",
      "需求评估与监测",
      "志愿者协调"
    ],
    "soft_skills": [
      "共情",
      "沟通",
      "责任心",
      "抗压"
    ],
    "industry_notes": {
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
    "holland_code": "SE"
  },
  {
    "id": "ip",
    "name": "版权/IP 运营",
    "line": "文娱 · 版权",
    "jd": "负责 IP 的授权、改编、衍生品与跨平台运营，让一个内容资产在多条线上持续产生价值。",
    "fit_for": [
      "喜欢内容也懂生意",
      "对趋势与人群敏感",
      "能谈能盘"
    ],
    "hard_skills": [
      "版权与授权管理",
      "IP 改编与衍生策划",
      "商务谈判",
      "数据复盘"
    ],
    "soft_skills": [
      "审美",
      "沟通",
      "商业嗅觉",
      "协调"
    ],
    "industry_notes": {
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
    "holland_code": "AE"
  },
  {
    "id": "screenwriter",
    "name": "编剧/内容创作",
    "line": "影视 · 创作",
    "jd": "负责影视、短剧、短视频或游戏的剧本与故事创作，把创意落地为可拍摄/可玩的脚本。",
    "fit_for": [
      "爱讲故事、有画面感",
      "对人与冲突敏感",
      "能耐受改稿"
    ],
    "hard_skills": [
      "剧本结构与叙事",
      "人物与对白",
      "分场与节奏",
      "类型题材积累"
    ],
    "soft_skills": [
      "创意",
      "共情",
      "抗压改稿",
      "沟通"
    ],
    "industry_notes": {
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
    "holland_code": "A"
  },
  {
    "id": "archivist",
    "name": "档案管理",
    "line": "档案 · 图书",
    "jd": "负责档案、文书或图书情报的收集、整理、编目、保管与利用，保障信息可追溯、可查用。",
    "fit_for": [
      "细致、有条理",
      "对秩序与规范敏感",
      "坐得住"
    ],
    "hard_skills": [
      "分类编目与元数据",
      "档案系统（ERP/档案软件）",
      "保管与修复基础",
      "检索与利用服务"
    ],
    "soft_skills": [
      "细致",
      "规范意识",
      "耐心",
      "保密"
    ],
    "industry_notes": {
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
    "holland_code": "C"
  },
  {
    "id": "guide",
    "name": "导游/旅行策划",
    "line": "文旅 · 服务",
    "jd": "负责带团讲解、行程执行与突发处置，或为客群定制旅行方案与体验设计。",
    "fit_for": [
      "喜欢和人打交道、外向",
      "临场应变强",
      "对目的地与文化有热情"
    ],
    "hard_skills": [
      "讲解与控团",
      "行程与预订统筹",
      "应急处理",
      "目的地知识"
    ],
    "soft_skills": [
      "沟通",
      "应变",
      "服务心",
      "耐心"
    ],
    "industry_notes": {
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
    "holland_code": "SE"
  }
]


# ============ 60 道霍兰德职业兴趣测试题（6 维 × 10） ============
# 维度：R 现实型 / I 研究型 / A 艺术型 / S 社会型 / E 企业型 / C 常规型
# 记分：选项 喜欢(2) / 中立(1) / 不喜欢(0)；reverse=1 时反向记分
HOLLAND_QUESTIONS = [
    # R 现实型
    {"dim": "R", "scenario": "我喜欢动手操作工具或机械类物品。"},
    {"dim": "R", "scenario": "我喜欢修理电器、家具等实物让它们重新工作。"},
    {"dim": "R", "scenario": "我愿意在户外做体力或操作类的工作。"},
    {"dim": "R", "scenario": "我喜欢按说明书一步步组装/拆解物品。"},
    {"dim": "R", "scenario": "我偏好具体明确的任务，而不是抽象讨论。"},
    {"dim": "R", "scenario": "我喜欢用双手解决看得见、摸得着的问题。"},
    {"dim": "R", "scenario": "我愿意从事农业、林业、建筑、施工类工作。"},
    {"dim": "R", "scenario": "我喜欢做能立刻看到结果的事情。"},
    {"dim": "R", "scenario": "我对设备操作、机械原理感兴趣。"},
    {"dim": "R", "scenario": "我喜欢制作类手工（木工/烹饪/种植等）。"},

    # I 研究型
    {"dim": "I", "scenario": "我喜欢研究问题背后的原理和原因。"},
    {"dim": "I", "scenario": "我喜欢做实验、整理数据并发现规律。"},
    {"dim": "I", "scenario": "我喜欢阅读学术、科普或深度分析类内容。"},
    {"dim": "I", "scenario": "我对未知事物充满好奇，喜欢刨根问底。"},
    {"dim": "I", "scenario": "我喜欢解数学题、逻辑题或推理题。"},
    {"dim": "I", "scenario": "我喜欢独立思考复杂、抽象的问题。"},
    {"dim": "I", "scenario": "我喜欢寻找现象背后的原因并形成理论。"},
    {"dim": "I", "scenario": "我倾向于用数据和逻辑做判断而非直觉。"},
    {"dim": "I", "scenario": "我喜欢研究新技术、新方法并尝试应用。"},
    {"dim": "I", "scenario": "我愿意做长期深入、需要专注的研究类工作。"},

    # A 艺术型
    {"dim": "A", "scenario": "我喜欢创作艺术作品（绘画/写作/音乐/设计等）。"},
    {"dim": "A", "scenario": "我喜欢有创意的、不拘一格的工作方式。"},
    {"dim": "A", "scenario": "我对美学、风格、色彩有较高敏感度。"},
    {"dim": "A", "scenario": "我喜欢表达自己的想法、情感或观点。"},
    {"dim": "A", "scenario": "我愿意尝试新的表达形式或媒介。"},
    {"dim": "A", "scenario": "我讨厌一成不变、重复刻板的工作。"},
    {"dim": "A", "scenario": "我喜欢自由度比较高的工作安排。"},
    {"dim": "A", "scenario": "我对色彩、形状、声音、文字都敏感。"},
    {"dim": "A", "scenario": "我喜欢开放式、没有标准答案的问题。"},
    {"dim": "A", "scenario": "我愿意从事艺术、媒体、设计、影视类工作。"},

    # S 社会型
    {"dim": "S", "scenario": "我喜欢帮助他人解决困难或答疑解惑。"},
    {"dim": "S", "scenario": "我喜欢和人打交道、合作或交流。"},
    {"dim": "S", "scenario": "我愿意做志愿者、公益或社区类工作。"},
    {"dim": "S", "scenario": "我喜欢教别人做事、分享知识。"},
    {"dim": "S", "scenario": "我对他人的情绪、关系比较敏感。"},
    {"dim": "S", "scenario": "我愿意倾听他人倾诉并给建议。"},
    {"dim": "S", "scenario": "我喜欢团队合作胜过单打独斗。"},
    {"dim": "S", "scenario": "我愿意做医生、教师、咨询、社工类工作。"},
    {"dim": "S", "scenario": "我关心社会议题并愿意参与讨论。"},
    {"dim": "S", "scenario": "我觉得为他人服务是有意义的事。"},

    # E 企业型
    {"dim": "E", "scenario": "我喜欢领导团队完成目标、做出决策。"},
    {"dim": "E", "scenario": "我喜欢说服、影响他人接受我的想法。"},
    {"dim": "E", "scenario": "我有强烈的好胜心和进取心。"},
    {"dim": "E", "scenario": "我敢于决策并愿意承担相应风险。"},
    {"dim": "E", "scenario": "我愿意从事商业、销售、管理类工作。"},
    {"dim": "E", "scenario": "我享受竞争性、有挑战的环境。"},
    {"dim": "E", "scenario": "我追求成就感、影响力和社会地位。"},
    {"dim": "E", "scenario": "我喜欢制定计划并推动他人执行。"},
    {"dim": "E", "scenario": "我擅长说服别人接受我的观点。"},
    {"dim": "E", "scenario": "我愿意做创业者、管理者、销售或律师。"},

    # C 常规型
    {"dim": "C", "scenario": "我喜欢有明确规则和流程的工作。"},
    {"dim": "C", "scenario": "我喜欢整理、归档、记录信息。"},
    {"dim": "C", "scenario": "我做事仔细、有条理、喜欢清单和表格。"},
    {"dim": "C", "scenario": "我喜欢按部就班的常规任务。"},
    {"dim": "C", "scenario": "我对数字、日期、数据敏感。"},
    {"dim": "C", "scenario": "我喜欢做表格、文档、行政事务类工作。"},
    {"dim": "C", "scenario": "我愿意做会计、文员、秘书、档案员类工作。"},
    {"dim": "C", "scenario": "我注重细节和准确性，不喜欢出错。"},
    {"dim": "C", "scenario": "我偏好稳定、可预测的工作节奏。"},
    {"dim": "C", "scenario": "我喜欢在结构化、有规范的环境中工作。"},
]


# ============ 评分与匹配逻辑 ============
# 用户答完 60 题：每题 喜欢=2 / 中立=1 / 不喜欢=0
# reverse=1 时反向：喜欢=0, 中立=1, 不喜欢=2
# 6 维度各 0-20 分 → 取 Top3 字母得 RIASEC 代码 → 与岗位 holland_code 匹配

DIM_LABELS = {
    "R": ("现实型", "动手/操作/机械"),
    "I": ("研究型", "分析/思考/研究"),
    "A": ("艺术型", "创造/表达/艺术"),
    "S": ("社会型", "帮助/人际/教学"),
    "E": ("企业型", "领导/说服/销售"),
    "C": ("常规型", "组织/数据/规则"),
}


def score_holland(answers):
    """
    answers: list of 60 integers, each 0/1/2 (不喜欢/中立/喜欢)
    return: {R,I,A,S,E,C:{score:0-20,pct:0-100}, code:"RIA", top3:[('R',score),...]}
    """
    if len(answers) != len(HOLLAND_QUESTIONS):
        raise ValueError("expect 60 answers, got %d" % len(answers))
    bucket = {d: 0 for d in "RIASEC"}
    for i, a in enumerate(answers):
        a = int(a)
        if a < 0 or a > 2:
            a = 1
        q = HOLLAND_QUESTIONS[i]
        d = q["dim"]
        # 当前题都是正向（高分=喜欢该维度），不分 reverse
        bucket[d] += a
    # 每维 10 题 × 2 = 满分 20
    pct = {d: round(bucket[d] / 20 * 100) for d in bucket}
    sorted_dims = sorted(bucket.items(), key=lambda x: x[1], reverse=True)
    top3 = sorted_dims[:3]
    code = "".join(d for d, _ in top3)
    return {"scores": bucket, "pct": pct, "code": code, "top3": top3}


def match_positions(user_code, positions):
    """
    用户 Holland 代码（Top3 字母按分数序，如 "EIS"）
    岗位 holland_code（任意长度，按出现序）
    匹配 = 用户代码中与岗位代码重合的字母数 / 岗位代码长度（0-100）
    """
    user_set = set(user_code)
    recs = []
    for p in positions:
        pcode = p.get("holland_code", "") or ""
        if not pcode:
            continue
        hit = sum(1 for ch in pcode if ch in user_set)
        ratio = hit / len(pcode) if pcode else 0
        score = round(ratio * 100)
        # 顺序加权：与用户 Top3 顺序一致再额外 +5（最多 100）
        order_bonus = 0
        for i, ch in enumerate(user_code):
            if i < len(pcode) and pcode[i] == ch:
                order_bonus += 3
        score = min(100, score + order_bonus)
        recs.append({
            "id": p["id"],
            "name": p["name"],
            "line": p.get("line", ""),
            "holland_code": pcode,
            "match": score,
            "reason": reason_text(pcode, hit, score),
        })
    recs.sort(key=lambda x: x["match"], reverse=True)
    return recs


def reason_text(pcode, hit, score):
    if score >= 80:
        return "高度匹配 · 你的兴趣方向与该岗位核心适配维度高度重合"
    if score >= 60:
        return "较匹配 · 大方向一致，可进一步看 JD 与情景测评"
    if score >= 40:
        return "需谨慎 · 有部分重合，但岗位核心能力可能与你的偏好有差距"
    return "大概率不合适 · 该岗位核心兴趣维度与你的画像偏差较大"


# ============ DB 初始化 ============
def init(append=False):
    mode = "append" if append else "rebuild"
    print(f"[init_db] {mode} DB: {DB_PATH}")
    if not append and os.path.exists(DB_PATH):
        os.remove(DB_PATH)
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    # ---- 1. positions 表 ----
    c.execute("""
    CREATE TABLE IF NOT EXISTS positions (
        id              TEXT PRIMARY KEY,
        name            TEXT NOT NULL,
        line            TEXT,
        jd              TEXT,
        fit_for         TEXT,    -- JSON 数组
        hard_skills     TEXT,    -- JSON 数组
        soft_skills     TEXT,    -- JSON 数组
        industry_notes  TEXT,    -- JSON 对象
        taboos          TEXT,    -- JSON 数组
        holland_code    TEXT,    -- 如 "EI" / "RIA"
        updated_at      INTEGER
    )""")

    # ---- 2. holland_questions 表 ----
    c.execute("""
    CREATE TABLE IF NOT EXISTS holland_questions (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        idx         INTEGER,        -- 1..60
        scenario    TEXT NOT NULL,
        dimension   TEXT NOT NULL,  -- R/I/A/S/E/C
        reverse     INTEGER DEFAULT 0
    )""")

    # ---- 3. submissions 表（用户提交的测试结果） ----
    c.execute("""
    CREATE TABLE IF NOT EXISTS submissions (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        type        TEXT,           -- 'holland' / 'position' / 'pressure'
        user_code   TEXT,           -- 可选：浏览器指纹或匿名 ID
        payload     TEXT,           -- JSON
        result      TEXT,           -- JSON
        ts          INTEGER
    )""")

    c.execute("CREATE INDEX IF NOT EXISTS idx_submissions_type_ts ON submissions(type, ts)")
    c.execute("CREATE INDEX IF NOT EXISTS idx_holland_dim ON holland_questions(dimension)")

    # ---- 4. 导入 6 岗基础信息 ----
    import time
    now = int(time.time())
    if not append:
        c.execute("DELETE FROM positions")
    for p in POSITIONS:
        c.execute("""
        INSERT OR REPLACE INTO positions
            (id, name, line, jd, fit_for, hard_skills, soft_skills, industry_notes, taboos, holland_code, updated_at)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)""",
            (p["id"], p["name"], p["line"], p["jd"],
             json.dumps(p["fit_for"], ensure_ascii=False),
             json.dumps(p["hard_skills"], ensure_ascii=False),
             json.dumps(p["soft_skills"], ensure_ascii=False),
             json.dumps(p["industry_notes"], ensure_ascii=False),
             json.dumps(p["taboos"], ensure_ascii=False),
             p["holland_code"], now))

    # ---- 5. 导入 60 道 Holland 题 ----
    if not append:
        c.execute("DELETE FROM holland_questions")
    for i, q in enumerate(HOLLAND_QUESTIONS, 1):
        c.execute("""INSERT OR REPLACE INTO holland_questions (idx, scenario, dimension, reverse)
                     VALUES (?,?,?,?)""", (i, q["scenario"], q["dim"], q.get("reverse", 0)))

    conn.commit()
    conn.close()
    print(f"[init_db] OK {len(POSITIONS)} 岗基础信息 + 60 道 Holland 题已写入")
    print(f"[init_db] 库位置：{DB_PATH}")


def show():
    if not os.path.exists(DB_PATH):
        print("数据库不存在：", DB_PATH)
        return
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    print("=== positions ===")
    for r in c.execute("SELECT id, name, holland_code FROM positions ORDER BY id"):
        print("  %-6s %-12s holland=%s" % r)
    print("=== holland_questions (per dim) ===")
    for r in c.execute("SELECT dimension, COUNT(*) FROM holland_questions GROUP BY dimension ORDER BY dimension"):
        print("  %s: %d 题" % r)
    print("=== submissions ===")
    for r in c.execute("SELECT type, COUNT(*), MAX(ts) FROM submissions GROUP BY type"):
        print("  %s: %d 条 (最近 ts=%s)" % r)
    conn.close()


if __name__ == "__main__":
    args = sys.argv[1:]
    if "--show" in args:
        show()
    elif "--append" in args:
        init(append=True)
    else:
        init(append=False)
