import { RotateCw, HardDrive, Globe, Network, Users, AlertCircle, Clock, Shield } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '11:53', up: 300, down: 200 },
  { time: '12:00', up: 900, down: 300 },
  { time: '12:05', up: 200, down: 500 },
  { time: '12:11', up: 500, down: 200 },
  { time: '12:15', up: 100, down: 100 },
  { time: '12:29', up: 50, down: 50 },
  { time: '13:00', up: 40, down: 40 },
  { time: '14:00', up: 30, down: 30 },
  { time: '15:00', up: 20, down: 20 },
  { time: '16:00', up: 10, down: 10 },
  { time: '17:22', up: 5, down: 5 },
];

export function HeroDashboard() {
  return (
    <div className="w-full h-full bg-[#FAFAFA] rounded-2xl border border-black/5 p-6 overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#1D1D1F]">Dashboard</h2>
        <button className="p-2 rounded-lg hover:bg-black/5 transition-colors text-[#86868B]">
          <RotateCw className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
        {/* Top Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard 
            title="应用总数" 
            value="11" 
            sub="今日活跃应用: 1" 
            icon={<HardDrive className="w-4 h-4" />} 
          />
          <StatCard 
            title="注册服务" 
            value="15" 
            sub="手动注册 13  服务发现 2" 
            icon={<Globe className="w-4 h-4" />} 
            subIcon={true}
          />
          <StatCard 
            title="端点总数" 
            value="13" 
            sub="运行中 12  开发中 1" 
            icon={<Network className="w-4 h-4" />} 
          />
          <StatCard 
            title="消费者总数" 
            value="3" 
            sub="今日活跃消费者: 1" 
            icon={<Users className="w-4 h-4" />} 
          />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-12 gap-4 h-[280px]">
          {/* Requests Card */}
          <div className="col-span-4 bg-white rounded-xl p-5 border border-black/5 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[#1D1D1F]">请求量</span>
              <span className="text-[#86868B]"><ActivityIcon /></span>
            </div>
            <div className="text-3xl font-bold text-[#1D1D1F] mb-1">315</div>
            <div className="text-xs text-[#86868B] mb-4">今日总请求数</div>
            <div className="text-xs text-[#10B981] font-medium mb-6">↗ +315 (+100.0%) 较昨日</div>
            
            <div className="mt-auto">
              <div className="text-xs text-[#86868B] mb-2 uppercase tracking-wide">Top 5 端点</div>
              <div className="flex justify-between items-center text-xs">
                 <span className="text-[#1D1D1F] truncate mr-2">1. /mcp-test/mysql-mcp/*</span>
                 <span className="font-mono text-[#1D1D1F]">315</span>
              </div>
            </div>
          </div>

          {/* Traffic Chart Card */}
          <div className="col-span-8 bg-white rounded-xl p-5 border border-black/5 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold text-[#1D1D1F]">流量 (上行 / 下行)</span>
            </div>
            <div className="w-full h-[160px] min-h-[160px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0071E3" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0071E3" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5EA" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#86868B' }} 
                    interval={2}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#86868B' }} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontSize: '12px' }}
                    labelStyle={{ fontSize: '12px', color: '#86868B', marginBottom: '4px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="up" 
                    stroke="#0071E3" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorUp)" 
                    name="上行"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="down" 
                    stroke="#60A5FA" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorDown)" 
                    name="下行"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#0071E3]"></div>
                <span className="text-[10px] text-[#86868B]">上行</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#60A5FA]"></div>
                <span className="text-[10px] text-[#86868B]">下行</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <MetricCard 
            title="错误率" 
            value="31.14%" 
            sub="今日错误率"
            breakdown={
              <div className="flex gap-3 text-[10px] mt-1">
                <span className="flex items-center gap-1 text-[#F59E0B]"><span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span> 4xx 31.14%</span>
                <span className="flex items-center gap-1 text-[#EF4444]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></span> 5xx 0.00%</span>
              </div>
            }
            topEndpoint={{ name: "1. /mcp-test/mysql-mcp/*", value: "94 (31.1%)" }}
            icon={<AlertCircle className="w-4 h-4 text-[#86868B]" />}
          />
          <MetricCard 
            title="延迟" 
            value="13.57ms" 
            sub="今日平均延迟"
            extraSub="P50: 2.50ms / P95: 17.56ms / P99: 42.59ms"
            topEndpoint={{ name: "1. /mcp-test/mysql-mcp/*", value: "13.57ms (P95: 17.56ms)" }}
            icon={<Clock className="w-4 h-4 text-[#86868B]" />}
          />
          <MetricCard 
            title="拦截次数" 
            value="82" 
            sub="今日拦截次数"
            extraSub="鉴权失败: 82  限流命中: 0  黑名单命中: 0"
            topEndpoint={{ name: "1. mysql-mcp", value: "82" }}
            icon={<Shield className="w-4 h-4 text-[#86868B]" />}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, sub, icon, subIcon = false }: { title: string, value: string, sub: string, icon: React.ReactNode, subIcon?: boolean }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-black/5 shadow-sm flex flex-col justify-between h-[100px]">
      <div className="flex justify-between items-start">
        <span className="text-xs font-semibold text-[#1D1D1F]">{title}</span>
        <span className="text-[#86868B]">{icon}</span>
      </div>
      <div>
        <div className="text-2xl font-bold text-[#1D1D1F] mb-1">{value}</div>
        <div className="text-[10px] text-[#86868B] truncate flex items-center gap-2">
          {subIcon && <RotateCw className="w-3 h-3" />}
          {sub}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, sub, breakdown, topEndpoint, icon, extraSub }: any) {
  return (
    <div className="bg-white rounded-xl p-5 border border-black/5 shadow-sm flex flex-col h-[180px]">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-[#1D1D1F]">{title}</span>
        <span>{icon}</span>
      </div>
      <div className="text-3xl font-bold text-[#1D1D1F] mb-1">{value}</div>
      <div className="text-xs text-[#86868B] mb-1">{sub}</div>
      {breakdown}
      {extraSub && <div className="text-[10px] text-[#86868B] mt-1 truncate">{extraSub}</div>}
      
      <div className="mt-auto border-t border-[#F5F5F7] pt-3">
        <div className="text-[10px] text-[#86868B] mb-1 uppercase tracking-wide">Top 5 端点</div>
        <div className="flex justify-between items-center text-[10px]">
            <span className="text-[#1D1D1F] truncate mr-2 max-w-[140px]">{topEndpoint.name}</span>
            <span className="font-mono text-[#1D1D1F]">{topEndpoint.value}</span>
        </div>
      </div>
    </div>
  );
}

function ActivityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  );
}
