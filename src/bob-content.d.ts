import '@bob-translate/types';

declare module '@bob-translate/types' {
  interface TextTranslateResult {
    // 1.1.0 类型包尚未声明 Bob 1.21+ 的 content；旧版仍需 toParagraphs。
    content?: {
      format: 'plain' | 'markdown' | 'lines';
      text: string;
    };
  }
}
