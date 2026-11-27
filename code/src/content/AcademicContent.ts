export const site={author:'Leonardo Camargo Rossato',portfolio:'https://leonardocamargorossato.github.io/LCR-SolutionsArchitecture-IA-Quantum/#/',drive:'https://drive.google.com/drive/folders/1UDohv0RzNcS_G3y4deokoTb-zmjkUpkz'};
export const documents={
  "lesson-01": "Aula_01.pdf",
  "lesson-02": "Aula_02.pdf",
  "lesson-03": "Aula_03.pdf",
  "lesson-04": "Aula_04.pdf",
  "lesson-05": "Aula_05.pdf",
  "topics": "Temas_Pesquisa_Excelência.xlsx",
  "article-template": "Template_Artigo_Final.docx",
  "seminar-template": "Template_Seminário.pptx",
  "health-article": "Artigo Final_Lean Saúde.docx",
  "health-method": "Modelo para a escrita do artigo metodologia_2024.docx",
  "health-app": "Plano de negócio sobre o desenvolvimento de um aplicativo para cuidado do idoso — Relato de experiência.pdf",
  "duplicate-template": "Template_Artigo_Final duplicata.docx"
} as const;
export type DocumentId=keyof typeof documents;
export const lessons=["lesson-01","lesson-02","lesson-03","lesson-04","lesson-05"] as const;
export const models=["topics","article-template","seminar-template"] as const;
export const group2=["health-article","health-method","health-app","duplicate-template"] as const;
export const deliverables=[
  {
    "id": "article",
    "model": "article-template",
    "url": "https://drive.google.com/drive/folders/1d0ynoF8oLw5yHTj39ikiFPXm3a6H74sK"
  },
  {
    "id": "seminar",
    "model": "seminar-template",
    "url": "https://drive.google.com/drive/folders/1aA3ajoa3axsvR7A278WW8n5rbAFB1_5M"
  }
] as const;
export const fields=["context","problem","question","general","specific","justification","method"] as const;
export const interests=["quantum","navigation","sensing","operations","innovation"] as const;
export const sections=[
  {
    "id": "abstract",
    "words": 200
  },
  {
    "id": "introduction",
    "words": 600
  },
  {
    "id": "references-review",
    "words": 1000
  },
  {
    "id": "methods",
    "words": 600
  },
  {
    "id": "results",
    "words": 1000
  },
  {
    "id": "conclusions",
    "words": 600
  },
  {
    "id": "references",
    "words": null
  }
] as const;
export const axes=["lean","innovation","quantum","sensing","intersection"] as const;
