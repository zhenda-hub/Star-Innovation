export const site = {
  name: "星动科技",
  enName: "Star Innovation",
  tagline: "连接全球市场，驱动品牌增长",
  description:
    "星动科技聚焦外贸、自媒体与美容医疗三大业务板块，以数据、内容和全球协作能力，帮助企业建立更可持续的增长方式。",
  email: "hello@starinnovation.cn",
  phone: "+86 400-000-0000",
  address: "中国 · 杭州",
  beian: "",
  copyright: "© 2026 星动科技 Star Innovation. 保留所有权利。",
};

export type BusinessAccent = "export" | "media" | "beauty";
export type IconName =
  | "globe"
  | "video"
  | "heart"
  | "arrow-right"
  | "check"
  | "menu"
  | "close"
  | "sun"
  | "moon"
  | "mail"
  | "phone"
  | "map-pin"
  | "star"
  | "target"
  | "layers"
  | "send"
  | "clock"
  | "sparkles"
  | "users"
  | "chart"
  | "shield"
  | "trending-up";

export type Business = {
  slug: string;
  href: string;
  title: string;
  navTitle: string;
  tagline: string;
  summary: string;
  description: string;
  icon: IconName;
  accent: BusinessAccent;
  capabilities: { title: string; description: string }[];
  process: { title: string; description: string }[];
};

export const businesses: Business[] = [
  {
    slug: "foreign-trade",
    href: "/foreign-trade/",
    title: "外贸服务",
    navTitle: "外贸",
    tagline: "一站式海外市场拓展",
    summary:
      "从海外市场调研到订单交付，帮助中国企业更稳定、更高效地进入全球市场。",
    description:
      "面向制造、贸易与出海品牌，提供海外市场调研、客户开发、供应链协同与合规物流支持，形成可复用的外贸协作流程。",
    icon: "globe",
    accent: "export",
    capabilities: [
      {
        title: "市场与客户调研",
        description: "梳理目标市场、竞品格局、渠道结构与客户画像，形成进入策略。",
      },
      {
        title: "采购与供应商协同",
        description: "匹配产品与供应链资源，支持样品、报价、验厂和订单排产跟进。",
      },
      {
        title: "物流与合规支持",
        description: "协同处理贸易条款、单证、通关、物流与风险节点，减少交付阻力。",
      },
      {
        title: "海外渠道对接",
        description: "连接平台、经销、代理与项目客户资源，沉淀可持续的海外订单渠道。",
      },
    ],
    process: [
      {
        title: "需求梳理",
        description: "确认产品、目标市场、交付标准与预算范围。",
      },
      {
        title: "方案报价",
        description: "输出市场进入建议、供应链匹配方案与合作报价。",
      },
      {
        title: "执行交付",
        description: "围绕订单、样品、生产、物流与单证推进执行。",
      },
      {
        title: "复盘优化",
        description: "沉淀客户、渠道与交付数据，迭代下一阶段增长动作。",
      },
    ],
  },
  {
    slug: "self-media",
    href: "/self-media/",
    title: "自媒体服务",
    navTitle: "自媒体",
    tagline: "内容策划与账号运营增长",
    summary:
      "以内容资产为起点，连接选题、制作、分发与复盘，让内容沉淀为获客与转化能力。",
    description:
      "服务品牌、企业与个人 IP，围绕账号定位、内容策划、制作分发与数据分析，建设可持续的内容增长体系。",
    icon: "video",
    accent: "media",
    capabilities: [
      {
        title: "账号与 IP 定位",
        description: "结合业务目标与受众特征，确定内容方向、人设表达与内容结构。",
      },
      {
        title: "内容策划与制作",
        description: "覆盖选题库、脚本、拍摄、剪辑与封面物料，形成稳定产出节奏。",
      },
      {
        title: "平台运营与分发",
        description: "围绕平台规则优化发布、互动、账号主页与关键词内容。",
      },
      {
        title: "数据复盘与迭代",
        description: "跟踪流量、留存与转化数据，调整内容策略与投放协作。",
      },
    ],
    process: [
      {
        title: "目标对齐",
        description: "明确内容目标、目标人群与可衡量的成果指标。",
      },
      {
        title: "内容方案",
        description: "制定账号定位、内容栏目、选题计划与制作排期。",
      },
      {
        title: "制作发布",
        description: "按计划完成内容制作、审核、发布与互动维护。",
      },
      {
        title: "复盘迭代",
        description: "汇总数据表现，沉淀有效选题与内容模板。",
      },
    ],
  },
  {
    slug: "beauty-medical",
    href: "/beauty-medical/",
    title: "美容医疗",
    navTitle: "美容医疗",
    tagline: "医美机构数字化运营",
    summary:
      "面向美容医疗机构与品牌，提供项目咨询、内容建设、渠道运营与客户管理服务。",
    description:
      "围绕专业信任与服务体验，帮助美容医疗品牌与机构建立更完整的数字化运营体系，形成可追踪的成长路径。",
    icon: "heart",
    accent: "beauty",
    capabilities: [
      {
        title: "项目与品牌定位",
        description: "梳理服务项目、目标人群、差异化优势与机构表达体系。",
      },
      {
        title: "内容与信任建设",
        description: "建设科普、案例、医生与专家内容与 FAQ，降低用户决策成本。",
      },
      {
        title: "渠道与线索运营",
        description: "协同平台内容、私域沟通、活动转化与线索跟进。",
      },
      {
        title: "客户体验与复购",
        description: "设计咨询、预约、到店、回访与会员维护流程。",
      },
    ],
    process: [
      {
        title: "诊断梳理",
        description: "了解机构定位、项目结构、获客渠道与现有运营资产。",
      },
      {
        title: "方案设计",
        description: "输出内容、渠道、客户流程与阶段目标。",
      },
      {
        title: "协同执行",
        description: "按计划推进内容、活动、私域与跟进机制。",
      },
      {
        title: "复盘升级",
        description: "用数据优化线索、到店、复购与口碑链路。",
      },
    ],
  },
];

/** 板块强调色 → Tailwind 类名映射 */
export const accentClasses: Record<
  BusinessAccent,
  { text: string; bg: string; soft: string; border: string; gradient: string }
> = {
  export: {
    text: "text-export",
    bg: "bg-export",
    soft: "bg-export-soft text-export-strong",
    border: "border-export",
    gradient: "from-export to-export-strong",
  },
  media: {
    text: "text-media",
    bg: "bg-media",
    soft: "bg-media-soft text-media-strong",
    border: "border-media",
    gradient: "from-media to-media-strong",
  },
  beauty: {
    text: "text-beauty",
    bg: "bg-beauty",
    soft: "bg-beauty-soft text-beauty-strong",
    border: "border-beauty",
    gradient: "from-beauty to-beauty-strong",
  },
};
