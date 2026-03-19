import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string; // 用于生成 Canonical 规范链接
  keywords?: string;
  image?: string; // 社交媒体分享大图
  jsonLd?: Record<string, any>; // 用于结构化数据的 JSON-LD 对象
}

export function useSEO({ title, description, path, keywords, image, jsonLd }: SEOProps) {
  useEffect(() => {
    // 1. 更新网页标题
    document.title = title;

    // 辅助函数：动态更新或创建 Meta 标签
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // 辅助函数：安全移除 Meta 标签
    const removeElement = (selector: string) => {
      const element = document.querySelector(selector);
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };

    // 2. 更新基础 Meta 标签
    setMetaTag('name', 'description', description);
    
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    } else {
      removeElement('meta[name="keywords"]');
    }

    // 3. 更新 Open Graph (OG) 协议标签，优化社交媒体分享卡片
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'AirBit');
    if (image) {
      setMetaTag('property', 'og:image', image);
    } else {
      removeElement('meta[property="og:image"]');
    }
    
    // 补充 Twitter Card 标签
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    if (image) {
      setMetaTag('name', 'twitter:image', image);
    } else {
      removeElement('meta[name="twitter:image"]');
    }

    // 4. 更新 Canonical 规范链接，防止产生重复内容导致权重分散
    if (path !== undefined) {
      const baseUrl = 'https://www.tlin.cn'; // 请根据实际主域名修改
      const canonicalUrl = `${baseUrl}${path}`;
      
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
      setMetaTag('property', 'og:url', canonicalUrl);
    } else {
      removeElement('link[rel="canonical"]');
      removeElement('meta[property="og:url"]');
    }

    // 5. 注入 JSON-LD 结构化数据，增强搜索引擎展现（如富媒体搜索结果）
    const scriptId = 'seo-json-ld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      // 将传入的 JSON 对象转为字符串并注入到 script 标签内
      scriptElement.text = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      // 切换页面时，如果没有传 jsonLd，则清理之前的结构化数据
      scriptElement.remove();
    }

    // 6. 触发 SSG（静态预渲染）的就绪事件
    setTimeout(() => {
      document.dispatchEvent(new Event('custom-render-trigger'));
      // 兼容部分基于 window.snapSaveState 的 react-snap 配置
      if (typeof window !== 'undefined' && (window as any).snapSaveState) {
        (window as any).snapSaveState();
      }
    }, 100);

  }, [title, description, path, keywords, image, jsonLd]);
}
