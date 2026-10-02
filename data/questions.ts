import type { Question } from '@/types/test';

export const questions: Question[] = [
  {
    id: 'q1',
    prompt: 'AI에게 가장 많이 부탁할 것 같은 건?',
    options: [
      { text: '그냥 이것저것 물어보고 대화한다', scores: { conversation: 3, creativity: 2 } },
      { text: '글이나 문서를 작성한다', scores: { writing: 3, productivity: 2 } },
      { text: '자료를 찾고 비교한다', scores: { research: 3, reasoning: 2 } },
      { text: '코딩하고 뭔가 직접 만든다', scores: { coding: 3, agent: 2 } },
      { text: '내가 설명하면 알아서 결과물까지 만들어줬으면 좋겠다', scores: { agent: 4, productivity: 3 } },
    ],
  },
  {
    id: 'q2',
    prompt: 'AI가 나를 어떻게 대해줬으면 좋겠어?',
    options: [
      { text: '내가 전에 했던 이야기를 기억했으면 좋겠다', scores: { memory: 4, conversation: 2 } },
      { text: '군더더기 없이 정확하게 답했으면 좋겠다', scores: { concise: 3, reasoning: 2 } },
      { text: '자료를 많이 찾아서 논리적으로 알려줬으면 좋겠다', scores: { research: 3, reasoning: 3 } },
      { text: '짧게 말해도 의도를 알아서 파악했으면 좋겠다', scores: { conversation: 3, concise: 2 } },
    ],
  },
  {
    id: 'q3',
    prompt: 'AI를 사용할 때 가장 짜증나는 상황은?',
    options: [
      { text: '전에 했던 이야기를 또 설명해야 할 때', scores: { memory: 4, conversation: 2 } },
      { text: '글이 너무 AI처럼 딱딱할 때', scores: { writing: 3, creativity: 2 } },
      { text: '근거 없는 내용을 자신 있게 말할 때', scores: { reasoning: 3, research: 2 } },
      { text: '실행은 안 하고 설명만 길게 할 때', scores: { agent: 4, productivity: 2 } },
      { text: '답변이 너무 길 때', scores: { concise: 4, productivity: 2 } },
    ],
  },
  {
    id: 'q4',
    prompt: 'AI에게 일을 맡긴다면 어떤 방식이 가장 좋아?',
    options: [
      { text: '내가 계속 대화하면서 같이 수정하는 방식', scores: { conversation: 3, writing: 2 } },
      { text: '처음부터 완성도 높은 결과를 받는 방식', scores: { productivity: 3, writing: 2 } },
      { text: '자료를 충분히 조사한 뒤 결과를 받는 방식', scores: { research: 3, reasoning: 2 } },
      { text: '내가 목표만 말하면 알아서 진행하는 방식', scores: { agent: 4, productivity: 3 } },
    ],
  },
  {
    id: 'q5',
    prompt: 'AI를 주로 어디에 사용할 것 같아?',
    options: [
      { text: '일상적인 질문과 고민', scores: { conversation: 3, creativity: 2 } },
      { text: '회사 업무', scores: { productivity: 3, ecosystem: 2 } },
      { text: '문서 작성', scores: { writing: 3, concise: 2 } },
      { text: '개발', scores: { coding: 4, reasoning: 2 } },
      { text: '공부', scores: { research: 3, reasoning: 2 } },
      { text: '콘텐츠 제작', scores: { creativity: 3, multimodal: 2 } },
    ],
  },
  {
    id: 'q6',
    prompt: 'AI가 결과물을 보여줄 때 가장 마음에 드는 건?',
    options: [
      { text: '좋아, 이게 더 나아졌어. 같이 다듬자', scores: { conversation: 3, writing: 2 } },
      { text: '논리적인 근거와 구조가 깔끔한 결과', scores: { reasoning: 3, research: 2 } },
      { text: '완성도가 높은 최종본', scores: { productivity: 3, writing: 2 } },
      { text: '짧고 명확한 답변', scores: { concise: 4, productivity: 2 } },
    ],
  },
  {
    id: 'q7',
    prompt: '가장 자주 쓰는 입력 형식은?',
    options: [
      { text: '짧은 문장이나 대화 형태', scores: { conversation: 3, concise: 2 } },
      { text: '긴 글, 메모, 브리핑', scores: { writing: 3, reasoning: 2 } },
      { text: '코드, 에러 로그, 개발 문맥', scores: { coding: 4, reasoning: 2 } },
      { text: '이미지, 자료, 파일, 캡처', scores: { multimodal: 4, research: 2 } },
    ],
  },
  {
    id: 'q8',
    prompt: 'AI를 오래 쓰는 이유는 무엇인가?',
    options: [
      { text: '대화가 이어지면서 편해지기 때문', scores: { conversation: 3, memory: 3 } },
      { text: '결과의 퀄리티가 꾸준히 좋아서', scores: { productivity: 3, writing: 2 } },
      { text: '내 취향과 업무 흐름을 알아서 맞춰주기 때문', scores: { memory: 3, ecosystem: 2 } },
      { text: '여러 도구와 연동되서 편하기 때문', scores: { ecosystem: 4, productivity: 2 } },
    ],
  },
  {
    id: 'q9',
    prompt: 'AI가 한 번에 해결해줬으면 하는 일은?',
    options: [
      { text: '회의록 정리, 메모 요약', scores: { writing: 3, productivity: 2 } },
      { text: '자료 조사와 비교 정리', scores: { research: 4, reasoning: 2 } },
      { text: '웹/앱 기능을 실제로 구현해주기', scores: { coding: 4, agent: 2 } },
      { text: '아이디어를 확장해 아이템을 구상하기', scores: { creativity: 4, conversation: 2 } },
    ],
  },
  {
    id: 'q10',
    prompt: '일을 맡기기 전에 가장 중요하게 보는 건?',
    options: [
      { text: '내가 원하는 톤과 말투를 잘 맞춰주는지', scores: { writing: 3, conversation: 2 } },
      { text: '정확한 근거와 신뢰도', scores: { reasoning: 3, research: 2 } },
      { text: '스스로 작업을 끝까지 진행해주는지', scores: { agent: 4, productivity: 2 } },
      { text: '다른 앱이나 서비스와 연결되는지', scores: { ecosystem: 4, productivity: 2 } },
    ],
  },
  {
    id: 'q11',
    prompt: '업무나 고민을 AI에게 맡길 때 가장 큰 장점은?',
    options: [
      { text: '대화하면서 아이디어가 더 풍부해진다', scores: { conversation: 3, creativity: 2 } },
      { text: '정리와 분석이 훨씬 빨라진다', scores: { reasoning: 3, productivity: 2 } },
      { text: '내가 안 보던 자료와 정보를 찾는다', scores: { research: 4, memory: 1 } },
      { text: '여러 일을 한 번에 대신해준다', scores: { agent: 4, ecosystem: 2 } },
    ],
  },
  {
    id: 'q12',
    prompt: 'AI를 선택할 때 가장 먼저 보는 건?',
    options: [
      { text: '대화가 편한가', scores: { conversation: 3, memory: 2 } },
      { text: '사람처럼 자연스러운가', scores: { writing: 3, creativity: 2 } },
      { text: '검색/조사 성능이 좋은가', scores: { research: 3, reasoning: 2 } },
      { text: '실제로 실행까지 가능한가', scores: { agent: 4, productivity: 2 } },
    ],
  },
  {
    id: 'q13',
    prompt: '평소 나의 답변 스타일은?',
    options: [
      { text: '짧게 말해도 설명을 잘 알아듣는 편', scores: { conversation: 3, concise: 2 } },
      { text: '상세하고 표현을 많이 담는 편', scores: { writing: 3, creativity: 2 } },
      { text: '근거를 많이 붙이는 편', scores: { reasoning: 3, research: 2 } },
      { text: '맥락을 많이 신경 쓰는 편', scores: { memory: 3, conversation: 2 } },
    ],
  },
  {
    id: 'q14',
    prompt: 'AI 활용을 가장 잘하는 상황은?',
    options: [
      { text: '생각을 정리하고 말로 풀어낼 때', scores: { conversation: 3, writing: 2 } },
      { text: '문서를 쓰고 다듬을 때', scores: { writing: 4, creativity: 2 } },
      { text: '정보를 수집하고 비교할 때', scores: { research: 4, reasoning: 2 } },
      { text: '뭔가를 실제로 만들어낼 때', scores: { agent: 4, coding: 2 } },
    ],
  },
  {
    id: 'q15',
    prompt: '마지막으로, AI를 어떤 방식으로 쓰고 싶어?',
    options: [
      { text: '같이 토론하며 생각을 확장하고 싶다', scores: { conversation: 3, creativity: 3 } },
      { text: '필요할 때마다 심플하게 잘 도와줬으면 좋겠다', scores: { concise: 3, productivity: 2 } },
      { text: '자료와 근거를 바탕으로 깊게 분석해줬으면 좋겠다', scores: { reasoning: 4, research: 3 } },
      { text: '내 일을 대신 처리해주고 결과까지 만들어줬으면 좋겠다', scores: { agent: 4, productivity: 3 } },
    ],
  },
];
