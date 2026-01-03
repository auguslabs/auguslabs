/**
 * Datos para la página ARTISTRY
 * Proceso creativo y enfoque de trabajo
 */

export interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  additionalInfo?: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
}

export interface WorkType {
  id: string;
  name: string;
  icon?: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'listen',
    icon: '👂',
    title: 'We Listen',
    description: 'We don\'t assume. We actively listen to your needs, objectives, and vision. We understand that each project is unique and requires personalized attention.',
    additionalInfo: 'We address the common problem: "Lack of clarity in vision and objectives". We don\'t make arbitrary decisions. We work with you to define the real purpose of your project.'
  },
  {
    id: 'understand',
    icon: '💡',
    title: 'We Understand',
    description: 'We research your industry, analyze your market, and deeply understand what your business requires for digital success.',
    additionalInfo: 'Industry and competition research. Analysis of real needs vs. perceived needs. Identification of improvement opportunities. We address: "Confusing aesthetics with functionality" - we understand you need both.'
  },
  {
    id: 'propose',
    icon: '✨',
    title: 'We Propose',
    description: 'We develop creative and strategic proposals. Not one solution, but as many as necessary until we find the perfect one for you.',
    additionalInfo: 'Multiple options when needed. Solutions that balance design and functionality. Proposals based on data and experience. We address: "Inappropriate provider choice" - we help you choose correctly.'
  },
  {
    id: 'develop',
    icon: '🚀',
    title: 'We Develop',
    description: 'We build your solution with attention to detail, constant communication, and delivery of a product you can manage and maintain.',
    additionalInfo: 'Collaborative and transparent process. We deliver tools for you to manage your site. Post-delivery support. We address: "Difficulties with post-launch self-management".'
  }
];

export const problemSolutions: ProblemSolution[] = [
  {
    problem: 'Excessive focus on price vs. value',
    solution: 'Transparency in costs from the start. We explain the value and ROI of each element. We don\'t offer cheap solutions that don\'t scale.'
  },
  {
    problem: 'Lack of clear objectives',
    solution: 'We work with you to define concrete business objectives. Clear brief before starting. We align every decision with your goals.'
  },
  {
    problem: 'Confusing aesthetics with functionality',
    solution: 'Perfect balance between attractive design and practical functionality. Responsive and optimized design. Essential integrations from the start.'
  },
  {
    problem: 'Not planning administration and support',
    solution: 'We deliver simple CMS and training. Continuous post-delivery support. Autonomy to update content.'
  },
  {
    problem: 'Underestimating content and SEO',
    solution: 'Content planning from the start. Integrated SEO optimization. Support in writing and keyword strategy.'
  },
  {
    problem: 'Slow response times',
    solution: 'Human, fluid communication in your language. Fast and transparent responses. Collaborative process with multiple meetings.'
  }
];

export const workTypes: WorkType[] = [
  { id: 'website', name: 'Website Structure Design', icon: '🌐' },
  { id: 'brochure', name: 'Brochures', icon: '📄' },
  { id: 'business-card', name: 'Business Cards', icon: '💳' },
  { id: 'identity', name: 'Visual Identity', icon: '🎨' },
  { id: 'graphics', name: 'Graphic Pieces', icon: '🖼️' },
  { id: 'content', name: 'Digital Content', icon: '✍️' }
];

