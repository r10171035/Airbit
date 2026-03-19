import { motion } from 'motion/react';
import { 
  ShieldAlert, Coins, Unplug, FileSearch, 
  Zap, ShieldCheck, Activity, Cpu, 
  Lock, Network, Search, ArrowRight, 
  MessageSquare, Briefcase, BarChart3, HelpCircle, User
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSEO } from '../hooks/useSEO';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            全新发布 AirBit Portal
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-[#1D1D1F]">
            AirBit Portal<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071E3] to-[#42A5F5]">企业级 AI 业务统一门户</span>
          </h1>
          <p className="text-xl text-[#86868B] leading-relaxed mb-10 max-w-3xl mx-auto">
            告别“玩具式”大模型对话。基于全栈 AI 基础设施，为您的企业打造安全、受控、直连业务的超级智能体交互中心。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#005bb5] transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
              申请专属演示 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5E5] font-medium hover:bg-[#F5F5F7] transition-all transform hover:scale-105 shadow-sm flex items-center justify-center gap-2">
              获取架构白皮书
            </button>
          </div>
        </motion.div>

        {/* Social Proof / Logo Wall */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="border-t border-[#F5F5F7] pt-10 mt-10"
        >
          <p className="text-sm text-[#86868B] mb-8 uppercase tracking-widest font-medium">无缝兼容并连接主流模型与企业系统</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mocking logos with text for now, could use SVG if available */}
            <div className="text-xl font-bold font-sans tracking-tighter">OpenAI</div>
            <div className="text-xl font-bold font-serif tracking-tight text-blue-800">Azure</div>
            <div className="text-xl font-bold font-sans tracking-wide">通义千问</div>
            <div className="text-2xl font-black font-sans tracking-tighter text-blue-600">SAP</div>
            <div className="text-xl font-bold font-sans tracking-widest text-blue-400">钉钉</div>
            <div className="text-xl font-semibold font-mono tracking-tight">内部 ERP</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const painPoints = [
  {
    icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
    title: "合规形同虚设",
    desc: "AI 安全完全依赖模型自觉，员工极易诱导模型泄露内部财务数据或敏感客户信息。"
  },
  {
    icon: <Coins className="w-6 h-6 text-orange-500" />,
    title: "成本黑洞显现",
    desc: "月底 API 账单惊人，却无法清晰追溯哪一个部门、哪一个业务模块消耗了最多的 Token���"
  },
  {
    icon: <Unplug className="w-6 h-6 text-gray-500" />,
    title: "业务系统割裂",
    desc: "大模型只是一个“孤岛知识库”，无法直接操作系统帮员工发起审批、查阅报表或修改工单。"
  },
  {
    icon: <FileSearch className="w-6 h-6 text-purple-500" />,
    title: "问责机制缺失",
    desc: "模型一旦出现严重“幻觉”导致业务决策失误，毫无日志可查，彻底沦为黑盒。"
  }
];

function PainPoints() {
  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1D1D1F]">为什么企业不敢轻易落地大模型？</h2>
          <p className="text-lg text-[#86868B]">直击企业在走向生产环境时遇到的四大鸿沟</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1D1D1F]">{point.title}</h3>
              <p className="text-[#86868B] leading-relaxed text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const coreValues = [
  {
    icon: <Zap className="w-8 h-8 text-[#0071E3]" />,
    title: "零侵入，秒级接入生产系统",
    desc: "无需业务团队重写海量代码。底层引擎将现有的 REST、gRPC 以及老旧系统接口直接“虚拟化”为大模型可调用的专属工具。"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#0071E3]" />,
    title: "铁腕合规，捍卫数据绝对安全",
    desc: "每一次对话都必须经过企业预设的“安全护栏”。从拦截越狱攻击到自动脱敏身份证号等 PII 数据，确保每一句话都在制度框架内。"
  },
  {
    icon: <Activity className="w-8 h-8 text-[#0071E3]" />,
    title: "全息审计，让 AI 的思考透明化",
    desc: "内置应用性能管理平台。每一次提问背后的检索链路、文档来源、提示词版本和 Token 花费，全部清晰记录，实现 100% 审计追责。"
  }
];

function CoreValue() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1D1D1F]">看似极简对话，实则全能中枢</h2>
          <p className="text-lg text-[#86868B]">AirBit Portal 不是一个简单的聊天框，而是企业大模型的“方向盘”和“刹车片”。</p>
        </div>
        <div className="space-y-12">
          {coreValues.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-[#F5F5F7] p-8 lg:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                {val.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[#1D1D1F]">{val.title}</h3>
                <p className="text-[#86868B] leading-relaxed text-lg">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const engines = [
  {
    name: "AI Gateway (流量与成本管家)",
    desc: "统一纳管多厂商模型，利用语义缓存技术（Semantic Caching）拦截重复提问，将 API 成本大幅降低 30%-50%，响应速度提升至毫秒级。",
    icon: <Network className="w-6 h-6" />
  },
  {
    name: "Guardrails (规则引擎)",
    desc: "可编程的状态机护栏，强制大模型遵循企业审批流与合规逻辑，不再任由模型自由发挥。",
    icon: <Lock className="w-6 h-6" />
  },
  {
    name: "MCP Gateway (集成枢纽)",
    desc: "AI 时代的 Service Mesh，为智能体提供安全隔离的调用环境，将非标准系统桥接为标准化智能工具。",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    name: "AIO (可观测与评估)",
    desc: "将提示词管理与全链路监控解耦，支持热更新与 A/B 测试，让 AI 具备真正的可运维性。",
    icon: <Search className="w-6 h-6" />
  }
];

function EngineMatrix() {
  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1D1D1F]">AirBit 矩阵的强大驱动力</h2>
          <p className="text-lg text-[#86868B]">向技术决策者展示 Portal 背后的硬核技术支撑</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {engines.map((eng, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] group-hover:scale-110 transition-transform">
                  {eng.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F]">{eng.name}</h3>
              </div>
              <p className="text-[#86868B] leading-relaxed">{eng.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    title: "场景 1：自然语言 OA 审批",
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    desc: "Portal 自动提取发票信息，调用后台财务接口创建单据，并将审批流推送给主管跟进，缩短 80% 碎片化操作时间。",
    mockPrompt: "帮我报销去北京的机票，附图。",
    mockResponse: "已识别您的机票发票（金额：¥1,200）。单据 [OA-2023-401] 已在系统中创建，并推送至您的部门主管【张经理】审批。",
    tool: "OA 报销接口"
  },
  {
    title: "场景 2：数据隔离的对话式 BI",
    icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
    desc: "严格结合 IAM 身份权限，Portal 动态生成���视化图表。确保高管看全局，区域经理看局部，防止越权查询。",
    mockPrompt: "对比华南和华北上季度的利润率。",
    mockResponse: "为您生成 Q3 利润率对比图。华南区利润率为 18.2%，华北区利润率为 15.4%。[点击查看详细图表]",
    tool: "BI 数据查询工具"
  },
  {
    title: "场景 3：零幻觉的智能客服外脑",
    icon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
    desc: "不仅给出答案，还会精确附带内部知识库的文档溯源链接。如果查无此据，安全机制会强制 AI 礼貌拒答，彻底杜绝编造事实。",
    mockPrompt: "我们最新产品的保修条款是什么？",
    mockResponse: "根据《2023 硬件产品保修手册 v2.1》，最新产品提供 3 年有限保修。人为损坏不在保修范围内。[来源：内部知识库 Doc#402]",
    tool: "企业知识库 RAG"
  }
];

function Scenarios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1D1D1F]">将 AI 转化为现实生产力</h2>
          <p className="text-lg text-[#86868B]">在实际业务中释放大模型的潜能</p>
        </div>
        
        <div className="space-y-16">
          {scenarios.map((scene, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Side */}
              <div className={cn("order-2", idx % 2 !== 0 ? "lg:order-1" : "lg:order-2")}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                    {scene.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F]">{scene.title}</h3>
                </div>
                <p className="text-lg text-[#86868B] leading-relaxed mb-6">{scene.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F5F5F7] text-sm text-[#1D1D1F] font-medium border border-gray-200">
                  <Activity className="w-4 h-4 text-green-500" />
                  调用工具: {scene.tool}
                </div>
              </div>
              
              {/* Mockup Side */}
              <div className={cn("order-1 bg-[#F5F5F7] p-6 lg:p-8 rounded-3xl border border-gray-100", idx % 2 !== 0 ? "lg:order-2" : "lg:order-1")}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[320px]">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-500">AirBit Portal</div>
                  </div>
                  {/* Chat Area */}
                  <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
                    {/* User Message */}
                    <div className="flex items-start gap-3 self-end flex-row-reverse max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-[#0071E3] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm shadow-sm leading-relaxed">
                        {scene.mockPrompt}
                      </div>
                    </div>
                    {/* AI Message */}
                    <div className="flex items-start gap-3 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-[#F5F5F7] text-[#1D1D1F] px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-gray-100 leading-relaxed">
                        {scene.mockResponse}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight text-[#1D1D1F]">开启企业 AI 进化</h2>
        <p className="text-xl text-[#86868B] mb-10 leading-relaxed">
          让 AI 懂规矩、知边界、能干活。AirBit Portal，企业拥抱大模型的最后一块拼图。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0071E3] text-white font-medium hover:bg-[#005bb5] transition-all transform hover:scale-105 shadow-md">
            预约产品演示
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5E5] font-medium hover:bg-[#F5F5F7] transition-all transform hover:scale-105 shadow-sm">
            定制企业专属接入方案
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-[#86868B] bg-white w-max mx-auto px-4 py-2 rounded-full border border-[#E5E5EA]">
          <ShieldCheck className="w-4 h-4 text-[#0071E3]" /> 
          支持完全私有化部署，数据 100% 不出内网
        </div>
      </div>
    </section>
  );
}

export function AirBitPortalPage() {
  useSEO({
    title: 'AirBit Portal - 企业级 AI 业务统一门户 | AirBit',
    description: '告别“玩具式”大模型对话。基于全栈 AI 基础设施，为您的企业打造安全、受控、直连业务的超级智能体交互中心。',
    path: '/airbit-portal',
    keywords: 'AirBit Portal, AI 企业门户, AI 网关, 企业大模型, 智能体交互中心, AI 安全护栏, 企业 AI 落地',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop', // 占位的一张抽象高级感科技配图，您可以换成官方物料
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AirBit Portal",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "企业级 AI 业务统一门户。基于全栈 AI 基础设施，为您的企业打造安全、受控、直连业务的超级智能体交互中心。",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CNY"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AirBit"
      }
    }
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0071E3] selection:text-white">
      <Hero />
      <PainPoints />
      <CoreValue />
      <EngineMatrix />
      <Scenarios />
      <CTA />
    </div>
  );
}
