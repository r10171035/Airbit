import { Github, Twitter, Linkedin, Facebook, Slack, Mail } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import airbitLogo from "figma:asset/6c3502d5632d717131854fb34b945b3865ccc98f.png";

function WeChat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.691 14.137c-.636 0-1.22-.102-1.745-.286L5.33 15.006l.542-1.742c-1.127-.852-1.807-2.022-1.807-3.325 0-2.454 2.379-4.444 5.312-4.444 2.934 0 5.312 1.99 5.312 4.444 0 2.454-2.378 4.444-5.312 4.444zm9.352-2.585c-.476 0-.94.056-1.38.158.12.443.185.908.185 1.39 0 2.937-2.618 5.317-5.848 5.317-.463 0-.91-.05-1.341-.143-1.037.98-2.428 1.638-3.966 1.776.417.848 1.442 1.488 2.677 1.488 1.096 0 2.067-.5 2.766-1.27l2.67 1.365-.776-2.19c1.699-1.002 2.77-2.607 2.77-4.385 0-1.872-1.187-3.546-3.056-4.43-.284.288-.475.602-.697.924z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-20 pb-12 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
               <ImageWithFallback 
                 src={airbitLogo} 
                 alt="AirBit Logo" 
                 className="w-8 h-8 object-contain" 
               />
               <span className="text-2xl font-bold text-[#1D1D1F] tracking-tight">AirBit</span>
            </div>
            <p className="text-[#6E6E73] text-sm leading-relaxed mb-8 max-w-[280px]">
              AirBit 是一个企业级 AI 基础设施平台，致力于为企业提供安全、高效的 AI 应用落地解决方案。
            </p>
            <div className="flex items-center gap-5 text-[#86868B]">
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><Slack className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><WeChat className="w-5 h-5" /></a>
              <a href="mailto:contact@airbit.so" className="hover:text-[#1D1D1F] transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#1D1D1F] transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Products */}
            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">产品</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#/airbit-ai-gateway" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit AI Gateway</a></li>
                <li><a href="#/airbit-guardrails" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit Guardrails</a></li>
                <li><a href="#/airbit-aio" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit AIO</a></li>
                <li><a href="#/airbit-mcp-gateway" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit MCP Gateway</a></li>
                <li><a href="#/airbit-apis" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit APIs</a></li>
                <li><a href="#/airbit-eips" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">AirBit EIPs</a></li>
              </ul>
            </div>

            {/* Market */}
            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">市场</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">全部插件</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">插件包</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">第三方插件</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">金融行业</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">通用行业</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">查找伙伴</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">成为伙伴</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[#1D1D1F] font-semibold mb-6 text-sm">资料</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">文档 4.x</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">协议许可</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">公司介绍</a></li>
                <li><a href="#" className="text-[#6E6E73] hover:text-[#0071E3] transition-colors">联系我们</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#86868B]">
          <p>© 2026 AirBit. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
}
