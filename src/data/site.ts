export const site = {
  name: "星动科技",
  enName: "Star Innovation",
  tagline: "连接全球市场，驱动品牌增长",
  description:
    "星动科技聚焦外贸、软件开发与美容医疗三大业务板块，以数据、内容和全球协作能力，帮助企业建立更可持续的增长方式。",
  email: "msoft77564532@outlook.com",
  phone: "+86 151-3537-6773",
  address: "中国 · 北京",
  beian: "",
  copyright: "© 2026 星动科技 Star Innovation. 保留所有权利。",
};

export type BusinessAccent = "export" | "software" | "beauty";
export type IconName =
  | "globe"
  | "code"
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
    slug: "software",
    href: "/software/",
    title: "软件开发",
    navTitle: "软件开发",
    tagline: "从需求到上线的定制开发",
    summary:
      "面向企业与品牌，提供网站、小程序、业务系统与自动化工具的定制开发服务。",
    description:
      "围绕业务场景与真实使用流程，提供需求梳理、技术方案、开发交付与长期维护，让数字工具真正服务于业务增长。",
    icon: "code",
    accent: "software",
    capabilities: [
      {
        title: "需求梳理与方案设计",
        description: "结合业务目标与用户流程，输出功能清单、技术方案与迭代节奏。",
      },
      {
        title: "官网与品牌站点",
        description: "定制企业官网、落地页与品牌站点，兼顾表达、性能与 SEO。",
      },
      {
        title: "小程序与 H5 应用",
        description: "面向微信生态与移动场景，开发小程序、H5 与轻量应用。",
      },
      {
        title: "业务系统与自动化",
        description: "搭建内部系统、数据看板与自动化流程，减少重复人工，提升协作效率。",
      },
    ],
    process: [
      {
        title: "需求梳理",
        description: "明确业务目标、用户场景、功能边界与验收标准。",
      },
      {
        title: "方案设计",
        description: "输出技术架构、页面结构与开发排期，确认后进入开发。",
      },
      {
        title: "开发交付",
        description: "按迭代推进开发、测试与联调，分阶段交付可验收成果。",
      },
      {
        title: "上线维护",
        description: "完成部署上线，提供维护、迭代与数据复盘支持。",
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
  software: {
    text: "text-software",
    bg: "bg-software",
    soft: "bg-software-soft text-software-strong",
    border: "border-software",
    gradient: "from-software to-software-strong",
  },
  beauty: {
    text: "text-beauty",
    bg: "bg-beauty",
    soft: "bg-beauty-soft text-beauty-strong",
    border: "border-beauty",
    gradient: "from-beauty to-beauty-strong",
  },
};
